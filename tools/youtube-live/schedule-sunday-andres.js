import { createLiveBroadcast } from './create-broadcast.js';

const description = `¿Sientes que tus emociones te controlan y que tus palabras causan daño a los que te rodean? Descubre cómo la mente, siendo el centro de mando, debe gobernar tanto el corazón como la lengua. En esta predicación de la Palabra, exploramos el diseño bíblico perfecto para transformar nuestros pensamientos, controlar nuestras reacciones impulsivas y usar nuestras palabras para edificar. Aprende a alinear tus emociones con la verdad del Evangelio.

📖 **Pasaje Bíblico Principal:**
Proverbios 4:23-24 "Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida. Aparta de ti la perversidad de la boca, y aleja de ti la iniquidad de los labios." (Acompañado de Lucas 6:43-45 y Santiago 3:2-10).

💡 **Desarrollo del Sermón y Puntos Clave:**

1. La guardia en el manantial:
El corazón es el lugar profundo donde nacen todas nuestras emociones, pero la mente actúa como el centro de mando que las evalúa y procesa. Es fundamental que guardemos celosamente nuestra mente para poder gobernar verdaderamente cada emoción.

2. La lengua es el síntoma:
Hablamos constantemente de aquello que abunda en nuestro corazón. Nuestra boca simplemente saca a la luz y amplifica todo lo que hemos permitido y dejado acumular previamente en el almacén de nuestra mente.

3. El poder de un fuego pequeño:
Al igual que un pequeño timón dirige un enorme barco o el freno controla la fuerza de un caballo, la mente debe guiar nuestras palabras. Un pequeño descuido o impulso no refrenado al hablar tiene el potencial de causar grandes incendios.

4. Cuidado con la hipocresía:
En muchas ocasiones usamos de manera equivocada pasajes bíblicos o frases de apariencia espiritual como armas para herir. Debemos examinar nuestro corazón para evitar disfrazar el orgullo humano bajo una falsa autoridad.

5. La Respuesta (Romanos 12:2):
Solo una mente transformada y renovada por la cruz puede frenar este impulso destructivo. Nuestra mayor necesidad diaria es clamar y depender de Dios orando con sinceridad: "Señor, pon guarda a mi boca".

*Nota:* Esta emisión corresponde a la Predicación de la Palabra.

---

⏰ **Horarios de Reunión:**
• Domingos 11:30 (Culto normal)
• Miércoles 19:30 (Casa de Vida - Consultar por teléfono)
• Últimos viernes de mes: Vigilia (21:00 a 0:00)

📱 **Atención y Contacto:**
WhatsApp: (+34) 644 50 57 04 / 655 78 42 21
Email: contacto@iebdiosdegracia.com

🌐 **Nuestras Redes Sociales:**
• YouTube: https://www.youtube.com/@idg_live
• Facebook: https://www.facebook.com/iebdiosdegracia/
• Instagram: https://www.instagram.com/diosdegracia/

---

**Búsquedas Relacionadas:**
el centro de mando y el altavoz, andres rincon predicas, iglesia dios de gracia, predicación sobre el poder de las palabras, proverbios 4 guarda tu corazón, como dominar las emociones, santiago 3 el poder de la lengua, lucas 6 de la abundancia del corazon, crecimiento espiritual, como controlar el enojo cristiano, renovacion de la mente romanos 12, hipocresia espiritual, como hablar palabras de vida, perdon y gracia de dios, culto domingo idg, sermones expositivos, predicas evangelicas cristianas completas

#IglesiaDiosDeGracia #AndresRincon #CentroDeMando #PoderDeLaLengua #Proverbios4 #GuardaTuCorazon #DominioPropio #EmocionesCristianas #FeYEsperanza #CrecimientoEspiritual #SermonCristiano #PredicacionCristiana #MensajesDeFe #SabiduriaBiblica #PalabraDeDios #CultoEnVivo #IglesiaEvangelica #RenovacionMental #Romanos12 #Santiago3`;

const tags = [
  "el centro de mando y el altavoz", "andres rincon predicas", "iglesia dios de gracia", "predicación sobre el poder de las palabras", "proverbios 4 guarda tu corazón", "como dominar las emociones", "santiago 3 el poder de la lengua", "lucas 6 de la abundancia del corazon", "crecimiento espiritual", "como controlar el enojo cristiano", "renovacion de la mente romanos 12", "hipocresia espiritual", "como hablar palabras de vida", "perdon y gracia de dios", "culto domingo idg", "sermones expositivos", "predicas evangelicas cristianas completas"
];

async function main() {
  try {
    const res = await createLiveBroadcast({
      title: "EL PODER DE TU LENGUA Y TUS EMOCIONES - Proverbios 4 | Andrés Rincón",
      description: description,
      thumbnailPath: "C:/Users/idgsa/.gemini/antigravity/brain/6a27364a-ccc3-41ec-a49e-af4da4b3c20b/miniatura_andres_rincon_1790882084005.jpg",
      tags: tags,
      privacyStatus: 'public',
      scheduledStartTime: '2026-10-04T09:15:00.000Z' // Next Sunday 11:15 AM local time (approx 09:15 UTC)
    });
    console.log('✅ Emisión programada en YouTube.');
  } catch (error) {
    console.error("Error al programar la emisión:", error);
  }
}

main();
