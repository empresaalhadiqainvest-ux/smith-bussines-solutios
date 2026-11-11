import React from 'react';
import { ArrowUp, Code2, MapPin, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenWidgetCode: () => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWidgetCode,
  onOpenTerms,
  onOpenPrivacy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#060911] text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-white font-bold text-base">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#060911] rounded-[3px] flex items-center justify-center text-[10px] font-black text-amber-400">
                  SBS
                </div>
              </div>
              <span>Smith Business Solutions</span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm">
              Ingeniería de Tiendas E-Commerce de Alto Rendimiento, Sistemas de Ventas y Agentes de Inteligencia Artificial para Empresas Globales.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#auditor-ecommerce" className="hover:text-amber-400 text-amber-300 font-semibold transition-colors">
              Auditor E-Commerce
            </a>
            <a href="#servicios" className="hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#precios" className="hover:text-white transition-colors">
              Precios
            </a>
            <a href="#calculadora" className="hover:text-white transition-colors">
              Calculadora
            </a>
            <a href="#testimonios" className="hover:text-white transition-colors">
              Testimonios
            </a>
            <a href="#casos" className="hover:text-white transition-colors">
              Casos de Éxito
            </a>
            <a href="#insights" className="hover:text-white transition-colors text-amber-300">
              Insights & Whitepapers
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Preguntas Frecuentes
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
            <button
              onClick={onOpenTerms}
              type="button"
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Términos
            </button>
            <button
              onClick={onOpenPrivacy}
              type="button"
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacidad
            </button>
            <button
              onClick={onOpenWidgetCode}
              type="button"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Código Widget (Vanilla JS)</span>
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Smith Business Solutions · Alhadiqa Invest.</span>
            <span aria-hidden="true">·</span>
            <span>Todos los derechos reservados.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href="https://wa.me/584220273766?text=Hola%20Smith%20Business%20Solutions,%20deseo%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              title="Atención directa por WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: 0422 027 3766</span>
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="flex items-center gap-1 text-slate-400 text-[11px]">
              <MapPin className="w-3 h-3 text-slate-500" />
              Maturín, Estado Monagas, Venezuela
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer ml-auto"
            >
              <span>Subir</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
