import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Busca tokens y secrets en tools/youtube-live o en la carpeta local
function getAuthClient() {
  const possibleTokenPaths = [
    path.join(__dirname, 'tokens.json'),
    path.join(__dirname, '..', 'tools', 'youtube-live', 'tokens.json')
  ];
  const possibleSecretPaths = [
    path.join(__dirname, 'client_secret.json'),
    path.join(__dirname, '..', 'tools', 'youtube-live', 'client_secret.json')
  ];

  let tokenPath = possibleTokenPaths.find(p => fs.existsSync(p));
  let secretPath = possibleSecretPaths.find(p => fs.existsSync(p));

  if (!tokenPath || !secretPath) {
    throw new Error('No se encontraron tokens.json o client_secret.json.');
  }

  const credentials = JSON.parse(fs.readFileSync(secretPath, 'utf8'));
  const { client_secret, client_id, redirect_uris } = credentials.installed || credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));
  oAuth2Client.setCredentials(tokens);

  oAuth2Client.on('tokens', (newTokens) => {
    const updated = { ...tokens, ...newTokens };
    fs.writeFileSync(tokenPath, JSON.stringify(updated, null, 2));
  });

  return oAuth2Client;
}

export function getYouTubeClient() {
  const auth = getAuthClient();
  return google.youtube({ version: 'v3', auth });
}
