import React, { useEffect, useRef } from 'react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem, SolutionType } from '../types';
import { useInView } from '../hooks/useInView';
import {
  ArrowRight,
  Bot,
  Calculator,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface SpotlightServicesGridProps {
  onSelectServiceForCalculator: (solutionType: SolutionType) => void;
  onOpenServiceDetails: (service: ServiceItem) => void;
  onOpenSpotlightCodeModal: () => void;
}

export const SpotlightServicesGrid: React.FC<SpotlightServicesGridProps> = ({
  onSelectServiceForCalculator,
  onOpenServiceDetails,
  onOpenSpotlightCodeModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>();

  // Vanilla JavaScript Spotlight Hover Event Handler using CSS variables
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>('.spotlight-card');

    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');

      // 3D Perspective Tilt in Motion
      const tiltX = (y / rect.height - 0.5) * -7;
      const tiltY = (x / rect.width - 0.5) * 7;
      card.style.transform = `perspective(900px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px)`;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.setProperty('--spotlight-opacity', '0');
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const card = e.currentTarget as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.style.setProperty('--spotlight-opacity', '1');
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.setProperty('--spotlight-opacity', '0');
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('touchmove', handleTouchMove, { passive: true });
      card.addEventListener('touchend', handleTouchEnd);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.removeEventListener('touchmove', handleTouchMove);
        card.removeEventListener('touchend', handleTouchEnd);
      });
    };
  }, []);

  return (
    <section id="servicios" className="py-24 relative overflow-hidden" aria-label="Servicios Principales">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-amber-500/5 via-blue-600/5 to-emerald-500/5 blur-[140px] pointer-events-none -z-10" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        {/* Section Header with Fade-up on scroll */}
        <header
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              Ingeniería, Sistemas & Estrategia Financiera
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Servicios Especializados de Alto Impacto
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Mueve el cursor sobre cada tarjeta para interactuar con el efecto <strong className="text-amber-300 font-semibold">Spotlight Hover</strong>. Cada solución está diseñada para resolver cuellos de botella y maximizar el margen de tu organización.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSpotlightCodeModal}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white rounded-xl border border-white/10 transition-colors cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Ver Código Spotlight (Vanilla JS)</span>
            </button>
          </div>
        </header>

        {/* Semantic 3-Column Spotlight Grid with Staggered Fade-up */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const isAutomation = service.solutionType === 'automation';
            const isSoftware = service.solutionType === 'software';
            const Icon = isAutomation ? Bot : isSoftware ? Layers : TrendingUp;
            const accentBadgeColor = isAutomation
              ? 'text-amber-300 bg-amber-400/10 border-amber-400/20'
              : isSoftware
              ? 'text-blue-300 bg-blue-500/10 border-blue-400/20'
              : 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20';

            return (
              <article
                key={service.id}
                style={{
                  transitionDelay: isInView ? `${index * 130}ms` : '0ms',
                }}
                className={`spotlight-card flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Visual Header with Real Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0f1d] z-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-95" />

                  {/* Category Pill-free Text Chip */}
                  <div className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase border backdrop-blur-md ${accentBadgeColor}`}>
                    {service.tag}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white shadow-lg">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 relative z-10">
                  <div className="space-y-3.5">
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="font-mono text-amber-400/90 font-bold">0{index + 1}.</span>
                      <span>Solución Corporativa</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400 font-medium font-mono">{service.typicalTimeline}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Key Deliverables */}
                    <div className="pt-3 border-t border-white/5 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Entregables de Alto Rendimiento:
                      </span>
                      {service.deliverables.slice(0, 2).map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Pricing & Action Buttons */}
                  <footer className="pt-5 border-t border-white/10 space-y-3.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Inversión base desde:</span>
                      <span className="text-white font-mono font-bold text-base tabular-nums">
                        ${service.startingPrice.toLocaleString()} USD
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {/* "Saber más" button with smooth lift hover animation as requested */}
                      <button
                        onClick={() => onOpenServiceDetails(service)}
                        type="button"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40 hover:border-white/20 active:translate-y-0 cursor-pointer"
                      >
                        <span>Saber más</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                      </button>

                      {/* Direct hook into the Project Calculator */}
                      <button
                        onClick={() => onSelectServiceForCalculator(service.solutionType)}
                        type="button"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 rounded-xl shadow-md shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 cursor-pointer"
                      >
                        <Calculator className="w-3.5 h-3.5 text-slate-950" />
                        <span>Estimar</span>
                      </button>
                    </div>
                  </footer>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
