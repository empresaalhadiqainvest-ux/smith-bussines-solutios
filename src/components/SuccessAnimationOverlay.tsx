import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Cpu,
  DollarSign,
  Download,
  ExternalLink,
  FileCheck,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { triggerCorporateConfetti } from '../utils/confetti';

export interface SuccessOverlayData {
  type: 'contact_form' | 'project_estimation';
  title: string;
  subtitle: string;
  referenceId?: string;
  total?: number;
  weeks?: number;
  solutionTitle?: string;
  scaleTitle?: string;
  clientName?: string;
  companyName?: string;
  onDownloadReceipt?: () => void;
  onPrimaryAction?: () => void;
  primaryActionLabel?: string;
}

interface SuccessAnimationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  data: SuccessOverlayData | null;
}

export const SuccessAnimationOverlay: React.FC<SuccessAnimationOverlayProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  // Trigger confetti and reset timer when overlay opens
  useEffect(() => {
    if (isOpen) {
      triggerCorporateConfetti();
      setProgress(100);

      // Handle keyboard escape
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  // Auto-dismiss countdown (8 seconds)
  useEffect(() => {
    if (!isOpen || isPaused) return;

    const interval = 80; // ms
    const step = (interval / 8000) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev <= step) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prev - step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isOpen, isPaused, onClose]);

  if (!isOpen || !data) return null;

  const isContact = data.type === 'contact_form';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg my-auto glass-panel-elevated rounded-3xl border border-emerald-400/40 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.25)] overflow-hidden animate-success-pop"
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-gradient-to-b from-emerald-500/20 via-amber-400/10 to-transparent blur-2xl pointer-events-none" />

        {/* Top Progress countdown line */}
        <div className="w-full h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Cerrar modal de confirmación"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 text-center space-y-6 relative z-10">
          {/* Animated Success Badge with SVG Checkmark */}
          <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
            {/* Pulsing aura ring */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping opacity-40" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/30 to-amber-400/20 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg
                className="w-10 h-10 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  className="animate-checkmark"
                />
              </svg>
            </div>
            {/* Sparkle badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Heading and Copy */}
          <div className="space-y-2">
            {data.referenceId && (
              <span className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
                Código: {data.referenceId}
              </span>
            )}
            <h3 id="success-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {data.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          {/* Detail Card Snapshot */}
          {isContact ? (
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
              {data.clientName && (
                <div className="flex justify-between text-slate-400">
                  <span>Contacto:</span>
                  <span className="text-white font-semibold">{data.clientName}</span>
                </div>
              )}
              {data.companyName && (
                <div className="flex justify-between text-slate-400">
                  <span>Empresa:</span>
                  <span className="text-amber-300 font-semibold">{data.companyName}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>Atención prioritaria:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  &lt; 2 horas hábiles
                </span>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-left text-xs space-y-2.5 max-w-md mx-auto">
              {data.total !== undefined && (
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-slate-400">Presupuesto Proyectado:</span>
                  <span className="text-xl font-bold font-mono text-amber-300 tabular-nums">
                    ${data.total.toLocaleString()} USD
                  </span>
                </div>
              )}
              {data.weeks !== undefined && (
                <div className="flex justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    Plazo de Ejecución:
                  </span>
                  <span className="text-white font-semibold font-mono">
                    {data.weeks} {data.weeks === 1 ? 'semana' : 'semanas'}
                  </span>
                </div>
              )}
              {data.solutionTitle && (
                <div className="flex justify-between text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                    Solución:
                  </span>
                  <span className="text-slate-200 font-medium truncate max-w-[200px]">
                    {data.solutionTitle}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-slate-400 pt-1">
                <span>Garantía:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Código 100% Transferido & NDA
                </span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              {data.onPrimaryAction && (
                <button
                  type="button"
                  onClick={() => {
                    data.onPrimaryAction?.();
                    onClose();
                  }}
                  className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                >
                  <FileCheck className="w-4 h-4 text-slate-950" />
                  <span>{data.primaryActionLabel || 'Ver Propuesta Formal'}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              )}

              <a
                href={`https://wa.me/584220273766?text=${encodeURIComponent(
                  isContact
                    ? `Hola Smith Business Solutions. Acabo de registrar mi solicitud formal (${data.referenceId || ''}) para ${data.companyName || 'mi empresa'}. Deseo coordinar con un consultor.`
                    : `Hola Smith Business Solutions. Finalicé mi estimación de proyecto en la web por $${(data.total || 0).toLocaleString()} USD (${data.weeks || 0} semanas). Deseo formalizar la propuesta técnica.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerCorporateConfetti()}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20 shrink-0"
                title="WhatsApp: 0422 027 3766"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>WhatsApp Directo</span>
                <ExternalLink className="w-3 h-3 text-slate-950" />
              </a>
            </div>

            {data.onDownloadReceipt && (
              <button
                type="button"
                onClick={data.onDownloadReceipt}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer pt-1"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Descargar copia de respaldo (.txt)</span>
              </button>
            )}

            <div>
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors pt-2 cursor-pointer"
              >
                Continuar navegando ({Math.ceil((progress / 100) * 8)}s)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
