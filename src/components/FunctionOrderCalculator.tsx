import React, { useMemo, useState } from 'react';
import {
  DEPLOYMENT_PRIORITIES,
  OPERATIONAL_SCALES,
  OWNER_CONTACT,
  SCENARIO_PRESETS,
  SELECTABLE_FUNCTIONS,
} from '../data/servicesData';
import {
  DeploymentPriority,
  OperationalScale,
  PillarId,
  SentOrderRecord,
} from '../types';
import {
  dispatchOrderNotification,
  type OrderDispatchResult,
} from '../services/orderNotificationService';
import {
  AlertCircle,
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  Layers,
  Loader2,
  Mail,
  MessageCircle,
  RotateCcw,
  Send,
  Trash2,
  Zap,
} from 'lucide-react';

interface FunctionOrderCalculatorProps {
  selectedFunctionIds: string[];
  onChangeSelectedFunctions: (ids: string[]) => void;
}

const PILLAR_LABELS: Record<PillarId | 'todas', string> = {
  todas: 'Todas',
  automatizacion: 'Automatización & IA',
  cloud: 'Cloud & Web',
  ciberseguridad: 'Ciberseguridad',
  estrategia: 'Estrategia',
};

const STORAGE_KEY = 'sbs_sent_orders_v1';

function buildOrderReference(): string {
  const now = new Date();
  const code = `${now.getFullYear().toString().slice(-2)}${String(
    now.getMonth() + 1
  ).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;
  return `ORD-${code}`;
}

export const FunctionOrderCalculator: React.FC<FunctionOrderCalculatorProps> = ({
  selectedFunctionIds,
  onChangeSelectedFunctions,
}) => {
  const [activeFilter, setActiveFilter] = useState<PillarId | 'todas'>('todas');
  const [scale, setScale] = useState<OperationalScale>('pyme');
  const [priority, setPriority] = useState<DeploymentPriority>('estandar');

  // Client order info
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [notes, setNotes] = useState('');

  // UI & Async notification states
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [dispatchFeedback, setDispatchFeedback] = useState<{
    order: SentOrderRecord;
    result?: OrderDispatchResult;
  } | null>(null);
  const [copiedOrder, setCopiedOrder] = useState(false);
  const [orderHistory, setOrderHistory] = useState<SentOrderRecord[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as SentOrderRecord[]) : [];
    } catch {
      return [];
    }
  });

  // Derived selections
  const selectedFunctions = useMemo(
    () => SELECTABLE_FUNCTIONS.filter((fn) => selectedFunctionIds.includes(fn.id)),
    [selectedFunctionIds]
  );

  const filteredFunctions = useMemo(
    () =>
      activeFilter === 'todas'
        ? SELECTABLE_FUNCTIONS
        : SELECTABLE_FUNCTIONS.filter((fn) => fn.pillar === activeFilter),
    [activeFilter]
  );

  const currentScale =
    OPERATIONAL_SCALES.find((s) => s.id === scale) || OPERATIONAL_SCALES[1];
  const currentPriority =
    DEPLOYMENT_PRIORITIES.find((p) => p.id === priority) || DEPLOYMENT_PRIORITIES[0];

  // Calculate pure operational delivery timeline (NO prices)
  const totalSprintDays = selectedFunctions.reduce((acc, fn) => acc + fn.sprintDays, 0);
  const estimatedWeeks =
    selectedFunctions.length === 0
      ? 0
      : Math.max(
          1,
          Math.ceil(
            (totalSprintDays / 5 + currentScale.weeksOffset) *
              currentPriority.weeksMultiplier
          )
        );

  const toggleFunction = (id: string) => {
    setValidationError(null);
    if (selectedFunctionIds.includes(id)) {
      onChangeSelectedFunctions(selectedFunctionIds.filter((item) => item !== id));
    } else {
      onChangeSelectedFunctions([...selectedFunctionIds, id]);
    }
  };

  const applyPreset = (functionIds: string[]) => {
    setValidationError(null);
    onChangeSelectedFunctions(functionIds);
  };

  const clearSelection = () => {
    setValidationError(null);
    onChangeSelectedFunctions([]);
  };

  const formatOrderText = (orderId: string) => {
    const fnLines = selectedFunctions.map(
      (fn, idx) => `${idx + 1}. ${fn.title} [${PILLAR_LABELS[fn.pillar]}]`
    );

    return [
      `NUEVA ORDEN DE FUNCIONES - ${OWNER_CONTACT.brandName.toUpperCase()}`,
      `Referencia: ${orderId}`,
      `Fecha: ${new Date().toLocaleDateString('es-ES')}`,
      ``,
      `DATOS DEL SOLICITANTE`,
      `- Nombre: ${clientName.trim()}`,
      `- Empresa: ${companyName.trim()}`,
      `- Contacto: ${clientContact.trim()}`,
      ``,
      `CONFIGURACION OPERATIVA`,
      `- Escala: ${currentScale.title}`,
      `- Prioridad: ${currentPriority.title}`,
      `- Tiempo estimado de despliegue: ${estimatedWeeks} ${
        estimatedWeeks === 1 ? 'semana' : 'semanas'
      }`,
      `- Total de funciones seleccionadas: ${selectedFunctions.length}`,
      ``,
      `FUNCIONES SOLICITADAS`,
      ...fnLines,
      notes.trim() ? `\nNOTAS ADICIONALES\n${notes.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const validateBeforeDispatch = (): boolean => {
    if (selectedFunctions.length === 0) {
      setValidationError('Selecciona al menos una función antes de enviar tu orden.');
      return false;
    }
    if (!clientName.trim() || !companyName.trim() || !clientContact.trim()) {
      setValidationError(
        'Completa tu nombre, empresa y correo o teléfono de contacto para enviar la orden.'
      );
      return false;
    }
    setValidationError(null);
    return true;
  };

  const buildAndSaveRecord = (
    channel: 'whatsapp' | 'email' | 'clipboard',
    orderId: string
  ): SentOrderRecord => {
    const newRecord: SentOrderRecord = {
      orderId,
      createdAt: new Date().toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      channel,
      clientName: clientName.trim(),
      companyName: companyName.trim(),
      clientContact: clientContact.trim(),
      scaleLabel: currentScale.title,
      priorityLabel: currentPriority.title,
      estimatedWeeks,
      functions: selectedFunctions.map((fn) => fn.title),
      notes: notes.trim(),
    };

    const updated = [newRecord, ...orderHistory].slice(0, 5);
    setOrderHistory(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota errors
    }
    return newRecord;
  };

  // Precomputed live URLs for direct fallback links
  const liveOrderId = useMemo(
    () => buildOrderReference(),
    [selectedFunctionIds.length, clientName, companyName]
  );

  const formattedMessage = useMemo(
    () => formatOrderText(liveOrderId),
    [
      liveOrderId,
      selectedFunctions,
      clientName,
      companyName,
      clientContact,
      scale,
      priority,
      estimatedWeeks,
      notes,
    ]
  );

  const whatsappHref = `https://wa.me/${
    OWNER_CONTACT.whatsappNumber
  }?text=${encodeURIComponent(formattedMessage)}`;

  const mailSubject = `[${OWNER_CONTACT.brandName}] Nueva Orden [${liveOrderId}] - ${
    companyName.trim() || 'Cliente Web'
  }`;
  const mailtoHref = `mailto:${OWNER_CONTACT.email}?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(formattedMessage)}`;

  // Real Endpoint Notification Submit (Webhook / EmailJS / FormSubmit AJAX)
  const handleSendDirectOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateBeforeDispatch() || isSending) return;

    setIsSending(true);
    setDispatchFeedback(null);

    const result = await dispatchOrderNotification({
      orderId: liveOrderId,
      clientName: clientName.trim(),
      companyName: companyName.trim(),
      clientContact: clientContact.trim(),
      scaleLabel: currentScale.title,
      priorityLabel: currentPriority.title,
      estimatedWeeks,
      functions: selectedFunctions.map((fn) => fn.title),
      notes: notes.trim(),
      formattedSummary: formattedMessage,
    });

    const record = buildAndSaveRecord('email', liveOrderId);
    setDispatchFeedback({ order: record, result });
    setIsSending(false);
  };

  const handleChannelAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    channel: 'whatsapp' | 'email'
  ) => {
    if (!validateBeforeDispatch()) {
      e.preventDefault();
      return;
    }
    const record = buildAndSaveRecord(channel, liveOrderId);
    setDispatchFeedback({ order: record });
  };

  const handleCopyOrder = async () => {
    if (!validateBeforeDispatch()) return;
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopiedOrder(true);
      const record = buildAndSaveRecord('clipboard', liveOrderId);
      setDispatchFeedback({ order: record });
      window.setTimeout(() => setCopiedOrder(false), 2400);
    } catch {
      setValidationError('No se pudo copiar automáticamente; usa el envío directo.');
    }
  };

  return (
    <section id="configurador" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#00FF41]/25 pb-5">
          <div className="space-y-1.5">
            <p className="text-xs font-mono text-[#00FF41]">
              Configurador Basado en Funciones
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Arma tu Orden de Servicio
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-emerald-200/75 max-w-md">
            Selecciona las funciones técnicas que requiere tu empresa. La orden se envía en tiempo
            real a nuestro panel de contacto, correo o WhatsApp.
          </p>
        </div>

        {/* Main Grid: Left Configurator + Right Sticky Order Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 7 COLS: Function Selection & Operational Params */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Quick Scenario Presets */}
            <div className="matrix-panel rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  1. Escenarios Rápidos (Opcional)
                </h3>
                <span className="text-xs font-mono text-emerald-300/70">
                  Carga sugerida en 1 clic
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCENARIO_PRESETS.map((preset) => {
                  const isActive = preset.functionIds.every((id) =>
                    selectedFunctionIds.includes(id)
                  );
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => applyPreset(preset.functionIds)}
                      className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#00FF41]/12 border-[#00FF41] text-white'
                          : 'bg-[#030603]/80 border-[#00FF41]/20 hover:border-[#00FF41]/60 text-emerald-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-[#00FF41]">
                          {preset.label}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-300/75 tabular-nums">
                          {preset.functionIds.length} módulos
                        </span>
                      </div>
                      <p className="text-xs text-emerald-100/70 leading-snug">
                        {preset.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Selectable Functions Catalog */}
            <div className="matrix-panel rounded-xl p-5 sm:p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  2. Selecciona las Funciones Requeridas
                </h3>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap gap-1.5">
                  {(Object.keys(PILLAR_LABELS) as (PillarId | 'todas')[]).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        activeFilter === cat
                          ? 'bg-[#00FF41] text-[#050805] font-bold'
                          : 'bg-[#030603] text-emerald-200/80 hover:text-[#00FF41] border border-[#00FF41]/20'
                      }`}
                    >
                      {PILLAR_LABELS[cat]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredFunctions.map((fn) => {
                  const isSelected = selectedFunctionIds.includes(fn.id);
                  return (
                    <button
                      key={fn.id}
                      type="button"
                      onClick={() => toggleFunction(fn.id)}
                      aria-pressed={isSelected}
                      className={`text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-[#00FF41]/12 border-[#00FF41] shadow-[0_0_18px_rgba(0,255,65,0.1)]'
                          : 'bg-[#030603]/80 border-[#00FF41]/20 hover:border-[#00FF41]/55'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-[#00FF41] border-[#00FF41] text-[#050805]'
                            : 'bg-transparent border-[#00FF41]/40 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>

                      <div className="space-y-1.5 flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {fn.title}
                        </p>
                        <p className="text-xs text-emerald-100/70 leading-relaxed">
                          {fn.description}
                        </p>
                        <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-emerald-300/75">
                          <span>{PILLAR_LABELS[fn.pillar]}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">~{fn.sprintDays} días</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Operational Scale & Priority */}
            <div className="matrix-panel rounded-xl p-5 sm:p-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  3. Escala de la Empresa
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {OPERATIONAL_SCALES.map((item) => {
                    const isSelected = scale === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setScale(item.id)}
                        className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#00FF41]/12 border-[#00FF41]'
                            : 'bg-[#030603]/80 border-[#00FF41]/20 hover:border-[#00FF41]/55'
                        }`}
                      >
                        <p className="text-xs font-bold text-white">{item.title}</p>
                        <p className="text-[11px] text-emerald-100/70 mt-1 leading-snug">
                          {item.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#00FF41]/15">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  4. Prioridad de Despliegue
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DEPLOYMENT_PRIORITIES.map((item) => {
                    const isSelected = priority === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPriority(item.id)}
                        className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#00FF41]/12 border-[#00FF41]'
                            : 'bg-[#030603]/80 border-[#00FF41]/20 hover:border-[#00FF41]/55'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-bold text-white">{item.title}</p>
                          <Zap
                            className={`w-3.5 h-3.5 ${
                              isSelected ? 'text-[#00FF41]' : 'text-emerald-400/40'
                            }`}
                          />
                        </div>
                        <p className="text-[11px] text-emerald-100/70 mt-1 leading-snug">
                          {item.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: Sticky Personal Order Panel & Endpoint Dispatch */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <form
              onSubmit={handleSendDirectOrder}
              className="matrix-panel rounded-2xl p-6 border border-[#00FF41]/45 space-y-6"
              noValidate
            >
              {/* Order Summary Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#00FF41]/20 pb-4">
                <div>
                  <p className="text-xs font-mono text-[#00FF41]">Orden Personalizada</p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Resumen de Funciones
                  </h3>
                </div>

                {selectedFunctions.length > 0 && (
                  <button
                    type="button"
                    onClick={clearSelection}
                    className="inline-flex items-center gap-1 text-xs text-emerald-300/75 hover:text-[#00FF41] transition-colors cursor-pointer"
                    title="Vaciar selección"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Limpiar</span>
                  </button>
                )}
              </div>

              {/* Metrics Strip: Functions Count + Sprint Timeline (NO PRICES) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#030603] border border-[#00FF41]/25">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-200/75 mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#00FF41]" />
                    <span>Funciones</span>
                  </div>
                  <p className="font-mono text-2xl font-bold text-[#00FF41] tabular-nums">
                    {selectedFunctions.length}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#030603] border border-[#00FF41]/25">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-200/75 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#00FF41]" />
                    <span>Plazo estimado</span>
                  </div>
                  <p className="font-mono text-2xl font-bold text-white tabular-nums">
                    {estimatedWeeks}{' '}
                    <span className="text-xs font-normal text-emerald-300/75">
                      {estimatedWeeks === 1 ? 'semana' : 'semanas'}
                    </span>
                  </p>
                </div>
              </div>

              {/* Selected Functions List */}
              <div className="space-y-2">
                <p className="text-xs font-mono text-emerald-300/80">
                  Módulos incluidos en tu orden
                </p>

                {selectedFunctions.length === 0 ? (
                  <div className="rounded-xl bg-[#030603] border border-dashed border-[#00FF41]/25 p-5 text-center text-xs text-emerald-300/70">
                    Aún no has seleccionado funciones. Elige un escenario rápido o marca los
                    módulos a la izquierda.
                  </div>
                ) : (
                  <ul className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                    {selectedFunctions.map((fn) => (
                      <li
                        key={fn.id}
                        className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#030603] border border-[#00FF41]/20 text-xs"
                      >
                        <span className="text-emerald-100 truncate">{fn.title}</span>
                        <button
                          type="button"
                          onClick={() => toggleFunction(fn.id)}
                          className="text-emerald-400/70 hover:text-red-400 p-1 transition-colors cursor-pointer shrink-0"
                          aria-label={`Quitar ${fn.title}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Client Details Form */}
              <div className="space-y-3 pt-4 border-t border-[#00FF41]/20">
                <p className="text-xs font-mono text-[#00FF41]">
                  Tus datos para procesar la orden
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="order-client-name"
                      className="block text-[11px] text-emerald-200/80 mb-1"
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="order-client-name"
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                        setValidationError(null);
                      }}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full px-3 py-2.5 rounded-lg bg-[#030603] border border-[#00FF41]/30 text-xs text-white placeholder-emerald-700 focus:outline-none focus:border-[#00FF41]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="order-company-name"
                      className="block text-[11px] text-emerald-200/80 mb-1"
                    >
                      Empresa o proyecto *
                    </label>
                    <input
                      id="order-company-name"
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                        setValidationError(null);
                      }}
                      placeholder="Ej. Grupo Horizonte"
                      className="w-full px-3 py-2.5 rounded-lg bg-[#030603] border border-[#00FF41]/30 text-xs text-white placeholder-emerald-700 focus:outline-none focus:border-[#00FF41]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="order-client-contact"
                    className="block text-[11px] text-emerald-200/80 mb-1"
                  >
                    Tu correo o WhatsApp de contacto *
                  </label>
                  <input
                    id="order-client-contact"
                    type="text"
                    required
                    value={clientContact}
                    onChange={(e) => {
                      setClientContact(e.target.value);
                      setValidationError(null);
                    }}
                    placeholder="Ej. carlos@empresa.com o +58 412 000 0000"
                    className="w-full px-3 py-2.5 rounded-lg bg-[#030603] border border-[#00FF41]/30 text-xs text-white placeholder-emerald-700 focus:outline-none focus:border-[#00FF41]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="order-notes"
                    className="block text-[11px] text-emerald-200/80 mb-1"
                  >
                    Notas adicionales (opcional)
                  </label>
                  <textarea
                    id="order-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Detalles técnicos, integraciones actuales o requerimientos puntuales..."
                    className="w-full px-3 py-2 rounded-lg bg-[#030603] border border-[#00FF41]/30 text-xs text-white placeholder-emerald-700 focus:outline-none focus:border-[#00FF41]"
                  />
                </div>
              </div>

              {/* Validation Alert */}
              {validationError && (
                <div
                  role="alert"
                  className="flex items-start gap-2 p-3 rounded-lg bg-red-950/60 border border-red-400/50 text-xs text-red-200"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Primary Real HTTP Endpoint Submit + WhatsApp / Mailto / Copy */}
              <div className="space-y-2.5 pt-1">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 px-4 rounded-lg bg-[#00FF41] hover:bg-[#39ff14] disabled:opacity-60 text-[#050805] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando Orden al Endpoint...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Orden Directa al Correo / Panel</span>
                    </>
                  )}
                </button>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleChannelAnchorClick(e, 'whatsapp')}
                  className="w-full py-3 px-4 rounded-lg border border-[#00FF41]/60 hover:border-[#00FF41] bg-[#00FF41]/10 hover:bg-[#00FF41]/20 text-[#00FF41] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Orden a WhatsApp ({OWNER_CONTACT.whatsappDisplay})</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={mailtoHref}
                    onClick={(e) => handleChannelAnchorClick(e, 'email')}
                    className="py-2.5 px-3 rounded-lg border border-[#00FF41]/30 hover:border-[#00FF41]/70 bg-[#030603] text-emerald-100 hover:text-[#00FF41] font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Abrir en Correo</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyOrder}
                    className="py-2.5 px-3 rounded-lg border border-[#00FF41]/30 hover:border-[#00FF41]/70 bg-[#030603] text-emerald-100 hover:text-[#00FF41] font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copiedOrder ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00FF41]" />
                        <span className="text-[#00FF41]">Orden Copiada</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Orden</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-emerald-300/70 pt-1">
                  Destino: {OWNER_CONTACT.email} · WhatsApp {OWNER_CONTACT.whatsappDisplay}
                </p>
              </div>

              {/* Endpoint / Dispatch Feedback Banner */}
              {dispatchFeedback && (
                <div
                  className={`rounded-xl p-4 space-y-2 animate-fade-up border ${
                    dispatchFeedback.result?.ok === false
                      ? 'bg-amber-950/50 border-amber-400/50'
                      : 'bg-[#00FF41]/10 border-[#00FF41]'
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 text-xs font-bold ${
                      dispatchFeedback.result?.ok === false ? 'text-amber-300' : 'text-[#00FF41]'
                    }`}
                  >
                    {dispatchFeedback.result?.ok === false ? (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    )}
                    <span>
                      Orden {dispatchFeedback.order.orderId} ({dispatchFeedback.order.functions.length}{' '}
                      funciones)
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100/90 leading-relaxed">
                    {dispatchFeedback.result
                      ? dispatchFeedback.result.message
                      : `Tu orden para ${dispatchFeedback.order.companyName} se abrió correctamente en ${
                          dispatchFeedback.order.channel === 'whatsapp'
                            ? 'WhatsApp'
                            : dispatchFeedback.order.channel === 'email'
                            ? 'tu cliente de correo'
                            : 'el portapapeles'
                        }.`}
                  </p>
                </div>
              )}
            </form>

            {/* Recent Local Dispatched Orders (if any) */}
            {orderHistory.length > 0 && (
              <div className="matrix-panel rounded-xl p-4 space-y-2.5">
                <p className="text-xs font-mono text-emerald-300/80">
                  Órdenes recientes enviadas desde este dispositivo
                </p>
                <div className="space-y-1.5">
                  {orderHistory.map((item) => (
                    <div
                      key={item.orderId}
                      className="flex items-center justify-between gap-2 text-xs px-3 py-2 rounded-lg bg-[#030603] border border-[#00FF41]/15"
                    >
                      <span className="font-mono text-[#00FF41]">{item.orderId}</span>
                      <span className="text-emerald-100/80 truncate flex-1">
                        {item.companyName}
                      </span>
                      <span className="font-mono text-emerald-300/70 tabular-nums shrink-0">
                        {item.functions.length} mód · {item.createdAt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
