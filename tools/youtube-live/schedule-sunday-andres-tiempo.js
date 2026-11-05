import { createLiveBroadcast } from './create-broadcast.js';

const description = `«Tranquilo, dale tiempo al tiempo, que el tiempo lo cura todo». Todos hemos escuchado o dicho alguna vez esta frase tan popular, asumiendo que es un principio bíblico de consuelo. Pero, ¿realmente enseña la Biblia que el transcurso de los días tiene el poder de sanar las heridas del corazón? En esta impactante predicación, Andrés Rincón desmonta el mito del tiempo como sanador y nos muestra la cruda realidad: el tiempo por sí solo no limpia, no perdona ni cicatriza; solo hace envejecer las heridas, dando lugar a raíces ocultas de amargura. Descubre la maravillosa verdad del Salmo 147:3 y cómo solo Cristo, el verdadero Médico de las almas, tiene la ternura y el poder de vendar tus quebrantos y restaurarte por completo.

📖 **Pasajes Bíblicos Clave:**
• Salmo 147:3
«Él sana a los quebrantados de corazón, y venda sus heridas.»
• Eclesiastés 3:1-3 (El propósito de Dios en los tiempos)
• Hebreos 12:15 (Cuidado con las raíces de amargura)
• Mateo 11:28
«Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.»

💡 **Desarrollo del Sermón y Puntos Clave:**

1. La trampa de la pasividad: El tiempo pasa, pero no restaura:
Tapar el dolor debajo de la alfombra no es sanidad, es simple anestesia temporal. Lo que no se lleva a la cruz ni se perdona, no muere: envenena silenciosamente nuestras relaciones y nuestro hogar.

2. El peligro silencioso de las raíces de amargura:
Una raíz necesita tiempo y descuido bajo tierra para aferrarse con fuerza. Dejar pasar los años sin la gracia de Dios no borra la ofensa, solo endurece el corazón.

3. El verdadero Médico: Solo Dios restaura los corazones rotos:
La Biblia jamás le atribuye virtudes terapéuticas al calendario; afirma con poder que Dios es quien sana. El Señor no mira tu quebranto desde lejos; se arrodilla a tu nivel para vendar tu dolor con Su propia gracia en Cristo Jesús.

4. El tiempo como quirófano de la gracia:
El tiempo no es el médico, es la sala de consulta donde Dios trabaja. Nuestra parte activa es hablar con Dios con total honestidad en oración, tomar la decisión urgente de perdonar y apoyarnos como una verdadera familia en la iglesia local.

✨ **Conclusión:** No confíes tu corazón al calendario. El calendario es sordo y no te ama; Jesús sí te ama y dio Su vida por ti. Entrega hoy tus heridas al pie de la cruz.

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
el tiempo lo cura todo significado biblico, andres rincon predicas, salmo 147 3 sana a los quebrantados de corazon, como sanar las heridas del alma segun la biblia, la raiz de amargura hebreos 12 15, frases populares que no estan en la biblia, el poder del perdon cristiano, sanidad interior cristiana, eclesiastes 3 todo tiene su tiempo predica, iglesia dios de gracia sevilla, culto domingo en vivo idg, sermones expositivos de sanidad emocional, predicas cristianas evangelicas completas, superando el duelo y el dolor en cristo, mensajes biblicos de consuelo y esperanza

#IglesiaDiosDeGracia #AndresRincon #ElTiempoLoCuraTodo #Salmo147 #SanidadDelCorazon #PerdonYGracia #RaizDeAmargura #Hebreos12 #PalabraDeDios #PredicacionCristiana #CultoEnVivo #EsperanzaEnDios #CrecimientoEspiritual #SermonCristiano #ConsueloDeDios #VidaCristiana #ComunidadDeFe #SevillaCristiana #IglesiaEvangelica #CristoRestaura`;

const tags = [
  "el tiempo lo cura todo",
  "andres rincon",
  "salmo 147 3",
  "sanidad del corazon",
  "raiz de amargura",
  "hebreos 12 15",
  "iglesia dios de gracia",
  "culto domingo idg",
  "predicacion cristiana",
  "el perdon cristiano"
];

async function main() {
  try {
    const res = await createLiveBroadcast({
      title: "¿DE VERDAD DICE LA BIBLIA QUE EL TIEMPO LO CURA TODO? - Salmo 147:3 | Andrés Rincón",
      description: description,
      thumbnailPath: "C:/Users/idgsa/.gemini/antigravity/brain/6a27364a-ccc3-41ec-a49e-af4da4b3c20b/miniatura_andres_rincon_el_tiempo_lo_cura_todo_1793905627928.jpg",
      tags: tags,
      privacyStatus: 'public',
      scheduledStartTime: '2026-11-08T10:15:00.000Z' // Domingo 8 de noviembre a las 11:15 AM local (CET / UTC+1)
    });
    console.log('✅ Emisión de Andrés Rincón del 8 de noviembre programada con éxito en YouTube.');
  } catch (error) {
    console.error("Error al programar la emisión:", error);
  }
}

main();
