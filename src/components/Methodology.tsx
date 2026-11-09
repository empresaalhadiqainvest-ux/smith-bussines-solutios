import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Code2, Database, Rocket, ShieldCheck, FileCheck, Cpu, Terminal, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface PhaseDetail {
  num: string;
  step: string;
  duration: string;
  title: string;
  desc: string;
  deliverable: string;
  icon: React.ElementType;
  deliverablesList: string[];
  securityProtocol: string;
}

export const Methodology: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>();
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0);

  const steps: PhaseDetail[] = [
    {
      num: '01',
      step: 'Fase 01',
      duration: 'Semana 1',
      title: 'Diagnóstico & Arquitectura',
      desc: 'Análisis minucioso de la infraestructura actual, definición de requerimientos técnicos y diseño del plano de arquitectura sin ambigüedades.',
      deliverable: 'Documento de Arquitectura y Especificación Técnica',
      icon: Database,
      deliverablesList: [
        'Diagrama de componentes en nube (AWS / GCP / Cloudflare)',
        'Auditoría de latencia de checkout y puntos de fricción',
        'Especificación de esquemas de datos y endpoints de API',
        'Firma de NDA bilateral y asignación de repositorio privado',
      ],
      securityProtocol: 'Validación de cumplimiento ISO 27001 y cifrado AES-256 en reposo.',
    },
    {
      num: '02',
      step: 'Fase 02',
      duration: 'Semanas 2-3',
      title: 'Ingeniería en Sprints Ágiles',
      desc: 'Construcción modular con revisiones semanales demostrables. El cliente tiene visibilidad constante del progreso en entornos de staging protegidos.',
      deliverable: 'Despliegues continuos en ambientes de prueba',
      icon: Code2,
      deliverablesList: [
        'Desarrollo de storefront headless en React 19 y TypeScript',
        'Entrenamiento del agente de ventas en WhatsApp Cloud API',
        'Integración con pasarelas de pago globales (Stripe, PayPal)',
        'Revisiones ejecutivas semanales con demo funcional en vivo',
      ],
      securityProtocol: 'Pipelines CI/CD con escaneo de vulnerabilidades estáticas (SAST).',
    },
    {
      num: '03',
      step: 'Fase 03',
      duration: 'Semana 4',
      title: 'Auditoría de Calidad & Seguridad',
      desc: 'Pruebas rigurosas de carga, cobertura de pruebas unitarias y validación de seguridad contra vulnerabilidades antes de tocar producción.',
      deliverable: 'Reporte de pruebas y certificación de seguridad',
      icon: ShieldCheck,
      deliverablesList: [
        'Pruebas de estrés y concurrencia (simulación de 10k usuarios)',
        'Verificación de Core Web Vitals (Puntuación 95+ en móvil)',
        'Testeo de resiliencia en pasarelas ante caídas de red',
        'Auditoría forense de fallbacks y recuperación de carritos',
      ],
      securityProtocol: 'Test de penetración y revisión de políticas de privacidad GDPR/CCPA.',
    },
    {
      num: '04',
      step: 'Fase 04',
      duration: 'Semana 5+',
      title: 'Despliegue & Transferencia',
      desc: 'Puesta en marcha con zero-downtime, entrega del 100% del código fuente, documentación para el equipo y período de estabilización.',
      deliverable: 'Entrega de repositorios y manuales operativos',
      icon: Rocket,
      deliverablesList: [
        'Despliegue en producción con conmutación DNS sin corte',
        'Cesión total de derechos y transferencia de repositorios Git',
        'Sesión ejecutiva de capacitación operativa para su equipo',
        'Garantía de soporte directo y estabilización por 60 días',
      ],
      securityProtocol: 'Entrega de credenciales maestras y rotación de llaves criptográficas.',
    },
  ];

  const activePhase = steps[selectedPhaseIndex];

  return (
    <section id="metodologia" className="py-24 border-t border-white/5 relative overflow-hidden" aria-label="Metodología">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/5 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        {/* Section Header with Fade-up on scroll */}
        <div
          className={`max-w-3xl mb-16 space-y-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400">
            Gobernanza & Marco Metodológico
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Un proceso predecible, transparente y sin sorpresas
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Eliminamos la incertidumbre en los proyectos tecnológicos mediante una hoja de ruta estructurada en 4 fases, con entregables verificables y fechas límite garantizadas por contrato.
          </p>
        </div>

        {/* Interactive 4-Phase Roadmap Navigation Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = selectedPhaseIndex === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedPhaseIndex(idx)}
                style={{
                  transitionDelay: isInView ? `${idx * 90}ms` : '0ms',
                }}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900/90 border-amber-400/60 shadow-xl shadow-amber-500/10'
                    : 'glass-card border-white/5 hover:border-white/15'
                } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                {/* Active indicator top bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-300 rounded-t-2xl" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {step.step}
                  </span>
                  <span className="font-mono text-[11px] text-amber-400 font-semibold">
                    {step.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                        : 'bg-white/5 text-slate-400 border border-white/10 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Deep Dive Card */}
        <div className="glass-panel-elevated rounded-3xl p-6 sm:p-9 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Overview Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="font-mono text-2xl font-black text-amber-400">
                  {activePhase.num}
                </span>
                <div>
                  <span className="font-bold uppercase tracking-wider text-white block">
                    {activePhase.step} · {activePhase.title}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    Plazo de Ejecución: {activePhase.duration}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activePhase.desc}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                  Entregable Principal de la Fase:
                </span>
                <p className="text-xs sm:text-sm text-amber-300 font-semibold flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{activePhase.deliverable}</span>
                </p>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{activePhase.securityProtocol}</span>
              </div>
            </div>

            {/* Right Deliverables Column */}
            <div className="lg:col-span-7 bg-slate-900/60 rounded-2xl p-6 border border-white/5 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>Actividades & Entregables Auditables ({activePhase.step})</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Transparencia 100%
                </span>
              </div>

              <div className="space-y-3">
                {activePhase.deliverablesList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                <span>Acceso directo a staging y reporte de avance en tiempo real</span>
                <span className="text-amber-400 font-medium">SLA de Respuesta &lt; 2 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
