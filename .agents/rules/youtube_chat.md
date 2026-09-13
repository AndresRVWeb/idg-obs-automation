---
name: youtube-chat-timing
description: Rule for timing the initial welcome message in YouTube Live streams.
trigger: "When the user asks to start the YouTube Live Chat, post the welcome message, or announces the stream is live."
---

# Regla de Tiempos para el Chat de YouTube

**INSTRUCCI�N CR�TICA (CRITICAL INSTRUCTION)**: 
Cuando el usuario anuncie que la transmisi�n de YouTube Live ha comenzado (ej. "Ya estamos en vivo", "Iniciando transmisi�n", "Dale al bot�n rojo"), **NO debes enviar el mensaje de bienvenida al chat de YouTube inmediatamente.**

En su lugar, debes seguir este flujo estricto:
1. Confirmar al usuario que has registrado el inicio del directo.
2. Programar un temporizador en segundo plano (usando la herramienta `schedule`) de exactamente **300 segundos (5 minutos)**.
3. Solo cuando el temporizador de 5 minutos termine, enviar el mensaje de bienvenida al chat utilizando el script `live-chat.js`.

*Raz�n t�cnica y estrat�gica*: Enviar mensajes inmediatamente despu�s de que el directo empieza suele resultar en errores de API (`INVALID_REQUEST_METADATA` / `403 Forbidden`) porque los servidores de YouTube necesitan unos minutos para inicializar la sala de chat. Adem�s, esperar 5 minutos garantiza que la congregaci�n ya est� conectada y pueda leer el mensaje de bienvenida.
