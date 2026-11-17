# AUDITORÍA EDITORIAL — QUÉ MILA, BOBO! / V3

Fecha de revisión: 17 de noviembre de 2026.
Estado: versión candidata para revisión, **no publicada**.

## Diagnóstico

La versión anterior (`que-mila-bobo.html` del ZIP original) repetía el hero y parte de la navegación del portfolio general, anunciaba el caso como "en desarrollo" y anticipaba otros proyectos como "próximamente", aunque ya existía evidencia real del trabajo. Eso diluía la identidad propia de Qué Mila, Bobo!.

## Verificación de recursos originales

| Archivo | Resolución / tipo | Valor para el caso | Dictamen |
|---|---|---|---|
| `assets/logo.webp` | 1100 × 1170 | Identidad de marca y sistema de logotipo | Conservar; mostrar completo sobre fondo oscuro |
| `assets/propuesta.webp` | 1800 × 862 | Propuesta conceptual de fachada | Conservar; rotular como concepto, nunca como foto real |
| `assets/dia.webp` | 1587 × 1154 | Fotografía diurna de implementación | Conservar; comparación editorial con la propuesta |
| `assets/noche.webp` | 1360 × 628 | Fachada en funcionamiento de noche | Protagonista del hero; evita mockups repetidos |
| `assets/carta.webp` | 1132 × 1600 | Diseño de carta comercial | Conservar entera, permitir ampliar |
| `assets/video-poster.jpg` | 540 × 960 | Fotograma del video de inauguración | Conservar con botón de reproducción, sin autoplay |
| `assets/qmb-inauguracion-teaser.mp4` | Video original, ~1,39 MB | Registro de inauguración | Conservar como video activado por el visitante |

## Decisiones de dirección de arte

1. Hero con fotografía real de noche, nombre de marca y autoría visible, sin bloquear la imagen con un gran recuadro.
2. Jerarquía propia del caso: **identidad → propuesta versus realidad → carta → inauguración → créditos**.
3. Comparador interactivo entre propuesta y resultado con advertencia explícita de que las perspectivas son distintas. No constituye un antes/después fotográfico exacto.
4. Uso medido de los códigos blanco, celeste/azul y negro vinculados a la identidad original; evitar mezclar la paleta de otros clientes.
5. Modal de ampliación para las piezas; sin recorte en la vista ampliada. Reproducción de video a demanda, sin audio automático.
6. Nota de créditos que diferencia los lineamientos de Luis Germán Parisotto de la interpretación y ejecución de murales por parte de otro artista.

## Cambios técnicos

- `qmb.css`, `qmb.js`, HTML semántico con títulos y navegación accesibles.
- Control de comparación accesible con teclado mediante `<input type="range">`.
- Controles nativos `<dialog>` para ampliaciones; cierre con Escape y botón visible.
- Sin `innerHTML`, sin scripts de CDN; CSP restrictiva a recursos propios y Google Fonts.
- Imágenes con tamaños y textos alternativos. Carga diferida excepto fotografía principal.
- Diseñado para soportar `prefers-reduced-motion`.
- QA local con HTML/CSS/JS autocontenidos a anchos 320, 390, 768 y 1440 píxeles: sin desbordamientos horizontales, sin excepciones de JS, comparador reacciona. Esta comprobación no es un test Lighthouse ni sustituye pruebas en el despliegue definitivo.

## Pendiente antes de publicación

- Confirmar que cada fotografía y el video tengan autorización de exhibición en el portfolio personal.
- Revisar en navegador real con fuentes cargadas y dispositivos físicos.
- Verificar que todas las páginas del portfolio estén transferidas; la portada todavía enlaza a otros casos cuya migración continúa.
- Revisar la configuración efectiva de GitHub Pages (cabeceras, 404, despliegue, metadatos sociales).
