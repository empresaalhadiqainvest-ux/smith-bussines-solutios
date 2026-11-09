import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  CheckCircle2,
  DollarSign,
  Flame,
  Gauge,
  Percent,
  Send,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { triggerCorporateConfetti } from '../utils/confetti';

interface EcommerceGrowthHookProps {
  onOpenProposalWithAudit: (auditData: {
    monthlyVisitors: number;
    avgTicket: number;
    currentConversion: number;
    lostRevenue: number;
    projectedGain: number;
  }) => void;
  onScrollToContact?: () => void;
}

export const EcommerceGrowthHook: React.FC<EcommerceGrowthHookProps> = ({
  onOpenProposalWithAudit,
  onScrollToContact,
}) => {
  // Interactive inputs with realistic defaults
  const [visitors, setVisitors] = useState<number>(25000);
  const [avgTicket, setAvgTicket] = useState<number>(75);
  const [conversionRate, setConversionRate] = useState<number>(1.2);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  // Calculations
  const auditResults = useMemo(() => {
    // Current Monthly Revenue
    const monthlyOrders = Math.round(visitors * (conversionRate / 100));
    const currentRevenue = monthlyOrders * avgTicket;

    // Industry benchmark for standard friction: 69.8% cart abandonment + 1.5s lag
    // With ultra-fast Headless React 19 + 24/7 AI Sales Chatbot recovery:
    // Target conversion moves to realistic 2.8% - 3.4%
    const optimizedConversionRate = Math.min(3.8, conversionRate * 2.4);
    const optimizedOrders = Math.round(visitors * (optimizedConversionRate / 100));
    const projectedRevenue = optimizedOrders * avgTicket;

    // Monthly unlocked revenue gain
    const monthlyGain = Math.max(0, projectedRevenue - currentRevenue);
    // Estimated abandoned revenue currently slipping away each month
    const estimatedLostRevenue = Math.round(currentRevenue * 0.72);

    return {
      monthlyOrders,
      currentRevenue,
      optimizedConversionRate: Number(optimizedConversionRate.toFixed(1)),
      projectedRevenue,
      monthlyGain,
      estimatedLostRevenue,
      annualGain: monthlyGain * 12,
    };
  }, [visitors, avgTicket, conversionRate]);

  const handleApplyAudit = () => {
    triggerCorporateConfetti();
    setHasCalculated(true);
    onOpenProposalWithAudit({
      monthlyVisitors: visitors,
      avgTicket,
      currentConversion: conversionRate,
      lostRevenue: auditResults.estimatedLostRevenue,
      projectedGain: auditResults.monthlyGain,
    });
  };

  return (
    <section id="auditor-ecommerce" className="py-20 relative border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Urgency Hook */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Auditor de Fricción & Fuga de Ventas E-Commerce</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            ¿Cuánto dinero está dejando sobre la mesa tu tienda online?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed [text-wrap:balance]">
            El 70% de los carritos se abandonan por lentitud de checkout o falta de atención en tiempo real. Ajusta los datos de tu negocio y calcula la ganancia neta recuperable con nuestra arquitectura de ventas y chatbots comerciales.
          </p>
        </div>

        {/* Interactive Calculator & Live Leak Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Sliders & Store Inputs */}
          <div className="lg:col-span-5 glass-panel-elevated rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span>Parámetros de tu Negocio</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                  Cálculo en Vivo
                </span>
              </div>

              {/* Slider 1: Monthly Visitors */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    Visitantes Mensuales al Sitio:
                  </span>
                  <span className="font-mono font-bold text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    {visitors.toLocaleString()} visitas
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="250000"
                  step="1000"
                  value={visitors}
                  onChange={(e) => setVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>2k (Inicio)</span>
                  <span>50k (Pyme)</span>
                  <span>250k+ (Marca Global)</span>
                </div>
              </div>

              {/* Slider 2: Average Order Value (AOV) */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                    Ticket Promedio de Compra (USD):
                  </span>
                  <span className="font-mono font-bold text-emerald-300 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    ${avgTicket} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="500"
                  step="5"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$15 USD</span>
                  <span>$150 USD</span>
                  <span>$500 USD</span>
                </div>
              </div>

              {/* Slider 3: Current Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Percent className="w-3.5 h-3.5 text-slate-400" />
                    Tasa de Conversión Actual:
                  </span>
                  <span className="font-mono font-bold text-cyan-300 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.3"
                  max="3.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0.3% (Fricción Alta)</span>
                  <span>1.2% (Promedio LatAm)</span>
                  <span>3.0% (Optimizado)</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 text-[11px] text-slate-400 leading-snug">
              <span className="text-amber-400 font-semibold block mb-0.5">Diagnóstico Rápido:</span>
              Con {visitors.toLocaleString()} visitas y {conversionRate}% de conversión, tu tienda genera aproximadamente{' '}
              <strong className="text-white">${auditResults.currentRevenue.toLocaleString()} USD/mes</strong>.
            </div>
          </div>

          {/* Right Column: Visual Revenue Impact & Actionable Solution */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-9 bg-gradient-to-br from-[#0c1322] via-[#080d19] to-[#040711] border-2 border-amber-400/50 shadow-2xl shadow-amber-500/10 flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                  Potencial Desbloqueable Auditado
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Target: {auditResults.optimizedConversionRate}% Conversión
                </span>
              </div>

              {/* Comparison Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Friction Card (Red/Orange Alert) */}
                <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2">
                  <div className="flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Fuga Mensual Estimada</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                    -${auditResults.estimatedLostRevenue.toLocaleString()} <span className="text-xs text-slate-400">USD/mes</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Carritos abandonados, pasarelas que rechazan tarjetas y lentitud de carga superior a 2.5s.
                  </p>
                </div>

                {/* Gain Card (Emerald Success) */}
                <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Ganancia Neta Adicional</span>
                  </div>
                  <div className="text-3xl font-extrabold text-emerald-300 font-mono tracking-tight">
                    +${auditResults.monthlyGain.toLocaleString()} <span className="text-xs text-slate-400">USD/mes</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Proyección anualizada:{' '}
                    <strong className="text-emerald-400 font-mono font-bold">
                      +${auditResults.annualGain.toLocaleString()} USD
                    </strong>
                  </p>
                </div>
              </div>

              {/* Technologies Deployed to Capture this Revenue */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  3 Pilares que aplicamos para capturar este incremento:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white block">Checkout en 0.4s:</strong> Arquitectura Headless sin caídas.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bot className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white block">Chatbot IA 24/7:</strong> Recupera carritos en WhatsApp.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShoppingBag className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white block">1-Click Payment:</strong> Stripe, PayPal, Apple & Google Pay.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Real Action Button */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={handleApplyAudit}
                className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Aplicar esta Auditoría y Solicitar Propuesta</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href={`https://wa.me/584220273766?text=${encodeURIComponent(
                  `Hola Smith Business Solutions. Hice la auditoría en la web para mi tienda (${visitors.toLocaleString()} visitas/mes, ticket $${avgTicket} USD). Deseo implementar su solución de E-Commerce y Chatbot IA para capturar los +$${auditResults.monthlyGain.toLocaleString()} USD/mes estimados.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerCorporateConfetti}
                className="w-full sm:w-auto py-4 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shrink-0 shadow-md shadow-emerald-500/20"
                title="WhatsApp Directo: 0422 027 3766"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>WhatsApp: 0422 027 3766</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
