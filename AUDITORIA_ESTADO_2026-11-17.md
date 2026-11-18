# Auditoría del portfolio personal — 17/11/2026

Repositorio: `Parisluis/portfolio-luis-parisotto`
Rama de trabajo: `portfolio-preparacion`.
No publicar ni fusionar con `main` hasta terminar controles de enlaces, material y atribución.

## Comprobación de navegación
Revisados los 17 destinos HTML que enlaza la portada.

**Existen (11):** 24-street.html, que-mila-bobo.html, jumpark.html, crazy-park.html, mr-johns.html, tgt.html, terzo.html, artist-medrano.html, concilio-sarralde.html, metalar.html, adan-reymundo.html.

**Faltan (6):** liverpool.html, vigamix.html, cocineros-tucumanos.html, cpa.html, cristo-b.html, super-ya.html.

Por tanto la portada tiene 6 enlaces internos a páginas inexistentes en la rama de preparación. **Bloqueante para publicar.**

## Proyectos existentes
- Qué Mila, Bobo!: identidad, propuesta y local real, carta, video inauguración. Comprobar contraste de concepto vs ejecución y atribuciones.
- Mr John’s & Warhol: páginas y soportes de campañas, Mr Chef, Food Live, cartas, vinilos, espacio, fotografías y video. Faltan verificación visual y archivos multimedia.
- 24 Street, Jummpark y Crazy Park: página presente. Requieren QA visual.

## Caso TGT — primera versión creada el 17/11/2026
- Página `tgt.html` creada y verificada en la rama; utiliza `assets/tgt/frente-nuevo.webp`, también verificado.
- Preservar la **versión final aprobada del cartel**; NO reintroducir propuesta de fachada descartada.
- Conservar diseño gráfico y aplicación real en pared; NO reincorporar el bloque «Fondo de prensa».
- Evitar mockups repetidos. Mostrar claramente el antes/después sólo si se dispone de material fiable.
- Etiquetar roles reales y no confundir fotografía o marca preexistente con autoría propia.
- Comprobar la existencia y los derechos de cada recurso antes de enlazarlo.

- La imagen disponible es **montaje digital de fachada**, no evidencia de instalación. Falta fotografía de ejecución real contrastada.
- Borrador editorial pendiente de revisión visual en navegador y cotejo con la propuesta final aprobada.

## Otros acuerdos que deben conservarse
- Concilio & Sarralde: logo preexistente como contexto, sin atribuir su diseño a Luis; mostrar brochure institucional y portada del informe Coca-Cola.
- El sitio LSL Group permanece intacto y separado.
- Presentación: retícula, márgenes, imágenes sin recortes perjudiciales, copy breve, jerarquía tipográfica, móviles y accesibilidad.

## QA previa a publicar
1. Cero enlaces internos rotos.
2. Todas las imágenes/video referenciados existen y cargan.
3. Autorizaciones y atribución por pieza.
4. Probar móvil/tablet/escritorio.
5. Optimizar peso, textos alternativos y metadatos.
6. Revisar enlaces externos y CTA final (actualmente enlaza al sitio LSL Group, evaluar cambio a CV/contacto personal).


## Caso TERZO — primera versión creada el 17/11/2026
- `terzo.html` creado en `portfolio-preparacion`, verificado con lectura del repositorio.
- Fotografía principal `assets/terzo/producto-tinto.webp` verificada. Se trata de contexto fotográfico y no demuestra por sí sola la autoría de trabajos de diseño.
- Narrativa: comunicaciones para experiencias, pop-up Entre Quesos, Semana Italiana y encuentros de marca. No mostrar eventos de 2026 como vigentes.
- Fotografías y piezas originales recuperadas de Drive y de trabajos previos: revisar versiones finales, fecha, crédito, contenido, promociones y autorización antes de incorporarlas.
- ZIP local `terzo_piezas_para_auditoria.zip` incluye versiones optimizadas de Semana Italiana, Sabores de Italia y Cata de Quesos. Estas piezas **aún no están subidas al repositorio**; por tanto la página es un primer borrador editorial, no la presentación multimedia definitiva.
- Pendiente importante: incluir las placas originales aprobadas con evidencia de diseño y verificar la visualización de la página en navegador.
- No adjudicar el diseño del logotipo de Terzo a Luis.

## Caso ARTIST MEDRANO — actualización del 17/11/2026
- `artist-medrano.html` creado en la rama `portfolio-preparacion`, vinculado previamente desde el índice.
- Imagen principal `assets/artist-medrano/color.webp` confirmada en el repositorio. Es el **único recurso visual del proyecto disponible allí**; no confundir una página textual con un caso visual terminado.
- Ajustado título largo ARTIST / MEDRANO en dos líneas y tipografía responsiva.
- Incorporada sección de flujo de prototipo de diagnóstico, diferenciando el diseño de interfaz de la evaluación técnica profesional; piloto en validación, no producto terminado.
- Pendiente: fotografías reales, piezas adicionales y capturas de prueba con datos ficticios, nunca datos de clientas.
- No atribuir la creación del logo o resultados técnicos no documentados.

## Prioridad de publicación
- No fusionar con `main` mientras existan destinos enlazados sin página.
- Solo hay una imagen de Terzo y una de Artist Medrano en el repositorio. Antes de sumar secciones de galería, incorporar y verificar originales finales.
- Realizar prueba real en navegador a 360px, 390px, 768px y escritorio, pues la revisión estática del CSS no equivale a QA visual.

## Caso CONCILIO & SARRALDE — actualización 17/11/2026
- Página `concilio-sarralde.html` creada en rama de preparación. Enlace existente desde el índice.
- Recurso `assets/concilio/pagina-1.webp` comprobado en listado de activos del repo.
- Se localizaron y leyeron en Google Drive el brochure `C&S Brochure 12-09-23 N12-2.pdf` y la presentación `proyecto coca 5.pdf`, usados solo como referencia editorial; **no se publicaron completos**.
- Caso enfocado en diagramación del brochure y diseño de presentación corporativa; logo anterior a la intervención, expresamente no atribuido a Luis.
- La propuesta para Coca-Cola aparece contextualizada como presentación de Concilio & Sarralde; **no** se afirma trabajo directo de Luis para Coca-Cola.
- Pendiente antes de dar por cerrado: comprobar portada visual, obtener selección de páginas internas autorizadas, exportarlas a webp y hacer QA real en navegador.

## Caso METALAR — actualización 17/11/2026
- Creada y verificada `metalar.html` en `portfolio-preparacion`; enlace ya incluido desde portada.
- Archivo original de Drive localizado: `BRUCHER METALAR 2013 compaginado final.pdf` y versiones previas de 2012/2013, además de folletos y carpeta audiovisual.
- Imagen de archivo disponible en repo: `assets/metalar/portada-fundicion.webp` (368×216, 7.630 bytes). Es un fotograma contextual, **no** prueba por sí mismo del trabajo editorial.
- Página provisional con relato de brochure, folletos técnicos y material audiovisual; esquema de contenido señalado explícitamente como ilustrativo y no como pieza original.
- Sin reproducción de PDF completos ni inserción de videos no revisados. Verificar autoría, versiones y permisos antes de publicar muestras reales del folleto o video.
- Próxima tarea prioritaria: exportar imágenes de páginas concretas del brochure final y validarlas con referencia al archivo fuente. Requiere QA de diseño móvil/escritorio.

## Caso ADÁN REYMUNDO / SUSHI BOX — actualización 17/11/2026
- Creada y verificada `adan-reymundo.html` en `portfolio-preparacion`. El índice ya apuntaba a esa ruta.
- Único asset de este caso encontrado en el repo: `assets/adan/placa-2.webp`. No hay en el repositorio otras seis placas, el lettering final ni renders de packaging; no se inventó una galería.
- Se revisó Google Drive con búsquedas «ADAN REYMUNDO», «Reymundo» y «Sushi Box», sin recuperar archivos de campaña específicos.
- Caso editorial sobre apertura de 12/11/2026, lettering, bolsa y bandeja; no se presenta la fecha como campaña activa.
- Las aplicaciones de packaging se describen como propuestas de diseño, sin afirmar fabricación, instalación o resultados de venta.
- Falta integrar piezas finales y verificar créditos/fotografías. Pendiente prueba visual responsive en navegador.
