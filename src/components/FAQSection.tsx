import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Clock,
  DollarSign,
  Cpu,
  Layers,
  Send,
} from 'lucide-react';

export interface FAQItem {
  id: string;
  category: 'servicios' | 'tiempos' | 'garantias' | 'contacto';
  question: string;
  answer: string;
  highlights?: string[];
  icon: React.ElementType;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'servicios-alcance',
    category: 'servicios',
    question: '¿Qué soluciones y capacidades técnicas desarrolla Smith Business Solutions?',
    answer:
      'Diseñamos ingeniería digital de alto rendimiento orientada a maximizar conversiones: tiendas e-commerce ultrarrápidas (Headless React 19, Next.js, Shopify Plus), agentes comerciales de inteligencia artificial en WhatsApp Cloud API operativos 24/7, pasarelas de pago internacionales y auditorías forenses de fuga de ventas en checkout.',
    highlights: [
      'Tiendas e-commerce con checkout sub-segundo (Stripe, PayPal, Apple Pay)',
      'Chatbots IA en WhatsApp para ventas, soporte y recuperación de carritos',
      'Plataformas web empresariales y paneles administrativos a medida',
    ],
    icon: Layers,
  },
  {
    id: 'tiempos-sprint',
    category: 'tiempos',
    question: '¿Cuáles son los plazos promedio de desarrollo y entrega de un proyecto?',
    answer:
      'Operamos con un modelo ágil de sprints semanales. La activación del equipo técnico ocurre dentro de las primeras 48 horas tras formalizar el contrato. Los bots de IA y automatizaciones se despliegan en 2 a 4 semanas, mientras que las tiendas y plataformas a medida se completan en 3 a 5 semanas.',
    highlights: [
      'Sprint de inicio en 48 horas',
      'Automatizaciones y Chatbots IA: 2 a 4 semanas',
      'Plataformas E-Commerce completas: 3 a 5 semanas',
    ],
    icon: Clock,
  },
  {
    id: 'presupuestos-divisas',
    category: 'servicios',
    question: '¿Cómo se calcula el presupuesto y qué métodos de pago aceptan?',
    answer:
      'Nuestras tarifas se calculan de forma transparente según la escala del negocio (Startup, PyME o Corporativo) y el ritmo de entrega requerido. Puedes utilizar nuestra Calculadora Online para obtener una cotización estimada al instante. Aceptamos transferencias en USD y EUR a través de pasarelas internacionales (Stripe, transferencias bancarias SWIFT/SEPA y pagos digitales seguros).',
    highlights: [
      'Estimación transparente en tiempo real desde la web',
      'Cobros en USD y EUR sin costes ocultos',
      'Estructura de pagos por hitos de entrega cumplidos',
    ],
    icon: DollarSign,
  },
  {
    id: 'nda-sla-garantias',
    category: 'garantias',
    question: '¿Ofrecen acuerdos de confidencialidad (NDA) y Acuerdos de Nivel de Servicio (SLA)?',
    answer:
      'Absolutamente. La seguridad corporativa es innegociable. Antes de cualquier análisis de datos o acceso a infraestructura firmamos un Acuerdo de No Divulgación (NDA bilateral). Cada desarrollo incluye SLA con garantía técnica de uptime del 99.9%, auditoría de seguridad y soporte post-lanzamiento.',
    highlights: [
      'NDA bilateral vinculante antes del inicio del proyecto',
      'SLA certificado con soporte continuo y tiempos de respuesta ágiles',
      'Garantía técnica de código y seguridad certificada',
    ],
    icon: ShieldCheck,
  },
  {
    id: 'holding-respaldo',
    category: 'garantias',
    question: '¿Cuál es el respaldo institucional de Al-Hadiqa Invest Holding?',
    answer:
      'Smith Business Solutions es la división estratégica de desarrollo digital, e-commerce e inteligencia artificial de Al-Hadiqa Invest Holding. Esta estructura respalda cada proyecto con solidez financiera, capacidad operativa internacional y visión empresarial de largo plazo.',
    highlights: [
      'División de tecnología de Al-Hadiqa Invest Holding',
      'Solvencia y gobernanza corporativa internacional',
      'Capacidad para proyectos de alta escala y expansión transfronteriza',
    ],
    icon: Cpu,
  },
  {
    id: 'whatsapp-soporte',
    category: 'contacto',
    question: '¿Cómo funciona la atención directa por WhatsApp y soporte técnico?',
    answer:
      'Contamos con una línea directa de comunicación corporativa en el número 0422 027 3766 (+58 422 027 3766). A través de este canal puedes coordinar consultas inmediatas con nuestros directores técnicos, recibir demos personalizadas o dar seguimiento a tus requerimientos sin intermediarios.',
    highlights: [
      'WhatsApp directo: 0422 027 3766 (+58 422 027 3766)',
      'Atención comercial y asesoría técnica personalizada',
      'Sesiones de consultoría estratégica por Google Meet en < 24 horas',
    ],
    icon: Send,
  },
];

interface FAQSectionProps {
  onScrollToCalculator?: () => void;
  onScrollToContact?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onScrollToCalculator,
  onScrollToContact,
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'servicios-alcance': true, // Default open first item for immediate discovery
  });
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    activeCategory === 'todos'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-cyan-600/5 via-amber-500/5 to-emerald-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Preguntas Frecuentes & Garantías</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
            Claridad técnica y comercial desde el primer contacto
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Respuestas directas a las inquietudes más comunes de directores y empresarios que eligen a Smith Business Solutions para escalar sus operaciones digitales.
          </p>

          {/* Category Filter Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'todos', label: 'Todas las Preguntas' },
              { id: 'servicios', label: 'E-Commerce & Servicios' },
              { id: 'tiempos', label: 'Plazos & Sprints' },
              { id: 'garantias', label: 'NDA & Seguridad' },
              { id: 'contacto', label: 'WhatsApp & Contacto' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Grid of Disclosures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            const IconComponent = faq.icon;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-amber-400/30 shadow-xl shadow-amber-500/5'
                    : 'bg-slate-950/60 hover:bg-slate-900/60 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Disclosure Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl border shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-amber-400/10 border-amber-400/30 text-amber-300'
                          : 'bg-white/5 border-white/10 text-slate-400'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white leading-snug pt-0.5">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg border border-white/10 bg-white/5 shrink-0 transition-transform duration-300 text-slate-400 ${
                      isOpen ? 'rotate-180 text-amber-400 border-amber-400/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Disclosure Content Panel */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 space-y-4 border-t border-white/5 animate-fade-up">
                    <p className="leading-relaxed">{faq.answer}</p>

                    {faq.highlights && (
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400/90 block">
                          Puntos Clave:
                        </span>
                        <ul className="space-y-1.5">
                          {faq.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Direct Inquiries Assistance */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel-elevated border border-cyan-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm sm:text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>¿Tienes un requerimiento específico o arquitectura a medida?</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Conversa directamente con un consultor sénior en WhatsApp o calcula tu presupuesto en línea.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {onScrollToCalculator && (
              <button
                type="button"
                onClick={onScrollToCalculator}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors cursor-pointer"
              >
                Calcular Presupuesto
              </button>
            )}

            <a
              href={`https://wa.me/584220273766?text=${encodeURIComponent(
                'Hola Smith Business Solutions. Tengo una consulta sobre los servicios y me gustaría hablar con un consultor.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              title="WhatsApp: 0422 027 3766"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp: 0422 027 3766</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
