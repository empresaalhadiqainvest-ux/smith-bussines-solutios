import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import { ServiceItem, SolutionType } from '../types';
import { ArrowUpRight, Calculator, CheckCircle2, ChevronRight, Cpu, Layers, TrendingUp } from 'lucide-react';

interface DynamicServicesProps {
  onSelectServiceForCalculator: (solutionType: SolutionType) => void;
  onOpenServiceDetails: (service: ServiceItem) => void;
}

export const DynamicServices: React.FC<DynamicServicesProps> = ({
  onSelectServiceForCalculator,
  onOpenServiceDetails,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | SolutionType>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.solutionType === activeFilter);

  return (
    <section id="servicios" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              Catálogo Dinámico de Capacidades
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Soluciones diseñadas para resolver cuellos de botella empresariales
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Filtra por área de especialidad y selecciona la solución que mejor se adapte a tus objetivos para estimar tiempos e inversión.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Todas las Áreas
            </button>
            <button
              onClick={() => setActiveFilter('automation')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'automation'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Automatización
            </button>
            <button
              onClick={() => setActiveFilter('software')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'software'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Software & Web
            </button>
            <button
              onClick={() => setActiveFilter('consulting')}
              type="button"
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeFilter === 'consulting'
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Consultoría
            </button>
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon =
              service.solutionType === 'automation'
                ? Cpu
                : service.solutionType === 'software'
                ? Layers
                : TrendingUp;

            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300"
              >
                {/* Visual Header with Real Generated Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-90" />
                  
                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-black/60 backdrop-blur-md text-amber-300 border border-white/10">
                    {service.tag}
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span>0{index + 1}. Servicio Especializado</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-emerald-400 font-medium">{service.typicalTimeline}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Key Deliverables Bullet list */}
                    <div className="pt-2 space-y-1.5 border-t border-white/5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Entregables Principales:
                      </p>
                      {service.deliverables.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions & Pricing Indicator */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Inversión base desde:</span>
                      <span className="text-white font-mono font-bold text-sm tabular-nums">
                        ${service.startingPrice.toLocaleString()} USD
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onOpenServiceDetails(service)}
                        type="button"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg border border-white/10 transition-colors"
                      >
                        <span>Detalles</span>
                        <ChevronRight className="w-3 h-3 text-slate-400" />
                      </button>

                      <button
                        onClick={() => onSelectServiceForCalculator(service.solutionType)}
                        type="button"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                      >
                        <Calculator className="w-3 h-3" />
                        <span>Estimar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
