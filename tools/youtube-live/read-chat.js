import { google } from 'googleapis';
import { getAuthenticatedClient } from './auth.js';
import { getLiveChatId } from './live-chat.js';
import { fileURLToPath } from 'url';

export async function readLatestMessages(videoId) {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  try {
    const liveChatId = await getLiveChatId(videoId);
    const res = await youtube.liveChatMessages.list({
      liveChatId: liveChatId,
      part: ['snippet', 'authorDetails'],
      maxResults: 10
    });

    const messages = res.data.items.map(item => ({
      author: item.authorDetails.displayName,
      message: item.snippet.displayMessage,
      publishedAt: item.snippet.publishedAt
    }));
    
    return messages;
  } catch (err) {
    console.error("Error al leer chat:", err.message);
    return [];
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const videoId = process.argv[2];
  if (videoId) {
    readLatestMessages(videoId).then(msgs => {
      console.log(JSON.stringify(msgs, null, 2));
    });
  } else {
    console.log("Falta Video ID");
  }
}
