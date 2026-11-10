import React, { useState, useEffect, useRef } from 'react';
import {
  BadgeCheck,
  Building2,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
  Star,
} from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  companyTag: string;
  avatar: string;
  rating: number;
  highlightMetric: string;
  metricLabel: string;
  quote: string;
  tags: string[];
}

interface TestimonialsSectionProps {
  onOpenProposalModal?: () => void;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Elena Rostova',
    role: 'VP of Digital Commerce',
    company: 'Aurora Brands Global',
    companyTag: 'Moda & Retail D2C Internacional',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: '+215% Ventas Móviles',
    metricLabel: 'Carga de checkout reducida a 0.38s',
    quote:
      'Nuestra tienda anterior en Shopify tradicional se caía o ralentizaba durante campañas de descuento masivo. Smith Business Solutions reconstruyó nuestro storefront con arquitectura Headless React 19 y pasarela multi-divisa. Triplicamos la conversión en el primer trimestre sin una sola hora de inactividad.',
    tags: ['Headless E-Commerce', 'Shopify Plus', 'React 19', 'Stripe Multi-Currency'],
  },
  {
    id: 't-2',
    name: 'Marcus Sterling',
    role: 'Fundador & CEO',
    company: 'Sterling Watchmaker Co.',
    companyTag: 'Artículos de Lujo & Relojería',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: '$3.4M Facturados en 6 meses',
    metricLabel: 'Ticket promedio elevado en +42%',
    quote:
      'Vender relojes de lujo por encima de los $4,000 USD requiere una experiencia visual impecable. El visor interactivo 3D y el embudo de ventas que crearon para nosotros transmite una confianza institucional absoluta. Es el mejor retorno sobre inversión en software que hemos tenido.',
    tags: ['Visores 3D Interactivos', 'High-Ticket Checkout', 'Embudo de Ventas'],
  },
  {
    id: 't-3',
    name: 'Ing. Carlos Domínguez',
    role: 'Director de Operaciones & TI',
    company: 'Distribuidora Andina B2B',
    companyTag: 'Cadena de Suministro Mayorista',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: '-$48,000 Costos Operativos',
    metricLabel: '4,200 pedidos mensuales automatizados',
    quote:
      'El Chatbot de Ventas con IA que integraron en nuestro WhatsApp corporativo es impresionante. Nuestros clientes mayoristas hacen pedidos, consultan stock en tiempo real y reciben facturas fiscales automáticas sin que ningún operador humano tenga que intervenir manualmente.',
    tags: ['Chatbot IA WhatsApp', 'Automatización ERP', 'Ventas B2B 24/7'],
  },
  {
    id: 't-4',
    name: 'Sarah Lin',
    role: 'Head of Growth & Retention',
    company: 'NovaPay Checkout Solutions',
    companyTag: 'Fintech & Pagos Digitales',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: '0% Caídas en Black Friday',
    metricLabel: 'Picos de 18,000 transacciones simultáneas',
    quote:
      'Buscábamos un equipo capaz de diseñar sistemas cloud de grado bancario sin las burocracias lentas de las agencias tradicionales. Smith Business Solutions desplegó la arquitectura en 4 semanas exactas, cumpliendo rigurosamente los SLAs acordados.',
    tags: ['Pasarelas de Pago', 'Cloud Resilience', 'SLA 99.99%'],
  },
  {
    id: 't-5',
    name: 'Mateo Benítez',
    role: 'Director de Marketing & E-Commerce',
    company: 'UrbanStyle Storefronts',
    companyTag: 'Moda Calzado & Apparel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: '+38% Recuperación de Carritos',
    metricLabel: 'Sincronización automática con Meta & Google',
    quote:
      'Antes perdíamos más del 70% de las ventas en el carrito. Con el sistema de 1-Click Checkout y el agente de reactivación por WhatsApp recuperamos casi 4 de cada 10 usuarios que antes se marchaban. Los números hablan por sí solos.',
    tags: ['1-Click Checkout', 'Recuperación Carritos', 'Chatbots IA'],
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenProposalModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Auto-scroll carousel every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeItem = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonios" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[750px] h-[400px] bg-gradient-to-l from-emerald-500/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Prueba Social & Casos Reales Verificados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              La Confianza de Líderes en Comercio Digital & Sistemas
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Empresas y marcas internacionales que han escalado sus ventas, automatizado su logística y optimizado sus márgenes con nuestra ingeniería.
            </p>
          </div>

          {/* Carousel Navigation Buttons & Auto-scroll status */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              type="button"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title={isPaused ? 'Reanudar carrusel automático' : 'Pausar carrusel'}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={handlePrev}
              type="button"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card with Frosted Glassmorphism */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-3xl p-8 sm:p-12 glass-panel-elevated border border-white/15 shadow-2xl relative overflow-hidden transition-all duration-500"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/10 via-emerald-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Executive Photo & Identity Card */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-amber-400 via-emerald-400 to-cyan-400 shadow-xl">
                  <img
                    src={activeItem.avatar}
                    alt={activeItem.name}
                    className="w-full h-full object-cover object-center rounded-[14px]"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 p-1.5 rounded-xl shadow-lg border-2 border-[#090D16]">
                  <BadgeCheck className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">{activeItem.name}</h3>
                <p className="text-xs font-semibold text-amber-300">{activeItem.role}</p>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center justify-center lg:justify-start gap-1">
                  <Building2 className="w-3 h-3 text-slate-500" />
                  <span>{activeItem.company}</span>
                </p>
                <span className="inline-block text-[10px] font-mono text-slate-400 uppercase tracking-wider mt-1 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                  {activeItem.companyTag}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 pt-1">
                {[...Array(activeItem.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-mono font-bold text-white ml-1.5">5.0 / 5.0</span>
              </div>
            </div>

            {/* Right: Quantified Revenue Metric & Full Quote */}
            <div className="lg:col-span-8 space-y-6">
              {/* Quantified Metric Ribbon */}
              <div className="p-4 rounded-2xl bg-black/50 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium block">
                    Resultado Auditado:
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono tracking-tight">
                    {activeItem.highlightMetric}
                  </span>
                </div>
                <div className="text-right sm:border-l sm:border-white/10 sm:pl-4">
                  <span className="text-xs font-medium text-slate-300 block">{activeItem.metricLabel}</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Verificado por Smith Business Solutions</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-8 h-8 text-amber-400/20 absolute -top-4 -left-2 pointer-events-none" />
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic pl-6">
                  "{activeItem.quote}"
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-[11px] text-slate-400 font-medium">Arquitectura aplicada:</span>
                {activeItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-amber-300 border border-amber-400/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Thumbnail Navigation Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              type="button"
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 h-2.5 bg-gradient-to-r from-amber-400 to-emerald-400'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ver testimonio de ${item.name}`}
            />
          ))}
        </div>

        {/* Client Logos / Trust Badges Ribbon */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs text-slate-400">
          <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
            <span className="font-mono text-white font-bold block text-sm">+$14.8M USD</span>
            <span className="text-[11px] text-slate-500">Volumen transaccionado en tiendas creadas</span>
          </div>
          <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
            <span className="font-mono text-emerald-400 font-bold block text-sm">0.38s CHECKOUT</span>
            <span className="text-[11px] text-slate-500">Velocidad media de procesamiento</span>
          </div>
          <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
            <span className="font-mono text-amber-300 font-bold block text-sm">120+ AGENTES IA</span>
            <span className="text-[11px] text-slate-500">Bots de ventas respondiendo en vivo</span>
          </div>
          <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
            <span className="font-mono text-cyan-400 font-bold block text-sm">100% CÓDIGO PROPIO</span>
            <span className="text-[11px] text-slate-500">Propiedad intelectual transferida</span>
          </div>
        </div>
      </div>
    </section>
  );
};
