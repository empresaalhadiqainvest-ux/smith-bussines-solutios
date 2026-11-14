import React, { useState } from 'react';
import { Check, FileText, Lock, Send, X } from 'lucide-react';
import { OWNER_CONTACT } from '../data/servicesData';

export type LegalTab = 'terms' | 'privacy';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'terms',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-up overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl matrix-panel border border-[#00FF41]/55 rounded-2xl p-6 sm:p-8 my-8 text-emerald-50 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#00FF41]/20 pb-5">
          <div>
            <p className="text-xs font-mono text-[#00FF41]">Marco Legal & Confidencialidad</p>
            <h2 id="legal-title" className="font-display text-2xl font-bold text-white mt-1">
              Smith Business Solutions
            </h2>
            <p className="text-xs text-emerald-200/70 mt-1">
              División Tecnológica de {OWNER_CONTACT.holding}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-emerald-200 hover:text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal legal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-[#00FF41] text-[#050805] border-[#00FF41]'
                : 'bg-[#030603] text-emerald-100 border-[#00FF41]/25 hover:border-[#00FF41]/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Términos del Servicio</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 text-xs font-bold rounded-lg border transition-colors cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-[#00FF41] text-[#050805] border-[#00FF41]'
                : 'bg-[#030603] text-emerald-100 border-[#00FF41]/25 hover:border-[#00FF41]/60'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Política de Privacidad</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[55vh] overflow-y-auto space-y-5 text-xs sm:text-sm text-emerald-100/85 leading-relaxed pr-2">
          {activeTab === 'terms' ? (
            <>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#00FF41] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  1. Alcance de las Órdenes de Funciones
                </h3>
                <p>
                  Las órdenes generadas mediante el configurador en línea describen los módulos
                  técnicos, escala operativa y prioridad solicitada por el cliente. Cada orden es
                  revisada por nuestro equipo para definir los detalles de arquitectura e inicio.
                </p>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#00FF41] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  2. Acuerdos de Confidencialidad (NDA)
                </h3>
                <p>
                  Toda información operativa, procesos internos o especificaciones compartidas a
                  través de WhatsApp o correo corporativo se protege bajo estricta confidencialidad y
                  acuerdo NDA bilateral antes de cualquier acceso a sistemas.
                </p>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#00FF41] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  3. Propiedad Intelectual
                </h3>
                <p>
                  Los desarrollos a medida, automatizaciones y código fuente desplegados para el
                  cliente son transferidos conforme a lo estipulado en la orden de trabajo formal.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#00FF41] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  1. Datos Recopilados
                </h3>
                <p>
                  Únicamente procesamos los datos proporcionados voluntariamente en tu orden
                  (nombre, empresa, método de contacto y módulos solicitados) para dar respuesta por
                  WhatsApp o correo electrónico.
                </p>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#00FF41] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  2. Almacenamiento Local y Privacidad
                </h3>
                <p>
                  Tu navegador guarda temporalmente el historial reciente de órdenes y tu
                  preferencia de cookies únicamente en almacenamiento local para tu conveniencia.
                  Nunca vendemos ni compartimos información con terceros.
                </p>
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#00FF41] flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  3. Contacto Directo
                </h3>
                <p>
                  Para cualquier solicitud de eliminación o modificación de registros puedes
                  escribir directamente a <strong>{OWNER_CONTACT.email}</strong>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#00FF41]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-emerald-300/75">{OWNER_CONTACT.email}</span>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${OWNER_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-[#00FF41]/40 text-[#00FF41] hover:bg-[#00FF41]/10 font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#00FF41] text-[#050805] font-bold hover:bg-[#39ff14] transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
