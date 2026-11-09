import React from 'react';
import { CalculatorState } from '../types';
import { MultiStepLeadForm } from './MultiStepLeadForm';
import {
  Clock,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  calcState: CalculatorState;
  total: number;
  weeks: number;
  onOpenMultiStepCodeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  calcState,
  total,
  weeks,
  onOpenMultiStepCodeModal,
}) => {
  return (
    <section id="contacto" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Contacto & Propuesta Formal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Hablemos de tus próximos objetivos de negocio
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Completa el flujo interactivo de 3 pasos o comunícate directamente con nuestros consultores técnicos.
          </p>
        </div>

        {/* Embedded Multi-Step Lead Qualification Form */}
        <MultiStepLeadForm
          calcState={calcState}
          estimatedTotal={total}
          onOpenMultiStepCodeModal={onOpenMultiStepCodeModal}
        />

        {/* Executive Direct Contact Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl glass-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Correo Electrónico Corporativo</p>
              <a
                href="mailto:empresaalhadiqainvest@gmail.com"
                className="text-sm font-bold text-white hover:text-amber-300 transition-colors"
              >
                empresaalhadiqainvest@gmail.com
              </a>
              <p className="text-[11px] text-slate-500 mt-1">Respuesta formal en &lt; 24h hábiles</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Sede & Cobertura</p>
              <p className="text-sm font-bold text-white">
                Maturín, Monagas, Venezuela
              </p>
              <p className="text-[11px] text-slate-500 mt-1">Operaciones remotas para clientes globales</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">Garantía Corporativa</p>
              <p className="text-sm font-bold text-emerald-300">
                Acuerdos NDA & Código Fuente
              </p>
              <p className="text-[11px] text-slate-500 mt-1">Transferencia 100% libre de regalías</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
