import React from 'react';
import { CapabilityPillar } from '../types';
import { Check, Plus, X } from 'lucide-react';

interface CapabilityModalProps {
  pillar: CapabilityPillar | null;
  onClose: () => void;
  onLoadPillarFunctions: (pillar: CapabilityPillar) => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({
  pillar,
  onClose,
  onLoadPillarFunctions,
}) => {
  if (!pillar) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="capability-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        className="matrix-panel rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-[#00FF41]/70 shadow-[0_0_40px_rgba(0,255,65,0.2)] space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#00FF41]/20 pb-4">
          <span className="text-xs font-mono text-[#00FF41]">
            {pillar.indexLabel}. Especificación Técnica
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors cursor-pointer"
            aria-label="Cerrar detalles"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <h3
            id="capability-modal-title"
            className="font-display text-2xl sm:text-3xl font-bold text-neon"
          >
            {pillar.title}
          </h3>
          <p className="text-sm text-emerald-100/85 leading-relaxed">{pillar.fullDesc}</p>

          <div className="rounded-xl bg-[#030603] border border-[#00FF41]/25 p-4 space-y-3">
            <p className="text-xs font-mono font-semibold text-[#00FF41]">
              Entregables incluidos
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
              {pillar.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#00FF41] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-[#00FF41]/35 text-xs font-semibold text-emerald-200 hover:bg-[#00FF41]/10 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={() => {
              onLoadPillarFunctions(pillar);
              onClose();
            }}
            className="px-5 py-2.5 rounded-lg bg-[#00FF41] hover:bg-[#39ff14] text-[#050805] font-bold text-xs inline-flex items-center gap-2 shadow-[0_0_18px_rgba(0,255,65,0.3)] transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar Funciones a mi Orden</span>
          </button>
        </div>
      </div>
    </div>
  );
};
