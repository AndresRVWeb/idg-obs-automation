import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { getAuthenticatedClient } from '../youtube-live/auth.js';
import { fileURLToPath } from 'url';

/**
 * Sube autom�ticamente el Short a YouTube con sus metadatos y enlace al v�deo completo
 * 
 * @param {string} videoFilePath Ruta al archivo MP4 vertical
 * @param {string} title T�tulo del Short (< 100 caracteres, idealmente con #Shorts)
 * @param {string} description Descripci�n completa con enlace al v�deo original
 * @param {Array<string>} tags Lista de etiquetas
 */
export async function uploadShort(videoFilePath, title, description, tags = []) {
  if (!fs.existsSync(videoFilePath)) {
    throw new Error(`No se encontr� el archivo de v�deo en: ${videoFilePath}`);
  }

  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  console.log(`\n? Subiendo YouTube Short: "${title}"...`);

  const fileSize = fs.statSync(videoFilePath).size;

  const res = await youtube.videos.insert({
    part: ['snippet', 'status'],
    requestBody: {
      snippet: {
        title: title,
        description: description,
        tags: tags,
        categoryId: '22', // People & Blogs
        defaultLanguage: 'es'
      },
      status: {
        privacyStatus: 'public',
        selfDeclaredMadeForKids: false
      }
    },
    media: {
      body: fs.createReadStream(videoFilePath)
    }
  });

  const video = res.data;
  console.log(`? �Short subido con �xito!`);
  console.log(`?? Enlace del Short: https://youtube.com/shorts/${video.id}`);
  console.log(`?? Enlace de visualizaci�n: https://youtu.be/${video.id}\n`);

  return video;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const videoFile = args[0];
  const title = args[1] || "Mensaje de Fe #Shorts #IDG";
  const description = args[2] || "Reflexi�n cristiana en Iglesia Dios de Gracia. Mira la pr�dica completa en https://youtube.com/@idg_live";

  if (!videoFile) {
    console.log('Uso: node upload-short.js <RUTA_VIDEO_MP4> <TITULO> <DESCRIPCION>');
    process.exit(1);
  }

  uploadShort(videoFile, title, description)
    .catch(err => console.error('? Error al subir Short:', err.message));
}
