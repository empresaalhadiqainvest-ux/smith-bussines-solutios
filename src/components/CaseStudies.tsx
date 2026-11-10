import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/servicesData';
import { Building, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'retail' | 'saas' | 'b2b'>('all');

  const filteredStudies = activeTab === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => {
        if (activeTab === 'retail') return item.sector.toLowerCase().includes('retail') || item.sector.toLowerCase().includes('moda');
        if (activeTab === 'saas') return item.sector.toLowerCase().includes('saas') || item.sector.toLowerCase().includes('tecnología');
        if (activeTab === 'b2b') return item.sector.toLowerCase().includes('b2b') || item.sector.toLowerCase().includes('industrial');
        return true;
      });

  return (
    <section id="casos" className="py-24 border-t border-white/5 relative overflow-hidden" aria-label="Casos de Estudio">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-l from-emerald-500/5 via-blue-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Anti-Slop Clean Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              Evidencia Cuantitativa & Casos de Éxito
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Impacto financiero auditado en producción
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Metodología orientada a objetivos financieros y de eficiencia con métricas verificables desde el primer mes de despliegue.
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Anti-slop compliant) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-white/10 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white/10 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos los Sectores
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('retail')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'retail'
                  ? 'bg-white/10 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              E-Commerce & Retail
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('saas')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'saas'
                  ? 'bg-white/10 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fintech & B2B
            </button>
          </div>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStudies.map((item, idx) => (
            <article
              key={idx}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-amber-400/40 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Sector and Timeline unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Building className="w-3.5 h-3.5 text-blue-400" />
                    {item.sector}
                  </span>
                  <span className="font-mono text-emerald-400 font-semibold">{item.timeline}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.client}
                  </h3>
                  <p className="text-xs text-amber-300/90 font-medium mt-1">
                    {item.solution}
                  </p>
                </div>

                {/* Primary Metric Pill-free Callout with Tabular Figures */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900/60 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                    Resultado Auditado:
                  </span>
                  <p className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight tabular-nums">
                    {item.metric}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Trust Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Código fuente 100% transferido</span>
                </span>
                <span className="font-mono text-[10px] text-slate-400">SLA 99.9%</span>
              </div>
            </article>
          ))}
        </div>

        {/* Global Case Studies Bottom Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              Todos los proyectos se ejecutan bajo <strong>Acuerdo de Confidencialidad (NDA)</strong> estricto y propiedad intelectual absoluta.
            </span>
          </div>
          <span className="text-emerald-400 font-mono font-semibold shrink-0">
            Auditados por Smith Business Solutions
          </span>
        </div>
      </div>
    </section>
  );
};
