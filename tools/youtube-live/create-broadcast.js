import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { getAuthenticatedClient } from './auth.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Crea una emisi�n en directo completa en YouTube y devuelve los detalles de conexi�n.
 * 
 * @param {Object} options
 * @param {string} options.title T�tulo optimizado para SEO
 * @param {string} options.description Descripci�n completa con timestamps y vers�culos
 * @param {string} options.scheduledStartTime Fecha y hora ISO (ej. 2026-08-30T10:30:00.000Z)
 * @param {string} [options.privacyStatus='public'] 'public', 'unlisted', 'private'
 * @param {string} [options.thumbnailPath] Ruta local de la imagen de miniatura
 */
export async function createLiveBroadcast(options) {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  console.log(`\n? 1. Creando emisi�n: "${options.title}"...`);

  // 1. Insertar el Live Broadcast
  const broadcastRes = await youtube.liveBroadcasts.insert({
    part: ['snippet', 'status', 'contentDetails'],
    requestBody: {
      snippet: {
        title: options.title,
        description: options.description,
        scheduledStartTime: options.scheduledStartTime || new Date(Date.now() + 3600000).toISOString()
      },
      status: {
        privacyStatus: options.privacyStatus || 'public',
        selfDeclaredMadeForKids: false
      },
      contentDetails: {
        enableAutoStart: true,
        enableAutoStop: true,
        enableDvr: true,
        latencyPreference: 'low', // Baja latencia para interacci�n en vivo
        projection: 'rectangular'
      }
    }
  });

  const broadcast = broadcastRes.data;
  const broadcastId = broadcast.id;
  console.log(`? Emisi�n creada con ID: ${broadcastId}`);
  console.log(`?? Enlace del directo: https://youtu.be/${broadcastId}`);

  // 1.5 Actualizar Etiquetas (Tags) mediante youtube.videos.update
  if (options.tags && options.tags.length > 0) {
    console.log(`? Agregando etiquetas al v�deo...`);
    try {
      // Necesitamos el snippet completo para no sobreescribir datos
      const videoRes = await youtube.videos.list({
        part: ['snippet'],
        id: [broadcastId]
      });
      if (videoRes.data.items && videoRes.data.items.length > 0) {
        const videoSnippet = videoRes.data.items[0].snippet;
        videoSnippet.tags = options.tags; // Add our tags
        
        await youtube.videos.update({
          part: ['snippet'],
          requestBody: {
            id: broadcastId,
            snippet: videoSnippet
          }
        });
        console.log(`? Etiquetas a�adidas correctamente.`);
      }
    } catch (err) {
      console.error(`?? No se pudieron a�adir las etiquetas: ${err.message}`);
    }
  }

  // 2. Crear el Live Stream (Punto de ingesti�n RTMP)
  console.log(`? 2. Creando punto de ingesti�n RTMP (1080p 60fps)...`);
  const streamRes = await youtube.liveStreams.insert({
    part: ['snippet', 'cdn', 'contentDetails'],
    requestBody: {
      snippet: {
        title: `Stream - ${options.title.substring(0, 50)}`
      },
      cdn: {
        frameRate: '60fps',
        ingestionType: 'rtmp',
        resolution: '1080p'
      },
      contentDetails: {
        isReusable: false
      }
    }
  });

  const stream = streamRes.data;
  const streamId = stream.id;
  const streamKey = stream.cdn.ingestionInfo.streamName;
  const rtmpUrl = stream.cdn.ingestionInfo.ingestionAddress;

  console.log(`? Punto de transmisi�n creado: ${streamId}`);
  console.log(`?? Clave de transmisi�n (Stream Key): ${streamKey}`);

  // 3. Vincular el Broadcast con el Stream
  console.log(`? 3. Vinculando emisi�n con el stream...`);
  await youtube.liveBroadcasts.bind({
    id: broadcastId,
    part: ['id', 'contentDetails'],
    streamId: streamId
  });
  console.log(`? Emisi�n vinculada exitosamente.`);

  // 4. Subir Miniatura si se proporcion� una ruta
  if (options.thumbnailPath && fs.existsSync(options.thumbnailPath)) {
    console.log(`? 4. Subiendo miniatura desde: ${options.thumbnailPath}...`);
    try {
      await youtube.thumbnails.set({
        videoId: broadcastId,
        media: {
          mimeType: options.thumbnailPath.endsWith('.png') ? 'image/png' : 'image/jpeg',
          body: fs.createReadStream(options.thumbnailPath)
        }
      });
      console.log(`? Miniatura subida con �xito.`);
    } catch (err) {
      console.error(`?? No se pudo subir la miniatura: ${err.message}`);
    }
  }

  return {
    broadcastId,
    videoUrl: `https://youtu.be/${broadcastId}`,
    studioUrl: `https://studio.youtube.com/video/${broadcastId}/livestreaming`,
    streamKey,
    rtmpUrl,
    title: options.title,
    scheduledStartTime: options.scheduledStartTime
  };
}

// Ejecuci�n directa desde l�nea de comandos
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const title = args[0] || "Culto Dominical en Vivo - Iglesia Dios de Gracia (IDG)";
  const description = args[1] || "Transmisi�n en vivo del servicio dominical de la Iglesia Dios de Gracia en Sanl�car de Barrameda.";
  const thumbnail = args[2] || null;

  createLiveBroadcast({
    title,
    description,
    privacyStatus: 'public',
    thumbnailPath: thumbnail
  })
  .then(res => {
    console.log('\n======================================================');
    console.log('?? TRANSMISI�N PROGRAMADA CON �XITO');
    console.log('======================================================');
    console.log(JSON.stringify(res, null, 2));
  })
  .catch(err => {
    console.error('? Error al crear la emisi�n:', err.message);
  });
}
