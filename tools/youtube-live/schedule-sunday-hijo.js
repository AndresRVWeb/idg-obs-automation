import { createLiveBroadcast } from './create-broadcast.js';

const description = `�Bienvenidos al culto en directo de la Iglesia Dios de Gracia (IDG)! ? Hoy compartimos el mensaje: "El privilegio de ser hijo, amigo y siervo" con el Pastor Numa Rinc�n.

La relaci�n con Dios en Cristo no es fr�a ni distante, sino un v�nculo vivo que integra tres grandes privilegios:
Como hijos, recibimos identidad, seguridad y el amor de nuestro Padre.
Como amigos, disfrutamos intimidad y comuni�n profunda con Dios.
Como siervos, encontramos prop�sito y la dignidad de participar en Su misi�n.
Estas tres realidades no compiten entre s�. Como Mois�s, estamos llamados a vivir como hijos en identidad, amigos en intimidad y siervos en misi�n.

No te pierdas nuestros cultos en vivo, donde celebramos juntos nuestra fe:
?? Domingos: 12:30 horas (Horario Espa�a)
?? Reuniones de Oraci�n: Martes a las 19:30 horas.

�Tienes alguna pregunta o necesitas oraci�n? Escr�benos:
?? Tel�fonos / WhatsApp: (+34) 644 50 57 04 / 655 78 42 21
?? Email: contacto@iebdiosdegracia.com

S�guenos en nuestras redes sociales:
Facebook: Iglesia Dios de Gracia
Instagram: @diosdegracia

#IglesiaDiosDeGracia #PredicacionCristiana #PastorNuma #HijoDeDios #Comunion #Proposito`;

const tags = [
  'iglesia dios de gracia', 'idg sanlucar', 'pastor numa rincon', 'predicacion cristiana', 
  'hijo de dios', 'ser amigo de dios', 'siervo de cristo', 'identidad cristiana', 
  'comunion con dios', 'proposito', 'moises', 'sermon evangelico', 'culto en directo'
];

async function main() {
  try {
    const res = await createLiveBroadcast({
      title: "El privilegio de ser hijo, amigo y siervo",
      description: description,
      thumbnailPath: "c:/Proyectos-Antigravity/OBS/miniatura_hijo_amigo_siervo.jpg",
      tags: tags
    });
    
    console.log('? Emisi�n preparada. NO inyectando clave en service.json para evitar cerrar sesi�n en OBS.');
  } catch (error) {
    console.error("Error al programar la emisi�n:", error);
  }
}

main();
