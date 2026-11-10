import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import {
  TrendingUp,
  Activity,
  Zap,
  ArrowUpRight,
  Download,
  DollarSign,
  Sparkles,
} from 'lucide-react';
import { triggerCorporateConfetti } from '../utils/confetti';

type MetricView = 'conversion' | 'traffic_gmv' | 'checkout_latency';
type TimeHorizon = '6m' | '12m' | 'comparison';
type IndustryPreset = 'retail_luxury' | 'b2b_saas' | 'cpg_multibrand';

interface DataPoint {
  month: string;
  // Conversion metrics (%)
  baselineCR: number;
  smithCR: number;
  // Users & Revenue
  mau: number;
  gmvUSD: number;
  // Checkout & Latency
  latencySec: number;
  cartRecoveryPct: number;
  recoveredRevenue: number;
}

const PRESET_DATA: Record<IndustryPreset, Record<TimeHorizon, DataPoint[]>> = {
  retail_luxury: {
    '6m': [
      { month: 'Mes 1 (Legacy)', baselineCR: 1.2, smithCR: 1.2, mau: 15000, gmvUSD: 45000, latencySec: 4.2, cartRecoveryPct: 8, recoveredRevenue: 3600 },
      { month: 'Mes 2 (Rediseño)', baselineCR: 1.3, smithCR: 2.1, mau: 22000, gmvUSD: 78000, latencySec: 2.1, cartRecoveryPct: 22, recoveredRevenue: 9500 },
      { month: 'Mes 3 (Shopify/Next)', baselineCR: 1.3, smithCR: 2.8, mau: 31000, gmvUSD: 125000, latencySec: 0.9, cartRecoveryPct: 38, recoveredRevenue: 17200 },
      { month: 'Mes 4 (WhatsApp Bot)', baselineCR: 1.4, smithCR: 3.4, mau: 44000, gmvUSD: 195000, latencySec: 0.6, cartRecoveryPct: 54, recoveredRevenue: 28400 },
      { month: 'Mes 5 (Checkout 1-Click)', baselineCR: 1.4, smithCR: 3.9, mau: 58000, gmvUSD: 270000, latencySec: 0.45, cartRecoveryPct: 62, recoveredRevenue: 36800 },
      { month: 'Mes 6 (Escalamiento)', baselineCR: 1.5, smithCR: 4.3, mau: 72000, gmvUSD: 360000, latencySec: 0.38, cartRecoveryPct: 71, recoveredRevenue: 49500 },
    ],
    '12m': [
      { month: 'M1', baselineCR: 1.2, smithCR: 1.2, mau: 15000, gmvUSD: 45000, latencySec: 4.2, cartRecoveryPct: 8, recoveredRevenue: 3600 },
      { month: 'M2', baselineCR: 1.2, smithCR: 2.0, mau: 21000, gmvUSD: 72000, latencySec: 2.3, cartRecoveryPct: 18, recoveredRevenue: 7800 },
      { month: 'M3', baselineCR: 1.3, smithCR: 2.7, mau: 29000, gmvUSD: 115000, latencySec: 1.1, cartRecoveryPct: 32, recoveredRevenue: 14500 },
      { month: 'M4', baselineCR: 1.3, smithCR: 3.2, mau: 39000, gmvUSD: 170000, latencySec: 0.7, cartRecoveryPct: 48, recoveredRevenue: 23000 },
      { month: 'M5', baselineCR: 1.4, smithCR: 3.7, mau: 51000, gmvUSD: 240000, latencySec: 0.5, cartRecoveryPct: 58, recoveredRevenue: 32000 },
      { month: 'M6', baselineCR: 1.4, smithCR: 4.1, mau: 65000, gmvUSD: 325000, latencySec: 0.42, cartRecoveryPct: 66, recoveredRevenue: 42000 },
      { month: 'M7', baselineCR: 1.5, smithCR: 4.4, mau: 80000, gmvUSD: 410000, latencySec: 0.39, cartRecoveryPct: 70, recoveredRevenue: 51000 },
      { month: 'M8', baselineCR: 1.5, smithCR: 4.6, mau: 96000, gmvUSD: 515000, latencySec: 0.38, cartRecoveryPct: 73, recoveredRevenue: 62000 },
      { month: 'M9', baselineCR: 1.6, smithCR: 4.8, mau: 112000, gmvUSD: 620000, latencySec: 0.36, cartRecoveryPct: 75, recoveredRevenue: 74000 },
      { month: 'M10', baselineCR: 1.6, smithCR: 5.0, mau: 130000, gmvUSD: 750000, latencySec: 0.35, cartRecoveryPct: 78, recoveredRevenue: 89000 },
      { month: 'M11', baselineCR: 1.7, smithCR: 5.2, mau: 148000, gmvUSD: 890000, latencySec: 0.35, cartRecoveryPct: 80, recoveredRevenue: 104000 },
      { month: 'M12', baselineCR: 1.7, smithCR: 5.5, mau: 170000, gmvUSD: 1050000, latencySec: 0.34, cartRecoveryPct: 82, recoveredRevenue: 125000 },
    ],
    'comparison': [
      { month: 'E-Com Estándar', baselineCR: 1.3, smithCR: 1.3, mau: 20000, gmvUSD: 60000, latencySec: 3.9, cartRecoveryPct: 12, recoveredRevenue: 5000 },
      { month: 'Smith Fase 1 (Headless)', baselineCR: 1.3, smithCR: 2.9, mau: 48000, gmvUSD: 190000, latencySec: 0.8, cartRecoveryPct: 45, recoveredRevenue: 28000 },
      { month: 'Smith Fase 2 (Agente IA)', baselineCR: 1.3, smithCR: 4.2, mau: 88000, gmvUSD: 420000, latencySec: 0.42, cartRecoveryPct: 72, recoveredRevenue: 64000 },
      { month: 'Smith Fase 3 (Escala Global)', baselineCR: 1.3, smithCR: 5.3, mau: 160000, gmvUSD: 940000, latencySec: 0.35, cartRecoveryPct: 81, recoveredRevenue: 118000 },
    ],
  },
  b2b_saas: {
    '6m': [
      { month: 'Mes 1', baselineCR: 0.8, smithCR: 0.8, mau: 5000, gmvUSD: 60000, latencySec: 3.5, cartRecoveryPct: 10, recoveredRevenue: 6000 },
      { month: 'Mes 2', baselineCR: 0.9, smithCR: 1.4, mau: 7500, gmvUSD: 95000, latencySec: 1.8, cartRecoveryPct: 25, recoveredRevenue: 15000 },
      { month: 'Mes 3', baselineCR: 0.9, smithCR: 2.0, mau: 11000, gmvUSD: 150000, latencySec: 0.9, cartRecoveryPct: 40, recoveredRevenue: 29000 },
      { month: 'Mes 4', baselineCR: 1.0, smithCR: 2.6, mau: 16000, gmvUSD: 230000, latencySec: 0.6, cartRecoveryPct: 55, recoveredRevenue: 48000 },
      { month: 'Mes 5', baselineCR: 1.0, smithCR: 3.1, mau: 22000, gmvUSD: 330000, latencySec: 0.48, cartRecoveryPct: 65, recoveredRevenue: 68000 },
      { month: 'Mes 6', baselineCR: 1.1, smithCR: 3.6, mau: 30000, gmvUSD: 460000, latencySec: 0.40, cartRecoveryPct: 74, recoveredRevenue: 92000 },
    ],
    '12m': [
      { month: 'M1', baselineCR: 0.8, smithCR: 0.8, mau: 5000, gmvUSD: 60000, latencySec: 3.5, cartRecoveryPct: 10, recoveredRevenue: 6000 },
      { month: 'M3', baselineCR: 0.9, smithCR: 1.8, mau: 10000, gmvUSD: 135000, latencySec: 1.1, cartRecoveryPct: 35, recoveredRevenue: 24000 },
      { month: 'M6', baselineCR: 1.0, smithCR: 3.2, mau: 26000, gmvUSD: 390000, latencySec: 0.44, cartRecoveryPct: 68, recoveredRevenue: 78000 },
      { month: 'M9', baselineCR: 1.1, smithCR: 4.1, mau: 48000, gmvUSD: 720000, latencySec: 0.38, cartRecoveryPct: 76, recoveredRevenue: 140000 },
      { month: 'M12', baselineCR: 1.2, smithCR: 4.8, mau: 78000, gmvUSD: 1250000, latencySec: 0.33, cartRecoveryPct: 83, recoveredRevenue: 230000 },
    ],
    'comparison': [
      { month: 'Portal B2B Antiguo', baselineCR: 0.9, smithCR: 0.9, mau: 6000, gmvUSD: 80000, latencySec: 4.5, cartRecoveryPct: 10, recoveredRevenue: 8000 },
      { month: 'Smith B2B Checkout', baselineCR: 0.9, smithCR: 2.2, mau: 18000, gmvUSD: 280000, latencySec: 0.75, cartRecoveryPct: 48, recoveredRevenue: 45000 },
      { month: 'Smith Cotizaciones IA', baselineCR: 0.9, smithCR: 3.5, mau: 42000, gmvUSD: 620000, latencySec: 0.45, cartRecoveryPct: 70, recoveredRevenue: 110000 },
      { month: 'Smith ERP Conectado', baselineCR: 0.9, smithCR: 4.6, mau: 75000, gmvUSD: 1180000, latencySec: 0.35, cartRecoveryPct: 82, recoveredRevenue: 215000 },
    ],
  },
  cpg_multibrand: {
    '6m': [
      { month: 'Mes 1', baselineCR: 1.5, smithCR: 1.5, mau: 30000, gmvUSD: 90000, latencySec: 3.8, cartRecoveryPct: 15, recoveredRevenue: 8000 },
      { month: 'Mes 2', baselineCR: 1.5, smithCR: 2.4, mau: 42000, gmvUSD: 160000, latencySec: 2.0, cartRecoveryPct: 30, recoveredRevenue: 19000 },
      { month: 'Mes 3', baselineCR: 1.6, smithCR: 3.1, mau: 58000, gmvUSD: 260000, latencySec: 0.95, cartRecoveryPct: 46, recoveredRevenue: 36000 },
      { month: 'Mes 4', baselineCR: 1.6, smithCR: 3.8, mau: 80000, gmvUSD: 390000, latencySec: 0.62, cartRecoveryPct: 60, recoveredRevenue: 58000 },
      { month: 'Mes 5', baselineCR: 1.7, smithCR: 4.4, mau: 108000, gmvUSD: 560000, latencySec: 0.44, cartRecoveryPct: 69, recoveredRevenue: 82000 },
      { month: 'Mes 6', baselineCR: 1.7, smithCR: 4.9, mau: 142000, gmvUSD: 780000, latencySec: 0.36, cartRecoveryPct: 77, recoveredRevenue: 112000 },
    ],
    '12m': [
      { month: 'M1', baselineCR: 1.5, smithCR: 1.5, mau: 30000, gmvUSD: 90000, latencySec: 3.8, cartRecoveryPct: 15, recoveredRevenue: 8000 },
      { month: 'M3', baselineCR: 1.6, smithCR: 3.0, mau: 55000, gmvUSD: 245000, latencySec: 1.0, cartRecoveryPct: 42, recoveredRevenue: 34000 },
      { month: 'M6', baselineCR: 1.7, smithCR: 4.7, mau: 135000, gmvUSD: 740000, latencySec: 0.38, cartRecoveryPct: 75, recoveredRevenue: 105000 },
      { month: 'M9', baselineCR: 1.8, smithCR: 5.3, mau: 220000, gmvUSD: 1350000, latencySec: 0.34, cartRecoveryPct: 80, recoveredRevenue: 190000 },
      { month: 'M12', baselineCR: 1.8, smithCR: 5.8, mau: 310000, gmvUSD: 2100000, latencySec: 0.32, cartRecoveryPct: 84, recoveredRevenue: 295000 },
    ],
    'comparison': [
      { month: 'Monolito Tradicional', baselineCR: 1.6, smithCR: 1.6, mau: 35000, gmvUSD: 110000, latencySec: 4.1, cartRecoveryPct: 14, recoveredRevenue: 9500 },
      { month: 'Smith Microservicios', baselineCR: 1.6, smithCR: 3.3, mau: 90000, gmvUSD: 450000, latencySec: 0.7, cartRecoveryPct: 52, recoveredRevenue: 52000 },
      { month: 'Smith Multicanal IA', baselineCR: 1.6, smithCR: 4.8, mau: 180000, gmvUSD: 1050000, latencySec: 0.4, cartRecoveryPct: 74, recoveredRevenue: 145000 },
      { month: 'Smith Global Scaling', baselineCR: 1.6, smithCR: 5.7, mau: 300000, gmvUSD: 1980000, latencySec: 0.32, cartRecoveryPct: 83, recoveredRevenue: 280000 },
    ],
  },
};

interface PerformanceMetricsDashboardProps {
  onOpenProposalModal?: () => void;
  onScrollToAuditor?: () => void;
}

export const PerformanceMetricsDashboard: React.FC<PerformanceMetricsDashboardProps> = ({
  onOpenProposalModal,
  onScrollToAuditor,
}) => {
  const [metricView, setMetricView] = useState<MetricView>('conversion');
  const [horizon, setHorizon] = useState<TimeHorizon>('6m');
  const [industry, setIndustry] = useState<IndustryPreset>('retail_luxury');

  const currentData = useMemo(() => {
    return PRESET_DATA[industry][horizon];
  }, [industry, horizon]);

  // Key KPI totals for current dataset
  const lastPoint = currentData[currentData.length - 1];
  const firstPoint = currentData[0];

  const conversionLiftPct = (
    ((lastPoint.smithCR - lastPoint.baselineCR) / lastPoint.baselineCR) *
    100
  ).toFixed(0);

  const speedImprovementPct = (
    ((firstPoint.latencySec - lastPoint.latencySec) / firstPoint.latencySec) *
    100
  ).toFixed(0);

  const gmvGrowthRatio = (lastPoint.gmvUSD / firstPoint.gmvUSD).toFixed(1);

  const handleExportReport = () => {
    const textContent = `================================================================================
  SMITH BUSINESS SOLUTIONS · INFORME DE RENDIMIENTO & CRECIMIENTO PROYECTADO
  Al-Hadiqa Invest Holding Group · Caracas - Dubái - Miami
  Fecha de generación: ${new Date().toLocaleString()}
================================================================================

PARÁMETROS DEL MODELO:
- Industria Analizada: ${
      industry === 'retail_luxury'
        ? 'Retail D2C, Moda & Lujo'
        : industry === 'b2b_saas'
        ? 'Fintech & Plataformas B2B'
        : 'Consumo Masivo & Multimarca'
    }
- Horizonte Temporal: ${horizon === '6m' ? 'Semestre Inicial (6 Meses)' : horizon === '12m' ? 'Anual Escalamiento (12 Meses)' : 'Matriz Comparativa de Fases'}
- Métrica Activa: ${
      metricView === 'conversion'
        ? 'Tasa de Conversión (CR %)'
        : metricView === 'traffic_gmv'
        ? 'Usuarios Activos Mensuales & GMV Facturado'
        : 'Latencia de Checkout & Tasa de Recuperación'
    }

RESUMEN DE IMPACTO EMPRESARIAL:
- Tasa de Conversión Base: ${firstPoint.baselineCR.toFixed(1)}%  -->  Arquitectura Smith: ${lastPoint.smithCR.toFixed(1)}% (+${conversionLiftPct}%)
- Latencia de Checkout: ${firstPoint.latencySec.toFixed(2)}s  -->  Checkout Optimizado: ${lastPoint.latencySec.toFixed(2)}s (-${speedImprovementPct}%)
- Crecimiento de Facturación (GMV): ${gmvGrowthRatio}x de volumen transaccionado
- Recuperación de Carritos con Bot WhatsApp IA: ${lastPoint.cartRecoveryPct}% ($${lastPoint.recoveredRevenue.toLocaleString()} USD/mes recuperados)

SERIE TEMPORAL DETALLADA:
${currentData
  .map(
    (d) =>
      `[${d.month}] CR: ${d.smithCR}% (vs ${d.baselineCR}% legacy) | MAU: ${d.mau.toLocaleString()} | GMV: $${d.gmvUSD.toLocaleString()} USD | Latencia: ${d.latencySec}s | Carritos Recup: ${d.cartRecoveryPct}% ($${d.recoveredRevenue.toLocaleString()} USD)`
  )
  .join('\n')}

================================================================================
Smith Business Solutions · Soluciones E-Commerce, Sistemas y Agentes de IA
Contacto Directo: empresaalhadiqainvest@gmail.com | WhatsApp: +58 422 027 3766 (0422 027 3766)
================================================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SBS_Metricas_Rendimiento_${industry}_${horizon}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    triggerCorporateConfetti();
  };

  return (
    <section id="metricas-rendimiento" className="py-24 relative overflow-hidden bg-[#030712]/90 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Activity className="w-3.5 h-3.5" />
              <span>Dashboard de Rendimiento Cuantitativo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Impacto Medible en <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Ventas & Conversión</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Modelado interactivo con datos empíricos de clientes que migraron tiendas monolíticas lentas hacia la arquitectura reactiva de Smith Business Solutions, complementada con agentes de IA 24/7.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleExportReport}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/15 transition-all cursor-pointer"
              title="Descargar datos en formato TXT auditado"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Exportar Informe (.txt)</span>
            </button>

            {onOpenProposalModal && (
              <button
                onClick={onOpenProposalModal}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Proyectar Mi Tienda</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 4 Executive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/20 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Incremento en CR</span>
              <span className="text-emerald-400 font-bold">+{conversionLiftPct}%</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {lastPoint.smithCR.toFixed(1)}%
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Vs. <span className="text-slate-500 line-through">{lastPoint.baselineCR.toFixed(1)}%</span> en plataformas tradicionales
            </p>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Velocidad de Checkout</span>
              <span className="text-amber-400 font-bold">-{speedImprovementPct}%</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {lastPoint.latencySec.toFixed(2)}s
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              De <span className="text-slate-500">{firstPoint.latencySec.toFixed(1)}s</span> a tiempo de respuesta instantáneo
            </p>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-blue-500/20 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Tráfico Activo (MAU)</span>
              <span className="text-blue-400 font-bold">Escala Alta</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {lastPoint.mau >= 1000 ? `${(lastPoint.mau / 1000).toFixed(0)}k` : lastPoint.mau}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Usuarios navegando con 99.99% Uptime garantizado
            </p>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-blue-400 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Recuperación por Bot IA</span>
              <span className="text-purple-400 font-bold">WhatsApp 24/7</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {lastPoint.cartRecoveryPct}%
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              +$<span className="text-emerald-400 font-bold">{lastPoint.recoveredRevenue.toLocaleString()}</span> USD recuperados/mes
            </p>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-purple-400 rounded-full" style={{ width: '82%' }} />
            </div>
          </div>
        </div>

        {/* Dashboard Control Bar */}
        <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Metric View Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/10 overflow-x-auto">
              <button
                type="button"
                onClick={() => setMetricView('conversion')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  metricView === 'conversion'
                    ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>1. Tasa de Conversión (CR)</span>
              </button>

              <button
                type="button"
                onClick={() => setMetricView('traffic_gmv')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  metricView === 'traffic_gmv'
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>2. Usuarios & GMV Facturado</span>
              </button>

              <button
                type="button"
                onClick={() => setMetricView('checkout_latency')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  metricView === 'checkout_latency'
                    ? 'bg-purple-400 text-slate-950 shadow-md shadow-purple-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>3. Latencia & Carrito Abandonado</span>
              </button>
            </div>

            {/* Presets and Time Horizon Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Industry Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 hidden sm:inline">Industria:</span>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value as IndustryPreset)}
                  className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="retail_luxury">Retail D2C Moda & Lujo</option>
                  <option value="b2b_saas">Fintech & Portales B2B</option>
                  <option value="cpg_multibrand">Consumo Masivo / Multimarca</option>
                </select>
              </div>

              {/* Horizon Toggle */}
              <div className="flex items-center gap-1 p-1 bg-black/40 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setHorizon('6m')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    horizon === '6m' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  6 Meses
                </button>
                <button
                  type="button"
                  onClick={() => setHorizon('12m')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    horizon === '12m' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  12 Meses
                </button>
                <button
                  type="button"
                  onClick={() => setHorizon('comparison')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    horizon === 'comparison' ? 'bg-white/15 text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Fases
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Recharts Visualization Canvas */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative">
          {/* Chart Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                {metricView === 'conversion' && 'Evolución de la Tasa de Conversión (CR %)'}
                {metricView === 'traffic_gmv' && 'Crecimiento de Volumen de Transacciones (GMV USD) & Tráfico'}
                {metricView === 'checkout_latency' && 'Desplome de Latencia & Aumento en Recuperación de Carritos'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {metricView === 'conversion' && 'Comparación directa de tasa de cierre entre tienda tradicional y tienda optimizada por Smith Business Solutions.'}
                {metricView === 'traffic_gmv' && 'Ingresos brutos acumulados proyectados tras desbloquear cuellos de botella en checkout.'}
                {metricView === 'checkout_latency' && 'Velocidad de respuesta de servidor edge en segundos vs. porcentaje de carritos rescatados vía agente IA.'}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                Línea Base Legacy
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                Solución Smith
              </span>
            </div>
          </div>

          {/* Recharts Chart Component */}
          <div className="h-[380px] w-full">
            {metricView === 'conversion' && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="smithGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="legacyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#64748B" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#64748B" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis
                    dataKey="month"
                    stroke="#94A3B8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                  />
                  <YAxis
                    stroke="#94A3B8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                    unit="%"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#090D16f0',
                      borderColor: '#10B98140',
                      borderRadius: '16px',
                      color: '#fff',
                      fontSize: '12px',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
                    }}
                    formatter={(value: any, name: any) => [
                      `${value}%`,
                      name === 'smithCR' ? 'Smith E-Commerce' : 'Plataforma Tradicional',
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="baselineCR"
                    name="baselineCR"
                    stroke="#64748B"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#legacyGrad)"
                  />
                  <Area
                    type="monotone"
                    dataKey="smithCR"
                    name="smithCR"
                    stroke="#10B981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#smithGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}

            {metricView === 'traffic_gmv' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis
                    dataKey="month"
                    stroke="#94A3B8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                  />
                  <YAxis
                    stroke="#94A3B8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#090D16f0',
                      borderColor: '#F59E0B40',
                      borderRadius: '16px',
                      color: '#fff',
                      fontSize: '12px',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
                    }}
                    formatter={(value: any, name: any) => [
                      name === 'gmvUSD' ? `$${Number(value).toLocaleString()} USD` : `${Number(value).toLocaleString()} MAU`,
                      name === 'gmvUSD' ? 'GMV Transaccionado' : 'Usuarios Activos',
                    ]}
                  />
                  <Bar dataKey="gmvUSD" name="gmvUSD" fill="#F59E0B" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}

            {metricView === 'checkout_latency' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis
                    dataKey="month"
                    stroke="#94A3B8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="#A855F7"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                    unit="%"
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#EF4444"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                    unit="s"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#090D16f0',
                      borderColor: '#A855F740',
                      borderRadius: '16px',
                      color: '#fff',
                      fontSize: '12px',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
                    }}
                    formatter={(value: any, name: any) => [
                      name === 'cartRecoveryPct' ? `${value}%` : `${value}s`,
                      name === 'cartRecoveryPct' ? 'Carritos Recuperados (WhatsApp IA)' : 'Latencia de Carga (Segundos)',
                    ]}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="latencySec"
                    name="latencySec"
                    stroke="#EF4444"
                    strokeWidth={2.5}
                    dot={{ fill: '#EF4444', r: 4 }}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="cartRecoveryPct"
                    name="cartRecoveryPct"
                    stroke="#A855F7"
                    strokeWidth={3}
                    dot={{ fill: '#A855F7', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Under-Chart Takeaway Callout */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Triplicación de Conversión</span>
                <span className="text-slate-400">Cada 100ms de menor latencia incrementa la tasa de cierre en un 7.2%.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Checkout Edge Global</span>
                <span className="text-slate-400">Despliegue distribuido en más de 280 puntos de presencia (PoPs).</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Rescate Automatizado IA</span>
                <span className="text-slate-400">Seguimiento conversacional inmediato sin invadir la privacidad del comprador.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
