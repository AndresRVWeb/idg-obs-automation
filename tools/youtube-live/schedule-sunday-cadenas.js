import fs from 'fs';
import path from 'path';
import { createLiveBroadcast } from './create-broadcast.js';

const description = `�Bienvenidos al culto en directo de la Iglesia Dios de Gracia (IDG)! ? Hoy nos acompa�a la Pastora Gladys Vicente con un mensaje liberador: "ROMPIENDO LAS CADENAS DE LA MEMORIA: EL VERDADERO CAMPO DE BATALLA".

Muchas veces vivimos abrumados por la culpa, el remordimiento y los errores del ayer. La memoria es un regalo de Dios, pero cuando nos aferramos al dolor del pasado, se convierte en una prisi�n. Descubre c�mo Dios est� haciendo algo nuevo en tu vida basado en Isa�as 43:18-19.

?? Texto base: Isa�as 43:18-19
"Olviden las cosas de anta�o; ya no vivan en el pasado. �Voy a hacer algo nuevo! Ya est� sucediendo, �no se dan cuenta? Estoy abriendo un camino en el desierto, y r�os en lugares desolados."

No te pierdas nuestros cultos en vivo, donde celebramos juntos nuestra fe:
?? Domingos: 12:30 horas (Horario Espa�a)
?? Reuniones de Oraci�n: Martes a las 19:30 horas.

�Tienes alguna pregunta o necesitas oraci�n? Escr�benos:
?? Tel�fonos / WhatsApp: (+34) 644 50 57 04 / 655 78 42 21
?? Email: contacto@iebdiosdegracia.com

S�guenos en nuestras redes sociales:
Facebook: Iglesia Dios de Gracia
Instagram: @diosdegracia

#IglesiaDiosDeGracia #PredicacionCristiana #GladysVicente #Isaias43 #Restauracion #SanlucarDeBarrameda`;

const tags = [
  'iglesia dios de gracia', 'idg sanlucar', 'pastora gladys vicente', 'predicacion cristiana', 
  'isaias 43', 'romper cadenas del pasado', 'superar la culpa cristiana', 
  'nuevo comienzo en dios', 'sermon evangelico', 'sanlucar de barrameda', 'culto en directo'
];

async function main() {
  try {
    const res = await createLiveBroadcast({
      title: "ROMPIENDO LAS CADENAS DE LA MEMORIA: EL VERDADERO CAMPO DE BATALLA",
      description: description,
      thumbnailPath: "c:/Proyectos-Antigravity/OBS/miniatura_cadenas_gladys.jpg",
      tags: tags
    });

    console.log('Actualizando clave de transmisi�n en OBS (service.json)...');
    const serviceJsonPath = 'C:/Users/idgsa/AppData/Roaming/obs-studio/basic/profiles/Sin T�tulo/service.json';
    const serviceData = JSON.parse(fs.readFileSync(serviceJsonPath, 'utf8'));
    serviceData.settings.key = res.streamKey;
    fs.writeFileSync(serviceJsonPath, JSON.stringify(serviceData, null, 2));
    console.log('? Clave de transmisi�n de OBS actualizada exitosamente.');

  } catch (error) {
    console.error("Error al programar la emisi�n:", error);
  }
}

main();
