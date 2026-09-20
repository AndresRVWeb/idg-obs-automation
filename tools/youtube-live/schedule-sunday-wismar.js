import { createLiveBroadcast } from './create-broadcast.js';

const description = `�Bienvenidos al culto en directo de la Iglesia Dios de Gracia (IDG)! ? Hoy compartimos el mensaje: "NO TE RINDAS, NO DESMAYES, DIOS NUNCA FALLA" con el Pastor Wismar Reyes.

?? Texto Principal: Habacuc 2:1-3

Hoy tenemos 3 recordatorios para no desmayar ni rendirse:
1. No olvidarse de lo que Dios ha hecho en nuestras vidas.
2. Personajes b�blicos que dan ejemplo.
3. Vers�culos que dan �nimo, aliento y esperanza para seguir adelante.

No te pierdas nuestros cultos en vivo, donde celebramos juntos nuestra fe:
?? Domingos: 12:30 horas (Horario Espa�a)
?? Reuniones de Oraci�n: Martes a las 19:30 horas.

�Tienes alguna pregunta o necesitas oraci�n? Escr�benos:
?? Tel�fonos / WhatsApp: (+34) 644 50 57 04 / 655 78 42 21
?? Email: contacto@iebdiosdegracia.com

S�guenos en nuestras redes sociales:
Facebook: Iglesia Dios de Gracia
Instagram: @diosdegracia

#IglesiaDiosDeGracia #PredicacionCristiana #PastorWismarReyes #NoTeRindas #Esperanza #Habacuc`;

const tags = [
  'iglesia dios de gracia', 'idg sanlucar', 'pastor wismar reyes', 'predicacion cristiana', 
  'no te rindas', 'habacuc 2', 'esperanza', 'animo', 'aliento', 'dios nunca falla', 'sermon evangelico', 'culto en directo'
];

async function main() {
  try {
    const res = await createLiveBroadcast({
      title: "NO TE RINDAS, NO DESMAYES, DIOS NUNCA FALLA",
      description: description,
      thumbnailPath: "c:/Proyectos-Antigravity/OBS/miniatura_wismar_no_te_rindas.jpg",
      tags: tags
    });
    
    console.log('? Emisi�n preparada. NO inyectando clave en service.json para evitar cerrar sesi�n en OBS.');
  } catch (error) {
    console.error("Error al programar la emisi�n:", error);
  }
}

main();
