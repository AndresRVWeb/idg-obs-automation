# 🚀 VPS YouTube 24/7 Agent - Arquitectura & Despliegue

Este módulo está diseñado para ejecutarse de forma continua en tu **VPS (Ubuntu / Linux)** gestionado mediante **PM2** o **Docker/Systemd**.

---

## 🎯 Capacidades del Agente

1. **Auto-SEO los Lunes (Post-Directo)**:
   - Revisa las emisiones finalizadas recientes de la lista de directos del canal.
   - Detecta si YouTube ya ha procesado y publicado la transcripción (`timedtext / captions`).
   - Extrae los hitos del sermón (introducción, lectura bíblica, puntos principales, oración).
   - Genera los **Capítulos / Marcas de Tiempo (Timestamps)** con formato exacto `MM:SS` o `HH:MM:SS`.
   - Modifica la descripción agregando el índice del sermón y las palabras clave reales pronunciadas por el predicador.
   - Mantiene intactos el título, los horarios oficiales y los enlaces de la iglesia.

2. **Auto-Respondedor de Comentarios 24/7**:
   - Monitorea periódicamente nuevos comentarios en videos y transmisiones recientes.
   - Filtra consultas frecuentes, peticiones de oración y bienvenidas.
   - Responde automáticamente con mensajes edificantes y el contacto de WhatsApp del equipo pastoral.

---

## 📦 Estructura del Proyecto en el VPS

```text
vps-youtube-agent/
├── config.py / config.js       # Variables de entorno y credenciales
├── main.py / index.js           # Bucle principal o cron de supervisión
├── services/
│   ├── youtube_client.py       # Wrapper de YouTube Data API v3
│   ├── transcript_service.py   # Extractor y procesador de transcripciones
│   ├── seo_optimizer.py        # Generador de timestamps y descripción
│   └── comment_moderator.py    # Detector y respondedor de comentarios
├── requirements.txt            # Dependencias Python (si se corre en Python)
├── package.json                # Dependencias Node (si se corre en Node)
└── ecosystem.config.js         # Configuración de PM2 para persistencia 24/7
```

---

## ⚙️ Despliegue en VPS (Paso a Paso)

### 1. Clonar el repositorio en el servidor
```bash
git clone https://github.com/AndresRVWeb/idg-obs-automation.git
cd idg-obs-automation/vps-youtube-agent
```

### 2. Configurar credenciales
Copiar `client_secret.json` y `tokens.json` en la carpeta raíz del servicio en el VPS.

### 3. Ejecutar 24/7 con PM2
```bash
npm install -g pm2
pm2 start index.js --name "idg-youtube-agent"
pm2 save
pm2 startup
```
