import React from 'react';
import { ArrowRight, CheckCircle2, Code2, Database, Rocket, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Methodology: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>();

  const steps = [
    {
      num: '01',
      title: 'Diagnóstico & Arquitectura',
      desc: 'Análisis minucioso de la infraestructura actual, definición de requerimientos técnicos y diseño del plano de arquitectura sin ambigüedades.',
      deliverable: 'Documento de Arquitectura y Especificación Técnica',
      icon: Database,
    },
    {
      num: '02',
      title: 'Ingeniería en Sprints Ágiles',
      desc: 'Construcción modular con revisiones semanales demostrables. El cliente tiene visibilidad constante del progreso en entornos de staging.',
      deliverable: 'Despliegues continuos en ambientes de prueba',
      icon: Code2,
    },
    {
      num: '03',
      title: 'Auditoría de Calidad & Seguridad',
      desc: 'Pruebas rigurosas de carga, cobertura de pruebas unitarias y validación de seguridad contra vulnerabilidades antes de tocar producción.',
      deliverable: 'Reporte de pruebas y certificación de seguridad',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Despliegue & Transferencia',
      desc: 'Puesta en marcha con zero-downtime, entrega del 100% del código fuente, documentación para el equipo y período de estabilización.',
      deliverable: 'Entrega de repositorios y manuales operativos',
      icon: Rocket,
    },
  ];

  return (
    <section id="metodologia" className="py-20 border-t border-white/5 relative">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        {/* Section Header with Fade-up on scroll */}
        <div
          className={`max-w-2xl mb-14 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Marco Metodológico
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Un proceso predecible, transparente y sin sorpresas
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminamos la incertidumbre en los proyectos tecnológicos mediante hitos claros con entregables medibles en cada etapa.
          </p>
        </div>

        {/* 4 Steps Grid with Staggered Fade-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                style={{
                  transitionDelay: isInView ? `${idx * 110}ms` : '0ms',
                }}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6 relative group hover:border-amber-400/40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-amber-400/80">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
                    Entregable Clave:
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
