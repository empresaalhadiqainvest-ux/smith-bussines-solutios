import React, { useState, useEffect } from 'react';
import {
  Compass,
  Flame,
  Layers,
  DollarSign,
  Calculator,
  BarChart3,
  BookOpen,
  Quote,
  Send,
  X,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Menu,
  ShieldCheck,
} from 'lucide-react';

export interface NavSectionItem {
  id: string;
  number: string;
  label: string;
  category: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

export const SECTIONS: NavSectionItem[] = [
  {
    id: 'inicio',
    number: '00',
    label: 'Inicio (Portada)',
    category: 'Visión Ejecutiva',
    icon: Compass,
  },
  {
    id: 'auditor-ecommerce',
    number: '01',
    label: 'Auditor E-Commerce',
    category: 'Diagnóstico en Vivo',
    icon: Flame,
    badge: 'Fuga de Ventas',
    badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  },
  {
    id: 'servicios',
    number: '02',
    label: 'Servicios',
    category: 'E-Commerce & Sistemas',
    icon: Layers,
  },
  {
    id: 'precios',
    number: '03',
    label: 'Precios',
    category: 'Tarifas USD / EUR',
    icon: DollarSign,
  },
  {
    id: 'calculadora',
    number: '04',
    label: 'Calculadora',
    category: 'Estimador Online',
    icon: Calculator,
  },
  {
    id: 'metricas-rendimiento',
    number: '05',
    label: 'Métricas',
    category: 'Crecimiento Recharts',
    icon: BarChart3,
    badge: 'Recharts',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
  },
  {
    id: 'testimonios',
    number: '06',
    label: 'Testimonios',
    category: 'Casos & Social Proof',
    icon: Quote,
  },
  {
    id: 'insights',
    number: '07',
    label: 'Perspectivas',
    category: 'Whitepapers & Tendencias',
    icon: BookOpen,
  },
  {
    id: 'contacto',
    number: '08',
    label: 'Contacto',
    category: 'Formulario & Propuesta',
    icon: Send,
    badge: 'Directo',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  },
];

interface SidebarNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenToggle: () => void;
  onOpenProposalModal?: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  isOpen,
  onClose,
  onOpenToggle,
  onOpenProposalModal,
}) => {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  // Track scroll position and determine active section with IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const item = SECTIONS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut listener: ESC to close, M to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      // Auto close on mobile
      if (window.innerWidth < 1024) {
        onClose();
      }
    }
  };

  const activeIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const activeSectionObj = SECTIONS[activeIndex !== -1 ? activeIndex : 0];
  const progressPct = Math.round(((activeIndex + 1) / SECTIONS.length) * 100);

  return (
    <>
      {/* 1. Sleek Floating Left Edge Pill Trigger Button (Visible anytime when drawer is closed) */}
      {!isOpen && (
        <aside
          aria-label="Acceso rápido a secciones"
          className="fixed left-4 top-24 z-30 hidden md:flex flex-col items-center"
        >
          <button
            onClick={onOpenToggle}
            type="button"
            className="group flex items-center gap-2.5 px-3 py-2 rounded-full glass-panel-elevated border border-white/15 shadow-xl hover:border-amber-400/50 hover:bg-slate-900/90 transition-all duration-300 text-xs text-slate-200 cursor-pointer"
            title="Abrir menú de secciones laterales (Presiona M)"
          >
            <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Menu className="w-3 h-3" />
            </div>
            <span className="font-semibold text-[11px] tracking-wide text-slate-300 group-hover:text-white">
              Secciones
            </span>
            <span className="text-[10px] font-mono text-amber-400 bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
              {activeSectionObj.number}
            </span>
          </button>
        </aside>
      )}

      {/* 2. Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 transition-opacity duration-300 animate-fadeIn"
          aria-hidden="true"
        />
      )}

      {/* 3. Slide-Out Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[85vw] max-w-[360px] sm:w-[380px] z-50 bg-[#060911]/98 border-r border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Menú de Navegación de Secciones Smith Business Solutions"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-400 p-[1px] flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-[#060911] rounded-[10px] flex items-center justify-center text-xs font-black text-amber-400">
                SBS
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Smith Business Solutions
              </h3>
              <p className="text-[10px] text-slate-400">
                Al-Hadiqa Invest Holding Group
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Cerrar menú lateral"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reading Progress Indicator */}
        <div className="px-5 py-3 bg-black/40 border-b border-white/5 flex items-center justify-between text-[11px]">
          <span className="text-slate-400">
            Sección <strong className="text-white">{activeSectionObj.number}</strong> de {SECTIONS.length}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="font-mono text-emerald-400 font-bold">{progressPct}%</span>
          </div>
        </div>

        {/* Scrollable List of Sections */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-thin scrollbar-thumb-white/10">
          <div className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Índice de Secciones
          </div>

          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => handleNavigate(section.id)}
                type="button"
                className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-all cursor-pointer group ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/20 via-slate-800/80 to-transparent border border-emerald-500/30 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`font-mono text-xs font-bold w-6 shrink-0 transition-colors ${
                      isActive ? 'text-amber-400' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  >
                    {section.number}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                        : 'bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="truncate">
                    <span
                      className={`text-xs block font-semibold truncate ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {section.label}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate">
                      {section.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {section.badge && (
                    <span
                      className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${
                        section.badgeColor || 'text-slate-300 bg-white/5 border-white/10'
                      }`}
                    >
                      {section.badge}
                    </span>
                  )}
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive
                        ? 'text-emerald-400 translate-x-0.5'
                        : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-slate-950/90 space-y-3">
          {onOpenProposalModal && (
            <button
              onClick={() => {
                onClose();
                onOpenProposalModal();
              }}
              type="button"
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 hover:brightness-110 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Solicitar Propuesta Formal</span>
            </button>
          )}

          <div className="flex items-center justify-between gap-2 pt-1">
            <a
              href="https://wa.me/584220273766?text=Hola%20Smith%20Business%20Solutions,%20deseo%20asesor%C3%ADa%20personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              title="WhatsApp: 0422 027 3766"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: 0422 027 3766</span>
            </a>

            <a
              href="mailto:empresaalhadiqainvest@gmail.com"
              className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-medium transition-colors"
              title="Enviar correo formal"
            >
              Email
            </a>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              NDA Corporativo
            </span>
            <span>Caracas · Dubái · Miami</span>
          </div>
        </div>
      </aside>
    </>
  );
};
