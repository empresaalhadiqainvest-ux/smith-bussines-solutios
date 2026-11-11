import React, { useEffect, useState } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sbs_cookie_consent');
    if (!consent) {
      // Delay display slightly for smooth page entry
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
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
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 glass-panel-elevated border border-white/15 p-5 rounded-2xl shadow-2xl animate-fade-up text-slate-200"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-bold text-white text-sm flex items-center gap-1.5">
              <span>Privacidad & Cookies</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </h4>
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
              title="Cerrar y aceptar solo esenciales"
              aria-label="Cerrar aviso de cookies"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-slate-300 leading-relaxed text-[11px]">
            Utilizamos cookies técnicas y de telemetría para optimizar la experiencia interactiva, recordar cálculos de presupuesto y asegurar el funcionamiento 3D de la plataforma.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="py-1.5 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-[11px] transition-colors cursor-pointer shadow-sm shadow-amber-500/20"
            >
              Aceptar Todo
            </button>
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-[11px] font-medium transition-colors cursor-pointer"
            >
              Solo Esenciales
            </button>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-[11px] text-amber-400 hover:underline ml-auto cursor-pointer"
            >
              Ver Política
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
