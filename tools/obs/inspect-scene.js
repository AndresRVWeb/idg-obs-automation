import OBSWebSocket from 'obs-websocket-js';
const obs = new OBSWebSocket();
obs.connect('ws://localhost:4455', 'nrWKTeEuGb8K3LCo').then(async () => {
  const currentScene = await obs.call('GetCurrentProgramScene');
  console.log('Escena Actual:', currentScene.sceneName);
  
  const items = await obs.call('GetSceneItemList', { sceneName: currentScene.sceneName });
  console.log('\nFuentes en la escena:');
  items.sceneItems.forEach(item => {
    console.log(`- ID: ${item.sceneItemId} | Nombre: ${item.sourceName} | Tipo: ${item.inputKind || item.sourceType}`);
  });
  
  obs.disconnect();
}).catch(console.error);
