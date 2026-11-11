import{r as b}from"./rolldown-runtime-CRqgUL4m.js";import{p as u}from"./vendor-charts-DS1MiLCl.js";import{K as p,X as f,f as v,i as g,st as x}from"./vendor-icons-XOHX4Rf8.js";import{t as h}from"./vendor-react-Zau7KpVx.js";var N=b(u(),1),e=h(),a="/app/applet/src/components/SpotlightCodeModal.tsx",i=`<!-- ========================================================================= -->
<!-- SMITH BUSINESS SOLUTIONS - GRID DE SERVICIOS (SPOTLIGHT HOVER VANILLA)    -->
<!-- Stack: HTML5 Semántico + CSS Moderno (CSS Variables) + JavaScript Vanilla -->
<!-- Rendimiento fluido a 60/120 FPS sin librerías externas pesadas            -->
<!-- ========================================================================= -->

<!-- Estilos CSS Modernos -->
<style>
  :root {
    --bg-dark: #0f172a;
    --border-subtle: rgba(255, 255, 255, 0.08);
    --gold-accent: #f59e0b;
    --emerald-accent: #10b981;
  }

  /* Contenedor Grid 3 Columnas */
  .sbs-services-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }

  @media (min-width: 768px) {
    .sbs-services-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .sbs-services-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  /* Tarjeta con Spotlight Effect */
  .sbs-spotlight-card {
    position: relative;
    background-color: var(--bg-dark);
    border-radius: 1.25rem;
    border: 1px solid var(--border-subtle);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                border-color 0.25s ease;
  }

  .sbs-spotlight-card:hover {
    border-color: rgba(245, 158, 11, 0.4);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6), 
                0 0 25px 0 rgba(16, 185, 129, 0.08);
  }

  /* Capa de brillo radial interior guiada por CSS variables */
  .sbs-spotlight-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      600px circle at var(--mouse-x, -999px) var(--mouse-y, -999px),
      rgba(245, 158, 11, 0.12),
      rgba(16, 185, 129, 0.07) 35%,
      transparent 70%
    );
    opacity: var(--spotlight-opacity, 0);
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  /* Borde reactivo de alta precisión */
  .sbs-spotlight-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: radial-gradient(
      400px circle at var(--mouse-x, -999px) var(--mouse-y, -999px),
      rgba(245, 158, 11, 0.5),
      rgba(16, 185, 129, 0.3) 40%,
      transparent 70%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: var(--spotlight-opacity, 0);
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 2;
  }

  /* Encabezado visual de la tarjeta */
  .sbs-card-media {
    position: relative;
    height: 180px;
    background-color: #090e1a;
    overflow: hidden;
    z-index: 10;
  }

  .sbs-card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .sbs-spotlight-card:hover .sbs-card-media img {
    transform: scale(1.05);
  }

  .sbs-card-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.25rem 0.65rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border-radius: 0.5rem;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .badge-gold {
    color: #fde68a;
    background-color: rgba(245, 158, 11, 0.2);
    border-color: rgba(245, 158, 11, 0.4);
  }

  .badge-blue {
    color: #93c5fd;
    background-color: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.4);
  }

  .badge-emerald {
    color: #6ee7b7;
    background-color: rgba(16, 185, 129, 0.2);
    border-color: rgba(16, 185, 129, 0.4);
  }

  /* Cuerpo de contenido */
  .sbs-card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    position: relative;
    z-index: 10;
  }

  .sbs-card-title {
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.35;
    margin: 0.5rem 0;
    transition: color 0.2s ease;
  }

  .sbs-spotlight-card:hover .sbs-card-title {
    color: #fde68a;
  }

  .sbs-card-description {
    color: #cbd5e1;
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  /* Botón "Saber más" con animación suave de elevación */
  .sbs-btn-learn-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;
    background-color: #1e293b;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sbs-btn-learn-more:hover {
    transform: translateY(-3px);
    background-color: #334155;
    border-color: rgba(245, 158, 11, 0.4);
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.5), 
                0 0 15px rgba(245, 158, 11, 0.15);
    color: #fde68a;
  }

  .sbs-btn-learn-more:active {
    transform: translateY(0);
  }
</style>

<!-- HTML Semántico -->
<section class="sbs-services-section" aria-label="Servicios Principales">
  <div class="sbs-services-grid">
    
    <!-- Tarjeta 1: Optimización de Procesos & Automatización IA -->
    <article class="sbs-spotlight-card" data-service="automation">
      <header class="sbs-card-media">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Automatización IA" loading="lazy">
        <span class="sbs-card-badge badge-gold">Automatización & IA</span>
      </header>
      <div class="sbs-card-content">
        <div>
          <span style="font-size: 0.75rem; color: #94a3b8; font-family: monospace;">01 · Eficiencia Operativa</span>
          <h3 class="sbs-card-title">Optimización de Procesos & Automatización IA</h3>
          <p class="sbs-card-description">
            Implementación de agentes autónomos y flujos RPA con IA para eliminar cuellos de botella y reducir un 75% el tiempo en tareas operativas.
          </p>
        </div>
        <footer>
          <button type="button" class="sbs-btn-learn-more" onclick="alert('Detalles de Optimización & Automatización IA')">
            <span>Saber más</span>
            <span aria-hidden="true">→</span>
          </button>
        </footer>
      </div>
    </article>

    <!-- Tarjeta 2: Desarrollo de Sistemas & Plataformas Web -->
    <article class="sbs-spotlight-card" data-service="software">
      <header class="sbs-card-media">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Desarrollo Web y Sistemas" loading="lazy">
        <span class="sbs-card-badge badge-blue">Sistemas & Cloud</span>
      </header>
      <div class="sbs-card-content">
        <div>
          <span style="font-size: 0.75rem; color: #94a3b8; font-family: monospace;">02 · Arquitectura Cloud</span>
          <h3 class="sbs-card-title">Desarrollo de Sistemas & Plataformas Web</h3>
          <p class="sbs-card-description">
            Ingeniería de software de alta disponibilidad, portales B2B empresariales y arquitecturas cloud seguras diseñadas para escalar sin límites.
          </p>
        </div>
        <footer>
          <button type="button" class="sbs-btn-learn-more" onclick="alert('Detalles de Desarrollo de Sistemas & Plataformas Web')">
            <span>Saber más</span>
            <span aria-hidden="true">→</span>
          </button>
        </footer>
      </div>
    </article>

    <!-- Tarjeta 3: Inteligencia Financiera & Gestión de Riesgo -->
    <article class="sbs-spotlight-card" data-service="consulting">
      <header class="sbs-card-media">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Inteligencia Financiera" loading="lazy">
        <span class="sbs-card-badge badge-emerald">Finanzas & Riesgo</span>
      </header>
      <div class="sbs-card-content">
        <div>
          <span style="font-size: 0.75rem; color: #94a3b8; font-family: monospace;">03 · Rentabilidad & Capital</span>
          <h3 class="sbs-card-title">Inteligencia Financiera & Gestión de Riesgo</h3>
          <p class="sbs-card-description">
            Modelos de proyección dinámica, auditoría de flujo de caja y matrices de sensibilidad de riesgo para respaldar decisiones de inversión críticas.
          </p>
        </div>
        <footer>
          <button type="button" class="sbs-btn-learn-more" onclick="alert('Detalles de Inteligencia Financiera & Gestión de Riesgo')">
            <span>Saber más</span>
            <span aria-hidden="true">→</span>
          </button>
        </footer>
      </div>
    </article>

  </div>
</section>

<!-- JavaScript Vanilla Puro (Rendimiento 60/120 FPS sin librerías externas) -->
<script>
  (function initSpotlightCards() {
    var cards = document.querySelectorAll('.sbs-spotlight-card');
    
    cards.forEach(function(card) {
      // Evento de seguimiento de cursor en tiempo real
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        // Actualización directa de variables CSS
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
        card.style.setProperty('--spotlight-opacity', '1');
      });

      // Retiro suave del brillo cuando el cursor sale
      card.addEventListener('mouseleave', function() {
        card.style.setProperty('--spotlight-opacity', '0');
      });
    });
  })();
<\/script>
`,E=({isOpen:l,onClose:t})=>{const[n,s]=(0,N.useState)(!1);if(!l)return null;const d=async()=>{try{await navigator.clipboard.writeText(i),s(!0),setTimeout(()=>s(!1),2500)}catch{}},c=()=>{const m=new Blob([i],{type:"text/html;charset=utf-8"}),o=URL.createObjectURL(m),r=document.createElement("a");r.href=o,r.download="smith-spotlight-services-grid.html",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)};return(0,e.jsxDEV)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md",children:(0,e.jsxDEV)("div",{className:"relative w-full max-w-4xl max-h-[90vh] flex flex-col glass-panel-elevated rounded-2xl border border-white/20 shadow-2xl overflow-hidden",children:[(0,e.jsxDEV)("div",{className:"px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/70",children:[(0,e.jsxDEV)("div",{className:"flex items-center gap-3",children:[(0,e.jsxDEV)("div",{className:"w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30",children:(0,e.jsxDEV)(v,{className:"w-4 h-4"},void 0,!1,{fileName:a,lineNumber:367,columnNumber:15},void 0)},void 0,!1,{fileName:a,lineNumber:366,columnNumber:13},void 0),(0,e.jsxDEV)("div",{children:[(0,e.jsxDEV)("h3",{className:"text-base sm:text-lg font-bold text-white",children:"Código Spotlight Grid (HTML Semántico + CSS + Vanilla JS)"},void 0,!1,{fileName:a,lineNumber:370,columnNumber:15},void 0),(0,e.jsxDEV)("p",{className:"text-xs text-slate-400",children:"Efecto spotlight hover interactivo con variables CSS y 0 dependencias externas."},void 0,!1,{fileName:a,lineNumber:373,columnNumber:15},void 0)]},void 0,!0,{fileName:a,lineNumber:369,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:365,columnNumber:11},void 0),(0,e.jsxDEV)("button",{onClick:t,type:"button",className:"w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors",children:(0,e.jsxDEV)(g,{className:"w-4 h-4"},void 0,!1,{fileName:a,lineNumber:384,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:379,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:364,columnNumber:9},void 0),(0,e.jsxDEV)("div",{className:"px-6 py-2.5 bg-slate-900/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs",children:[(0,e.jsxDEV)("div",{className:"flex items-center gap-2 text-slate-300",children:[(0,e.jsxDEV)("span",{className:"w-2 h-2 rounded-full bg-emerald-400"},void 0,!1,{fileName:a,lineNumber:391,columnNumber:13},void 0),(0,e.jsxDEV)("span",{children:"Optimizador de rendimiento: CSS Variables (--mouse-x, --mouse-y) a 60/120 FPS"},void 0,!1,{fileName:a,lineNumber:392,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:390,columnNumber:11},void 0),(0,e.jsxDEV)("div",{className:"flex items-center gap-2",children:[(0,e.jsxDEV)("button",{onClick:c,type:"button",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer",children:[(0,e.jsxDEV)(p,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:a,lineNumber:401,columnNumber:15},void 0),(0,e.jsxDEV)("span",{children:"Descargar .html"},void 0,!1,{fileName:a,lineNumber:402,columnNumber:15},void 0)]},void 0,!0,{fileName:a,lineNumber:396,columnNumber:13},void 0),(0,e.jsxDEV)("button",{onClick:d,type:"button",className:"inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-sm cursor-pointer",children:n?(0,e.jsxDEV)(e.Fragment,{children:[(0,e.jsxDEV)(x,{className:"w-3.5 h-3.5 stroke-[3]"},void 0,!1,{fileName:a,lineNumber:412,columnNumber:19},void 0),(0,e.jsxDEV)("span",{children:"¡Código Copiado!"},void 0,!1,{fileName:a,lineNumber:413,columnNumber:19},void 0)]},void 0,!0,{fileName:a,lineNumber:411,columnNumber:17},void 0):(0,e.jsxDEV)(e.Fragment,{children:[(0,e.jsxDEV)(f,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:a,lineNumber:417,columnNumber:19},void 0),(0,e.jsxDEV)("span",{children:"Copiar Código"},void 0,!1,{fileName:a,lineNumber:418,columnNumber:19},void 0)]},void 0,!0,{fileName:a,lineNumber:416,columnNumber:17},void 0)},void 0,!1,{fileName:a,lineNumber:405,columnNumber:13},void 0)]},void 0,!0,{fileName:a,lineNumber:395,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:389,columnNumber:9},void 0),(0,e.jsxDEV)("div",{className:"flex-1 overflow-y-auto p-6 bg-[#080d1a]",children:(0,e.jsxDEV)("pre",{className:"font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto selection:bg-amber-400 selection:text-slate-950",children:(0,e.jsxDEV)("code",{children:i},void 0,!1,{fileName:a,lineNumber:428,columnNumber:13},void 0)},void 0,!1,{fileName:a,lineNumber:427,columnNumber:11},void 0)},void 0,!1,{fileName:a,lineNumber:426,columnNumber:9},void 0),(0,e.jsxDEV)("div",{className:"px-6 py-3 border-t border-white/10 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400",children:[(0,e.jsxDEV)("span",{children:"HTML semántico: <section>, <article>, <header>, <footer>"},void 0,!1,{fileName:a,lineNumber:434,columnNumber:11},void 0),(0,e.jsxDEV)("button",{onClick:t,type:"button",className:"text-slate-300 hover:text-white underline transition-colors cursor-pointer",children:"Cerrar ventana"},void 0,!1,{fileName:a,lineNumber:435,columnNumber:11},void 0)]},void 0,!0,{fileName:a,lineNumber:433,columnNumber:9},void 0)]},void 0,!0,{fileName:a,lineNumber:362,columnNumber:7},void 0)},void 0,!1,{fileName:a,lineNumber:361,columnNumber:5},void 0)};export{E as SpotlightCodeModal};
