import React, { useState } from 'react';
import { Menu, SlidersHorizontal, X } from 'lucide-react';

interface NavbarProps {
  selectedCount: number;
  onScrollToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedCount,
  onScrollToCalculator,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050805]/90 backdrop-blur-md border-b border-[#00FF41]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#inicio"
          className="font-display text-lg sm:text-xl font-bold tracking-wider text-neon whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          Smith Bussines Solutions 2026
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-emerald-100/80"
        >
          <a
            href="#inicio"
            className="hover:text-[#00FF41] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Inicio
          </a>
          <a
            href="#capacidades"
            className="hover:text-[#00FF41] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Capacidades
          </a>
          <a
            href="#configurador"
            className="hover:text-[#00FF41] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Configurador
          </a>
          <a
            href="#faq"
            className="hover:text-[#00FF41] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Primary CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onScrollToCalculator}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#050805] bg-[#00FF41] hover:bg-[#39ff14] rounded-lg shadow-[0_0_16px_rgba(0,255,65,0.28)] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>
              Crear Orden{selectedCount > 0 ? ` (${selectedCount})` : ''}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg border border-[#00FF41]/30 text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#00FF41]/20 bg-[#050805]/95 px-4 py-3 space-y-1.5">
          <a
            href="#inicio"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#capacidades"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors"
          >
            Capacidades
          </a>
          <a
            href="#configurador"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors"
          >
            Configurador de Orden
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm text-emerald-100 hover:text-[#00FF41] hover:bg-[#00FF41]/10 transition-colors"
          >
            Preguntas Frecuentes
          </a>
        </div>
      )}
    </header>
  );
};
