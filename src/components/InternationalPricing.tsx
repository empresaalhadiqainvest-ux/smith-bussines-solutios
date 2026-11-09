import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Cpu,
  DollarSign,
  Globe,
  Layers,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { SolutionType } from '../types';

interface InternationalPricingProps {
  onSelectSolution: (solutionType: SolutionType) => void;
  onOpenProposalModal: () => void;
}

export const InternationalPricing: React.FC<InternationalPricingProps> = ({
  onSelectSolution,
  onOpenProposalModal,
}) => {
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('USD');
  const rateUSDToEUR = 0.92;

  const formatPrice = (usd: number) => {
    if (currency === 'EUR') {
      const eur = Math.round(usd * rateUSDToEUR);
      return `€${eur.toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  const tiers = [
    {
      id: 'automation' as SolutionType,
      name: 'Chatbots IA de Venta & Automatización 24/7',
      tagline: 'Convierte visitantes en clientes automáticos por WhatsApp y Web sin intervención humana.',
      baseUSD: 1800,
      period: 'por despliegue completo',
      badge: 'Conversión 24/7',
      popular: false,
      features: [
        'Agente IA en WhatsApp Business Cloud API & Widget Web',
        'Entrenamiento con tu catálogo de productos y preguntas frecuentes',
        'Recuperación automática de carritos abandonados con enlaces de pago',
        'Integración con tu CRM (HubSpot, Zoho, Notion) y Google Sheets',
        'Extracción OCR de comprobantes bancarios y confirmación instantánea',
        'Garantía de estabilización y optimización continua por 60 días',
      ],
      metric: '+38% Carritos Salvados',
      metricLabel: 'Recuperación promedio de ventas perdidas',
    },
    {
      id: 'software' as SolutionType,
      name: 'Tienda E-Commerce & Web Ultrarrápida',
      tagline: 'Arquitectura Headless en React 19 y Shopify Plus con checkout en menos de 0.4s.',
      baseUSD: 3200,
      period: 'por plataforma e-commerce a medida',
      badge: 'Solución Estrella E-Commerce',
      popular: true,
      features: [
        'Storefront a medida en React 19 / Next.js / Shopify Headless',
        'Checkout optimizado en 1-Click (Apple Pay, Google Pay, Stripe, PayPal)',
        'Carga sub-segundo (98+ en Google PageSpeed y Core Web Vitals)',
        'Sincronización multi-moneda (USD / EUR / Moneda Local) y pasarelas globales',
        'Panel administrativo con gestión de inventario, cupones y roles (RBAC)',
        'Código fuente 100% transferido con propiedad intelectual completa',
      ],
      metric: '+215% Conversión Móvil',
      metricLabel: 'Velocidad de procesamiento transaccional',
    },
    {
      id: 'consulting' as SolutionType,
      name: 'Sistemas de Venta & Embudo de Ingresos',
      tagline: 'Estructuración integral de embudos de alta conversión, pricing dinámico y pasarelas de pago.',
      baseUSD: 2400,
      period: 'por sistema y estrategia',
      badge: 'Escala de Facturación',
      popular: false,
      features: [
        'Auditoría forense de embudo de checkout y puntos de fuga de clientes',
        'Estrategia de pricing dinámico, márgenes de contribución y LTV/CAC',
        'Configuración de pasarelas redundantes para cero transacciones rechazadas',
        'Dashboards ejecutivos interactivos en tiempo real con alertas de ventas',
        'Sistema de suscripciones recurrentes y upsells / order bumps automáticos',
        'Soporte directo con Directores de Estrategia Comercial (Growth Advisory)',
      ],
      metric: '+42% Ticket Promedio',
      metricLabel: 'Optimización de estructura de ingresos',
    },
  ];

  return (
    <section id="precios" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Estándar Corporativo Internacional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Planes de Inversión y Modelos de Trabajo
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Estructura de precios transparente y adaptable a escala internacional para empresas con visión de liderazgo global.
            </p>
          </div>

          {/* Currency Switcher (USD / EUR) */}
          <div className="flex items-center gap-3 p-1.5 bg-slate-900/80 border border-white/10 rounded-2xl backdrop-blur-xl shrink-0 self-start md:self-auto">
            <span className="text-xs text-slate-400 pl-2 font-medium">Divisa:</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('EUR')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currency === 'EUR'
                    ? 'bg-gradient-to-r from-emerald-400 to-emerald-300 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                EUR (€)
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                tier.popular
                  ? 'bg-gradient-to-b from-[#0e172a] via-[#090f1d] to-[#040711] border-2 border-amber-400/50 shadow-2xl shadow-amber-500/10 hover:border-amber-400'
                  : 'glass-panel-elevated hover:border-white/20'
              }`}
            >
              {/* Highlight ribbon on popular tier */}
              {tier.popular && (
                <div className="absolute -top-1 -right-1">
                  <div className="bg-gradient-to-l from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-lg">
                    Recomendado
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Header info */}
                <div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                    tier.popular
                      ? 'text-amber-300 bg-amber-400/10 border-amber-400/30'
                      : 'text-emerald-300 bg-emerald-500/10 border-emerald-400/30'
                  }`}>
                    {tier.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3">{tier.name}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{tier.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Inversión base inicial:</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                      {formatPrice(tier.baseUSD)}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{currency}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block pt-0.5">{tier.period}</span>
                </div>

                {/* Proof Metric Strip */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/30 to-slate-900/60 border border-emerald-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">{tier.metricLabel}</span>
                    <span className="text-sm font-bold text-emerald-300 font-mono">{tier.metric}</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Alcance y Cobertura Ejecutiva:
                  </span>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-white/10 space-y-2">
                <button
                  type="button"
                  onClick={() => onSelectSolution(tier.id)}
                  className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/25 hover:scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 text-white hover:scale-[1.02] border border-white/10'
                  }`}
                >
                  <span>Configurar en Estimador</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  *Ajustable según escala de la empresa (Startup, PYME o Corporación).
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Enterprise Trust Markers */}
        <div className="mt-16 p-6 rounded-2xl glass-card grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs text-slate-300">
          <div className="space-y-1">
            <span className="font-mono text-emerald-400 font-bold block text-sm">99.9% UPTIME</span>
            <span className="text-[11px] text-slate-400">Garantía SLA en infraestructuras</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-amber-300 font-bold block text-sm">NDA ESTRICTO</span>
            <span className="text-[11px] text-slate-400">Protección legal previa a cualquier análisis</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-white font-bold block text-sm">CÓDIGO 100% CEDIDO</span>
            <span className="text-[11px] text-slate-400">Sin ataduras ni royalties de software</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-blue-400 font-bold block text-sm">HOLDING AL-HADIQA</span>
            <span className="text-[11px] text-slate-400">Respaldo corporativo institucional</span>
          </div>
        </div>
      </div>
    </section>
  );
};
