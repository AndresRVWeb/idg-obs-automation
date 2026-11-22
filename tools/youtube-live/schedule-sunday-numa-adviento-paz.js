import { createLiveBroadcast } from './create-broadcast.js';

const description = `Iniciamos con alegría la serie de ADVIENTO 2026 con un mensaje fundamental para nuestros tiempos: «LA PAZ». Vivimos en un mundo marcado por el ajetreo, la incertidumbre y las presiones cotidianas, donde solemos pensar que la paz es la simple ausencia de problemas o conflictos. Sin embargo, la promesa profética de Isaías 9:6-7 nos revela una verdad infinitamente más profunda: la verdadera paz no es una circunstancia, es una Persona, Jesucristo, nuestro Príncipe de Paz.

En este emotivo e iluminador mensaje dominical, el pastor Numa Rincón nos enseña cómo encontrar descanso y reposo en Cristo aun en medio de las dificultades. Jesús no vino únicamente a inspirarnos; vino a reconciliarnos con el Padre celestial mediante su sacrificio en la cruz y a inaugurar un reino eterno de justicia y rectitud que jamás tendrá fin. Recuerda esta gran verdad: la presencia de la tormenta en tu vida no significa en ningún momento la ausencia de Dios. Cuando aprendemos a depositar nuestras cargas en oración y permitimos que el Espíritu Santo moldee nuestras actitudes y relaciones, la paz de Dios que sobrepasa todo entendimiento guarda nuestros corazones.

📖 **Pasaje Bíblico Clave:**
Isaías 9:6-7
«Porque un niño nos es nacido, hijo nos es dado, y el principado sobre su hombro; y se llamará su nombre Admirable, Consejero, Dios Fuerte, Padre Eterno, Príncipe de Paz. Lo dilatado de su imperio y la paz no tendrán límite, sobre el trono de David y sobre su reino, disponiéndolo y confirmándolo en juicio y en justicia desde ahora y para siempre. El celo de Jehová de los ejércitos hará esto.»

💡 **Puntos Clave del Mensaje:**

1. La verdadera paz en medio de las tormentas:
La paz bíblica (Shalom) no depende de que el entorno esté en calma, sino de la presencia constante de Jesús en nuestra barca. La tormenta puede rugir, pero en Cristo hallamos ancla segura para nuestra alma.

2. Jesús, nuestro Príncipe de Paz:
Él pagó el precio de nuestra reconciliación con Dios. Su gobierno no es de opresión ni de angustia, sino de gracia, restauración y una paz que trasciende cualquier diagnóstico, crisis o problema humano.

3. Un Reino de justicia y paz sin límite:
El cumplimiento de la profecía de Isaías asegura que la victoria final pertenece al Señor. Su soberanía y Su justicia cuidan de sus hijos día tras día.

4. Vida práctica en Adviento: Dejar actuar al Espíritu Santo:
Esta paz sobrenatural florece en nosotros cuando renunciamos al control personal, le entregamos en oración sincera nuestras ansiedades y dejamos que el Espíritu Santo sane nuestras relaciones familiares y congregacionales.

✨ **Conclusión:** No busques paz lejos del Príncipe de Paz. Este tiempo de Adviento, abre tu corazón a Aquel cuyo nacimiento trajo luz a las tinieblas y descanso a los quebrantados.

*Nota:* Esta emisión corresponde al Culto Dominical y Predicación de la Palabra en la Iglesia Dios de Gracia.

---

⏰ **Horarios de Reunión:**
• Domingos 11:30 (Culto Dominical)
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
serie adviento 2026, la paz isaias 9 6 predica, pastor numa rincon iglesia dios de gracia, principe de paz sermon expositivo, paz en medio de la tormenta biblia, reflexiones de adviento cristianas, culto domingo en vivo idg, predicaciones cristianas evangelicas completas, isaias 9 6 explicacion y aplicacion, descanso en jesucristo, como tener la paz de dios en tiempos dificiles, esperanza y paz en cristo, iglesia dios de gracia sevilla directo, sermones de navidad y adviento, reconciliacion con dios mediante jesus

#IglesiaDiosDeGracia #Adviento2026 #LaPaz #PastorNumaRincon #Isaias9 #PrincipeDePaz #PazDeDios #CultoEnVivo #PredicacionCristiana #EsperanzaEnCristo #TiempoDeAdviento #PalabraDeDios #ComunidadDeFe #SevillaCristiana #IglesiaEvangelica #PazEnLaTormenta #JesusEsLaPaz #VidaCristiana #CrecimientoEspiritual #SermonCristiano`;

const tags = [
  "serie adviento 2026",
  "la paz",
  "isaias 9 6 7",
  "pastor numa rincon",
  "principe de paz",
  "iglesia dios de gracia",
  "paz en la tormenta",
  "culto domingo idg",
  "predicacion cristiana",
  "adviento sevilla"
];

export async function scheduleAdventPaz(thumbnailPath) {
  try {
    const res = await createLiveBroadcast({
      title: "SERIE ADVIENTO 2026: LA PAZ - Isaías 9:6-7 | Pastor Numa Rincón",
      description: description,
      thumbnailPath: thumbnailPath,
      tags: tags,
      privacyStatus: 'public',
      scheduledStartTime: '2026-11-22T10:15:00.000Z' // Domingo 22 de noviembre a las 11:15 AM local (CET / UTC+1)
    });
    console.log('✅ Emisión de Adviento: LA PAZ programada con éxito en YouTube.');
    return res;
  } catch (error) {
    console.error("Error al programar la emisión:", error);
    throw error;
  }
}

// Si se ejecuta directamente desde línea de comandos
if (process.argv[1].endsWith('schedule-sunday-numa-adviento-paz.js')) {
  const thumb = process.argv[2] || '';
  scheduleAdventPaz(thumb);
}
