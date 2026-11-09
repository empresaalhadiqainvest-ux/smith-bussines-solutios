import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  ExternalLink,
  FileCheck,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  Video,
} from 'lucide-react';
import { CalculatorState } from '../types';
import { CALCULATOR_OPTIONS } from '../data/servicesData';
import { triggerCorporateConfetti } from '../utils/confetti';

interface MultiStepLeadFormProps {
  calcState?: CalculatorState;
  estimatedTotal?: number;
  onOpenMultiStepCodeModal?: () => void;
  onSuccessSubmission?: (leadData: { fullName: string; companyName: string; referenceId: string }) => void;
}

interface FormData {
  // Step 1: Contact
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  // Step 2: Project
  industry: string;
  budgetRange: string;
  description: string;
  solutionPreference: string;
  // Step 3: Preference
  contactChannel: 'videocall' | 'whatsapp' | 'email';
  preferredTime: string;
  ndaRequired: boolean;
}

export const MultiStepLeadForm: React.FC<MultiStepLeadFormProps> = ({
  calcState,
  estimatedTotal,
  onOpenMultiStepCodeModal,
  onSuccessSubmission,
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: 'Fintech & Servicios Financieros',
    budgetRange: estimatedTotal ? `$${estimatedTotal.toLocaleString()} USD (Calculado)` : '$3,000 - $7,000 USD',
    description: '',
    solutionPreference: calcState ? calcState.solutionType : 'software',
    contactChannel: 'videocall',
    preferredTime: 'Mañanas (9:00 AM - 1:00 PM)',
    ndaRequired: true,
  });

  // Errors for step validation
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Synchronize when calculator changes
  useEffect(() => {
    if (estimatedTotal) {
      setFormData((prev) => ({
        ...prev,
        budgetRange: `$${estimatedTotal.toLocaleString()} USD (Calculado en Estimador)`,
      }));
    }
  }, [estimatedTotal]);

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
        newErrors.fullName = 'Por favor ingresa tu nombre completo (mínimo 3 caracteres).';
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        newErrors.email = 'Ingresa un correo corporativo válido.';
      }
      if (!formData.phone.trim() || formData.phone.trim().length < 7) {
        newErrors.phone = 'Ingresa un teléfono o WhatsApp de contacto válido.';
      }
      if (!formData.companyName.trim()) {
        newErrors.companyName = 'Ingresa el nombre de tu empresa u organización.';
      }
    }

    if (step === 2) {
      if (!formData.industry) {
        newErrors.industry = 'Selecciona la industria principal de tu negocio.';
      }
      if (!formData.description.trim() || formData.description.trim().length < 10) {
        newErrors.description = 'Describe brevemente el objetivo o problema a resolver (mínimo 10 caracteres).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3) as 1 | 2 | 3);
    }
  };

  const handlePrev = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(1) && validateStep(2)) {
      const ref = `SBS-LEAD-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(ref);
      setIsSubmitted(true);
      triggerCorporateConfetti();
      onSuccessSubmission?.({
        fullName: formData.fullName,
        companyName: formData.companyName,
        referenceId: ref,
      });
    }
  };

  const handleDownloadReceipt = () => {
    const textContent = `======================================================
  SMITH BUSINESS SOLUTIONS · REGISTRO FORMAL DE PROSPECTO
  Al-Hadiqa Invest Holding Group
  Código de Registro: ${referenceId}
  Fecha: ${new Date().toLocaleString()}
======================================================

INFORMACIÓN DEL CLIENTE:
- Nombre y Apellido: ${formData.fullName}
- Empresa u Organización: ${formData.companyName}
- Correo Corporativo: ${formData.email}
- Teléfono / WhatsApp: ${formData.phone}

ALCANCE DEL PROYECTO:
- Industria / Sector: ${formData.industry}
- Rango de Presupuesto: ${formData.budgetRange}
- Descripción del Requerimiento:
  "${formData.description}"

COORDINACIÓN & FORMALIZACIÓN:
- Canal de Contacto Seleccionado: ${formData.contactChannel === 'videocall' ? 'Reunión Virtual (Google Meet / Zoom)' : formData.contactChannel === 'whatsapp' ? 'WhatsApp Business Corporativo' : 'Correo Formal'}
- Franja Horaria: ${formData.preferredTime}
- Acuerdo de Confidencialidad (NDA): ${formData.ndaRequired ? 'Solicitado y Garantizado por Smith Business Solutions' : 'No requerido'}

ESTATUS DEL CASO:
- Asignado a: Dirección Técnica de Soluciones & E-Commerce
- Tiempo de respuesta estimado: Menos de 4 horas hábiles
- Soporte Inmediato WhatsApp: +58 422 027 3766 (0422 027 3766)

======================================================
Smith Business Solutions · Caracas - Dubái - Miami
© ${new Date().getFullYear()} Todos los derechos reservados.
======================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SmithBusinessSolutions-${referenceId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const industries = [
    'Retail, Comercio & E-Commerce B2B / B2C',
    'Fintech, Pasarelas de Pago & Servicios Financieros',
    'Manufactura & Cadena de Suministro',
    'Salud, Seguros & Biotecnología',
    'Inversiones, Bienes Raíces & Real Estate',
    'Energía, Minería & Petróleo',
    'Servicios Profesionales & Consultoría',
    'Otro Sector Empresarial',
  ];

  const budgetOptions = [
    '< $2,500 USD (Iniciación / MVP)',
    '$2,500 - $5,000 USD (Escalamiento PYME)',
    '$5,000 - $12,000 USD (Mediana Empresa)',
    '> $12,000 USD (Gran Corporativo / Enterprise)',
  ];

  return (
    <div id="formulario-prospectos" className="w-full max-w-4xl mx-auto my-12">
      <div className="glass-panel-elevated rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Form Title & Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Calificación de Prospectos Corporativos</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Inicia tu Proyecto con Smith Business Solutions
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Completa los 3 pasos para recibir un diagnóstico preliminar y plan de trabajo personalizado.
            </p>
          </div>

          {onOpenMultiStepCodeModal && (
            <button
              onClick={onOpenMultiStepCodeModal}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors shrink-0 self-start sm:self-center cursor-pointer"
            >
              <span>Código Vanilla Form</span>
            </button>
          )}
        </div>

        {/* Dynamic Progress Bar with Numeric Indicators */}
        <div className="py-8 relative z-10">
          <div className="flex items-center justify-between relative max-w-2xl mx-auto">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-white/10 rounded-full -z-0">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-500"
                style={{
                  width: currentStep === 1 ? '15%' : currentStep === 2 ? '50%' : '100%',
                }}
              />
            </div>

            {/* Step 1 Indicator */}
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border-2 ${
                  currentStep >= 1
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/25'
                    : 'bg-slate-900 text-slate-400 border-white/20'
                }`}
              >
                {currentStep > 1 ? <Check className="w-4 h-4 stroke-[3]" /> : '1'}
              </div>
              <span className={`text-xs font-semibold whitespace-nowrap ${currentStep >= 1 ? 'text-white' : 'text-slate-500'}`}>
                1. Contacto
              </span>
            </div>

            {/* Step 2 Indicator */}
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border-2 ${
                  currentStep >= 2
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/25'
                    : 'bg-slate-900 text-slate-400 border-white/20'
                }`}
              >
                {currentStep > 2 ? <Check className="w-4 h-4 stroke-[3]" /> : '2'}
              </div>
              <span className={`text-xs font-semibold whitespace-nowrap ${currentStep >= 2 ? 'text-white' : 'text-slate-500'}`}>
                2. Proyecto
              </span>
            </div>

            {/* Step 3 Indicator */}
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border-2 ${
                  currentStep === 3
                    ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-lg shadow-emerald-500/25'
                    : 'bg-slate-900 text-slate-400 border-white/20'
                }`}
              >
                3
              </div>
              <span className={`text-xs font-semibold whitespace-nowrap ${currentStep === 3 ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>
                3. Confirmación
              </span>
            </div>
          </div>
        </div>

        {/* Form Body */}
        {isSubmitted ? (
          <div className="py-12 text-center space-y-6 relative z-10">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
                Código de Registro: {referenceId}
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                ¡Solicitud Registrada Exitosamente!
              </h4>
              <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                Estimado/a <strong className="text-white">{formData.fullName}</strong>, hemos recibido los requerimientos de <strong className="text-amber-300">{formData.companyName}</strong>. Un consultor senior se comunicará contigo vía {formData.contactChannel === 'videocall' ? 'videollamada' : formData.contactChannel === 'whatsapp' ? 'WhatsApp' : 'correo electrónico'} en el horario seleccionado.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 text-left text-xs max-w-md mx-auto space-y-2.5">
              <div className="flex justify-between text-slate-400">
                <span>Canal preferido:</span>
                <span className="text-white font-semibold capitalize">
                  {formData.contactChannel === 'videocall' ? 'Reunión Virtual' : formData.contactChannel}
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Horario convenido:</span>
                <span className="text-white font-semibold">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Presupuesto proyectado:</span>
                <span className="text-amber-400 font-semibold font-mono">{formData.budgetRange}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Acuerdo de Confidencialidad:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Garantizado (NDA Activo)
                </span>
              </div>
            </div>

            {/* Direct Action Buttons: WhatsApp & Download Comprobante */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/584220273766?text=${encodeURIComponent(
                  `Hola equipo de Smith Business Solutions. Acabo de registrar mi requerimiento corporativo en su portal con el código *${referenceId}*.\n\nEmpresa: *${formData.companyName}*\nContacto: *${formData.fullName}*\nSector: ${formData.industry}\nPresupuesto estimado: ${formData.budgetRange}\nCanal preferido: ${formData.contactChannel}\n\nQuedo atento a la propuesta técnica.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
                title="WhatsApp: 0422 027 3766"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: 0422 027 3766</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleDownloadReceipt}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Descargar Comprobante (.txt)</span>
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                type="button"
                className="text-xs text-slate-400 hover:text-white underline transition-colors cursor-pointer"
              >
                Registrar otra consulta corporativa
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            {/* STEP 1: CONTACT DATA */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-white/5 pb-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-amber-400" />
                    Paso 1: Información de Contacto Corporativo
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Ingresa los datos del líder o tomador de decisiones para coordinar la propuesta formal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="Ej: Lic. Elena Morales"
                      className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none transition-all ${
                        errors.fullName ? 'border-red-500/70 bg-red-950/20' : ''
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Correo Electrónico Corporativo *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="nombre@su-empresa.com"
                      className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none transition-all ${
                        errors.email ? 'border-red-500/70 bg-red-950/20' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Teléfono / WhatsApp Directo *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+58 422 027 3766 / 0422 027 3766..."
                      className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none transition-all ${
                        errors.phone ? 'border-red-500/70 bg-red-950/20' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Empresa u Organización *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: '' });
                      }}
                      placeholder="Ej: Grupo Alhadiqa Inversiones"
                      className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none transition-all ${
                        errors.companyName ? 'border-red-500/70 bg-red-950/20' : ''
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.companyName}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: PROJECT DETAILS */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-white/5 pb-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    Paso 2: Alcance & Especificación del Proyecto
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Indica tu industria y rango presupuestario para asignar al equipo técnico especializado.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Industria o Sector Empresarial *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none bg-slate-900 cursor-pointer"
                    >
                      {industries.map((ind, idx) => (
                        <option key={idx} value={ind} className="bg-slate-900 text-white">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Rango de Presupuesto Proyectado
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none bg-slate-900 cursor-pointer"
                    >
                      {estimatedTotal && (
                        <option value={`$${estimatedTotal.toLocaleString()} USD (Calculado en Estimador)`} className="bg-slate-900 text-amber-300 font-bold">
                          ${estimatedTotal.toLocaleString()} USD (Precargado de la Calculadora)
                        </option>
                      )}
                      {budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Descripción Breve del Desafío o Requerimientos *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description) setErrors({ ...errors, description: '' });
                    }}
                    placeholder="Ej: Necesitamos automatizar la conciliación de pagos con nuestro ERP, desarrollar un portal de clientes B2B con roles de seguridad o auditar la rentabilidad de las unidades de negocio..."
                    className={`w-full px-4 py-3 rounded-xl glass-input text-white text-sm focus:outline-none resize-none transition-all ${
                      errors.description ? 'border-red-500/70 bg-red-950/20' : ''
                    }`}
                  />
                  {errors.description && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.description}</p>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: CONFIRMATION & CONTACT PREFERENCE */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="border-b border-white/5 pb-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    Paso 3: Preferencia de Contacto & Formalización
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Elige cómo deseas que nuestro equipo directivo te presente la propuesta inicial.
                  </p>
                </div>

                {/* Contact Channel Selection Cards */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-3">
                    Canal de Comunicación Preferido:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* Option 1: Virtual Meeting */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, contactChannel: 'videocall' })}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        formData.contactChannel === 'videocall'
                          ? 'bg-blue-950/60 border-blue-400 shadow-md shadow-blue-500/10'
                          : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                          <Video className="w-4 h-4" />
                        </div>
                        {formData.contactChannel === 'videocall' && (
                          <div className="w-4 h-4 rounded-full bg-blue-400 text-slate-950 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Reunión Virtual</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Google Meet / Zoom (30 min)</p>
                      </div>
                    </button>

                    {/* Option 2: WhatsApp */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, contactChannel: 'whatsapp' })}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        formData.contactChannel === 'whatsapp'
                          ? 'bg-emerald-950/60 border-emerald-400 shadow-md shadow-emerald-500/10'
                          : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        {formData.contactChannel === 'whatsapp' && (
                          <div className="w-4 h-4 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">WhatsApp Business</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Interacción ágil y directa</p>
                      </div>
                    </button>

                    {/* Option 3: Email */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, contactChannel: 'email' })}
                      className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        formData.contactChannel === 'email'
                          ? 'bg-amber-950/60 border-amber-400 shadow-md shadow-amber-500/10'
                          : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                          <Mail className="w-4 h-4" />
                        </div>
                        {formData.contactChannel === 'email' && (
                          <div className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Correo Formal</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Envío de propuesta ejecutiva PDF</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Preferred Schedule & NDA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Horario de Contacto Conveniente
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-white text-sm focus:outline-none bg-slate-900 cursor-pointer"
                    >
                      <option value="Mañanas (9:00 AM - 1:00 PM)">Mañanas (9:00 AM - 1:00 PM GMT-4)</option>
                      <option value="Tardes (2:00 PM - 6:00 PM)">Tardes (2:00 PM - 6:00 PM GMT-4)</option>
                      <option value="Cualquier momento hábil">Cualquier momento hábil</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 self-end">
                    <input
                      type="checkbox"
                      id="nda-checkbox"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                    />
                    <label htmlFor="nda-checkbox" className="text-xs text-slate-300 cursor-pointer select-none">
                      Solicitar firma previa de <strong className="text-white">Acuerdo de Confidencialidad (NDA)</strong>.
                    </label>
                  </div>
                </div>

                {/* Pre-submission Summary Review */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 text-xs space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    Resumen de Solicitud
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Contacto:</span>
                      <span className="font-semibold text-white truncate block">{formData.fullName} ({formData.companyName})</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Industria:</span>
                      <span className="font-semibold text-white truncate block">{formData.industry}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Presupuesto:</span>
                      <span className="font-semibold text-amber-300 font-mono truncate block">{formData.budgetRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigational Buttons ("Anterior" & "Siguiente" / "Enviar") */}
            <div className="pt-4 border-t border-white/10 flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <span>Siguiente Paso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 hover:brightness-110 shadow-xl shadow-emerald-500/25 transition-all cursor-pointer text-center"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar y Confirmar Solicitud</span>
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
