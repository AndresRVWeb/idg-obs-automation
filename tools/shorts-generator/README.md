# Generador Autom�tico de YouTube Shorts, Reels y TikTok para IDG

Este m�dulo automatiza la creaci�n de clips verticales (9:16 - 1080x1920) a partir de las grabaciones de los cultos, con subt�tulos din�micos en los colores de marca de IDG y enlace directo a la pr�dica completa.

---

## ? Flujo Automatizado Completo

1. **Corte del Segmento:** Extrae los 30-60 segundos m�s impactantes de la pr�dica.
2. **Formato Vertical 9:16:** Aplica fondo cinem�tico desenfocado + v�deo n�tido del predicador en el centro.
3. **Subt�tulos Estilizados (Estilo CapCut/Hormozi):**
   * Tipograf�a gruesa con relieve y sombra negra.
   * Resaltado din�mico en **Verde Menta IDG (`#A8F0C6` / `#00D084`)** y **Blanco Puro (`#FFFFFF`)**.
4. **Metadatos SEO & Enlace:**
   * T�tulo corto (< 50 caracteres) con hashtags virales (`#Shorts #Predica #Fe`).
   * Descripci�n con cr�dito pastoral y **enlace directo al culto completo en YouTube**.
5. **Subida Autom�tica a YouTube Shorts:**
   * Publicaci�n directa a trav�s de la API de YouTube vinculada.

---

## ?? C�mo Usarlo

### 1. Generar un Short desde una grabaci�n local:
```bash
node generate-short.js "C:/ruta/a/grabacion.mp4" "00:35:10" 45 "Paz en la Tormenta" "https://youtu.be/ID_DEL_CULTO"
```

### 2. Subir el Short generado directamente a YouTube:
```bash
node upload-short.js "output/short_ejemplo.mp4" "Paz en la Tormenta #Shorts #IDG" "Descripci�n con enlace al culto..."
```
