import { google } from 'googleapis';
import { getAuthenticatedClient } from './auth.js';
import { fileURLToPath } from 'url';

export async function listBroadcasts(statusFilter = 'all') {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  console.log(`? Consultando emisiones (${statusFilter})...\n`);

  const res = await youtube.liveBroadcasts.list({
    part: ['id', 'snippet', 'status', 'contentDetails'],
    broadcastStatus: statusFilter,
    maxResults: 10
  });

  const broadcasts = res.data.items || [];
  if (broadcasts.length === 0) {
    console.log('No se encontraron emisiones programadas.');
    return [];
  }

  console.log(`Encontradas ${broadcasts.length} emisiones:\n`);
  broadcasts.forEach((b, i) => {
    console.log(`${i + 1}. [${b.status.lifeCycleStatus}] ${b.snippet.title}`);
    console.log(`   ID: ${b.id} | Inicio: ${b.snippet.scheduledStartTime}`);
    console.log(`   URL: https://youtu.be/${b.id}\n`);
  });

  return broadcasts;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const filter = process.argv[2] || 'upcoming';
  listBroadcasts(filter).catch(err => console.error('Error:', err.message));
}
