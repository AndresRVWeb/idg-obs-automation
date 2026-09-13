import { createLiveBroadcast } from './create-broadcast.js';

const title = 'SABEMOS: 3 Verdades Inmutables de Nuestra Fe | 1 Juan 5:18-20 | Pr. Numa Rinc�n';

const description = `�Sab�as que hay verdades espirituales que pueden transformar por completo tu manera de vivir y vencer el temor? En este culto dominical de la Iglesia Dios de Gracia (IDG), el Pastor Numa Rinc�n expone 1 Juan 5:18-20, record�ndonos tres verdades fundamentales que todo creyente debe saber, recordar y poner en pr�ctica:

1?? Cristo nos guarda y el nuevo nacimiento rompe el dominio habitual del pecado.
2?? Somos hijos de Dios y, aunque vivimos en un mundo bajo la influencia del maligno, permanecemos firmes, alertas y sin temor.
3?? Cristo vino para darnos entendimiento y comuni�n real con el Dios verdadero.

Estas verdades no son solo teor�a de domingo: son el ancla para vencer la tentaci�n, vivir en santidad y experimentar una fe pr�ctica cada d�a.

?? Pasaje B�blico Central: 1 Juan 5:18-20

?? Cap�tulos del Culto (Timestamps):
00:00 - Cuenta Atr�s y Bienvenida
05:00 - Alabanza y Adoraci�n IDG
22:00 - Tiempo de Oraci�n e Intercesi�n por las Familias
28:30 - Lectura de la Palabra: 1 Juan 5:18-20
34:00 - Pr�dica: SABEMOS... - Pr. Numa Rinc�n
1:12:00 - Ministraci�n, Oraci�n de Fe y Despedida

?? �Necesitas Oraci�n o Acompa�amiento Espiritual?
Escr�benos en el chat en vivo o directamente a nuestro equipo pastoral:
?? WhatsApp de Oraci�n: (+34) 644 50 57 04 / 655 78 42 21
?? Email: contacto@iebdiosdegracia.com

? Con�ctate y Vis�tanos:
?? Iglesia Dios de Gracia, Sanl�car de Barrameda, C�diz (Espa�a)
?? Sitio web: https://iebdiosdegracia.com
?? Horario de Culto: Domingos a las 12:30h (Horario Espa�a) | Martes 19:30h (Oraci�n)

?? �Suscr�bete al canal y activa la campanita para unirte a nuestros directos y recibir mensajes edificantes!

?? S�guenos en Redes Sociales:
� Facebook: Iglesia Dios de Gracia
� Instagram: @diosdegracia
� Twitter: @diosdegraciags

#iglesiadiosdegracia #predicacioncristiana #cultoendirecto #1juan5 #sanlucardebarrameda #fe #prnumarincon`;

const scheduledStartTime = '2026-08-30T10:30:00.000Z';
const thumbnailPath = 'c:/Proyectos-Antigravity/OBS/miniatura_sabemos.jpg';

async function main() {
  const res = await createLiveBroadcast({
    title,
    description,
    scheduledStartTime,
    privacyStatus: 'public',
    thumbnailPath
  });

  console.log('RESULTADO_BROADCAST:', JSON.stringify(res, null, 2));
}

main().catch(err => {
  console.error('ERROR_SCHEDULE:', err);
  process.exit(1);
});
