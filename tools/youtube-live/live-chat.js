import { google } from 'googleapis';
import { getAuthenticatedClient } from './auth.js';
import { fileURLToPath } from 'url';

/**
 * M�dulo de interacci�n con el Chat en Vivo de YouTube
 */
export async function getLiveChatId(broadcastId) {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  const res = await youtube.liveBroadcasts.list({
    part: ['snippet'],
    id: [broadcastId]
  });

  const items = res.data.items || [];
  if (items.length === 0) {
    throw new Error(`No se encontr� la emisi�n con ID: ${broadcastId}`);
  }

  const liveChatId = items[0].snippet.liveChatId;
  if (!liveChatId) {
    throw new Error(`La emisi�n ${broadcastId} a�n no tiene un chat en vivo activo.`);
  }

  return liveChatId;
}

/**
 * Env�a un mensaje al chat en vivo
 */
export async function sendChatMessage(liveChatId, messageText) {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  console.log(`?? Enviando mensaje al chat: "${messageText}"...`);

  const res = await youtube.liveChatMessages.insert({
    part: ['snippet'],
    requestBody: {
      snippet: {
        liveChatId: liveChatId,
        type: 'textMessageEvent',
        textMessageDetails: {
          messageText: messageText
        }
      }
    }
  });

  console.log(`? Mensaje enviado con �xito.`);
  return res.data;
}

/**
 * Publica un comentario en el v�deo/emisi�n
 */
export async function postComment(videoId, commentText) {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  console.log(`?? Publicando comentario en v�deo ${videoId}...`);

  const res = await youtube.commentThreads.insert({
    part: ['snippet'],
    requestBody: {
      snippet: {
        videoId: videoId,
        topLevelComment: {
          snippet: {
            textOriginal: commentText
          }
        }
      }
    }
  });

  console.log(`? Comentario publicado con �xito.`);
  return res.data;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const action = process.argv[2];
  const targetId = process.argv[3];
  const text = process.argv.slice(4).join(' ');

  if (action === 'comment' && targetId && text) {
    postComment(targetId, text).catch(console.error);
  } else if (action === 'chat' && targetId && text) {
    sendChatMessage(targetId, text).catch(console.error);
  } else {
    console.log('Uso:');
    console.log('  node live-chat.js comment <VIDEO_ID> <TEXTO_DEL_COMENTARIO>');
    console.log('  node live-chat.js chat <LIVE_CHAT_ID> <TEXTO_DEL_MENSAJE>');
  }
}
