import React from 'react';
import { CAPABILITY_PILLARS, OWNER_CONTACT } from '../data/servicesData';
import { CapabilityPillar, PillarId } from '../types';
import {
  ArrowRight,
  Check,
  Cpu,
  ExternalLink,
  LayoutDashboard,
  Plus,
  Server,
  Shield,
  TrendingUp,
} from 'lucide-react';

interface CapabilitiesSectionProps {
  selectedFunctionIds: string[];
  onInspectPillar: (pillar: CapabilityPillar) => void;
  onAddPillarFunctions: (pillar: CapabilityPillar) => void;
  onOrderBusinessApp: () => void;
}

const PILLAR_ICONS: Record<PillarId, React.ElementType> = {
  estrategia: TrendingUp,
  automatizacion: Cpu,
  cloud: Server,
  ciberseguridad: Shield,
};

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({
  selectedFunctionIds,
  onInspectPillar,
  onAddPillarFunctions,
  onOrderBusinessApp,
}) => {
  const businessAppAdded =
    selectedFunctionIds.includes('cloud-panel') &&
    selectedFunctionIds.includes('cloud-web');

  return (
    <section id="capacidades" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#00FF41]/25 pb-5">
          <div className="space-y-1.5">
            <p className="text-xs font-mono text-[#00FF41]">Catálogo de Capacidades</p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Soluciones Empresariales
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-emerald-200/75 max-w-md">
            Inspecciona cada área operativa o añade directamente sus funciones clave a tu orden
            personalizada.
          </p>
        </div>

        {/* 2x2 Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITY_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id];
            const alreadyAdded = pillar.presetFunctionIds.every((id) =>
              selectedFunctionIds.includes(id)
            );

            return (
              <article
                key={pillar.id}
                className="matrix-panel matrix-panel-interactive rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-11 h-11 rounded-lg border border-[#00FF41]/40 bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-emerald-300/75">
                      {pillar.indexLabel}. Capacidad Técnica
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {pillar.indexLabel}. {pillar.title}
                    </h3>
                    <p className="text-sm text-emerald-100/75 leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#00FF41]/15 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onInspectPillar(pillar)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 hover:text-[#00FF41] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Ver entregables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onAddPillarFunctions(pillar)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      alreadyAdded
                        ? 'bg-[#00FF41]/15 border-[#00FF41] text-[#00FF41]'
                        : 'bg-white/[0.04] hover:bg-[#00FF41] border-[#00FF41]/35 text-emerald-100 hover:text-[#050805]'
                    }`}
                  >
                    {alreadyAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Funciones agregadas</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Añadir al configurador</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Featured Own Web App Showcase for Entrepreneurs */}
        <article className="matrix-panel matrix-panel-interactive rounded-2xl p-6 sm:p-8 border border-[#00FF41]/45">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border border-[#00FF41]/45 bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41] shrink-0">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#00FF41]">
                    App Web Propia · Para Emprendedores y Negocios
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Sistema de Gestión para Negocios
                  </h3>
                </div>
              </div>

              <p className="text-sm text-emerald-100/80 leading-relaxed">
                Aplicación web desarrollada por{' '}
                <strong className="text-white">{OWNER_CONTACT.brandName}</strong> diseñada
                especialmente para emprendedores que buscan ordenar y escalar su operación diaria.
                Administra inventario, ventas, clientes y movimientos operativos en tiempo real
                desde cualquier computadora o teléfono.
              </p>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-emerald-200/85">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                  <span>Control de inventario y ventas</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                  <span>Registro de clientes y pedidos</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                  <span>Acceso web multi-dispositivo</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={OWNER_CONTACT.businessAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-lg bg-[#00FF41] hover:bg-[#39ff14] text-[#050805] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Abrir Sistema de Gestión</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <button
                type="button"
                onClick={onOrderBusinessApp}
                className={`w-full py-3 px-4 rounded-lg border text-xs font-semibold transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
                  businessAppAdded
                    ? 'bg-[#00FF41]/15 border-[#00FF41] text-[#00FF41]'
                    : 'bg-[#030603] border-[#00FF41]/35 hover:border-[#00FF41] text-emerald-100 hover:text-[#00FF41]'
                }`}
              >
                {businessAppAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Agregado a tu Orden</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5 shrink-0" />
                    <span>Solicitar Implementación</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
