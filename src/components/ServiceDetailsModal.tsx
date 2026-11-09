import React from 'react';
import { ServiceItem, SolutionType } from '../types';
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  TrendingUp,
  X,
} from 'lucide-react';

interface ServiceDetailsModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForCalculator: (solutionType: SolutionType) => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  service,
  onClose,
  onSelectForCalculator,
}) => {
  if (!service) return null;

  const handleEstimate = () => {
    onSelectForCalculator(service.solutionType);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-auto glass-panel-elevated rounded-2xl border border-white/20 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header Image Banner */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1526] via-[#0e1526]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title and Tag */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-md border border-amber-400/30">
              {service.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto flex-1">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Impact Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900/60 border border-emerald-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/30">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Impacto Medible Comprobado</p>
                <p className="text-sm font-bold text-white">{service.roiMetric}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Cronograma regular: <strong className="text-white">{service.typicalTimeline}</strong></span>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Entregables Clave de la Solución
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Stack Tecnológico & Metodologías
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400">Punto de partida:</span>
              <p className="font-mono font-bold text-lg text-white">
                ${service.startingPrice.toLocaleString()} USD
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Cerrar
              </button>

              <button
                type="button"
                onClick={handleEstimate}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Calcular en el Estimador</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
