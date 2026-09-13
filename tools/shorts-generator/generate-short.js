import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { generateAssSubtitles } from './subtitles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Genera un v�deo vertical 9:16 (YouTube Shorts / Instagram Reels) a partir de una grabaci�n.
 * 
 * @param {Object} options
 * @param {string} options.inputVideo Ruta al archivo de v�deo (MP4)
 * @param {string} options.startTime Tiempo de inicio (ej. "00:35:10" o "2110")
 * @param {number} options.duration Duraci�n en segundos (ej. 45)
 * @param {string} options.title T�tulo del Short
 * @param {string} options.fullVideoUrl Enlace a la pr�dica completa en YouTube
 * @param {string} [options.outputName="short_output.mp4"] Nombre del archivo de salida
 * @param {string} [options.subtitlesAss] Ruta al archivo .ass de subt�tulos (opcional)
 */
export async function createShort(options) {
  const outputDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, options.outputName || `short_${Date.now()}.mp4`);
  const tempCut = path.join(outputDir, `temp_cut_${Date.now()}.mp4`);

  console.log(`\n======================================================`);
  console.log(`?? GENERADOR AUTOM�TICO DE SHORTS IDG`);
  console.log(`======================================================`);
  console.log(`1. Cortando segmento de ${options.duration}s desde ${options.startTime}...`);

  // Paso 1: Cortar el segmento del v�deo original
  await new Promise((resolve, reject) => {
    const cutCmd = `ffmpeg -y -ss ${options.startTime} -i "${options.inputVideo}" -t ${options.duration} -c:v libx264 -preset veryfast -c:a aac "${tempCut}"`;
    exec(cutCmd, (err, stdout, stderr) => {
      if (err) return reject(new Error(`Error al cortar v�deo: ${err.message}`));
      resolve();
    });
  });

  console.log(`2. Procesando formato vertical 9:16 (1080x1920) y filtros visuales...`);

  // Paso 2: Composici�n vertical (Fondo desenfocado en 9:16 + V�deo 16:9 n�tido en el centro)
  // Con subt�tulos integrados si existen
  let filterComplex = `[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,boxblur=20:5[bg];[0:v]scale=1080:-1[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2[v]`;

  if (options.subtitlesAss && fs.existsSync(options.subtitlesAss)) {
    const escapedAss = options.subtitlesAss.replace(/\\/g, '/').replace(/:/g, '\\:');
    filterComplex += `;[v]ass='${escapedAss}'[vsub]`;
  }

  const finalMap = options.subtitlesAss ? `[vsub]` : `[v]`;

  await new Promise((resolve, reject) => {
    const renderCmd = `ffmpeg -y -i "${tempCut}" -filter_complex "${filterComplex}" -map "${finalMap}" -map 0:a -c:v libx264 -preset fast -crf 20 -c:a aac -b:a 192k "${outputPath}"`;
    exec(renderCmd, (err, stdout, stderr) => {
      // Limpiar archivo temporal
      if (fs.existsSync(tempCut)) fs.unlinkSync(tempCut);

      if (err) return reject(new Error(`Error al renderizar Short vertical: ${err.message}`));
      resolve();
    });
  });

  console.log(`? V�deo vertical generado con �xito en:\n   ${outputPath}\n`);

  // Paso 3: Generaci�n de Metadatos SEO para el Short
  const metadata = {
    title: `${options.title} #Shorts #Predica #Fe`,
    description: `�Est�s pasando por un momento dif�cil? Escucha esta reflexi�n del Pastor Numa Rinc�n en la Iglesia Dios de Gracia (IDG).\n\n?? MIRA LA PR�DICA COMPLETA AQU�:\n${options.fullVideoUrl || 'https://youtube.com/@idg_live'}\n\n?? IEB Dios de Gracia - Sanl�car de Barrameda (C�diz)\n?? WhatsApp de Oraci�n: (+34) 644 50 57 04\n\n#Shorts #iglesiadiosdegracia #predicacioncristiana #prnumarincon #fe #sanlucardebarrameda`,
    tags: ["shorts", "predica", "iglesia dios de gracia", "pr numa rincon", "cristianos", "fe", "esperanza", "reflexion biblica"],
    videoFile: outputPath
  };

  const metaPath = outputPath.replace('.mp4', '_metadata.json');
  fs.writeFileSync(metaPath, JSON.stringify(metadata, null, 2), 'utf8');

  console.log(`?? Metadatos y enlace al v�deo completo guardados en:\n   ${metaPath}\n`);
  return metadata;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const inputVideo = args[0];
  const startTime = args[1] || "00:00:00";
  const duration = parseInt(args[2], 10) || 45;
  const title = args[3] || "Dios Nunca Te Abandona";
  const fullVideoUrl = args[4] || "https://youtube.com/@idg_live";

  if (!inputVideo) {
    console.log('Uso: node generate-short.js <RUTA_VIDEO_MP4> <INICIO> <DURACION_SEG> <TITULO> <URL_VIDEO_COMPLETO>');
    process.exit(1);
  }

  createShort({
    inputVideo,
    startTime,
    duration,
    title,
    fullVideoUrl
  }).catch(console.error);
}
