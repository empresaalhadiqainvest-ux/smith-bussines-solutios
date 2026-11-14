import React from 'react';
import { ArrowUp, Mail, MapPin, MessageCircle } from 'lucide-react';
import { OWNER_CONTACT } from '../data/servicesData';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTerms,
  onOpenPrivacy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#00FF41]/25 bg-[#050805]/95 text-emerald-200/75 text-xs py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#00FF41]/15">
          {/* Brand Summary */}
          <div className="space-y-2">
            <span className="font-display text-lg font-bold tracking-wider text-neon block">
              Smith Bussines Solutions 2026
            </span>
            <p className="text-emerald-100/70 text-xs max-w-md leading-relaxed">
              Consultoría estratégica, automatización con IA, infraestructura cloud y ciberseguridad.
              Respaldado por {OWNER_CONTACT.holding}.
            </p>
          </div>

          {/* Navigation & Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-100/80">
            <a href="#inicio" className="hover:text-[#00FF41] transition-colors">
              Inicio
            </a>
            <a href="#capacidades" className="hover:text-[#00FF41] transition-colors">
              Capacidades
            </a>
            <a href="#configurador" className="hover:text-[#00FF41] transition-colors">
              Configurador
            </a>
            <button
              type="button"
              onClick={onOpenTerms}
              className="hover:text-[#00FF41] transition-colors cursor-pointer"
            >
              Términos
            </button>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#00FF41] transition-colors cursor-pointer"
            >
              Privacidad
            </button>
          </div>
        </div>

        {/* Bottom Contact & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-emerald-300/70">
          <p>
            © {new Date().getFullYear()} Smith Bussines Solutions 2026 · {OWNER_CONTACT.holding}. Todos
            los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${OWNER_CONTACT.email}`}
              className="inline-flex items-center gap-1.5 hover:text-[#00FF41] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00FF41]" />
              <span>{OWNER_CONTACT.email}</span>
            </a>

            <a
              href={`https://wa.me/${OWNER_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                'Hola Smith Business Solutions, deseo información sobre sus funciones técnicas.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00FF41] hover:underline font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {OWNER_CONTACT.whatsappDisplay}</span>
            </a>

            <span className="inline-flex items-center gap-1 text-emerald-300/65">
              <MapPin className="w-3.5 h-3.5" />
              <span>{OWNER_CONTACT.location}</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#00FF41] transition-colors cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
