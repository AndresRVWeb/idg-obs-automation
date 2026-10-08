import { getLatestCompletedBroadcast, updateVideoDescriptionWithTimestamps } from './transcript-updater.js';
import { autoReplyComments } from './comment-bot.js';

console.log('🤖 Agente IDG YouTube 24/7 iniciado en VPS...');

// Tarea 1: Respondedor de comentarios cada 15 minutos
setInterval(async () => {
  try {
    console.log('🔍 Comprobando nuevos comentarios...');
    await autoReplyComments();
  } catch (err) {
    console.error('Error revisando comentarios:', err.message);
  }
}, 15 * 60 * 1000);

// Tarea 2: Revisión de transcripción y SEO los lunes (o cada 6 horas)
setInterval(async () => {
  try {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 1 = Lunes

    if (dayOfWeek === 1) {
      console.log('📅 Es lunes. Comprobando transcripción del directo del domingo...');
      const videoId = await getLatestCompletedBroadcast();
      if (videoId) {
        console.log(`Video detectado: ${videoId}. Verificando marcas de tiempo...`);
      }
    }
  } catch (err) {
    console.error('Error en ciclo de SEO semanal:', err.message);
  }
}, 6 * 60 * 60 * 1000);

// Primera ejecución inmediata al arrancar
autoReplyComments().catch(console.error);
