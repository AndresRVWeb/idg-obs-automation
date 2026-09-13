# Manual de Operaci�n y Conocimiento del Proyecto: IDG Live Broadcaster

Este documento consolida el conocimiento t�cnico y los flujos automatizados desarrollados para el ecosistema multimedia de la **Iglesia Dios de Gracia (IDG)**.

## 1. Motor de Inteligencia Artificial para Miniaturas
* **Recorte Autom�tico (Siluetas):** El sistema lee las fotos JPEG desde `assets/predicadores/`, utiliza visi�n artificial para extraer la silueta del predicador sin fondo y la posiciona en la derecha.
* **Composici�n Din�mica de Textos:** Se generan fuentes 3D gruesas (estilo Arial Black) con el t�tulo ("SABEMOS") y el vers�culo b�blico en el c�digo de color oficial **Verde Menta IDG (#A8F0C6)**.
* **Fondo de Marca:** Se usan ondas org�nicas superpuestas en **Verde Esmeralda (#00D084)** con iluminaci�n volum�trica acorde al tema de la predicaci�n.

## 2. Inyecci�n SEO en YouTube Live (API v3)
* **Descripciones Multicapa:** Creaci�n autom�tica de la descripci�n del v�deo con 5 bloques (Hook, Resumen de puntos clave, Timestamps, Links de contacto/WhatsApp, y Redes Sociales).
* **Inyecci�n de Etiquetas (Tags):** Dado que el endpoint de creaci�n de transmisiones de YouTube no acepta etiquetas directamente, el motor realiza una segunda pasada autom�tica usando `youtube.videos.update` para inyectar hasta 500 caracteres de etiquetas hiper-optimizadas (ej. `iglesia dios de gracia, culto en directo, 1 juan 5...`).

## 3. Preparaci�n y Control de OBS Studio
* **Vinculaci�n Autom�tica:** Asignaci�n autom�tica de la Stream Key RTMP generada por YouTube hacia el archivo `service.json` de OBS.
* **Modo Estudio (Studio Mode):** Configuraci�n est�ndar donde el "Programa" (Live) tiene la escena est�tica/logo y el "Preview" (Espera) tiene la c�mara principal.
* **Codificaci�n �ptima:** Uso de Intel QuickSync Video (QSV) a 1080p60 y 6.000 Kbps para aliviar la carga de CPU.

## 4. Flujo de Activaci�n del Culto (Exclusi�n de Alabanza)
Dado que los tiempos de alabanza no se transmiten por motivos de derechos o formato, el sistema permanece en reposo total (Standby). La emisi�n solo arranca bajo el comando expl�cito tras finalizar el tiempo de alabanza musical.
