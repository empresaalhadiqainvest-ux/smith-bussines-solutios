import React, { useState } from 'react';
import { Check, Copy, Download, Sparkles, X } from 'lucide-react';

interface VanillaWidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VANILLA_WIDGET_CODE = `<!-- ================================================================= -->
<!-- SMITH BUSINESS SOLUTIONS - CALCULADORA DE ESTIMACIÓN DE PROYECTOS -->
<!-- Stack: HTML5 + Tailwind CSS v3/v4 + JavaScript Vanilla (Puro)      -->
<!-- ================================================================= -->

<div id="sbs-calculator-widget" class="w-full max-w-5xl mx-auto p-4 sm:p-8 font-sans antialiased text-slate-100">
  
  <!-- Contenedor Principal Glassmorphism -->
  <div class="relative rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-xl bg-slate-900/70 overflow-hidden" style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(255, 255, 255, 0.12);">
    
    <!-- Resplandor decorativo de fondo -->
    <div class="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none"></div>

    <!-- Encabezado del Widget -->
    <div class="relative z-10 text-center max-w-2xl mx-auto mb-10 space-y-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20">
        Smith Business Solutions · Calculadora
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
        Estimador Dinámico de Proyectos
      </h2>
      <p class="text-xs sm:text-sm text-slate-300">
        Selecciona las variables de tu proyecto para calcular en tiempo real el presupuesto estimado y tiempo de entrega.
      </p>
    </div>

    <!-- Grid de Selección y Resumen -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      <!-- Controles de Configuración (8 columnas) -->
      <div class="lg:col-span-7 space-y-8">
        
        <!-- 1. Tipo de Solución -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
            1. Tipo de Solución
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="group-solution">
            <button type="button" data-type="automation" data-base="1800" data-weeks="3" class="sbs-card active text-left p-4 rounded-xl border border-amber-400/60 bg-slate-800/80 transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Automatización</span>
              <span class="block text-[11px] text-slate-400 mt-1">RPA & Flujos Operativos</span>
              <span class="block font-mono text-xs text-amber-300 font-semibold mt-2">$1,800 USD</span>
            </button>
            <button type="button" data-type="software" data-base="3200" data-weeks="4" class="sbs-card text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Software / Web</span>
              <span class="block text-[11px] text-slate-400 mt-1">Plataformas & Cloud SaaS</span>
              <span class="block font-mono text-xs text-amber-300 font-semibold mt-2">$3,200 USD</span>
            </button>
            <button type="button" data-type="consulting" data-base="2400" data-weeks="3" class="sbs-card text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Consultoría</span>
              <span class="block text-[11px] text-slate-400 mt-1">Financiera & Estrategia</span>
              <span class="block font-mono text-xs text-amber-300 font-semibold mt-2">$2,400 USD</span>
            </button>
          </div>
        </div>

        <!-- 2. Alcance / Escala -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
            2. Alcance / Escala de la Organización
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="group-scale">
            <button type="button" data-scale="startup" data-mult="1.0" data-offset="0" class="sbs-card active text-left p-4 rounded-xl border border-blue-400/60 bg-slate-800/80 transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Startup</span>
              <span class="block text-[11px] text-slate-400 mt-1">Fase inicial o MVP</span>
              <span class="block font-mono text-xs text-blue-300 font-semibold mt-2">Factor x1.0</span>
            </button>
            <button type="button" data-scale="pyme" data-mult="1.65" data-offset="1" class="sbs-card text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">PYME</span>
              <span class="block text-[11px] text-slate-400 mt-1">Operación y procesos continuos</span>
              <span class="block font-mono text-xs text-blue-300 font-semibold mt-2">Factor x1.65</span>
            </button>
            <button type="button" data-scale="corporate" data-mult="2.8" data-offset="2" class="sbs-card text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Corporativa</span>
              <span class="block text-[11px] text-slate-400 mt-1">Gran escala & compliance</span>
              <span class="block font-mono text-xs text-blue-300 font-semibold mt-2">Factor x2.8</span>
            </button>
          </div>
        </div>

        <!-- 3. Tiempo de Entrega Deseado -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
            3. Tiempo de Entrega Deseado
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="group-speed">
            <button type="button" data-speed="standard" data-mult="1.0" data-wmult="1.0" class="sbs-card active text-left p-4 rounded-xl border border-emerald-400/60 bg-slate-800/80 transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Estándar</span>
              <span class="block text-[11px] text-emerald-300 mt-1">4 semanas aprox.</span>
              <span class="block text-[10px] text-slate-400 mt-2">Ritmo regular</span>
            </button>
            <button type="button" data-speed="priority" data-mult="1.25" data-wmult="0.6" class="sbs-card text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Prioritario</span>
              <span class="block text-[11px] text-emerald-300 mt-1">2 semanas aprox.</span>
              <span class="block text-[10px] text-slate-400 mt-2">Asignación preferente (+25%)</span>
            </button>
            <button type="button" data-speed="express" data-mult="1.60" data-wmult="0.35" class="sbs-card text-left p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer">
              <span class="block font-bold text-sm text-white">Express</span>
              <span class="block text-[11px] text-emerald-300 mt-1">1 semana intensiva</span>
              <span class="block text-[10px] text-slate-400 mt-2">Sprint acelerado (+60%)</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Resumen en Vivo y Botón CTA (5 columnas) -->
      <div class="lg:col-span-5 flex flex-col justify-between">
        <div class="p-6 rounded-2xl border border-white/15 bg-slate-950/70 backdrop-blur-md space-y-6">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400">Presupuesto Estimado</span>
            <span class="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              En tiempo real
            </span>
          </div>

          <!-- Total Animado -->
          <div class="p-5 rounded-xl bg-slate-900/90 border border-white/10">
            <span class="block text-xs text-slate-400 mb-1">Inversión Estimada (USD)</span>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-amber-400">$</span>
              <span id="sbs-total-display" class="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight tabular-nums">1,800</span>
              <span class="text-xs font-mono text-slate-400 ml-1">USD</span>
            </div>
          </div>

          <!-- Desglose de Parámetros -->
          <div class="space-y-3 text-xs border-t border-white/10 pt-4 text-slate-300">
            <div class="flex justify-between">
              <span class="text-slate-400">Plazo proyectado:</span>
              <span id="sbs-weeks-display" class="font-bold text-white font-mono">3 semanas</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Solución:</span>
              <span id="sbs-solution-summary" class="font-semibold text-slate-200">Automatización</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Escala:</span>
              <span id="sbs-scale-summary" class="font-semibold text-slate-200">Startup</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Entrega:</span>
              <span id="sbs-speed-summary" class="font-semibold text-emerald-300">Estándar</span>
            </div>
          </div>

          <!-- CTA: Solicitar Propuesta Formal -->
          <button id="sbs-btn-request" type="button" class="w-full py-4 px-6 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 rounded-xl shadow-lg shadow-amber-500/25 transition-all cursor-pointer">
            Solicitar Propuesta Formal →
          </button>
          
          <p class="text-center text-[11px] text-slate-400">
            *La estimación se precargará directamente en tu formulario de contacto.
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- Modal emergente para capturar propuesta (incluido en Vanilla JS) -->
  <div id="sbs-proposal-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden">
    <div class="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-slate-900 border border-white/15 shadow-2xl text-slate-100">
      <button id="sbs-modal-close" type="button" class="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
      <h3 class="text-xl font-bold text-white mb-2">Propuesta Formal</h3>
      <p class="text-xs text-slate-300 mb-6">Hemos precargado tu estimación calculada. Completa los datos para recibir el documento detallado en tu correo.</p>
      
      <form id="sbs-modal-form" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Nombre y Apellido</label>
          <input type="text" required placeholder="Ej: Roberto Mendoza" class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none">
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Correo Corporativo</label>
          <input type="email" required placeholder="ejemplo@empresa.com" class="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-none">
        </div>
        <div class="p-3 rounded-lg bg-slate-950/60 border border-white/10 text-xs text-slate-300 space-y-1">
          <div class="flex justify-between"><span>Estimado Total:</span><strong id="sbs-modal-total-field" class="text-amber-400">$1,800 USD</strong></div>
          <div class="flex justify-between"><span>Tiempo Proyectado:</span><strong id="sbs-modal-weeks-field" class="text-white">3 semanas</strong></div>
        </div>
        <button type="submit" class="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-sm transition-colors cursor-pointer">
          Enviar Solicitud Inmediata
        </button>
      </form>
    </div>
  </div>

</div>

<!-- Script Vanilla Puro (JavaScript nativo, sin dependencias) -->
<script>
(function() {
  // Estado inicial
  var state = {
    basePrice: 1800,
    baseWeeks: 3,
    solutionName: "Automatización de Procesos",
    scaleMult: 1.0,
    scaleOffset: 0,
    scaleName: "Startup",
    speedMult: 1.0,
    speedWMult: 1.0,
    speedName: "Estándar",
    currentTotal: 1800
  };

  // Referencias DOM
  var totalDisplay = document.getElementById("sbs-total-display");
  var weeksDisplay = document.getElementById("sbs-weeks-display");
  var solutionSummary = document.getElementById("sbs-solution-summary");
  var scaleSummary = document.getElementById("sbs-scale-summary");
  var speedSummary = document.getElementById("sbs-speed-summary");
  var modal = document.getElementById("sbs-proposal-modal");
  var modalClose = document.getElementById("sbs-modal-close");
  var modalTotalField = document.getElementById("sbs-modal-total-field");
  var modalWeeksField = document.getElementById("sbs-modal-weeks-field");
  var modalForm = document.getElementById("sbs-modal-form");
  var btnRequest = document.getElementById("sbs-btn-request");

  // Función de cálculo y animación numérica
  function updateCalculator() {
    var rawTotal = Math.round(state.basePrice * state.scaleMult * state.speedMult);
    var calculatedWeeks = Math.max(1, Math.round((state.baseWeeks + state.scaleOffset) * state.speedWMult));
    
    // Animación suave de conteo
    var startVal = state.currentTotal;
    var endVal = rawTotal;
    var startTime = null;
    var duration = 300;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var current = Math.round(startVal + (endVal - startVal) * progress);
      totalDisplay.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        state.currentTotal = endVal;
      }
    }
    requestAnimationFrame(step);

    // Actualizar textos
    weeksDisplay.textContent = calculatedWeeks + (calculatedWeeks === 1 ? " semana" : " semanas");
    solutionSummary.textContent = state.solutionName;
    scaleSummary.textContent = state.scaleName;
    speedSummary.textContent = state.speedName;
  }

  // Helper para manejar botones activos en un grupo
  function setupButtonGroup(containerId, activeBorderClass, onSelect) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var buttons = container.querySelectorAll("button");
    buttons.forEach(function(btn) {
      btn.addEventListener("click", function() {
        buttons.forEach(function(b) {
          b.classList.remove("active", activeBorderClass, "bg-slate-800/80");
          b.classList.add("border-white/10", "bg-white/[0.03]");
        });
        btn.classList.add("active", activeBorderClass, "bg-slate-800/80");
        btn.classList.remove("border-white/10", "bg-white/[0.03]");
        onSelect(btn);
        updateCalculator();
      });
    });
  }

  // 1. Setup Grupo Solución
  setupButtonGroup("group-solution", "border-amber-400/60", function(btn) {
    state.basePrice = parseFloat(btn.getAttribute("data-base"));
    state.baseWeeks = parseInt(btn.getAttribute("data-weeks"));
    state.solutionName = btn.querySelector("span").textContent.trim();
  });

  // 2. Setup Grupo Escala
  setupButtonGroup("group-scale", "border-blue-400/60", function(btn) {
    state.scaleMult = parseFloat(btn.getAttribute("data-mult"));
    state.scaleOffset = parseInt(btn.getAttribute("data-offset"));
    state.scaleName = btn.querySelector("span").textContent.trim();
  });

  // 3. Setup Grupo Velocidad
  setupButtonGroup("group-speed", "border-emerald-400/60", function(btn) {
    state.speedMult = parseFloat(btn.getAttribute("data-mult"));
    state.speedWMult = parseFloat(btn.getAttribute("data-wmult"));
    state.speedName = btn.querySelector("span").textContent.trim();
  });

  // Modal open/close y captura
  if (btnRequest && modal) {
    btnRequest.addEventListener("click", function() {
      modalTotalField.textContent = "$" + state.currentTotal.toLocaleString() + " USD";
      modalWeeksField.textContent = weeksDisplay.textContent;
      modal.classList.remove("hidden");
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener("click", function() {
      modal.classList.add("hidden");
    });
  }

  if (modal) {
    modal.addEventListener("click", function(e) {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  if (modalForm) {
    modalForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("¡Propuesta generada con éxito! Nos comunicaremos en menos de 24 horas con el desglose formal.");
      modal.classList.add("hidden");
    });
  }

  // Inicializar primera llamada
  updateCalculator();
})();
</script>
`;

export const VanillaWidgetModal: React.FC<VanillaWidgetModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(VANILLA_WIDGET_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadFile = () => {
    const blob = new Blob([VANILLA_WIDGET_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'smith-calculator-widget.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col glass-panel-elevated rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Código del Widget Vanilla (HTML + Tailwind + JS)
              </h3>
              <p className="text-xs text-slate-400">
                100% independiente, responsive y listo para incrustar en cualquier web o repositorio GitHub.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-6 py-2.5 bg-slate-900/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Código limpio sin dependencias de frameworks (Zero React / Pure Vanilla)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadFile}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .html</span>
            </button>

            <button
              onClick={handleCopyCode}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>¡Copiado al Portapapeles!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#080d1a]">
          <pre className="font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto selection:bg-amber-400 selection:text-slate-950">
            <code>{VANILLA_WIDGET_CODE}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400">
          <span>Requisitos: Tailwind CSS v3 o v4 + script nativo</span>
          <button
            onClick={onClose}
            type="button"
            className="text-slate-300 hover:text-white underline transition-colors"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
