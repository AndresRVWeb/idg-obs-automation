import fs from 'fs';
import path from 'path';
import http from 'http';
import url from 'url';
import { exec } from 'child_process';
import { google } from 'googleapis';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CREDENTIALS_PATH = path.join(__dirname, 'client_secret.json');
const TOKEN_PATH = path.join(__dirname, 'tokens.json');

const SCOPES = [
  'https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/youtube.force-ssl',
  'https://www.googleapis.com/auth/youtube.upload'
];

export function getOAuth2Client() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    throw new Error(`No se encontr� el archivo client_secret.json en: ${CREDENTIALS_PATH}\nDesc�rgalo desde Google Cloud Console (OAuth 2.0 Client ID tipo Web Application o Desktop).`);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  const key = credentials.installed || credentials.web;
  const redirectUri = key.redirect_uris ? key.redirect_uris[0] : 'http://localhost:3000/oauth2callback';

  return new google.auth.OAuth2(
    key.client_id,
    key.client_secret,
    redirectUri
  );
}

export function getAuthenticatedClient() {
  const oauth2Client = getOAuth2Client();

  if (!fs.existsSync(TOKEN_PATH)) {
    throw new Error(`A�n no est�s autenticado. Ejecuta 'node auth.js' para iniciar sesi�n con tu cuenta de YouTube.`);
  }

  const tokens = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
  oauth2Client.setCredentials(tokens);

  oauth2Client.on('tokens', (newTokens) => {
    const updated = { ...tokens, ...newTokens };
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(updated, null, 2));
  });

  return oauth2Client;
}

async function authenticate() {
  const oauth2Client = getOAuth2Client();

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  });

  console.log('\n======================================================');
  console.log('?? AUTENTICACI�N CON YOUTUBE LIVE API');
  console.log('======================================================\n');
  console.log('Abriendo navegador para iniciar sesi�n en YouTube...');
  console.log(`Si no se abre autom�ticamente, entra aqu�:\n${authUrl}\n`);
  console.log('Esperando confirmaci�n en http://localhost:3000/oauth2callback ...\n');

  // Abre el navegador autom�ticamente en Windows
  exec(`start "" "${authUrl}"`);

  const server = http.createServer(async (req, res) => {
    try {
      const parsedUrl = url.parse(req.url, true);
      if (parsedUrl.pathname === '/oauth2callback') {
        const code = parsedUrl.query.code;
        if (code) {
          const { tokens } = await oauth2Client.getToken(code);
          oauth2Client.setCredentials(tokens);
          fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));

          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('<h1>? Autenticaci�n exitosa con YouTube</h1><p>Ya puedes cerrar esta ventana y volver a Antigravity.</p>');
          console.log('? Tokens guardados correctamente en tokens.json.');
          server.close();
          process.exit(0);
        }
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>? Error de autenticaci�n:</h1><p>${err.message}</p>`);
      console.error('Error al obtener tokens:', err);
      server.close();
      process.exit(1);
    }
  }).listen(3000);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  authenticate().catch(console.error);
}
