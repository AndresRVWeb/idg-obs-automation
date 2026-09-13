---
name: youtube-thumbnail-designer
description: >-
  Expert in designing high-converting, professional YouTube thumbnails matching the exact visual identity and branding of Iglesia Dios de Gracia (IDG). Autonomously analyzes the sermon title, scripture passage, and content summary to select the optimal visual archetype, background geometry (organic waves, arches, polygons), color harmony, and punchy 2-4 word overlay.
---

# YouTube Thumbnail Designer Skill (Motor Aut�nomo IDG)

Esta skill define c�mo analizar autom�ticamente el **T�tulo**, **Vers�culo B�blico** y **Breve Descripci�n** de la pr�dica para seleccionar de forma aut�noma el arquetipo visual, la geometr�a, la paleta crom�tica y el texto de mayor impacto para la miniatura.

---

## 1. Matriz de Decisi�n Sem�ntica y Visual

Cuando el usuario proporcione:
* **Tema / T�tulo**
* **Vers�culo B�blico**
* **Breve Descripci�n del Mensaje**

El dise�ador evaluar� el tono teol�gico y emocional del mensaje y aplicar� autom�ticamente la siguiente matriz:

| Emoci�n / Tono Teol�gico | Ejemplos de Temas | Arquetipo & Geometr�a Recomendada | Paleta Crom�tica | Elemento 3D / Simb�lico Sugerido |
|---|---|---|---|---|
| **Gracia, Identidad, Crecimiento, Vida Nueva** | Discipulado, perd�n, amor del Padre, caminar cristiano | **Arquetipo 1: Ondas Org�nicas IDG**<br>Capas fluidas en relieve 3D. | Verde Esmeralda (`#00D084`) + Menta (`#A8F0C6`) + Blanco | Brotes de luz, hojas verdes con roc�o, cruz calada resplandeciente. |
| **Paz en la Dificultad, Esperanza, Fortaleza** | Ansiedad, tormentas de la vida, pruebas, des�nimo | **Arquetipo 2: Fusi�n Cinem�tica & Volum�trica**<br>Rayos de luz divina atravesando nubes o piedra. | Verde Bosque Profundo (`#003E2F`) + Dorado C�lido (`#FFD700`) | Ancla dorada brillante, faro en la niebla, rayos dorados cenitales. |
| **Autoridad Espiritual, Fe Radical, Ruptura de Ataduras** | Romper cadenas, guerra espiritual, victoria, decisiones | **Arquetipo 3: Alto Impacto & Geometr�a Angular**<br>Cu�as diagonales afiladas o halo de contraste. | Fondo Carb�n Oscuro + Amarillo El�ctrico / �mbar + Blanco | Cadenas rotas de acero, escudo de la fe, espada de la palabra. |
| **Santidad, Reverencia, Oraci�n, Intimidad con Dios** | Clamor, presencia del Esp�ritu Santo, adoraci�n profunda | **Arquetipo 4: Portal / Arco de Gloria**<br>Arcos arquitect�nicos luminosos con niebla suave. | Verde Jade / Teal Oscuro (`#0E7C66`) + Blanco Puro + Foco Escenario | Altar con luz c�lida, manos en oraci�n, paloma de luz, biblia abierta. |

---

## 2. Regla de Extracci�n de Texto de Miniatura (2 a 4 palabras)

A partir del t�tulo y la descripci�n, el dise�ador no copiar� el t�tulo largo, sino que sintetizar� la **frase de mayor tensi�n / curiosidad / promesa**:

* *T�tulo Pr�dica:* `"C�mo Vencer la Ansiedad y Recuperar la Paz Interior"`
  * ?? *Texto Miniatura:* `PAZ EN LA TORMENTA` o `DIOS TIENE EL CONTROL`
* *T�tulo Pr�dica:* `"La Autoridad de Servir con Humildad"`
  * ?? *Texto Miniatura:* `EL PODER DE SERVIR`
* *T�tulo Pr�dica:* `"Rompiendo las Cadenas del Pasado"`
  * ?? *Texto Miniatura:* `LIBRE POR SU GRACIA`

---

## 3. Paleta Oficial IDG (C�digos HEX de Referencia)

* **Verde Menta Luminoso:** `#A8F0C6` / `#80E8A7` (acentos, resplandores)
* **Verde Esmeralda Marca IDG:** `#00D084` / `#00C471` (figuras, ondas, badges)
* **Verde Jade / Mar Profundo:** `#0E7C66` / `#004D40` (capas de profundidad)
* **Verde Bosque / Fondo:** `#003E2F` / `#04251D` (base)
* **Blanco Puro:** `#FFFFFF` (texto principal, silueta del pastor)
* **Acentos Secundarios:** Dorado `#FFD700` (Gloria/Fe) o �mbar `#FF9500` (Fervor/Fuego)

---

## 4. Flujo de Generaci�n Autom�tica

1. **An�lisis:** Extraer tono emocional, palabra clave principal y vers�culo.
2. **Selecci�n de Arquetipo:** Asignar la geometr�a (ondas, arco, cu�as o escena) y colores.
3. **Generaci�n del Fondo:** Renderizar el fondo tem�tico con iluminaci�n cinem�tica y espacio reservado.
4. **Composici�n:** Montar el recorte del predicador desde `assets/predicadores/` con silueta limpia y el texto en bloque 3D de 2-3 palabras.
