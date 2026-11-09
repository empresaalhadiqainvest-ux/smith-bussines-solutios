import React, { useState } from 'react';
import { Check, Copy, Download, Sparkles, X } from 'lucide-react';

interface ChatWidgetCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CHAT_WIDGET_VANILLA_CODE = `<!-- ========================================================================= -->
<!-- SMITH BUSINESS SOLUTIONS - WIDGET DE CHAT FLOTANTE IA (HTML + CSS + JS)   -->
<!-- Marca: AL-HADIQA INVEST / Smith Business Solutions                        -->
<!-- Botón circular flotante, animación slide-up, respuestas rápidas y JS puro -->
<!-- ========================================================================= -->

<style>
  /* Variables y Estilos Base */
  :root {
    --chat-bg: #0f172a;
    --chat-header: #090d16;
    --chat-accent: #f59e0b;
    --chat-emerald: #10b981;
    --chat-bot-bubble: #1e293b;
    --chat-user-bubble: #f59e0b;
    --chat-text: #f8fafc;
  }

  /* Botón Flotante Circular (Esquina Inferior Derecha) */
  .sbs-chat-trigger-btn {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #1d4ed8, #4f46e5, #f59e0b);
    padding: 2px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.2);
    border: none;
    cursor: pointer;
    z-index: 9999;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sbs-chat-trigger-btn:hover {
    transform: scale(1.08);
  }

  .sbs-trigger-inner {
    width: 100%;
    height: 100%;
    background: #090d16;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f59e0b;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 0.95rem;
  }

  .sbs-badge-pulse {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 14px;
    height: 14px;
    background-color: var(--chat-accent);
    border-radius: 50%;
    border: 2px solid #090d16;
  }

  /* Ventana Emergente del Chat (Fade-in + Slide-up) */
  .sbs-chat-window {
    position: fixed;
    bottom: 5.75rem;
    right: 1.5rem;
    width: 360px;
    max-width: calc(100vw - 3rem);
    height: 520px;
    max-height: calc(100vh - 7rem);
    background: rgba(15, 23, 42, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 1.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 9998;
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }

  .sbs-chat-window.open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  /* Encabezado */
  .sbs-chat-header {
    background: var(--chat-header);
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sbs-chat-profile {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .sbs-avatar {
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, #f59e0b, #10b981);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #090d16;
    font-weight: 800;
    font-size: 0.85rem;
    position: relative;
  }

  .sbs-online-dot {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 10px;
    height: 10px;
    background-color: var(--chat-emerald);
    border-radius: 50%;
    border: 2px solid #090d16;
  }

  .sbs-chat-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
  }

  .sbs-chat-status {
    font-size: 0.75rem;
    color: var(--chat-emerald);
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .sbs-btn-close {
    background: rgba(255, 255, 255, 0.05);
    border: none;
    color: #94a3b8;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  /* Área de Mensajes (Estilo WhatsApp/Telegram Dark) */
  .sbs-chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: rgba(9, 13, 22, 0.95);
  }

  .sbs-message {
    max-width: 82%;
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    font-size: 0.825rem;
    line-height: 1.45;
  }

  .sbs-message.bot {
    align-self: flex-start;
    background: var(--chat-bot-bubble);
    color: #f1f5f9;
    border-top-left-radius: 0.25rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sbs-message.user {
    align-self: flex-end;
    background: linear-gradient(90deg, #f59e0b, #fbbf24);
    color: #090d16;
    font-weight: 600;
    border-top-right-radius: 0.25rem;
  }

  .sbs-message-time {
    font-size: 0.65rem;
    opacity: 0.7;
    margin-top: 0.35rem;
    text-align: right;
  }

  /* 3 Botones de Respuestas Rápidas */
  .sbs-quick-replies {
    padding: 0.5rem 0.75rem;
    background: rgba(15, 23, 42, 0.9);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
  }

  .sbs-quick-btn {
    padding: 0.4rem 0.75rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
    font-size: 0.725rem;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .sbs-quick-btn:hover {
    background: rgba(245, 158, 11, 0.15);
    border-color: rgba(245, 158, 11, 0.4);
    color: #fde68a;
  }

  /* Formulario de Entrada */
  .sbs-chat-input-bar {
    padding: 0.75rem 1rem;
    background: var(--chat-header);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    gap: 0.5rem;
  }

  .sbs-chat-input {
    flex: 1;
    padding: 0.65rem 1rem;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.75rem;
    color: #ffffff;
    font-size: 0.825rem;
    outline: none;
  }

  .sbs-chat-input:focus {
    border-color: var(--chat-accent);
  }

  .sbs-btn-send {
    padding: 0.65rem 1rem;
    background: var(--chat-accent);
    color: #090d16;
    border: none;
    border-radius: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    transition: filter 0.2s ease;
  }

  .sbs-btn-send:hover {
    filter: brightness(1.15);
  }
</style>

<!-- Botón Flotante Circular -->
<button id="sbs-chat-toggle" class="sbs-chat-trigger-btn" aria-label="Abrir Asesor Smith">
  <div class="sbs-trigger-inner">
    <span>SBS</span>
  </div>
  <span class="sbs-badge-pulse"></span>
</button>

<!-- Ventana de Chat Flotante -->
<div id="sbs-chat-window" class="sbs-chat-window">
  <!-- Encabezado con estado En Línea -->
  <header class="sbs-chat-header">
    <div class="sbs-chat-profile">
      <div class="sbs-avatar">
        SBS
        <span class="sbs-online-dot"></span>
      </div>
      <div>
        <h4 class="sbs-chat-title">Smith Business Advisor</h4>
        <p class="sbs-chat-status">● Agente Virtual Activo · En línea</p>
      </div>
    </div>
    <button id="sbs-chat-close" class="sbs-btn-close">✕</button>
  </header>

  <!-- Área de Mensajes -->
  <div id="sbs-chat-messages" class="sbs-chat-messages">
    <div class="sbs-message bot">
      ¡Hola! Bienvenido a Smith Business Solutions / AL-HADIQA INVEST. ¿En qué podemos impulsar tu empresa hoy?
      <div class="sbs-message-time">Ahora</div>
    </div>
  </div>

  <!-- 3 Botones de Respuestas Rápidas -->
  <div class="sbs-quick-replies">
    <button class="sbs-quick-btn" onclick="sendQuickReply('Ver Servicios')">Ver Servicios</button>
    <button class="sbs-quick-btn" onclick="sendQuickReply('Solicitar Cotización')">Solicitar Cotización</button>
    <button class="sbs-quick-btn" onclick="sendQuickReply('Hablar con un Asesor')">Hablar con un Asesor</button>
  </div>

  <!-- Barra de Escritura -->
  <form id="sbs-chat-form" class="sbs-chat-input-bar">
    <input type="text" id="sbs-chat-input" class="sbs-chat-input" placeholder="Escribe tu consulta ejecutiva..." autocomplete="off">
    <button type="submit" class="sbs-btn-send">Enviar</button>
  </form>
</div>

<!-- Lógica JavaScript Vanilla Puro -->
<script>
  (function initChatWidget() {
    var trigger = document.getElementById('sbs-chat-toggle');
    var windowEl = document.getElementById('sbs-chat-window');
    var closeBtn = document.getElementById('sbs-chat-close');
    var form = document.getElementById('sbs-chat-form');
    var input = document.getElementById('sbs-chat-input');
    var msgContainer = document.getElementById('sbs-chat-messages');

    // Toggle de apertura/cierre
    trigger.addEventListener('click', function() {
      windowEl.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
      windowEl.classList.remove('open');
    });

    function appendMessage(text, sender) {
      var msg = document.createElement('div');
      msg.className = 'sbs-message ' + sender;
      msg.textContent = text;

      var time = document.createElement('div');
      time.className = 'sbs-message-time';
      var d = new Date();
      time.textContent = d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
      msg.appendChild(time);

      msgContainer.appendChild(msg);
      msgContainer.scrollTop = msgContainer.scrollHeight;
    }

    window.sendQuickReply = function(text) {
      appendMessage(text, 'user');
      
      setTimeout(function() {
        var reply = '';
        if (text === 'Ver Servicios') {
          reply = 'Nuestros 3 pilares principales:\\n1. Optimización de Procesos & Automatización IA\\n2. Desarrollo de Sistemas & Plataformas Web\\n3. Inteligencia Financiera & Gestión de Riesgo';
        } else if (text === 'Solicitar Cotización') {
          reply = 'Puedes usar la Calculadora de Estimación en nuestra web para obtener presupuesto y plazos en tiempo real con SLA garantizado.';
        } else if (text === 'Hablar con un Asesor') {
          reply = 'Puedes contactar directamente a empresaalhadiqainvest@gmail.com o agendar una llamada virtual en nuestro Formulario de Prospectos.';
        }
        appendMessage(reply, 'bot');
      }, 600);
    };

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var val = input.value.trim();
      if (!val) return;
      appendMessage(val, 'user');
      input.value = '';

      setTimeout(function() {
        appendMessage('Gracias por tu mensaje. Un consultor ejecutivo de Smith Business Solutions revisará tus requerimientos en menos de 24 horas.', 'bot');
      }, 700);
    });
  })();
</script>
`;

export const ChatWidgetCodeModal: React.FC<ChatWidgetCodeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CHAT_WIDGET_VANILLA_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([CHAT_WIDGET_VANILLA_CODE], {
      type: 'text/html;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'smith-floating-ai-chat-widget.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col glass-panel-elevated rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Código Chat Flotante IA (HTML + CSS + Vanilla JS)
              </h3>
              <p className="text-xs text-slate-400">
                Botón circular flotante, animación slide-up, indicador en línea y 3 respuestas rápidas.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-2.5 bg-slate-900/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Widget corporativo independiente listo para colocar en cualquier web</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .html</span>
            </button>

            <button
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold transition-all shadow-sm cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>¡Código Copiado!</span>
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
            <code>{CHAT_WIDGET_VANILLA_CODE}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400">
          <span>Estilo: Dark WhatsApp / Telegram ejecutivo</span>
          <button
            onClick={onClose}
            type="button"
            className="text-slate-300 hover:text-white underline transition-colors cursor-pointer"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  );
};
