import React, { useState } from 'react';
import { CalculatorState } from '../types';
import { CALCULATOR_OPTIONS } from '../data/servicesData';
import { triggerCorporateConfetti } from '../utils/confetti';
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Cpu,
  DollarSign,
  Download,
  FileCheck,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  calcState: CalculatorState | null;
  total: number;
  weeks: number;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  calcState,
  total,
  weeks,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [proposalRefId, setProposalRefId] = useState('');

  if (!isOpen || !calcState) return null;

  const currentSolution = CALCULATOR_OPTIONS.solutions.find((s) => s.id === calcState.solutionType)!;
  const currentScale = CALCULATOR_OPTIONS.scales.find((s) => s.id === calcState.scale)!;
  const currentSpeed = CALCULATOR_OPTIONS.deliverySpeeds.find((s) => s.id === calcState.deliverySpeed)!;

  const activeAddons = CALCULATOR_OPTIONS.addons.filter((a) =>
    calcState.selectedAddons.includes(a.id)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `SBS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setProposalRefId(randomRef);
    setIsSubmitted(true);
    triggerCorporateConfetti();
  };

  const handleDownloadSummary = () => {
    const textContent = `
======================================================
  SMITH BUSINESS SOLUTIONS · PROPUESTA FORMAL PRELIMINAR
  Referencia: ${proposalRefId}
  Fecha: ${new Date().toLocaleDateString('es-ES')}
======================================================

DATOS DEL CLIENTE:
- Nombre: ${fullName}
- Empresa: ${companyName}
- Correo: ${email}
- Teléfono / WhatsApp: ${phone}

ESPECIFICACIÓN DEL PROYECTO:
- Tipo de Solución: ${currentSolution.title}
- Alcance & Escala: ${currentScale.title}
- Tiempo de Entrega: ${currentSpeed.title} (${weeks} semanas proyectadas)
- Módulos Adicionales:
${activeAddons.length > 0 ? activeAddons.map((a) => `  * ${a.name} (+$${a.price} USD)`).join('\n') : '  * Ninguno seleccionado'}

PRESUPUESTO ESTIMADO TOTAL:
$${total.toLocaleString()} USD

NOTAS Y REQUISITOS ADICIONALES:
${notes || 'Sin especificaciones complementarias.'}

GARANTÍAS SMITH BUSINESS SOLUTIONS:
- Acuerdos de Confidencialidad (NDA) antes de iniciar.
- Entregas iterativas con código fuente 100% transferido al cliente.
- Soporte de estabilización post-despliegue incluido.
======================================================
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Propuesta-${proposalRefId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 glass-panel-elevated rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {isSubmitted ? 'Propuesta Formal Registrada' : 'Solicitar Propuesta Formal'}
              </h3>
              <p className="text-xs text-slate-400">
                Smith Business Solutions · Auditoría y Estimación
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                Referencia: {proposalRefId}
              </span>
              <h4 className="text-2xl font-extrabold text-white">
                ¡Solicitud Recibida Correctamente!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Gracias, <strong className="text-white">{fullName}</strong>. Nuestro equipo de consultores e ingenieros ha recibido tus parámetros precargados (${total.toLocaleString()} USD · {weeks} semanas).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Empresa:</span>
                <span className="text-white font-semibold">{companyName || 'No especificada'}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Correo de confirmación:</span>
                <span className="text-amber-300 font-semibold">{email}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tiempo de respuesta:</span>
                <span className="text-emerald-400 font-semibold">&lt; 24 horas hábiles</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/584220273766?text=${encodeURIComponent(
                  `Hola Smith Business Solutions. Acabo de registrar mi propuesta formal (Ref: ${proposalRefId}) para ${companyName || fullName} por $${total.toLocaleString()} USD (${currentSolution.title}, ${weeks} semanas). Quisiera coordinar los siguientes pasos.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md"
                title="WhatsApp Directo: 0422 027 3766"
              >
                <MessageCircle className="w-3.5 h-3.5 text-slate-950" />
                <span>WhatsApp: 0422 027 3766</span>
              </a>

              <button
                onClick={handleDownloadSummary}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Descargar Copia (.txt)</span>
              </button>

              <button
                onClick={onClose}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium border border-white/10 transition-colors cursor-pointer"
              >
                <span>Cerrar</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Preloaded Calculator Summary Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-amber-950/20 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Parámetros Precargados de la Calculadora
                </span>
                <span className="font-mono font-extrabold text-sm text-white tabular-nums">
                  ${total.toLocaleString()} USD
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Solución</span>
                  <span className="font-semibold text-white truncate block">{currentSolution.title}</span>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Escala</span>
                  <span className="font-semibold text-white truncate block">{currentScale.title.split('/')[0]}</span>
                </div>
                <div className="p-2 rounded-lg bg-black/30 border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block">Entrega</span>
                  <span className="font-semibold text-emerald-300 truncate block">
                    {currentSpeed.title} ({weeks} sem)
                  </span>
                </div>
              </div>

              {activeAddons.length > 0 && (
                <div className="text-[11px] text-purple-300 pt-1">
                  <span className="text-slate-400">Complementos:</span>{' '}
                  {activeAddons.map((a) => a.name).join(', ')}
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1">
                  <User className="w-3 h-3 text-amber-400" />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej: Lic. Carlos Arismendi"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-sm focus:outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-amber-400" />
                  Correo Corporativo *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@empresa.com"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-sm focus:outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Nombre de la Empresa / Organización *
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ej: Grupo Logístico Inversiones"
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-sm focus:outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-emerald-400" />
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+58 422 027 3766 / 0422 027 3766..."
                  className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-sm focus:outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Requerimientos Específicos o Comentarios Adicionales
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Indica sistemas a integrar (SAP, Zoho, Shopify), objetivos específicos o requerimientos de fecha límite..."
                className="w-full px-3.5 py-2.5 rounded-xl glass-input text-white text-sm focus:outline-none placeholder:text-slate-500 resize-none"
              />
            </div>

            {/* Privacy note */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Tus datos están protegidos bajo estricto acuerdo de confidencialidad comercial.
              </span>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 rounded-xl shadow-lg shadow-amber-500/25 transition-all"
              >
                <span>Enviar Solicitud de Propuesta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
