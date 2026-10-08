import fs from 'fs';
import { getYouTubeClient } from './auth.js';

const REPLIED_LOG_FILE = 'replied_comments.json';

function getRepliedIds() {
  try {
    return JSON.parse(fs.readFileSync(REPLIED_LOG_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveRepliedId(id) {
  const ids = getRepliedIds();
  ids.push(id);
  fs.writeFileSync(REPLIED_LOG_FILE, JSON.stringify(ids.slice(-500), null, 2));
}

/**
 * Escanea y responde comentarios recientes
 */
export async function autoReplyComments() {
  const youtube = getYouTubeClient();
  const replied = getRepliedIds();

  try {
    // Obtener hilos de comentarios recientes del canal
    const res = await youtube.commentThreads.list({
      part: ['snippet'],
      allThreadsRelatedToChannelId: 'UCD1OexaM9SjcoPIYBg0647w',
      maxResults: 20,
      order: 'time'
    });

    if (!res.data.items) return;

    for (const thread of res.data.items) {
      const topComment = thread.snippet.topLevelComment;
      const commentId = topComment.id;
      const text = topComment.snippet.textOriginal.toLowerCase();
      const author = topComment.snippet.authorDisplayName;

      // Evitar responder a nuestros propios mensajes o ya respondidos
      if (replied.includes(commentId) || author.includes('idg') || author.includes('Dios de Gracia')) {
        continue;
      }

      let replyText = null;

      if (text.includes('oracion') || text.includes('orar') || text.includes('peticion') || text.includes('ayuda')) {
        replyText = `¡Dios te bendiga ${author}! 🙏 Nos unimos en oración por tu vida y tu familia. Si deseas que nuestro equipo pastoral ore de forma personal y cercana contigo, escríbenos con total confianza por WhatsApp al (+34) 644 50 57 04. ¡No estás solo/a!`;
      } else if (text.includes('gracias') || text.includes('amen') || text.includes('bendicion') || text.includes('gloria a dios')) {
        replyText = `¡Amén ${author}! 🕊️ Nos alegra muchísimo que esta palabra haya sido de bendición para tu vida. Te esperamos en nuestras próximas reuniones o en el próximo directo. ¡Un fuerte abrazo en Cristo!`;
      }

      if (replyText) {
        await youtube.comments.insert({
          part: ['snippet'],
          requestBody: {
            snippet: {
              parentId: commentId,
              textOriginal: replyText
            }
          }
        });

        console.log(`💬 Respondido comentario de ${author}: "${replyText.substring(0, 40)}..."`);
        saveRepliedId(commentId);
      }
    }
  } catch (error) {
    console.error('Aviso en autoReplyComments:', error.message);
  }
}
