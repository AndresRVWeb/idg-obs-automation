# Proyecto: Ingeniero de Sonido Virtual (Smart EQ)

## Concepto
Crear una aplicaci�n personalizada que act�e como un analizador de espectro de audio en tiempo real y controle din�micamente los filtros (Ecualizador, Compresor, Puerta de Ruido) dentro de OBS Studio.

## Arquitectura (Escucha Paralela / Audio en Bruto)
A petici�n del usuario, el sistema debe escuchar la fuente de **audio en bruto** (DJI Mic) directamente desde Windows (Core Audio), ANTES de que OBS aplique cualquier procesamiento. 
Esto evita bucles de retroalimentaci�n (feedback loops) y permite conocer el estado real de la se�al ac�stica de entrada.

### Flujo de Trabajo
1. **Captura (El O�do):** Un script en Python (con `PyAudio` o `sounddevice`) o Node.js se conecta al hardware del micr�fono de entrada.
2. **Procesamiento Matem�tico:** El script realiza una Transformada R�pida de Fourier (FFT) para analizar el espectro de frecuencias (graves, medios, agudos) y los picos de volumen (clipping / LUFS).
3. **Toma de Decisiones (El Cerebro):** El sistema eval�a el perfil del sonido. Ej: Si hay demasiada resonancia en los graves (ej. 250Hz - 300Hz), calcula la correcci�n.
4. **Ejecuci�n (Las Manos):** A trav�s de **OBS WebSocket**, el sistema env�a comandos en milisegundos (`SetSourceFilterSettings`) para modificar las bandas del filtro EQ nativo o VST en OBS.

## Siguientes Pasos (Para hacer en el PC de casa)
- [ ] Definir el lenguaje de programaci�n (Python es ideal para librer�as de an�lisis de audio como `numpy` y `librosa`).
- [ ] Crear un script b�sico que logre conectarse al micr�fono y simplemente imprima los niveles de decibelios en la consola.
- [ ] Mapear los filtros de audio del canal "Micr�fono" en OBS v�a WebSocket.
- [ ] Programar la l�gica condicional (ej. "Si dB > 0 durante 200ms, bajar ganancia").

*Nota guardada en vivo durante la emisi�n dominical para retomarla en el entorno de desarrollo del hogar.*
