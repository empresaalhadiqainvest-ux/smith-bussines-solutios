import React, { useState } from 'react';
import { OWNER_CONTACT } from '../data/servicesData';
import { Check, ChevronDown, MessageCircle, SlidersHorizontal } from 'lucide-react';

type FAQCategory = 'todas' | 'servicios' | 'ordenes' | 'despliegue' | 'seguridad';

interface FAQItem {
  id: string;
  category: Exclude<FAQCategory, 'todas'>;
  question: string;
  answer: string;
  highlights: string[];
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-servicios',
    category: 'servicios',
    question: '¿Qué soluciones y capacidades técnicas ofrece Smith Business Solutions?',
    answer:
      'Desarrollamos arquitectura digital a medida organizada en cuatro pilares operativos: Consultoría Estratégica, Automatización con IA (agentes comerciales en WhatsApp 24/7 y flujos RPA), Infraestructura Cloud & Web de alto rendimiento y Ciberseguridad Zero-Trust.',
    highlights: [
      'Agentes de IA entrenados con el catálogo y políticas de tu negocio',
      'Plataformas web, paneles administrativos y sistemas de gestión',
      'Auditorías de procesos y tableros ejecutivos de KPIs en tiempo real',
    ],
  },
  {
    id: 'faq-calculadora',
    category: 'ordenes',
    question: '¿Cómo funciona el Configurador de Orden Basado en Funciones?',
    answer:
      'En lugar de tarifas rígidas, seleccionas únicamente los módulos técnicos que necesita tu empresa, defines tu escala operativa y el ritmo de despliegue. Al completar tus datos, la orden se envía directamente a nuestro correo corporativo o por WhatsApp con el desglose exacto de funciones.',
    highlights: [
      'Carga rápida mediante escenarios preconfigurados en 1 clic',
      'Cálculo automático del plazo estimado de entrega en semanas',
      'Envío directo a WhatsApp (0422 027 3766) y correo electrónico',
    ],
  },
  {
    id: 'faq-emprendedores',
    category: 'servicios',
    question: '¿En qué consiste el Sistema de Gestión para Negocios para emprendedores?',
    answer:
      'Es una aplicación web propia diseñada para ayudar a emprendedores y comercios en crecimiento a centralizar su inventario, ventas diarias, registro de clientes y control operativo desde cualquier dispositivo. Puedes probarla en línea y solicitar su implementación adaptada a tu negocio.',
    highlights: [
      'Control centralizado de inventario, ventas y clientes',
      'Acceso web multi-dispositivo sin instalaciones complejas',
      'Personalizable e integrable con pedidos por WhatsApp',
    ],
  },
  {
    id: 'faq-tiempos',
    category: 'despliegue',
    question: '¿Cuáles son los plazos de inicio y despliegue de un proyecto?',
    answer:
      'Trabajamos mediante sprints semanales ágiles. Tras recibir tu orden de funciones, coordinamos la revisión técnica inicial en menos de 24 horas hábiles. Los módulos individuales de automatización o seguridad se implementan entre 1 y 2 semanas, y las plataformas completas entre 3 y 5 semanas según prioridad.',
    highlights: [
      'Revisión de orden y arranque técnico en menos de 24 horas',
      'Tres niveles de prioridad: Estándar, Prioritario y Sprint Express',
      'Entregas incrementales verificables al cierre de cada sprint',
    ],
  },
  {
    id: 'faq-seguridad',
    category: 'seguridad',
    question: '¿Cómo protegen la información de mi empresa y qué respaldo institucional tienen?',
    answer:
      'Smith Bussines Solutions 2026 opera como división tecnológica de Al-Hadiqa Invest Holding. Toda especificación comercial o acceso técnico está cubierto por acuerdos de confidencialidad (NDA bilateral), arquitectura Zero-Trust, cifrado de extremo a extremo y planes de respaldo continuo.',
    highlights: [
      'Acuerdo de confidencialidad (NDA) previo a la integración',
      'Control estricto de accesos y copias de seguridad programadas',
      'Respaldo corporativo de Al-Hadiqa Invest Holding',
    ],
  },
  {
    id: 'faq-contacto',
    category: 'ordenes',
    question: '¿Por qué canales recibo respuesta tras enviar mi orden de servicio?',
    answer:
      'Tu orden llega directamente a nuestro canal personal de WhatsApp (0422 027 3766) y al correo oficial empresaalhadiqainvest@gmail.com. Desde allí coordinamos una sesión técnica o avanzamos de inmediato con la arquitectura solicitada, sin intermediarios.',
    highlights: [
      'WhatsApp directo: 0422 027 3766 (+58 422 027 3766)',
      'Correo corporativo: empresaalhadiqainvest@gmail.com',
      'Atención directa con el equipo de arquitectura e ingeniería',
    ],
  },
];

const CATEGORY_LABELS: { id: FAQCategory; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'ordenes', label: 'Órdenes' },
  { id: 'despliegue', label: 'Plazos' },
  { id: 'seguridad', label: 'Seguridad' },
];

interface FAQSectionProps {
  onScrollToCalculator: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onScrollToCalculator }) => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('todas');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const visibleItems =
    activeCategory === 'todas'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#00FF41]/25 pb-5">
          <div className="space-y-1.5">
            <p className="text-xs font-mono text-[#00FF41]">Preguntas Frecuentes</p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Respuestas sobre Nuestros Servicios
            </h2>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar preguntas">
            {CATEGORY_LABELS.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstMatch =
                    cat.id === 'todas'
                      ? FAQ_ITEMS[0]
                      : FAQ_ITEMS.find((i) => i.category === cat.id);
                  setOpenId(firstMatch ? firstMatch.id : null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#00FF41] text-[#050805] font-bold'
                    : 'bg-[#030603] text-emerald-200/80 hover:text-[#00FF41] border border-[#00FF41]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {visibleItems.map((item, idx) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div
                key={item.id}
                className={`matrix-panel rounded-xl overflow-hidden transition-colors ${
                  isOpen
                    ? 'border-[#00FF41] shadow-[0_0_24px_rgba(0,255,65,0.12)]'
                    : 'border-[#00FF41]/25 hover:border-[#00FF41]/55'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF41]"
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="font-mono text-xs text-[#00FF41] shrink-0 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00FF41]' : 'text-emerald-300/70'
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#00FF41]/15 space-y-4 animate-fade-up"
                  >
                    <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed pt-3">
                      {item.answer}
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-emerald-200/90 bg-[#030603] border border-[#00FF41]/15 rounded-lg p-3"
                        >
                          <Check className="w-3.5 h-3.5 text-[#00FF41] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Action Bar */}
        <div className="matrix-panel rounded-2xl p-6 sm:p-7 border border-[#00FF41]/35 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              ¿Listo para configurar los módulos de tu proyecto?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/75">
              Selecciona tus funciones en la calculadora o escríbenos directamente si tienes una
              consulta técnica específica.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onScrollToCalculator}
              className="px-4 py-2.5 rounded-lg bg-[#00FF41] hover:bg-[#39ff14] text-[#050805] font-bold text-xs inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Ir al Configurador</span>
            </button>

            <a
              href={`https://wa.me/${OWNER_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                `Hola ${OWNER_CONTACT.brandName}, tengo una consulta sobre sus servicios.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg border border-[#00FF41]/45 hover:border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41]/10 font-semibold text-xs inline-flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp ({OWNER_CONTACT.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
