import fs from 'fs';
import path from 'path';

/**
 * Genera un archivo .ass con estilo din�mico IDG (Verde Menta y Blanco con borde negro y sombra)
 * 
 * @param {Array<{start: string, end: string, text: string, highlightWord?: string}>} dialogueLines
 * @param {string} outputPath
 */
export function generateAssSubtitles(dialogueLines, outputPath) {
  const header = `[Script Info]
Title: IDG Shorts Subtitles
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.709
PlayResX: 1080
PlayResY: 1920

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Arial Black,75,&H00FFFFFF,&H00C6F0A8,&H00000000,&H80000000,-1,0,0,0,100,100,1,0,1,8,4,2,60,60,420,1
Style: Highlight,Arial Black,78,&H0084D000,&H00FFFFFF,&H00000000,&H80000000,-1,0,0,0,105,105,1,0,1,9,5,2,60,60,420,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;

  const events = dialogueLines.map(line => {
    let text = line.text;
    if (line.highlightWord && text.includes(line.highlightWord)) {
      text = text.replace(line.highlightWord, `{\\rHighlight}${line.highlightWord}{\\rDefault}`);
    }
    return `Dialogue: 0,${line.start},${line.end},Default,,0,0,0,,${text}`;
  }).join('\n');

  const content = header + '\n' + events;
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`? Subt�tulos estilizados generados en: ${outputPath}`);
}

/**
 * Convierte un texto plano en l�neas de subt�tulos cortas (3-5 palabras) con marcas de tiempo
 */
export function createDialogueFromWords(wordsWithTiming) {
  const lines = [];
  const chunkSize = 4;

  for (let i = 0; i < wordsWithTiming.length; i += chunkSize) {
    const chunk = wordsWithTiming.slice(i, i + chunkSize);
    const start = chunk[0].start;
    const end = chunk[chunk.length - 1].end;
    const text = chunk.map(w => w.word.toUpperCase()).join(' ');
    const highlightWord = chunk[Math.floor(chunk.length / 2)].word.toUpperCase();

    lines.push({ start, end, text, highlightWord });
  }

  return lines;
}
