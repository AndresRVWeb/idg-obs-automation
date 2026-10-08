import { createLiveBroadcast } from './create-broadcast.js';

const description = `¿Cuál es el propósito de Dios al crear tantas culturas y naciones diferentes? En esta enriquecedora predicación, exploramos cómo la diversidad de pueblos y lenguas no es una casualidad, sino un diseño intencional del Creador para reflejar Su gloria. A través de la cruz de Jesucristo, todas las barreras humanas caen para formar un solo cuerpo y una sola familia de fe llamada a proclamar el evangelio hasta lo último de la tierra.

📖 **Pasaje Bíblico Principal:**
Apocalipsis 7:9-10
"Después de esto miré, y he aquí una gran multitud, la cual nadie podía contar, de todas naciones y tribus y pueblos y lenguas, que estaban delante del trono y en la presencia del Cordero, vestidos de ropas blancas, y con palmas en las manos; y clamaban a gran voz, diciendo: La salvación pertenece a nuestro Dios que está sentado en el trono, y al Cordero."

💡 **Desarrollo del Sermón y Puntos Clave:**

1. La diversidad cultural es diseño divino:
Los pueblos, culturas y lenguas no son fruto del azar. Dios diseñó la multiplicidad de naciones para manifestar la riqueza de Su sabiduría y bondad en toda la creación.

2. Una sola familia unida por la cruz:
En Cristo, las diferencias étnicas y culturales dejan de ser motivo de división. No nos une la procedencia terrenal, sino la sangre derramada en la cruz y la redención del Salvador.

3. La visión misionera de la Iglesia:
El evangelio derriba los muros del prejuicio. La visión eterna de Apocalipsis nos desafía a vivir con un corazón misionero, compartiendo el mensaje de salvación a toda persona y contexto.

4. Servicio y dones para las naciones:
Cada creyente está llamado a participar activamente en la gran comisión, poniendo sus dones, talentos y vida al servicio del Reino para impactar a nuestra comunidad y más allá.

✨ **Conclusión:** El evangelio abraza todas las naciones y nos convoca a adorar juntos al único Dios vivo y verdadero.

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
diversidad cultural bendicion para las naciones, pastor numa rincon, apocalipsis 7 9 10 predica, el proposito de las naciones en la biblia, unidad en cristo iglesia, misiones cristianas y evangelismo, todas las tribus y lenguas, adoracion al cordero apocalipsis, diseno de dios y cultura, la gran comision idg, culto domingo en vivo idg, iglesia dios de gracia sevilla, mensajes biblicos expositivos, salvacion por la cruz, derribando barreras culturales, unidad de la iglesia cristiana, predicas evangelicas completas

#IglesiaDiosDeGracia #NumaRincon #DiversidadCultural #Apocalipsis7 #MisionesCristianas #UnidadEnCristo #PalabraDeDios #PredicacionCristiana #CultoEnVivo #EvangelioParaTodos #GranComision #AdoracionAlCordero #CruzDeCristo #NacionesParaCristo #CrecimientoEspiritual #SermonBiblico #FeCristiana #ComunidadDeFe #SevillaCristiana #IglesiaEvangelica`;

const tags = [
  "diversidad cultural bendicion para las naciones",
  "pastor numa rincon",
  "apocalipsis 7 9 10",
  "iglesia dios de gracia",
  "unidad en cristo",
  "misiones cristianas",
  "todas las naciones y tribus",
  "culto domingo idg",
  "predicacion cristiana",
  "la gran comision",
  "diseno de dios",
  "adoracion al cordero"
];

async function main() {
  try {
    const res = await createLiveBroadcast({
      title: "DIVERSIDAD CULTURAL: BENDICIÓN PARA LAS NACIONES - Apocalipsis 7 | Pr. Numa Rincón",
      description: description,
      thumbnailPath: "C:/Users/idgsa/.gemini/antigravity/brain/6a27364a-ccc3-41ec-a49e-af4da4b3c20b/miniatura_numa_diversidad_1791488381567.jpg",
      tags: tags,
      privacyStatus: 'public',
      scheduledStartTime: '2026-10-11T09:15:00.000Z' // Próximo domingo 11 de octubre a las 11:15 AM local (aprox 09:15 UTC)
    });
    console.log('✅ Emisión programada con éxito en YouTube.');
  } catch (error) {
    console.error("Error al programar la emisión:", error);
  }
}

main();
