import { getYouTubeClient } from './auth.js';

/**
 * Obtiene el último directo finalizado del canal
 */
export async function getLatestCompletedBroadcast() {
  const youtube = getYouTubeClient();

  const res = await youtube.liveBroadcasts.list({
    part: ['id', 'snippet', 'status'],
    broadcastStatus: 'completed',
    maxResults: 5
  });

  if (!res.data.items || res.data.items.length === 0) {
    // Si no devuelve completados en liveBroadcasts, buscar en videos del canal
    const searchRes = await youtube.search.list({
      part: ['id', 'snippet'],
      forMine: true,
      type: ['video'],
      eventType: 'completed',
      order: 'date',
      maxResults: 1
    });

    if (searchRes.data.items && searchRes.data.items.length > 0) {
      return searchRes.data.items[0].id.videoId;
    }
    return null;
  }

  // Devolver el más reciente
  return res.data.items[0].id;
}

/**
 * Descarga y formatea la transcripción usando YouTube Data API o captions públicas
 */
export async function getVideoCaptions(videoId) {
  const youtube = getYouTubeClient();

  try {
    const listRes = await youtube.captions.list({
      part: ['snippet'],
      videoId: videoId
    });

    return listRes.data.items || [];
  } catch (error) {
    console.log(`Aviso al listar captions para ${videoId}:`, error.message);
    return [];
  }
}

/**
 * Actualiza la descripción del vídeo inyectando los timestamps sin alterar la estructura
 */
export async function updateVideoDescriptionWithTimestamps(videoId, timestampsText) {
  const youtube = getYouTubeClient();

  const videoRes = await youtube.videos.list({
    part: ['snippet'],
    id: [videoId]
  });

  if (!videoRes.data.items || videoRes.data.items.length === 0) {
    throw new Error(`Vídeo ${videoId} no encontrado.`);
  }

  const snippet = videoRes.data.items[0].snippet;
  const currentDesc = snippet.description;

  // Evitar duplicar si ya tiene marcas de tiempo
  if (currentDesc.includes('⏱️ **Marcas de Tiempo:**') || currentDesc.includes('⏱️ **Índice del Sermón:**')) {
    console.log(`El vídeo ${videoId} ya cuenta con marcas de tiempo.`);
    return false;
  }

  const separator = '\n\n---\n\n';
  const newBlock = `⏱️ **Índice del Sermón y Marcas de Tiempo:**\n${timestampsText}\n\n---`;

  // Insertar después de la conclusión o antes de los horarios
  let updatedDesc = '';
  if (currentDesc.includes('⏰ **Horarios de Reunión:**')) {
    updatedDesc = currentDesc.replace('⏰ **Horarios de Reunión:**', `${newBlock}\n\n⏰ **Horarios de Reunión:**`);
  } else {
    updatedDesc = `${currentDesc}\n\n${newBlock}`;
  }

  await youtube.videos.update({
    part: ['snippet'],
    requestBody: {
      id: videoId,
      snippet: {
        ...snippet,
        description: updatedDesc
      }
    }
  });

  console.log(`✅ Descripción de ${videoId} actualizada con marcas de tiempo con éxito.`);
  return true;
}
