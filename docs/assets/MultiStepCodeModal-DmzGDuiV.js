import{r as b}from"./rolldown-runtime-CRqgUL4m.js";import{p}from"./vendor-charts-DS1MiLCl.js";import{K as u,X as f,f as v,i as g,st as x}from"./vendor-icons-XOHX4Rf8.js";import{t as h}from"./vendor-react-Zau7KpVx.js";var N=b(p(),1),e=h(),s="/app/applet/src/components/MultiStepCodeModal.tsx",t=`<!-- ========================================================================= -->
<!-- SMITH BUSINESS SOLUTIONS - FORMULARIO MULTI-PASO (VANILLA JS + CSS)       -->
<!-- Flujo de 3 Pasos: Contacto, Detalles del Proyecto, Confirmación/Canal      -->
<!-- Barra de progreso dinámica, validación en tiempo real y 0 dependencias    -->
<!-- ========================================================================= -->

<style>
  :root {
    --bg-surface: #0f172a;
    --border-subtle: rgba(255, 255, 255, 0.1);
    --gold: #f59e0b;
    --emerald: #10b981;
    --text-muted: #94a3b8;
  }

  .sbs-multistep-container {
    max-width: 720px;
    margin: 2rem auto;
    padding: 2rem;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid var(--border-subtle);
    border-radius: 1.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(16px);
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    color: #f8fafc;
  }

  /* Barra de Progreso Superior */
  .sbs-progress-bar-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
  }

  .sbs-progress-track {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-50%);
    z-index: 1;
  }

  .sbs-progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--gold), var(--emerald));
    transition: width 0.4s ease;
  }

  .sbs-step-node {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .sbs-step-circle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #090d16;
    border: 2px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-muted);
    transition: all 0.3s ease;
  }

  .sbs-step-node.active .sbs-step-circle {
    background: var(--gold);
    color: #090d16;
    border-color: #fde68a;
    box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
  }

  .sbs-step-node.completed .sbs-step-circle {
    background: var(--emerald);
    color: #090d16;
    border-color: #6ee7b7;
  }

  .sbs-step-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-muted);
  }

  .sbs-step-node.active .sbs-step-label {
    color: #ffffff;
  }

  /* Pasos y Campos */
  .sbs-step-content {
    display: none;
    animation: sbsFadeIn 0.3s ease;
  }

  .sbs-step-content.active {
    display: block;
  }

  @keyframes sbsFadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .sbs-form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 600px) {
    .sbs-form-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .sbs-form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .sbs-form-group.full-width {
    grid-column: 1 / -1;
  }

  .sbs-form-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: #e2e8f0;
  }

  .sbs-form-input, .sbs-form-select, .sbs-form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(10, 15, 29, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.75rem;
    color: #ffffff;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .sbs-form-input:focus, .sbs-form-select:focus, .sbs-form-textarea:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
  }

  .sbs-form-input.error, .sbs-form-textarea.error {
    border-color: #ef4444;
    background: rgba(239, 68, 68, 0.05);
  }

  .sbs-error-text {
    font-size: 0.75rem;
    color: #f87171;
    display: none;
  }

  /* Botones de Navegación */
  .sbs-nav-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sbs-btn-prev {
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .sbs-btn-prev:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  .sbs-btn-next, .sbs-btn-submit {
    padding: 0.75rem 1.75rem;
    border-radius: 0.75rem;
    background: linear-gradient(90deg, #f59e0b, #fbbf24);
    border: none;
    color: #090d16;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
    transition: all 0.2s ease;
  }

  .sbs-btn-next:hover, .sbs-btn-submit:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  /* Preferencias de Canal en Paso 3 */
  .sbs-channel-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .sbs-channel-card {
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.02);
    cursor: pointer;
    text-align: center;
    transition: all 0.2s ease;
  }

  .sbs-channel-card.selected {
    border-color: var(--emerald);
    background: rgba(16, 185, 129, 0.1);
  }

  .sbs-channel-card strong {
    display: block;
    font-size: 0.85rem;
    color: #ffffff;
  }
</style>

<div class="sbs-multistep-container">
  <!-- Barra de Progreso Dinámica -->
  <div class="sbs-progress-bar-wrapper">
    <div class="sbs-progress-track">
      <div id="sbs-progress-fill" class="sbs-progress-fill"></div>
    </div>
    
    <div id="step-node-1" class="sbs-step-node active">
      <div class="sbs-step-circle">1</div>
      <span class="sbs-step-label">Contacto</span>
    </div>

    <div id="step-node-2" class="sbs-step-node">
      <div class="sbs-step-circle">2</div>
      <span class="sbs-step-label">Proyecto</span>
    </div>

    <div id="step-node-3" class="sbs-step-node">
      <div class="sbs-step-circle">3</div>
      <span class="sbs-step-label">Preferencia</span>
    </div>
  </div>

  <form id="sbs-multistep-form">
    <!-- PASO 1: DATOS DE CONTACTO -->
    <div id="step-pane-1" class="sbs-step-content active">
      <h3 style="margin-bottom: 0.25rem;">Paso 1: Información de Contacto</h3>
      <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 1.5rem;">Datos del líder corporativo o tomador de decisiones.</p>

      <div class="sbs-form-grid">
        <div class="sbs-form-group">
          <label class="sbs-form-label">Nombre Completo *</label>
          <input type="text" id="f-name" class="sbs-form-input" placeholder="Ej: Roberto Mendoza">
          <span id="err-name" class="sbs-error-text">Nombre requerido (mín. 3 letras).</span>
        </div>

        <div class="sbs-form-group">
          <label class="sbs-form-label">Email Corporativo *</label>
          <input type="email" id="f-email" class="sbs-form-input" placeholder="roberto@empresa.com">
          <span id="err-email" class="sbs-error-text">Email válido requerido.</span>
        </div>

        <div class="sbs-form-group">
          <label class="sbs-form-label">Teléfono / WhatsApp *</label>
          <input type="tel" id="f-phone" class="sbs-form-input" placeholder="+58 422 027 3766">
          <span id="err-phone" class="sbs-error-text">Teléfono válido requerido.</span>
        </div>

        <div class="sbs-form-group">
          <label class="sbs-form-label">Empresa / Organización *</label>
          <input type="text" id="f-company" class="sbs-form-input" placeholder="Grupo Inversionista C.A.">
          <span id="err-company" class="sbs-error-text">Nombre de empresa requerido.</span>
        </div>
      </div>
    </div>

    <!-- PASO 2: DETALLES DEL PROYECTO -->
    <div id="step-pane-2" class="sbs-step-content">
      <h3 style="margin-bottom: 0.25rem;">Paso 2: Detalles del Proyecto</h3>
      <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 1.5rem;">Definición del sector y presupuesto proyectado.</p>

      <div class="sbs-form-grid">
        <div class="sbs-form-group">
          <label class="sbs-form-label">Sector / Industria *</label>
          <select id="f-industry" class="sbs-form-select">
            <option value="Fintech">Fintech & Servicios Financieros</option>
            <option value="Manufactura">Manufactura & Logística</option>
            <option value="Retail">Retail & E-commerce</option>
            <option value="Inversiones">Inversiones & Real Estate</option>
            <option value="Salud">Salud & Biotecnología</option>
            <option value="Otro">Otro Sector</option>
          </select>
        </div>

        <div class="sbs-form-group">
          <label class="sbs-form-label">Presupuesto Estimado *</label>
          <select id="f-budget" class="sbs-form-select">
            <option value="< 3k">&lt; $3,000 USD (Iniciación / MVP)</option>
            <option value="3k-7k" selected>$3,000 - $7,000 USD (PYME)</option>
            <option value="7k-15k">$7,000 - $15,000 USD (Mediana)</option>
            <option value="> 15k">&gt; $15,000 USD (Enterprise)</option>
          </select>
        </div>

        <div class="sbs-form-group full-width">
          <label class="sbs-form-label">Descripción Breve del Desafío *</label>
          <textarea id="f-desc" rows="3" class="sbs-form-textarea" placeholder="Indica los procesos a automatizar, sistemas a desarrollar o metas financieras..."></textarea>
          <span id="err-desc" class="sbs-error-text">Mínimo 10 caracteres explicativos.</span>
        </div>
      </div>
    </div>

    <!-- PASO 3: CONFIRMACIÓN Y CANAL PREFERIDO -->
    <div id="step-pane-3" class="sbs-step-content">
      <h3 style="margin-bottom: 0.25rem;">Paso 3: Preferencia de Contacto</h3>
      <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 1.5rem;">Selecciona cómo deseas que te contactemos.</p>

      <div class="sbs-channel-cards">
        <div class="sbs-channel-card selected" onclick="selectChannel(this, 'Reunión Virtual')">
          <strong>📹 Virtual</strong>
          <span style="font-size: 0.7rem; color: #94a3b8;">Google Meet</span>
        </div>
        <div class="sbs-channel-card" onclick="selectChannel(this, 'WhatsApp')">
          <strong>💬 WhatsApp</strong>
          <span style="font-size: 0.7rem; color: #94a3b8;">Chat directo</span>
        </div>
        <div class="sbs-channel-card" onclick="selectChannel(this, 'Correo Formal')">
          <strong>✉️ Correo</strong>
          <span style="font-size: 0.7rem; color: #94a3b8;">Propuesta PDF</span>
        </div>
      </div>

      <div style="margin-top: 1.5rem; padding: 1rem; border-radius: 0.75rem; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.06);">
        <p style="font-size: 0.75rem; color: #cbd5e1; margin: 0;">
          🔒 <strong style="color: #ffffff;">Acuerdo de Confidencialidad (NDA)</strong> incluido. Toda información compartida está protegida bajo estándares comerciales internacionales.
        </p>
      </div>
    </div>

    <!-- Acciones de Navegación -->
    <div class="sbs-nav-actions">
      <button type="button" id="btn-prev" class="sbs-btn-prev" style="display: none;" onclick="prevStep()">← Anterior</button>
      <div style="flex: 1;"></div>
      <button type="button" id="btn-next" class="sbs-btn-next" onclick="nextStep()">Siguiente Paso →</button>
      <button type="submit" id="btn-submit" class="sbs-btn-submit" style="display: none;">Confirmar y Enviar Solicitud</button>
    </div>
  </form>
</div>

<!-- Lógica JavaScript Vanilla Puro -->
<script>
  var currentStep = 1;
  var selectedChannelValue = 'Reunión Virtual';

  function updateStepUI() {
    // Actualizar paneles
    for (var i = 1; i <= 3; i++) {
      var pane = document.getElementById('step-pane-' + i);
      var node = document.getElementById('step-node-' + i);
      if (pane) pane.classList.toggle('active', i === currentStep);
      if (node) {
        node.classList.toggle('active', i === currentStep);
        node.classList.toggle('completed', i < currentStep);
      }
    }

    // Actualizar barra de progreso
    var fill = document.getElementById('sbs-progress-fill');
    if (fill) {
      fill.style.width = currentStep === 1 ? '15%' : currentStep === 2 ? '50%' : '100%';
    }

    // Botones
    var btnPrev = document.getElementById('btn-prev');
    var btnNext = document.getElementById('btn-next');
    var btnSubmit = document.getElementById('btn-submit');

    if (btnPrev) btnPrev.style.display = currentStep > 1 ? 'inline-block' : 'none';
    if (btnNext) btnNext.style.display = currentStep < 3 ? 'inline-block' : 'none';
    if (btnSubmit) btnSubmit.style.display = currentStep === 3 ? 'inline-block' : 'none';
  }

  function validateCurrentStep() {
    var isValid = true;

    if (currentStep === 1) {
      var name = document.getElementById('f-name');
      var email = document.getElementById('f-email');
      var phone = document.getElementById('f-phone');
      var comp = document.getElementById('f-company');

      if (!name.value.trim() || name.value.trim().length < 3) {
        name.classList.add('error');
        document.getElementById('err-name').style.display = 'block';
        isValid = false;
      } else {
        name.classList.remove('error');
        document.getElementById('err-name').style.display = 'none';
      }

      var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value)) {
        email.classList.add('error');
        document.getElementById('err-email').style.display = 'block';
        isValid = false;
      } else {
        email.classList.remove('error');
        document.getElementById('err-email').style.display = 'none';
      }

      if (!phone.value.trim() || phone.value.trim().length < 7) {
        phone.classList.add('error');
        document.getElementById('err-phone').style.display = 'block';
        isValid = false;
      } else {
        phone.classList.remove('error');
        document.getElementById('err-phone').style.display = 'none';
      }

      if (!comp.value.trim()) {
        comp.classList.add('error');
        document.getElementById('err-company').style.display = 'block';
        isValid = false;
      } else {
        comp.classList.remove('error');
        document.getElementById('err-company').style.display = 'none';
      }
    }

    if (currentStep === 2) {
      var desc = document.getElementById('f-desc');
      if (!desc.value.trim() || desc.value.trim().length < 10) {
        desc.classList.add('error');
        document.getElementById('err-desc').style.display = 'block';
        isValid = false;
      } else {
        desc.classList.remove('error');
        document.getElementById('err-desc').style.display = 'none';
      }
    }

    return isValid;
  }

  function nextStep() {
    if (validateCurrentStep()) {
      if (currentStep < 3) {
        currentStep++;
        updateStepUI();
      }
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
      updateStepUI();
    }
  }

  function selectChannel(card, channel) {
    document.querySelectorAll('.sbs-channel-card').forEach(function(c) {
      c.classList.remove('selected');
    });
    card.classList.add('selected');
    selectedChannelValue = channel;
  }

  document.getElementById('sbs-multistep-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateCurrentStep()) {
      var ref = 'SBS-' + Math.floor(100000 + Math.random() * 900000);
      alert('¡Solicitud formal registrada con éxito!\\nCódigo de seguimiento: ' + ref + '\\nNos pondremos en contacto vía: ' + selectedChannelValue);
    }
  });

  // Inicializar
  updateStepUI();
<\/script>
`,D=({isOpen:l,onClose:o})=>{const[n,a]=(0,N.useState)(!1);if(!l)return null;const d=async()=>{try{await navigator.clipboard.writeText(t),a(!0),setTimeout(()=>a(!1),2500)}catch{}},c=()=>{const m=new Blob([t],{type:"text/html;charset=utf-8"}),i=URL.createObjectURL(m),r=document.createElement("a");r.href=i,r.download="smith-multistep-lead-form.html",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)};return(0,e.jsxDEV)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md",children:(0,e.jsxDEV)("div",{className:"relative w-full max-w-4xl max-h-[90vh] flex flex-col glass-panel-elevated rounded-2xl border border-white/20 shadow-2xl overflow-hidden",children:[(0,e.jsxDEV)("div",{className:"px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/70",children:[(0,e.jsxDEV)("div",{className:"flex items-center gap-3",children:[(0,e.jsxDEV)("div",{className:"w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30",children:(0,e.jsxDEV)(v,{className:"w-4 h-4"},void 0,!1,{fileName:s,lineNumber:556,columnNumber:15},void 0)},void 0,!1,{fileName:s,lineNumber:555,columnNumber:13},void 0),(0,e.jsxDEV)("div",{children:[(0,e.jsxDEV)("h3",{className:"text-base sm:text-lg font-bold text-white",children:"Código Formulario Multi-Paso (HTML + CSS + Vanilla JS)"},void 0,!1,{fileName:s,lineNumber:559,columnNumber:15},void 0),(0,e.jsxDEV)("p",{className:"text-xs text-slate-400",children:"Flujo interactivo de 3 pasos con barra de progreso y validación en tiempo real."},void 0,!1,{fileName:s,lineNumber:562,columnNumber:15},void 0)]},void 0,!0,{fileName:s,lineNumber:558,columnNumber:13},void 0)]},void 0,!0,{fileName:s,lineNumber:554,columnNumber:11},void 0),(0,e.jsxDEV)("button",{onClick:o,type:"button",className:"w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer",children:(0,e.jsxDEV)(g,{className:"w-4 h-4"},void 0,!1,{fileName:s,lineNumber:573,columnNumber:13},void 0)},void 0,!1,{fileName:s,lineNumber:568,columnNumber:11},void 0)]},void 0,!0,{fileName:s,lineNumber:553,columnNumber:9},void 0),(0,e.jsxDEV)("div",{className:"px-6 py-2.5 bg-slate-900/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs",children:[(0,e.jsxDEV)("div",{className:"flex items-center gap-2 text-slate-300",children:[(0,e.jsxDEV)("span",{className:"w-2 h-2 rounded-full bg-emerald-400"},void 0,!1,{fileName:s,lineNumber:580,columnNumber:13},void 0),(0,e.jsxDEV)("span",{children:"Formulario 100% responsive, accesible y sin librerías externas"},void 0,!1,{fileName:s,lineNumber:581,columnNumber:13},void 0)]},void 0,!0,{fileName:s,lineNumber:579,columnNumber:11},void 0),(0,e.jsxDEV)("div",{className:"flex items-center gap-2",children:[(0,e.jsxDEV)("button",{onClick:c,type:"button",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer",children:[(0,e.jsxDEV)(u,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:s,lineNumber:590,columnNumber:15},void 0),(0,e.jsxDEV)("span",{children:"Descargar .html"},void 0,!1,{fileName:s,lineNumber:591,columnNumber:15},void 0)]},void 0,!0,{fileName:s,lineNumber:585,columnNumber:13},void 0),(0,e.jsxDEV)("button",{onClick:d,type:"button",className:"inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-sm cursor-pointer",children:n?(0,e.jsxDEV)(e.Fragment,{children:[(0,e.jsxDEV)(x,{className:"w-3.5 h-3.5 stroke-[3]"},void 0,!1,{fileName:s,lineNumber:601,columnNumber:19},void 0),(0,e.jsxDEV)("span",{children:"¡Código Copiado!"},void 0,!1,{fileName:s,lineNumber:602,columnNumber:19},void 0)]},void 0,!0,{fileName:s,lineNumber:600,columnNumber:17},void 0):(0,e.jsxDEV)(e.Fragment,{children:[(0,e.jsxDEV)(f,{className:"w-3.5 h-3.5"},void 0,!1,{fileName:s,lineNumber:606,columnNumber:19},void 0),(0,e.jsxDEV)("span",{children:"Copiar Código"},void 0,!1,{fileName:s,lineNumber:607,columnNumber:19},void 0)]},void 0,!0,{fileName:s,lineNumber:605,columnNumber:17},void 0)},void 0,!1,{fileName:s,lineNumber:594,columnNumber:13},void 0)]},void 0,!0,{fileName:s,lineNumber:584,columnNumber:11},void 0)]},void 0,!0,{fileName:s,lineNumber:578,columnNumber:9},void 0),(0,e.jsxDEV)("div",{className:"flex-1 overflow-y-auto p-6 bg-[#080d1a]",children:(0,e.jsxDEV)("pre",{className:"font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto selection:bg-amber-400 selection:text-slate-950",children:(0,e.jsxDEV)("code",{children:t},void 0,!1,{fileName:s,lineNumber:617,columnNumber:13},void 0)},void 0,!1,{fileName:s,lineNumber:616,columnNumber:11},void 0)},void 0,!1,{fileName:s,lineNumber:615,columnNumber:9},void 0),(0,e.jsxDEV)("div",{className:"px-6 py-3 border-t border-white/10 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400",children:[(0,e.jsxDEV)("span",{children:"Estructura: 3 Pasos con indicadores numéricos y validación"},void 0,!1,{fileName:s,lineNumber:623,columnNumber:11},void 0),(0,e.jsxDEV)("button",{onClick:o,type:"button",className:"text-slate-300 hover:text-white underline transition-colors cursor-pointer",children:"Cerrar ventana"},void 0,!1,{fileName:s,lineNumber:624,columnNumber:11},void 0)]},void 0,!0,{fileName:s,lineNumber:622,columnNumber:9},void 0)]},void 0,!0,{fileName:s,lineNumber:551,columnNumber:7},void 0)},void 0,!1,{fileName:s,lineNumber:550,columnNumber:5},void 0)};export{D as MultiStepCodeModal};
