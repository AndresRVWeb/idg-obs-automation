import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { getAuthenticatedClient } from './auth.js';
import { fileURLToPath } from 'url';

export async function uploadThumbnail(videoId, imagePath) {
  if (!fs.existsSync(imagePath)) {
    throw new Error(`No se encontr� el archivo de imagen en: ${imagePath}`);
  }

  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  console.log(`? Subiendo miniatura para el v�deo ${videoId} desde ${imagePath}...`);

  const res = await youtube.thumbnails.set({
    videoId: videoId,
    media: {
      mimeType: imagePath.endsWith('.png') ? 'image/png' : 'image/jpeg',
      body: fs.createReadStream(imagePath)
    }
  });

  console.log(`? Miniatura subida con �xito.`);
  return res.data;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const videoId = args[0];
  const imagePath = args[1];

  if (!videoId || !imagePath) {
    console.log('Uso: node upload-thumbnail.js <VIDEO_ID> <RUTA_IMAGEN>');
    process.exit(1);
  }

  uploadThumbnail(videoId, imagePath)
    .then(() => console.log('Proceso completado.'))
    .catch(err => console.error('Error:', err.message));
}
