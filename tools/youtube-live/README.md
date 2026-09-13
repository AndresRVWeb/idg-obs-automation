# YouTube Live API Automation Hub

Herramientas para la creaci�n automatizada de emisiones en directo en YouTube, optimizaci�n de metadatos SEO, subida de miniaturas y enlace con OBS Studio.

---

## ?? Configuraci�n Inicial (Solo 1 vez)

Para que Antigravity pueda crear emisiones en el canal de YouTube de la iglesia (`IDG`), necesitas obtener el archivo `client_secret.json` de Google Cloud:

1. Ve a [Google Cloud Console](https://console.cloud.google.com/).
2. Crea un proyecto (por ejemplo: `IDG-OBS-Live`).
3. En el men� lateral, ve a **APIs y Servicios** > **Biblioteca** y habilita **YouTube Data API v3**.
4. Ve a **Pantalla de consentimiento de OAuth** (OAuth consent screen):
   * Tipo: **Externo**.
   * Nombre de la aplicaci�n: `IDG Live Broadcaster`.
   * Correo de contacto: Tu correo.
5. Ve a **Credenciales** > **Crear credenciales** > **ID de cliente de OAuth**:
   * Tipo de aplicaci�n: **Aplicaci�n web** (Web application) o **App de escritorio** (Desktop).
   * URI de redireccionamiento autorizados: `http://localhost:3000/oauth2callback`
6. Descarga el archivo JSON y gu�rdalo en esta carpeta con el nombre exacto:
   ?? `tools/youtube-live/client_secret.json`

---

## ?? Inicio de Sesi�n / Autenticaci�n

Ejecuta el script de autenticaci�n:

```bash
npm run auth
```

Se abrir� una ventana en tu navegador para iniciar sesi�n con la cuenta de Google propietaria del canal de YouTube. Una vez autorizado, los tokens se guardar�n autom�ticamente en `tokens.json`.

---

## ?? Comandos Disponibles

### 1. Crear y Programar Emisi�n Dominical
```bash
node create-broadcast.js "T�tulo del Culto" "Descripci�n detallada" "ruta/a/miniatura.jpg"
```

### 2. Listar Emisiones Activas o Pr�ximas
```bash
node list-broadcasts.js upcoming
```

### 3. Subir o Cambiar Miniatura
```bash
node upload-thumbnail.js <VIDEO_ID> "ruta/a/miniatura.jpg"
```
