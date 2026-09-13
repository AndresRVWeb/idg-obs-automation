import fs from 'fs';
import { google } from 'googleapis';
import { getAuthenticatedClient } from './auth.js';

async function updateThumb() {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });
  const videoId = 'Xlola81i_as';
  const thumbnailPath = 'c:/Proyectos-Antigravity/OBS/miniatura_hijo_amigo_siervo.jpg';

  console.log(`Subiendo nueva miniatura a YouTube para el v�deo ${videoId}...`);
  try {
    await youtube.thumbnails.set({
      videoId: videoId,
      media: {
        body: fs.createReadStream(thumbnailPath)
      }
    });
    console.log('? Miniatura corregida con �xito en YouTube.');
  } catch (err) {
    console.error('Error subiendo miniatura:', err);
  }
}

updateThumb();
