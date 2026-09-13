import OBSWebSocket from 'obs-websocket-js';

const obs = new OBSWebSocket();

async function optimizeAudio() {
  try {
    await obs.connect('ws://localhost:4455', 'nrWKTeEuGb8K3LCo');
    console.log('? Conectado a OBS Studio.');

    // 1. Obtener todas las fuentes de audio (Inputs)
    const { inputKinds } = await obs.call('GetInputKindList');
    const { inputs } = await obs.call('GetInputList');
    
    console.log('\n??? Ajustando fuentes de audio:');
    
    let micFound = false;
    for (const input of inputs) {
      if (input.inputKind.includes('audio') || input.inputName.toLowerCase().includes('mic')) {
        micFound = true;
        console.log(`- Encontrado: ${input.inputName}`);
        
        // Establecer un Sync Offset (Retardo) de 150ms (est�ndar para sincronizaci�n labial con c�maras)
        await obs.call('SetInputAudioSyncOffset', {
          inputName: input.inputName,
          inputAudioSyncOffset: 150000000 // 150ms en nanosegundos
        });
        console.log(`  ?? Retardo (Sync Offset) ajustado a 150ms para lip-sync.`);

        // Establecer el volumen al 90% (-1.0 dB aprox) para evitar saturaci�n
        await obs.call('SetInputVolume', {
          inputName: input.inputName,
          inputVolumeDb: -1.0
        });
        console.log(`  ?? Volumen ajustado a -1.0 dB (Margen de seguridad).`);
      }
    }

    if (!micFound) {
      console.log('?? No se encontraron micr�fonos espec�ficos, aplicando a Mic/Aux general...');
      // Intentar forzar Mic/Aux
      try {
        await obs.call('SetInputAudioSyncOffset', {
          inputName: 'Mic/Aux',
          inputAudioSyncOffset: 150000000
        });
        await obs.call('SetInputVolume', { inputName: 'Mic/Aux', inputVolumeDb: -1.0 });
        console.log(`  ?? Ajustes aplicados a Mic/Aux global.`);
      } catch(e) {}
    }

    console.log('\n? Optimizaci�n de Audio y Retardo completada.');
    await obs.disconnect();

  } catch (error) {
    console.error('? Error de conexi�n OBS:', error.message);
  }
}

optimizeAudio();
