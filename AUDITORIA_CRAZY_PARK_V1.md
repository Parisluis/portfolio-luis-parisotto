# Crazy Park — Auditoría editorial de la V1

## Alcance comprobado
Revisión de `crazy-park.html` y los 11 recursos gráficos/fotográficos presentes en el ZIP del portfolio aprobado. No se agregaron imágenes externas, ni se alteró el diseño de las piezas. Esta es una auditoría del material de exhibición disponible, no una certificación de autoría o impacto comercial.

## Dictamen pieza por pieza
| Archivo | Tipo observado | Decisión editorial | Precaución |
|---|---|---|---|
| `panorama.webp` | Fotografía del parque | Hero principal y contraparte gráfica del techo | No presentar como fotografía tomada desde el mismo punto del arte |
| `techo.webp` | Arte geométrico de techo | Mostrar con fotografía de aplicación | Indicar relación conceptual, no transformación fotográfica exacta |
| `logo-apilado.webp` | Logotipo volumétrico | Mostrar en primer bloque con mucha respiración | No afirmar diseño original del logo sin confirmar autoría |
| `logo-horizontal.webp` | Variante de identidad | Mantener como alternativa, sin repetir en portada | No afirmar diseño original sin confirmar |
| `zona-gamer.webp` | Tipografía de sector | Mostrar como pieza gráfica | No afirmar que la foto contigua verifica exactamente ese rótulo |
| `dance-gamer.webp` | Fotografía de uso | Testimonio ambiental junto a zona gamer | Fotografía de terceros, dar crédito cuando corresponda |
| `entrada.webp` | Acceso real | Figura principal del bloque de espacios | Evitar duplicarla también como hero |
| `juegos.webp` | Mural y sector de juegos | Fotografía secundaria importante | Verificar permiso de fotografía y autoría de ilustraciones |
| `escalada.webp` | Área de escalada | Imagen secundaria con texto claro | Resolución 447×447; no usar en hero a gran tamaño |
| `spa-fachada.webp` | Acceso Crazy Spa | Mantener en sección diferenciada | Confirmar alcance de intervención sobre este sector |
| `spa-interior.webp` | Interior Crazy Spa | Mostrar junto a acceso, no mezclar con juegos | Conservar créditos visibles de fotografía |

## Cambios aplicados
- Jerarquía visual centrada en el espacio real, sin texto superpuesto a las piezas principales.
- Nueva estructura editorial: identidad → techo → zona gamer → sectores → Crazy Spa.
- Galería ampliable mediante `<dialog>` y controles de teclado.
- CSS y JavaScript independientes, sin dependencias externas de scripts.
- Metadatos de SEO y vista previa, atributos de imagen para estabilizar el layout, y carga diferida fuera del hero.
- Mensajes prudentes sobre autoría y diferencia entre archivo e implementación.
- La paleta de la interfaz es sobria; los colores de Crazy Park se reservan para las fotografías y aplicaciones.

## Pendientes para aprobación
1. Verificar qué recursos de marca fueron diseñados o adaptados por Luis y qué materiales preexistían.
2. Identificar el crédito formal del fotógrafo para Crazy Spa, si corresponde.
3. Si hay imágenes originales de mayor resolución de `escalada.webp` o `spa-interior.webp`, reemplazarlas sin cambiar su edición.
4. Comparar el aspecto real después de publicarse con fuentes y efectos disponibles.
