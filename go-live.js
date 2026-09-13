import OBSWebSocket from 'obs-websocket-js';

const obs = new OBSWebSocket();

async function goLive() {
  try {
    await obs.connect('ws://localhost:4455', 'nrWKTeEuGb8K3LCo');
    console.log('? Conectado a OBS Studio.');

    // 1. Iniciar Transmisi�n (Enviar datos a YouTube)
    console.log('?? Iniciando transmisi�n en OBS...');
    try {
      await obs.call('StartStream');
      console.log('? Transmisi�n iniciada.');
    } catch (e) {
      if (e.message.includes('OutputState.Started')) {
        console.log('?? La transmisi�n ya estaba iniciada.');
      } else {
        throw e;
      }
    }

    // 2. Esperar 3 segundos para estabilizar la conexi�n RTMP
    console.log('? Esperando 3 segundos de estabilizaci�n...');
    await new Promise(resolve => setTimeout(resolve, 3000));

    // 3. Transici�n de la C�mara (De Vista Previa a Directo)
    console.log('?? Disparando Transici�n (Modo Estudio)...');
    await obs.call('TriggerStudioModeTransition');
    console.log('? Transici�n completada. �ESTAMOS EN VIVO!');

    await obs.disconnect();
  } catch (error) {
    console.error('? Error:', error.message);
  }
}

goLive();
