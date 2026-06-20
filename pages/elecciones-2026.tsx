import React, { useEffect } from "react";
import Head from "next/head";

const styleContent = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  :root{
    --bg:#faf7f0; --paper:#fffefb; --ink:#2b261f; --ink-soft:#5c5448;
    --line:#e3dccb;
    --cepeda:#2f5d2a; --cepeda-bg:#e7f0e3; --cepeda-line:#b9d2af;
    --espriella:#8a4b12; --espriella-bg:#f6ead9; --espriella-line:#e0bd8d;
    --probado:#205c3b; --probado-bg:#dcefe1; --probado-line:#9bcaab;
    --denuncia:#9a6a00; --denuncia-bg:#fcefcf; --denuncia-line:#e8c46b;
  }
  html{-webkit-text-size-adjust:100%}
  body{background:var(--bg);color:var(--ink);font-family:'Source Sans 3',sans-serif;font-size:16px;line-height:1.6;width:100%;overflow-x:hidden}
  a{color:#1a5276;word-break:break-word}
  h1,h2,h3{font-family:'Lora',serif}

  /* ---- HEADER ---- */
  .top{background:var(--paper);border-bottom:3px solid var(--ink);padding:26px 16px 20px;text-align:center}
  .eyebrow{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;margin-bottom:8px}
  .top h1{font-size:clamp(22px,7vw,32px);font-weight:700;line-height:1.2;margin-bottom:8px}
  .top p{max-width:520px;margin:0 auto;color:var(--ink-soft);font-size:14px;line-height:1.6}
  .fecha{display:inline-block;margin-top:14px;background:var(--ink);color:var(--paper);padding:6px 16px;border-radius:30px;font-size:12.5px;font-weight:600}

  /* ---- TABS grandes, fáciles de tocar ---- */
  .tabs{display:flex;max-width:680px;margin:18px auto 0;padding:0 12px;gap:8px;position:sticky;top:0;z-index:50;background:var(--bg);padding-top:10px;padding-bottom:4px}
  .tabbtn{flex:1;padding:16px 8px;border-radius:12px;border:2px solid var(--line);background:var(--paper);font-family:'Source Sans 3',sans-serif;font-size:15px;font-weight:700;color:var(--ink-soft);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;transition:transform .12s ease;-webkit-tap-highlight-color:transparent}
  .tabbtn:active{transform:scale(.97)}
  .tabbtn .ico{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Lora',serif;font-weight:700;font-size:14px;border:2px solid;background:#fff}
  .tabbtn.on-espriella{background:var(--espriella-bg);color:var(--espriella);border-color:var(--espriella)}
  .tabbtn.on-espriella .ico{border-color:var(--espriella);color:var(--espriella)}
  .tabbtn.on-cepeda{background:var(--cepeda-bg);color:var(--cepeda);border-color:var(--cepeda)}
  .tabbtn.on-cepeda .ico{border-color:var(--cepeda);color:var(--cepeda)}

  .wrap{max-width:680px;margin:0 auto;padding:14px 12px 70px}
  .panel{display:none}
  .panel.active{display:block}

  /* ---- CABECERA CANDIDATO ---- */
  .cand-top{display:flex;align-items:center;gap:12px;padding:16px 14px;margin-bottom:18px;border-radius:14px;border:1.5px solid}
  .cand-foto{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Lora',serif;font-weight:700;font-size:18px;border:2px solid;flex-shrink:0;background:#fff}
  .cand-nom{font-size:18px;font-weight:700;line-height:1.25}
  .cand-sub{font-size:12.5px;color:var(--ink-soft)}
  .resultado{margin-left:auto;text-align:center;flex-shrink:0}
  .resultado .pct{font-family:'Lora',serif;font-size:21px;font-weight:700;display:block;line-height:1.1}
  .resultado .lab{font-size:9.5px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.04em}

  /* ---- METÁFORA ---- */
  .metafora{border-radius:12px;padding:16px 16px;margin-bottom:22px;border:1.5px solid;position:relative}
  .metafora-label{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;margin-bottom:6px}
  .metafora-texto{font-family:'Lora',serif;font-size:14px;line-height:1.6;font-style:italic}

  /* ---- SELLOS ---- */
  .sello{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:700;letter-spacing:.01em;padding:4px 10px;border-radius:20px;border:1.5px solid;margin-bottom:8px}
  .sello.probado{background:var(--probado-bg);color:var(--probado);border-color:var(--probado-line)}
  .sello.denuncia{background:var(--denuncia-bg);color:var(--denuncia);border-color:var(--denuncia-line)}

  /* ---- LÍNEA DE TIEMPO ---- */
  .tit-seccion{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-soft);font-weight:700;margin:24px 0 14px;padding-bottom:6px;border-bottom:1px solid var(--line)}
  .tit-seccion:first-of-type{margin-top:0}

  .tl{position:relative;padding-left:20px}
  .tl::before{content:'';position:absolute;left:5px;top:6px;bottom:6px;width:2px;background:var(--line)}
  .tl-item{position:relative;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--line)}
  .tl-item:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
  .tl-dot{position:absolute;left:-20px;top:4px;width:12px;height:12px;border-radius:50%;border:2.5px solid;background:#fff;z-index:1}
  .tl-year{font-size:11.5px;font-weight:700;letter-spacing:.03em;margin-bottom:5px}
  .tl-title{font-size:15px;font-weight:700;line-height:1.4;margin-bottom:7px}
  .tl-desc{font-size:13.5px;color:var(--ink-soft);line-height:1.6;margin-bottom:9px}
  .tl-links{display:flex;flex-wrap:wrap;gap:6px}
  .tl-link{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:600;color:#1a5276;background:#eaf1f7;padding:5px 10px;border-radius:6px;text-decoration:none}
  .tl-link::before{content:"🔗"}

  /* ---- SÍNTESIS / FRUTOS ---- */
  .frutos-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:14px}
  .fruto-card{padding:13px 14px;border-radius:10px;border:1px solid var(--line);background:#fff}
  .fruto-card .em{font-size:17px;margin-bottom:5px;display:block}
  .fruto-card .fn{font-size:13.5px;font-weight:700;margin-bottom:3px}
  .fruto-card .fd{font-size:12.5px;color:var(--ink-soft);line-height:1.5}

  .fuentes-pie{margin-top:22px;font-size:11px;color:var(--ink-soft);line-height:1.7;padding-top:14px;border-top:1px solid var(--line)}
  .fuentes-pie strong{color:var(--ink)}

  @media(min-width:480px){
    .frutos-grid{grid-template-columns:1fr 1fr}
  }
`;

const bodyContent = `
<div class="top">
  <div class="eyebrow">Segunda vuelta · Colombia 2026</div>
  <h1>Historial de vida<br>de los candidatos</h1>
  <p>Línea de tiempo de hechos verificados, desde su nacimiento hasta hoy, con el link de cada fuente para que usted mismo lo compruebe.</p>
  <span class="fecha">21 de junio de 2026</span>
</div>

<div class="tabs">
  <button class="tabbtn" onclick="mostrar('espriella')" id="bespriella">
    <span class="ico">AE</span>De la Espriella
  </button>
  <button class="tabbtn" onclick="mostrar('cepeda')" id="bcepeda">
    <span class="ico">IC</span>Iván Cepeda
  </button>
</div>

<div class="wrap">

<!-- ============ DE LA ESPRIELLA ============ -->
<div class="panel" id="pespriella">

  <div class="cand-top" style="background:var(--espriella-bg);border-color:var(--espriella-line)">
    <div class="cand-foto" style="color:var(--espriella);border-color:var(--espriella)">AE</div>
    <div>
      <div class="cand-nom" style="color:var(--espriella)">Abelardo de la Espriella</div>
      <div class="cand-sub">Defensores de la Patria · Sin cargo público previo</div>
    </div>
    <div class="resultado">
      <span class="pct" style="color:var(--espriella)">43,7%</span>
      <span class="lab">1ª vuelta</span>
    </div>
  </div>

  <div class="metafora" style="background:#fff;border-color:var(--espriella-line)">
    <div class="metafora-label" style="color:var(--espriella)">Su historia, en una imagen</div>
    <p class="metafora-texto">Un abogado que construyó desde cero una de las firmas penalistas más grandes del país, y que en el camino defendió tanto a víctimas que terminaron en leyes con su nombre, como a algunos de los clientes más señalados de Colombia — paramilitares, una pirámide financiera y el testaferro de Maduro.</p>
  </div>

  <div class="tit-seccion">Línea de tiempo — desde su nacimiento</div>
  <div class="tl">

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">31 julio 1978</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Nace en Bogotá; crece en Montería, en una familia con tradición política en Córdoba</div>
      <div class="tl-desc">Su padre fue candidato a la gobernación de Córdoba en 1997 y magistrado del Tribunal Contencioso Administrativo de la región. Salvatore Mancuso, futuro jefe paramilitar del Bloque Norte de las AUC, perteneció a los mismos círculos sociales de Montería; el propio Mancuso ha declarado que son "amigos de chiquitos".</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.elespectador.com/politica/elecciones-colombia-2026/biografia-de-abelardo-de-la-espriella-perfil-y-trayectoria-del-candidato-a-segunda-vuelta-en-colombia-2026-noticias-hoy/" target="_blank">El Espectador</a>
        <a class="tl-link" href="https://en.wikipedia.org/wiki/Abelardo_de_la_Espriella" target="_blank">Wikipedia</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2002</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Funda su firma de abogados con una inversión mínima</div>
      <div class="tl-desc">Creó "De la Espriella Lawyers", que con los años se convirtió en una de las firmas penalistas más mediáticas del país, con sedes en varias ciudades y oficina en Miami.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.elespectador.com/politica/elecciones-colombia-2026/biografia-de-abelardo-de-la-espriella-perfil-y-trayectoria-del-candidato-a-segunda-vuelta-en-colombia-2026-noticias-hoy/" target="_blank">El Espectador</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2004–2006</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">A los 26 años organizó foros universitarios pagados por las AUC con jefes paramilitares</div>
      <div class="tl-desc">Fundó la Fundación Iniciativas por la Paz (FIPAZ). En el primer foro, en Santa Fe de Ralito, cientos de universitarios recibieron transporte y estadía pagados por las AUC para escuchar a comandantes paramilitares como alias "Ernesto Báez" y Salvatore Mancuso. El propio De la Espriella reconoció que esos foros fueron financiados por las AUC, aunque dijo que el gobierno de la época los había autorizado.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.lasillavacia.com/silla-nacional/abelardo-de-la-espriella-una-marca-importada-para-la-epoca/" target="_blank">La Silla Vacía</a>
        <a class="tl-link" href="https://cambiocolombia.com/poder/articulo/2025/12/firmes-por-la-plata-abelardo-de-la-espriella-a-traves-de-sus-clientes" target="_blank">Cambio Colombia</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2008–2009</div>
      <span class="sello denuncia">⏳ DENUNCIA SIN RESOLVER</span>
      <div class="tl-title">Dos exjefes paramilitares dijeron que era su "canal de difusión" — el caso fue archivado</div>
      <div class="tl-desc"><strong>¿Qué se dijo?</strong> En 2008, alias "Ernesto Báez" declaró que las AUC habían usado a De la Espriella como canal para llegar a los estudiantes. En 2009, alias "HH" dijo algo similar ante Justicia y Paz.<br><br><strong>¿Qué pasó después?</strong> Báez cambió su versión y aclaró que De la Espriella nunca participó en actividades delictivas. La investigación fue archivada en agosto de 2009. De la Espriella nunca fue condenado por este señalamiento.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.lapatria.com/politica/chequeo-al-candidato-abelardo-de-la-espriella-le-falla-la-memoria-en-el-caso-del-pacto-del-tambor-en-caldas" target="_blank">La Patria (Chequeo)</a>
        <a class="tl-link" href="https://cambiocolombia.com/poder/articulo/2025/12/firmes-por-la-plata-abelardo-de-la-espriella-a-traves-de-sus-clientes" target="_blank">Cambio Colombia</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2008</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Defiende brevemente a David Murcia Guzmán, creador de la pirámide DMG</div>
      <div class="tl-desc">Asumió la defensa de Murcia, capturado en Panamá en noviembre de 2008, y renunció poco después. Murcia declaró que le cobró $5.000 millones de honorarios. En febrero de 2026, en plena campaña, Murcia lo denunció disciplinariamente; De la Espriella calificó la denuncia de "montaje electoral".</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.elespectador.com/judicial/murcia-guzman-radica-denuncia-disciplinaria-contra-de-la-espriella-por-presunta-falta-etica/" target="_blank">El Espectador</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2012–2015</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Defiende a Rosa Elvira Cely y a Natalia Ponce de León — dos leyes nacen de esos casos</div>
      <div class="tl-desc">Representó a la familia de Rosa Elvira Cely (asesinada en 2012), trabajo que contribuyó a la Ley 1761 de 2015, que creó el feminicidio como delito autónomo en Colombia. También defendió a Natalia Ponce de León, atacada con ácido, proceso que impulsó la Ley 1773 de 2016, con penas de hasta 50 años. La familia Cely también denunció públicamente desacuerdos económicos con el abogado.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.elespectador.com/politica/elecciones-colombia-2026/biografia-de-abelardo-de-la-espriella-perfil-y-trayectoria-del-candidato-a-segunda-vuelta-en-colombia-2026-noticias-hoy/" target="_blank">El Espectador</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2013–2019</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Fue el abogado de Álex Saab, señalado testaferro de Nicolás Maduro</div>
      <div class="tl-desc">Representó legalmente a Saab en procesos por lavado de activos. Según una sentencia judicial, una abogada de su firma alertó a la familia Saab sobre una operación de captura en 2013, permitiendo su fuga. De la Espriella dice que renunció en 2019 cuando Estados Unidos incluyó a Saab en su lista de sancionados.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.lasillavacia.com/en-vivo/entre-2014-y-2015-de-la-espriella-se-beneficio-de-transacciones-de-alex-saab/" target="_blank">La Silla Vacía</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">Agosto 2013</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Compra 178 hectáreas en Becerril (Cesar) a la hermana de "Comandante Barbie"</div>
      <div class="tl-desc">Ocho meses después de que los hermanos Rodríguez Fuentes heredaran un predio de 882 hectáreas, De la Espriella compró 178 hectáreas a Martha Rodríguez Fuentes por $680 millones. Su hermano, alias "Comandante Barbie", fue condenado por concierto para delinquir con el Bloque Norte de las AUC y está vinculado al narcotráfico. La compra está registrada con escritura pública. Una socia suya en su negocio de licores también hizo negocios con la familia "Barbie". De la Espriella no ha dado explicaciones públicas sobre estas conexiones.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://voragine.co/historias/investigacion/la-tierra-de-un-narcoparamilitar-que-paso-a-manos-de-abelardo-de-la-espriella/" target="_blank">Vorágine</a>
        <a class="tl-link" href="https://mutante.org/contenidos/abelardo-de-la-espriella-sus-dos-propiedades-y-su-sueno-de-ser-campesino-de-tiempo-completo/" target="_blank">Mutante</a>
        <a class="tl-link" href="https://voragine.co/historias/investigacion/la-socia-de-abelardo-que-hizo-negocios-con-un-lavador-de-la-mafia/" target="_blank">Vorágine (socia)</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2008–2019</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">109 demandas contra periodistas — la FLIP lo describe como "acoso judicial"</div>
      <div class="tl-desc">Según datos de la Fiscalía, entre 2008 y 2019 presentó 109 demandas por injuria y calumnia contra periodistas. La mayoría fueron archivadas. La Fundación para la Libertad de Prensa (FLIP) documentó este patrón como una estrategia para desgastar económicamente a quienes lo critican. En enero de 2026, ya en campaña, amplió este tipo de acciones contra nuevos periodistas y columnistas.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://flip.org.co/pronunciamientos/la-flip-advierte-sobre-el-impacto-del-acoso-judicial-en-el-debate-publico" target="_blank">FLIP</a>
        <a class="tl-link" href="https://www.lasillavacia.com/silla-nacional/asi-funciona-la-estrategia-judicial-de-de-la-espriella-contra-periodistas/" target="_blank">La Silla Vacía</a>
        <a class="tl-link" href="https://voragine.co/historias/investigacion/la-apuesta-de-de-la-espriella-arruinar-periodistas-para-silenciarlos/" target="_blank">Vorágine</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--espriella)"></div>
      <div class="tl-year" style="color:var(--espriella)">2025–2026</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Funda "Defensores de la Patria" y llega a la segunda vuelta con 43,7%</div>
      <div class="tl-desc">Creó su movimiento político y construyó alianzas con sectores de derecha y centroderecha. Aunque ha dicho públicamente que "no he vivido de la teta estatal", un portal de datos públicos encontró que su firma sí ha tenido contratos con el Estado por más de $3.600 millones, según el sistema oficial de contratación (SECOP). Ganó la primera vuelta del 31 de mayo de 2026 con el 43,7% de los votos.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://cuestionpublica.com/bufete-del-candidato-de-la-espriella-ha-succionado-mas-de-3-mil-millones-en-contratos-estatales/" target="_blank">Cuestión Pública</a>
        <a class="tl-link" href="https://es.wikipedia.org/wiki/Elecciones_presidenciales_de_Colombia_de_2026" target="_blank">Resultados oficiales</a>
      </div>
    </div>

  </div><!-- /tl -->

  <div class="tit-seccion">En resumen</div>
  <div class="frutos-grid">
    <div class="fruto-card"><span class="em">⚖️</span><div class="fn">Ley Rosa Elvira Cely (2015)</div><div class="fd">Feminicidio como delito autónomo en Colombia.</div></div>
    <div class="fruto-card"><span class="em">⚖️</span><div class="fn">Ley Natalia Ponce (2016)</div><div class="fd">Penas de hasta 50 años por ataques con ácido.</div></div>
    <div class="fruto-card"><span class="em">🏢</span><div class="fn">Firma jurídica exitosa</div><div class="fd">Construyó un bufete penalista de impacto nacional desde cero.</div></div>
    <div class="fruto-card" style="border-color:var(--espriella-line)"><span class="em">🌾</span><div class="fn">Tierra de exparamilitar</div><div class="fd">178 hectáreas compradas a hermana de "Comandante Barbie", documentado con escritura pública.</div></div>
    <div class="fruto-card" style="border-color:var(--espriella-line)"><span class="em">📰</span><div class="fn">109 demandas a periodistas</div><div class="fd">Patrón documentado por la FLIP como "acoso judicial".</div></div>
    <div class="fruto-card" style="border-color:var(--denuncia-line)"><span class="em">⏳</span><div class="fn">Señalamiento paramilitar archivado</div><div class="fd">Declaraciones de dos exjefes de las AUC; investigación archivada en 2009, sin condena.</div></div>
  </div>

  <div class="fuentes-pie"><strong>Fuentes:</strong> El Espectador, La Silla Vacía, Vorágine, Mutante, FLIP, Cambio Colombia, La Patria, Cuestión Pública, Wikipedia.</div>

</div><!-- /panel espriella -->

<!-- ============ CEPEDA ============ -->
<div class="panel" id="pcepeda">

  <div class="cand-top" style="background:var(--cepeda-bg);border-color:var(--cepeda-line)">
    <div class="cand-foto" style="color:var(--cepeda);border-color:var(--cepeda)">IC</div>
    <div>
      <div class="cand-nom" style="color:var(--cepeda)">Iván Cepeda Castro</div>
      <div class="cand-sub">Pacto Histórico · Senador 2014–2026</div>
    </div>
    <div class="resultado">
      <span class="pct" style="color:var(--cepeda)">40,9%</span>
      <span class="lab">1ª vuelta</span>
    </div>
  </div>

  <div class="metafora" style="background:#fff;border-color:var(--cepeda-line)">
    <div class="metafora-label" style="color:var(--cepeda)">Su historia, en una imagen</div>
    <p class="metafora-texto">Un hombre cuya vida cambió para siempre cuando asesinaron a su padre, y que dedicó las siguientes tres décadas a la justicia para las víctimas y a la mediación de paz — pero que, ya como parte del gobierno, evitó hablar de los escándalos de corrupción de su propio sector político.</p>
  </div>

  <div class="tit-seccion">Línea de tiempo — desde su nacimiento</div>
  <div class="tl">

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">24 octubre 1962</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Nace en Bogotá, hijo de un dirigente comunista y una militante de izquierda</div>
      <div class="tl-desc">Hijo de Manuel Cepeda Vargas (dirigente comunista y futuro senador de la Unión Patriótica) y de Yira Castro, también militante comunista, fallecida a los 39 años. Las FARC bautizaron un frente con el nombre de su madre.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.infobae.com/colombia/2026/05/26/el-es-ivan-cepeda-la-victima-y-el-senador-que-busca-reemplazar-a-gustavo-petro-en-la-presidencia-de-colombia/" target="_blank">Infobae</a>
        <a class="tl-link" href="https://www.elcolombiano.com/especiales/elecciones-2026/ivan-cepeda-el-hijo-de-la-guerra-fria-LF36885871" target="_blank">El Colombiano</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">1965–1970</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Infancia en el exilio: Praga y La Habana</div>
      <div class="tl-desc">A los 3 años su familia fue forzada al exilio por represión política. Presenció la invasión soviética a Praga en 1968. En 1970 regresaron a Colombia, al barrio Kennedy de Bogotá.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.lasillavacia.com/quien-es-quien/ivan-cepeda/" target="_blank">La Silla Vacía</a>
        <a class="tl-link" href="https://www.elespectador.com/politica/elecciones-colombia-2026/biografia-de-ivan-cepeda-perfil-y-trayectoria-del-candidato-a-segunda-vuelta-en-colombia-2026/" target="_blank">El Espectador</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">1981–1987</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Estudia Filosofía en Bulgaria — regresa crítico del socialismo soviético</div>
      <div class="tl-desc">A los 19 años se fue a estudiar a Sofía, Bulgaria, en pleno bloque soviético. Regresó en 1987 con una visión crítica del autoritarismo del modelo, lo que generó tensión con su padre, quien se mantuvo en el Partido Comunista.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.lasillavacia.com/quien-es-quien/ivan-cepeda/" target="_blank">La Silla Vacía</a>
        <a class="tl-link" href="https://cnnespanol.cnn.com/2026/05/27/colombia/quien-es-ivan-cepeda-petro-elecciones-orix" target="_blank">CNN en Español</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">9 agosto 1994</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Asesinan a su padre, el senador Manuel Cepeda Vargas</div>
      <div class="tl-desc">Su padre fue ejecutado cuando se desplazaba al Congreso. Años después, la Corte Interamericana de Derechos Humanos estableció que el crimen fue cometido por miembros de las Fuerzas Armadas en asociación con paramilitares, como parte del exterminio sistemático de la Unión Patriótica, en el que fueron asesinados o desaparecidos más de 5.000 militantes. Este hecho marcó el resto de la vida pública de Iván Cepeda.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.infobae.com/colombia/2026/05/26/el-es-ivan-cepeda-la-victima-y-el-senador-que-busca-reemplazar-a-gustavo-petro-en-la-presidencia-de-colombia/" target="_blank">Infobae</a>
        <a class="tl-link" href="https://cejil.org/comunicado-de-prensa/corte-interamericana-condena-a-colombia-por-la-ejecucion-del-senador-manuel-cepeda/" target="_blank">CEJIL</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">2000–2003</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Se exilia en Francia por amenazas de muerte</div>
      <div class="tl-desc">Las amenazas vinculadas a sus investigaciones sobre el asesinato de su padre lo obligaron a salir del país. Cursó una maestría en Derechos Humanos en Francia. Cuenta con medidas cautelares de protección de la Corte Interamericana de Derechos Humanos.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.lasillavacia.com/quien-es-quien/ivan-cepeda/" target="_blank">La Silla Vacía</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">2003</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Funda el MOVICE, movimiento de víctimas de crímenes de Estado</div>
      <div class="tl-desc">Al regresar de su exilio, fundó junto a otras víctimas el Movimiento Nacional de Víctimas de Crímenes de Estado, que reunió inicialmente 17 organizaciones y creció hasta más de 200, documentando judicialmente crímenes cometidos por agentes del Estado.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.pares.com.co/el-movice-es-tambien-la-historia-de-como-ivan-cepeda-supo-honrar-a-su-padre/" target="_blank">PARES</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">26 mayo 2010</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">La Corte Interamericana condena al Estado colombiano por el crimen de su padre</div>
      <div class="tl-desc">La Corte IDH declaró responsable internacionalmente al Estado colombiano por la ejecución extrajudicial del senador Cepeda Vargas. El Estado debió pedir disculpas públicas y pagar reparaciones — un precedente histórico en memoria de la Unión Patriótica.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://cejil.org/comunicado-de-prensa/corte-interamericana-condena-a-colombia-por-la-ejecucion-del-senador-manuel-cepeda/" target="_blank">CEJIL</a>
        <a class="tl-link" href="https://summa.cejil.org/es/entity/d9bmrxvxj7i7ldi" target="_blank">Ficha del caso</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">2010–2014</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Primer cargo público: Representante a la Cámara por Bogotá</div>
      <div class="tl-desc">Inició su carrera legislativa enfocada en derechos humanos, víctimas y control político, tras especializarse en Derecho Internacional Humanitario en Francia.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.lasillavacia.com/quien-es-quien/ivan-cepeda/" target="_blank">La Silla Vacía</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">2012–2016</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Facilitador oficial de los diálogos de paz con las FARC-EP, y luego con el ELN</div>
      <div class="tl-desc">Participó como facilitador en las negociaciones de La Habana que llevaron al Acuerdo de Paz de 2016. Entre 2014–2018 y de nuevo entre 2022–2025 también fue facilitador en los diálogos con el ELN.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://ivancepedacastro.com/inicio/" target="_blank">Perfil oficial</a>
        <a class="tl-link" href="https://cnnespanol.cnn.com/2026/05/27/colombia/quien-es-ivan-cepeda-petro-elecciones-orix" target="_blank">CNN en Español</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">2014</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Impulsa la Ley 1719 de 2014, contra la impunidad en violencia sexual del conflicto</div>
      <div class="tl-desc">Su logro legislativo más reconocido: una ley que busca garantizar justicia a las víctimas de violencia sexual ocurrida en el marco del conflicto armado. También ha recibido reconocimientos internacionales en derechos humanos, en 2007 y en 2015.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://ivancepedacastro.com/inicio/" target="_blank">Perfil oficial</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">2023–2025</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Segundo senador con más ausencias en sesiones plenarias</div>
      <div class="tl-desc">Según los registros del Congreso, durante su tercer período fue el segundo senador con más faltas. Su explicación pública fue que la mayoría correspondió a su participación en la mesa de diálogos con el ELN.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://en.wikipedia.org/wiki/Iv%C3%A1n_Cepeda" target="_blank">Registro verificado</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">2022–2026</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">No se pronunció sobre varios escándalos de corrupción del gobierno Petro</div>
      <div class="tl-desc">Un medio documentó al menos 10 casos en los que Cepeda evitó hablar públicamente sobre escándalos de su propio gobierno, como el de los carrotanques en La Guajira. Ya en campaña, presionado, reconoció: "se han presentado hechos de corrupción en este gobierno que vamos a erradicar".</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.elcolombiano.com/colombia/los-10-silencios-evasivas-ivan-cepeda-escandalos-corrupcion-gobierno-petro-JG36308098" target="_blank">El Colombiano</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">Abril 2026</div>
      <span class="sello denuncia">⏳ DENUNCIA SIN RESOLVER</span>
      <div class="tl-title">El Consejo Nacional Electoral revisa cómo se financió su consulta interna</div>
      <div class="tl-desc"><strong>¿Qué se dice?</strong> Que una empresa de publicidad habría aportado a su campaña, para la consulta de su partido, más dinero del que la ley permite recibir de un solo donante.<br><br><strong>¿Qué dice su campaña?</strong> Que fue un crédito por servicios de impresión, no una donación, y que ese tipo de aporte en especie no tendría el mismo límite legal.<br><br><strong>¿En qué va?</strong> El CNE abrió el caso en abril de 2026 y sigue en fase preliminar: no hay sanción, no hay culpa declarada, no se ha archivado.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://www.infobae.com/colombia/2026/04/30/campana-de-ivan-cepeda-esta-en-la-mira-el-cne-abrio-indagacion-preliminar-por-presuntas-irregularidades-en-su-financiacion/" target="_blank">Infobae</a>
        <a class="tl-link" href="https://www.eltiempo.com/politica/elecciones-colombia-2026/los-detalles-de-la-denuncia-por-la-que-el-cne-le-abrio-indagacion-preliminar-a-la-campana-de-ivan-cepeda-por-posibles-irregularidades-en-cuentas-3552480" target="_blank">El Tiempo</a>
        <a class="tl-link" href="https://colombiacheck.com/chequeos/samat-publicidad-dio-un-credito-en-especie-la-campana-de-cepeda-no-dono-sus-impresiones" target="_blank">ColombiaCheck</a>
      </div>
    </div>

    <div class="tl-item">
      <div class="tl-dot" style="border-color:var(--cepeda)"></div>
      <div class="tl-year" style="color:var(--cepeda)">31 mayo 2026</div>
      <span class="sello probado">✔ HECHO PROBADO</span>
      <div class="tl-title">Llega a la segunda vuelta con el 40,9% de los votos</div>
      <div class="tl-desc">Quedó en segundo lugar en la primera vuelta, detrás de De la Espriella, y pasó a disputar la presidencia en la segunda vuelta del 21 de junio de 2026.</div>
      <div class="tl-links">
        <a class="tl-link" href="https://es.wikipedia.org/wiki/Elecciones_presidenciales_de_Colombia_de_2026" target="_blank">Resultados oficiales</a>
      </div>
    </div>

  </div><!-- /tl -->

  <div class="tit-seccion">En resumen</div>
  <div class="frutos-grid">
    <div class="fruto-card"><span class="em">🌿</span><div class="fn">Ley 1719 de 2014</div><div class="fd">Contra la impunidad en violencia sexual ocurrida en el conflicto armado.</div></div>
    <div class="fruto-card"><span class="em">🕊️</span><div class="fn">Mediador de paz</div><div class="fd">Facilitador documentado con FARC-EP y ELN en varios períodos.</div></div>
    <div class="fruto-card"><span class="em">⚖️</span><div class="fn">Sentencia Corte IDH</div><div class="fd">Logró la condena del Estado colombiano por el crimen contra su padre.</div></div>
    <div class="fruto-card" style="border-color:var(--cepeda-line)"><span class="em">🔇</span><div class="fn">Silencios ante corrupción</div><div class="fd">10 casos documentados sin pronunciamiento sobre escándalos de su gobierno.</div></div>
    <div class="fruto-card" style="border-color:var(--denuncia-line)"><span class="em">⏳</span><div class="fn">Indagación del CNE abierta</div><div class="fd">Caso de financiación de campaña en fase preliminar, sin sanción ni condena.</div></div>
  </div>

  <div class="fuentes-pie"><strong>Fuentes:</strong> Infobae, El Colombiano, El Espectador, La Silla Vacía, CNN en Español, CEJIL, PARES, El Tiempo, ColombiaCheck, Wikipedia.</div>

</div><!-- /panel cepeda -->

</div><!-- /wrap -->
`;

const Elecciones2026 = () => {
  useEffect(() => {
    (window as any).mostrar = (id: string) => {
      document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
      document.querySelectorAll(".tabbtn").forEach((b) => (b.className = "tabbtn"));
      document.getElementById("p" + id)?.classList.add("active");
      document.getElementById("b" + id)?.classList.add("on-" + id);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    (window as any).mostrar("espriella");
  }, []);

  return (
    <>
      <Head>
        <title>Historial de vida de los candidatos · Segunda vuelta Colombia 2026</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
};

export default Elecciones2026;
