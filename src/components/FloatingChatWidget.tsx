import React, { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  Bot,
  Calculator,
  ChevronDown,
  Clock,
  Layers,
  MessageCircle,
  MessageSquare,
  Minus,
  Paperclip,
  Phone,
  Send,
  Sparkles,
  User,
  X,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionType?: 'services' | 'quote' | 'advisor' | 'insights';
}

interface FloatingChatWidgetProps {
  onScrollToServices?: () => void;
  onScrollToCalculator?: () => void;
  onScrollToContact?: () => void;
  onScrollToInsights?: () => void;
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  onScrollToServices,
  onScrollToCalculator,
  onScrollToContact,
  onScrollToInsights,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: '¡Hola! Bienvenido a Smith Business Solutions · AL-HADIQA INVEST. Soy tu Asesor Virtual Ejecutivo. ¿En qué podemos impulsar tu empresa hoy?',
      time: 'Ahora',
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleQuickReply = (type: 'services' | 'quote' | 'advisor' | 'insights') => {
    let userText = '';
    let botReply = '';

    if (type === 'services') {
      userText = 'Quiero conocer los servicios empresariales disponibles.';
      botReply =
        'En Smith Business Solutions nos especializamos en 3 pilares clave:\n\n1. Optimización de Procesos & Automatización IA (RPA, bots operativos).\n2. Desarrollo de Sistemas & Plataformas Web (SaaS, portales B2B).\n3. Inteligencia Financiera & Gestión de Riesgo (Modelos DCF, auditoría).\n\n¿Te gustaría que te lleve a la sección interactiva con los entregables detallados?';
    } else if (type === 'quote') {
      userText = 'Deseo solicitar una cotización o estimación para mi proyecto.';
      botReply =
        '¡Excelente! Contamos con una Calculadora de Estimación en tiempo real en la página. Puedes seleccionar tu tipo de solución, escala (Startup / PYME / Corporativa) y tiempo de entrega (Estándar, Prioritario o Express) para ver el costo proyectado en USD al instante.';
    } else if (type === 'advisor') {
      userText = 'Necesito hablar directamente con un asesor o consultor senior.';
      botReply =
        'Con gusto. Puedes contactarnos de inmediato vía WhatsApp al 0422 027 3766 (+58 422 027 3766) o al correo corporativo: empresaalhadiqainvest@gmail.com.\n\nTambién puedes completar nuestro Formulario de Prospectos para coordinar una reunión por Google Meet en menos de 24 horas.';
    } else if (type === 'insights') {
      userText = 'Quiero ver los últimos Whitepapers y reportes de investigación.';
      botReply =
        'Nuestro laboratorio de inteligencia acaba de publicar informes clave sobre Orquestación de Agentes en ERP (-75% horas manuales), Arquitectura Web Resiliente (99.99% Uptime) y Modelos Financieros Cuantitativos frente a volatilidad.\n\n¿Deseas revisarlos o descargar los documentos técnicos?';
    }

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        time: getCurrentTime(),
        actionType: type,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = 'Gracias por escribirnos. Nuestro equipo técnico y directivo revisará tus requerimientos. Puedes dejar tus datos en el Formulario de Prospectos o en la Calculadora de Proyectos para recibir una propuesta formal inmediata.';
      
      const lower = userText.toLowerCase();
      if (lower.includes('precio') || lower.includes('costo') || lower.includes('cuanto') || lower.includes('presupuesto')) {
        reply = 'Nuestros proyectos parten desde $1,800 USD en automatización y $3,200 USD en desarrollo web. Puedes calcular tu presupuesto exacto en la sección de Calculadora.';
      } else if (lower.includes('contacto') || lower.includes('correo') || lower.includes('telefono') || lower.includes('whatsapp')) {
        reply = 'Puedes escribirnos directamente a empresaalhadiqainvest@gmail.com o enviarnos un WhatsApp corporativo. ¿Deseas que coordinemos una llamada?';
      } else if (lower.includes('servicio') || lower.includes('ia') || lower.includes('software') || lower.includes('automatizacion')) {
        reply = 'Ofrecemos soluciones avanzadas en Automatización IA, Plataformas Web y Consultoría Financiera. Revisa nuestras fichas interactivas con efecto Spotlight.';
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: reply,
        time: getCurrentTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Window (with smooth slide-up + fade-in animation) */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] max-h-[85vh] rounded-3xl glass-panel-elevated border border-white/20 shadow-2xl flex flex-col overflow-hidden mb-4 animate-slideUp transition-all duration-300">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-[#0e172a] to-slate-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-amber-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-md">
                  <div className="w-full h-full bg-[#090D16] rounded-[11px] flex items-center justify-center font-black text-amber-400 text-xs">
                    SBS
                  </div>
                </div>
                {/* Active Green Indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white">Smith Advisor IA</h4>
                  <span className="text-[10px] font-semibold px-1.5 py-0.2 bg-amber-400/20 text-amber-300 rounded border border-amber-400/30">
                    Alhadiqa
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Agente Virtual Activo · En línea</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Minimizar chat"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area (Executive WhatsApp/Telegram Dark Style) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#080d19]/90 text-xs">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${
                      isBot
                        ? 'bg-slate-800/95 text-slate-100 rounded-tl-sm border border-white/10 shadow-sm'
                        : 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium rounded-tr-sm shadow-md'
                    }`}
                  >
                    {msg.text}

                    {/* Contextual Action Buttons in Bot Messages */}
                    {msg.actionType === 'services' && onScrollToServices && (
                      <div className="pt-2.5 mt-2 border-t border-white/10">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onScrollToServices();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-bold text-[11px] flex items-center gap-1 border border-amber-400/30 transition-colors cursor-pointer"
                        >
                          <Layers className="w-3 h-3" />
                          <span>Ir al Catálogo de Servicios</span>
                        </button>
                      </div>
                    )}

                    {msg.actionType === 'quote' && onScrollToCalculator && (
                      <div className="pt-2.5 mt-2 border-t border-white/10">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onScrollToCalculator();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-[11px] flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                        >
                          <Calculator className="w-3 h-3" />
                          <span>Abrir Calculadora de Proyectos</span>
                        </button>
                      </div>
                    )}

                    {msg.actionType === 'advisor' && (
                      <div className="pt-2.5 mt-2 border-t border-white/10 flex flex-wrap gap-2">
                        <a
                          href="https://wa.me/584220273766?text=Hola%20Smith%20Business%20Solutions,%20deseo%20asesor%C3%ADa%20personalizada%20para%20mi%20empresa."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] transition-colors flex items-center gap-1"
                          title="WhatsApp: 0422 027 3766"
                        >
                          <Phone className="w-3 h-3" />
                          <span>WhatsApp: 0422 027 3766</span>
                        </a>
                        {onScrollToContact && (
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              onScrollToContact();
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-[10px] transition-colors cursor-pointer"
                          >
                            Llenar Formulario
                          </button>
                        )}
                      </div>
                    )}

                    {msg.actionType === 'insights' && onScrollToInsights && (
                      <div className="pt-2.5 mt-2 border-t border-white/10">
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            onScrollToInsights();
                          }}
                          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-bold text-[11px] flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>Explorar Sección de Whitepapers</span>
                        </button>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-800/80 rounded-tl-sm w-fit border border-white/5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies Bar */}
          <div className="px-3 py-2 bg-slate-950/80 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <button
              onClick={() => handleQuickReply('insights')}
              type="button"
              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-amber-300 bg-amber-400/10 hover:bg-amber-400/25 border border-amber-400/30 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Whitepapers
            </button>
            <button
              onClick={() => handleQuickReply('services')}
              type="button"
              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 bg-white/5 hover:bg-amber-400/20 hover:text-amber-300 hover:border-amber-400/30 border border-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Ver Servicios
            </button>
            <button
              onClick={() => handleQuickReply('quote')}
              type="button"
              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 bg-white/5 hover:bg-amber-400/20 hover:text-amber-300 hover:border-amber-400/30 border border-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Solicitar Cotización
            </button>
            <button
              onClick={() => handleQuickReply('advisor')}
              type="button"
              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 bg-white/5 hover:bg-emerald-400/20 hover:text-emerald-300 hover:border-emerald-400/30 border border-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Hablar con Asesor
            </button>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-slate-900 border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu consulta ejecutiva..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-white text-xs focus:border-amber-400/60 focus:outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="w-9 h-9 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-slate-950 flex items-center justify-center transition-all cursor-pointer shadow-md shadow-amber-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Circular Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-400 p-[2px] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group relative flex items-center justify-center"
        aria-label="Abrir Asesor Corporativo"
      >
        <div className="w-full h-full bg-[#0a0f1d] rounded-full flex items-center justify-center relative overflow-hidden">
          {/* Subtle gradient shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent group-hover:opacity-100 opacity-60 transition-opacity" />

          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <MessageCircle className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
            </div>
          )}
        </div>

        {/* Unread message badge */}
        {!isOpen && hasUnread && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-lg border-2 border-[#090D16]">
            1
          </span>
        )}

        {/* Floating tooltip */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-semibold whitespace-nowrap shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            ¿Dudas? Chatea con nosotros
          </div>
        )}
      </button>
    </div>
  );
};
