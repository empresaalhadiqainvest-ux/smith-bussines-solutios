import React, { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sbs_cookie_consent');
    if (!consent) {
      const timer = window.setTimeout(() => setIsVisible(true), 1500);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('sbs_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('sbs_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Consentimiento de Cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 matrix-panel border border-[#00FF41]/40 p-5 rounded-xl animate-fade-up text-emerald-100"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#00FF41] shrink-0 mt-0.5" />

        <div className="space-y-2.5 text-xs flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-bold text-white text-sm">Privacidad y Cookies</h4>
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="text-emerald-300/70 hover:text-[#00FF41] p-1 rounded transition-colors cursor-pointer"
              aria-label="Cerrar aviso de cookies"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-emerald-100/75 leading-relaxed text-[11px]">
            Usamos almacenamiento local técnico para conservar tu selección de funciones e historial
            de órdenes en este dispositivo.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="py-1.5 px-3 rounded-lg bg-[#00FF41] hover:bg-[#39ff14] text-[#050805] font-bold text-[11px] transition-colors cursor-pointer"
            >
              Aceptar
            </button>
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="py-1.5 px-3 rounded-lg bg-[#030603] hover:bg-[#00FF41]/10 text-emerald-100 border border-[#00FF41]/30 text-[11px] font-medium transition-colors cursor-pointer"
            >
              Solo Esenciales
            </button>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-[11px] text-[#00FF41] hover:underline ml-auto cursor-pointer"
            >
              Privacidad
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
