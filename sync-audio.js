import OBSWebSocket from 'obs-websocket-js';
import { fileURLToPath } from 'url';

const obs = new OBSWebSocket();

async function setSyncOffset(offsetMs) {
  try {
    await obs.connect('ws://localhost:4455', 'nrWKTeEuGb8K3LCo');
    const { inputs } = await obs.call('GetInputList');
    
    let applied = false;
    for (const input of inputs) {
      if (input.inputKind.includes('audio') || input.inputName.toLowerCase().includes('mic')) {
        await obs.call('SetInputAudioSyncOffset', {
          inputName: input.inputName,
          inputAudioSyncOffset: offsetMs * 1000000 // Convert ms to ns
        });
        console.log(`? Ajustado Sync Offset a ${offsetMs}ms para: ${input.inputName}`);
        applied = true;
      }
    }

    if (!applied) {
      // Intentar Mic/Aux por defecto
      try {
        await obs.call('SetInputAudioSyncOffset', {
          inputName: 'Mic/Aux',
          inputAudioSyncOffset: offsetMs * 1000000
        });
        console.log(`? Ajustado Sync Offset a ${offsetMs}ms para: Mic/Aux`);
      } catch (e) {}
    }

    await obs.disconnect();
  } catch (error) {
    console.error('? Error de conexi�n OBS:', error.message);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const offset = parseInt(process.argv[2], 10);
  if (isNaN(offset)) {
    console.log('Uso: node sync-audio.js <Milisegundos>');
  } else {
    setSyncOffset(offset);
  }
}
