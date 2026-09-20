import { google } from 'googleapis';
import { getAuthenticatedClient } from './auth.js';

const videoId = 'xPf9f7-spvA';

const title = "NO TE RINDAS, DIOS NUNCA FALLA - Habacuc 2 | Pastor Wismar";
const description = `�Sientes que las fuerzas te abandonan y est�s a punto de desmayar ante las dificultades de la vida? Descubre a trav�s de la Palabra que, aunque el proceso sea largo, Dios nunca falla. En esta poderosa predicaci�n, el Pastor Wismar Reyes nos ense�a c�mo renovar nuestra esperanza en medio de la adversidad y mantenernos firmes en sus promesas.

?? Pasaje B�blico Principal - Habacuc 2:1-3 (RVR1960)
"Sobre mi guarda estar�, y sobre la fortaleza afirmar� el pie, y velar� para ver lo que se me dir�, y qu� he de responder tocante a mi queja. Y Jehov� me respondi�, y dijo: Escribe la visi�n, y decl�rala en tablas, para que corra el que leyere en ella. Aunque la visi�n tardar� a�n por un tiempo, mas se apresura hacia el fin, y no mentir�; aunque tardare, esp�ralo, porque sin duda vendr�, no tardar�."

Desarrollo de la Palabra:
1?? No olvidarse de lo que Dios ha hecho en nuestras vidas.
Cuando enfrentamos pruebas dif�ciles, nuestra memoria suele ser fr�gil. Es vital recordar cada victoria pasada y cada milagro que Dios ha obrado, pues eso es lo que fortalece nuestra fe para enfrentar el presente.

2?? Personajes b�blicos que dan ejemplo.
La Biblia est� llena de hombres y mujeres que, pese a sus debilidades y miedos, decidieron no rendirse. Sus testimonios nos inspiran profundamente a seguir confiando en que Dios cumplir� todo lo que ha prometido, sin importar el tiempo.

3?? Vers�culos que dan �nimo.
A trav�s de las Sagradas Escrituras, encontramos el consuelo y la fuerza necesarios para no desmayar nunca. La Palabra de Dios es el verdadero alimento que sustenta nuestra alma en los momentos de mayor angustia e incertidumbre.

Enfoque de la Emisi�n:
Esta transmisi�n est� dedicada a la Predicaci�n de la Palabra. Te invitamos a recibir este mensaje transformador que Dios ha preparado para renovar tus fuerzas y levantar tu esp�ritu en medio de cualquier batalla.

Horarios de Nuestros Servicios:
- Domingos 11:30 h (Culto normal)
- Mi�rcoles 19:30 h (Casa de Vida - Consultar por tel�fono)
- �ltimos viernes de mes: Vigilia (21:00 a 0:00)

Atenci�n y Contacto:
WhatsApp: (+34) 644 50 57 04 / 655 78 42 21
Email: contacto@iebdiosdegracia.com

S�guenos en nuestras Redes Sociales:
?? YouTube: https://www.youtube.com/@idg_live
?? Facebook: https://www.facebook.com/iebdiosdegracia/
?? Instagram: https://www.instagram.com/diosdegracia/

#NoTeRindas #DiosNuncaFalla #NoDesmayes #PredicaEvangelica #PastorWismarReyes #Habacuc2 #IglesiaDiosDeGracia #IDG #EsperanzaEnDios #FeCristiana #MensajeDeAliento #PalabraDeDios #VictoriaEnCristo #FuerzaEspiritual #SermonCristiano #CristianosEspa�a #PromesasDeDios #AnimoCristiano #IglesiaEvangelica #VidaEnCristo #BibliaEvangelica #CultoEnVivo

B�squedas Relacionadas:
no te rindas predica cristiana, dios nunca falla, no desmayes, habacuc 2, pastor wismar reyes, iglesia dios de gracia, idg, mensajes cristianos para no rendirse, sermones de aliento, versiculos para no desmayar, como recuperar la fe, recordar lo que dios ha hecho, personajes biblicos que no se rindieron, promesas de dios, predicas evangelicas completas, culto en vivo, esperanza cristiana, fortalecer la fe, mensajes cristianos de animo`;

const tags = [
  "no te rindas predica cristiana", "dios nunca falla", "no desmayes", "habacuc 2", 
  "pastor wismar reyes", "iglesia dios de gracia", "idg", "mensajes cristianos para no rendirse", 
  "sermones de aliento", "versiculos para no desmayar", "como recuperar la fe", 
  "recordar lo que dios ha hecho", "personajes biblicos que no se rindieron", 
  "promesas de dios", "predicas evangelicas completas", "culto en vivo", 
  "esperanza cristiana", "fortalecer la fe", "mensajes cristianos de animo"
];

async function updateVideoSeo() {
  const auth = getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  try {
    const res = await youtube.videos.update({
      part: ['snippet'],
      requestBody: {
        id: videoId,
        snippet: {
          title: title,
          description: description,
          categoryId: '22',
          tags: tags
        }
      }
    });
    console.log('? Metadatos V2 actualizados con �xito en YouTube Studio para el ID:', videoId);
  } catch (err) {
    console.error('Error actualizando v�deo:', err.message);
  }
}

updateVideoSeo();
