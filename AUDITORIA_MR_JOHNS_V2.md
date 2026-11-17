# Auditoría editorial — Mr John’s & Warhol / Caso 05

**Autor del portfolio:** Luis Germán Parisotto  
**Estado:** versión de revisión editorial, no certificación de derechos de terceros ni de métricas de resultados.

## Diagnóstico

La página anterior tenía una narración extensa y repetía fotografías y hojas de carta. La marca funciona mejor cuando se organiza en dos recorridos: **comunicación comercial** (carta, aniversario y gráfica) y **formatos de experiencia** (Mr Chef y Food Live). El valor diferencial del caso se encuentra en estos últimos, por eso ahora preceden a la carta.

## Dictamen por familia de piezas

| Familia | Fuentes inspeccionadas | Decisión | Motivo |
|---|---|---|---|
| Identidad | `logo-0.webp`, `photo-6.webp`, `paneles-0.webp` | Protagonismo del logo aplicado al vaso; no presentar como logo creado | Existe evidencia de marca en soporte real, pero no de autoría sobre su creación inicial |
| Fotografía de producto | `photo-0` a `photo-7` | Mostrar 1, 3, 5, 6 y 7 | Cinco registros representativos; evitar repetición de producto y atribución de fotografía no confirmada |
| Carta | `menu-0` a `menu-14` (15 páginas) | Mostrar 0, 3, 4, 6, 9 y 11 | Seis páginas evidencian portada, gastronomía, vino y coctelería sin convertir la página en un catálogo completo |
| Séptimo aniversario | `campaign-0.webp`, `campaign-1.webp` | Mantener la pareja | Muestra expectativa y programación musical como fases de una campaña |
| Noche especial | `campaign-2.webp` | Complementaria | Añade otra pieza de convocatoria sin competir con el aniversario |
| Food Live | `campaign-3.webp` | Darle sección independiente | Es la evidencia gráfica disponible de la evolución del formato de eventos |
| Mr Chef | `mr-chef.jpg`, `mr-chef-italiana.jpg`, `mr-chef.mp4`, `mr-chef-italiana.mp4` | Protagonista editorial | El concepto y las variantes de participantes son distintivos; videos convertidos sin audio |
| Vinilos | `vinilo-0.webp` a `vinilo-2.webp` | Presentar como composiciones para aplicación | Incluyen personajes, fotografías e ilustraciones de terceros; no atribuir creación original ni distribuir PDFs fuente |
| Registro nocturno | `noche-poster.webp`, `noche.mp4` | Mostrar video con activación manual | Contexto del evento, no atribución de filmación |
| Archivos PDF originales | `carta-archivo.pdf`, `vinilos-originales.pdf` | **No subir todavía** | Evitar difusión innecesaria de 24 MB de documentos de archivo sin revisión completa de metadatos, derechos y condiciones comerciales |
| Packaging | No se localizaron archivos específicos e inequívocos | **No crear sección de packaging** | Sí hay recipientes con marca aplicada en fotografías; no demuestra una línea de packaging diseñada |

## Cambios visuales

1. Portada editorial con vaso de la marca y titular separado de la fotografía.
2. Mayor protagonismo a los formatos Mr Chef y Food Live antes de la carta.
3. Presentación de seis páginas de carta seleccionadas, con ampliación a original bajo demanda.
4. Acento dorado y negro, márgenes generosos, composición asimétrica controlada.
5. Botones de ampliación con navegación por teclado, `dialog` accesible y `prefers-reduced-motion`.
6. Video sin reproducción automática, `preload="none"`, y versiones de los dos clips Mr Chef sin pistas de audio.
7. Ruta y referencias locales diseñadas para GitHub Pages en un repositorio de proyecto.

## Validaciones ejecutadas

- Revisión estática de **41 referencias únicas**: ninguna faltante.
- JavaScript: `node --check`, sin errores de sintaxis.
- Pruebas visuales locales autocontenidas a **320, 390, 768 y 1440 px**: sin desbordamientos horizontales.
- Visor: apertura, navegación con flecha derecha y cierre con Escape comprobados.
- Límite: fuente Google externa no cargada en el entorno de prueba; volver a inspeccionar tipografía al desplegar la página pública.
- No se ejecutó Lighthouse ni prueba de red contra el hosting publicado; no afirmar resultados de Core Web Vitals o seguridad HTTP.

## Pendientes de control editorial

- Confirmar los créditos exactos sobre fotografía, edición de video y diseño de marca original.
- Confirmar autorización para publicar imágenes de terceros y del archivo de vinilos.
- Actualizar el caso si existen fotos de los vinilos realmente instalados o material del Food Live en acción.
- Validar el menú de archivo antes de distribuir un PDF completo: los precios no son actuales.
