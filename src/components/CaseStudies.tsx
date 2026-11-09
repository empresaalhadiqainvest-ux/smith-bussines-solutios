import React from 'react';
import { CASE_STUDIES } from '../data/servicesData';
import { ArrowUpRight, BarChart3, Building, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <section id="casos" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Evidencia Cuantitativa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Casos de impacto con resultados medibles
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Metodología orientada a objetivos financieros y de eficiencia con métricas verificables desde el primer mes de despliegue.
          </p>
        </div>

        {/* Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-400" />
                    {item.sector}
                  </span>
                  <span className="font-mono text-emerald-400">{item.timeline}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{item.client}</h3>
                  <p className="text-xs text-amber-300/90 font-medium mt-0.5">{item.solution}</p>
                </div>

                {/* Primary Metric Pill-free Callout */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900/60 border border-white/10 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Resultado Auditado
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-amber-300 font-mono tracking-tight tabular-nums">
                    {item.metric}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Despliegue bajo NDA y código fuente transferido</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
