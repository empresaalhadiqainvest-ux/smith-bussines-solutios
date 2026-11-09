import React, { useState } from 'react';
import { Calculator, Code2, Menu } from 'lucide-react';

interface NavbarProps {
  onOpenWidgetCode: () => void;
  onOpenSpotlightCode: () => void;
  onOpenMultiStepCode: () => void;
  onOpenChatCode: () => void;
  onScrollToCalculator: () => void;
  onToggleSidebar?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWidgetCode,
  onOpenSpotlightCode,
  onOpenMultiStepCode,
  onOpenChatCode,
  onScrollToCalculator,
  onToggleSidebar,
}) => {
  const [showCodeDropdown, setShowCodeDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Sidebar Toggle + Brand wordmark */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              type="button"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer flex items-center justify-center shrink-0"
              title="Abrir menú de secciones laterales"
              aria-label="Abrir menú lateral de secciones"
            >
              <Menu className="w-4 h-4 text-amber-400" />
            </button>
          )}

          <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-400 p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/10">
              <div className="w-full h-full bg-[#090D16] rounded-[7px] flex items-center justify-center text-xs font-black text-amber-400 tracking-wider">
                SBS
              </div>
            </div>
            <span className="hidden sm:inline">Smith Business Solutions</span>
            <span className="sm:hidden font-extrabold text-white text-base">SBS</span>
          </a>
        </div>

        {/* Zone 2: Minimalist Section Menu Opener */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onToggleSidebar}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all cursor-pointer group hover:border-amber-400/40"
            title="Abrir menú de barras laterales de secciones"
          >
            <Menu className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-90 transition-transform duration-300" />
            <span>Menú de Secciones</span>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-400/20">
              8 Secciones
            </span>
          </button>
        </div>

        {/* Zone 3: Primary Action + Standalone Code Dropdown */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <button
              onClick={() => setShowCodeDropdown(!showCodeDropdown)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg border border-white/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Ver códigos Vanilla (HTML, CSS y JS puro)"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Códigos Vanilla</span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>

            {showCodeDropdown && (
              <div
                className="absolute right-0 mt-2 w-56 rounded-xl glass-panel-elevated border border-white/15 p-2 shadow-2xl z-50 text-xs space-y-1"
                onClick={() => setShowCodeDropdown(false)}
              >
                <button
                  onClick={onOpenMultiStepCode}
                  className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>1. Formulario Multi-Paso</span>
                  <span className="text-[10px] text-amber-400">3 Pasos</span>
                </button>
                <button
                  onClick={onOpenChatCode}
                  className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>2. Chat Flotante IA</span>
                  <span className="text-[10px] text-emerald-400">Widget</span>
                </button>
                <button
                  onClick={onOpenSpotlightCode}
                  className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>3. Grid Spotlight Hover</span>
                  <span className="text-[10px] text-blue-400">CSS Var</span>
                </button>
                <button
                  onClick={onOpenWidgetCode}
                  className="w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>4. Calculadora Estimación</span>
                  <span className="text-[10px] text-purple-400">Estimador</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={onScrollToCalculator}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-lg shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Estimar Proyecto</span>
          </button>
        </div>
      </div>
    </header>
  );
};
