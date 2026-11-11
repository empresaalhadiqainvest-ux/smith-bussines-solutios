import React, { useState } from 'react';
import { FileText, Lock, ShieldCheck, X, CheckCircle2, Send } from 'lucide-react';

export type LegalTab = 'terms' | 'privacy';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'terms',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-up overflow-y-auto"
    >
      <div className="relative w-full max-w-3xl glass-panel-elevated border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Cerrar modal legal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-6 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Marco Legal & Gobernanza Corporativa</span>
          </div>
          <h2 id="legal-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Smith Business Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            División de Tecnología e Inteligencia Artificial de Al-Hadiqa Invest Holding.
          </p>

          {/* Segmented Control Tabs */}
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'terms'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Términos del Servicio</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'privacy'
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Política de Privacidad</span>
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="py-6 max-h-[60vh] overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed pr-2">
          {activeTab === 'terms' ? (
            <div className="space-y-5">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  1. Objeto y Alcance de los Servicios
                </h3>
                <p>
                  Smith Business Solutions (SBS) presta servicios de consultoría estratégica, arquitectura de software en la nube, desarrollo de tiendas e-commerce de alto rendimiento, agentes de IA conversacionales y auditorías técnicas orientadas a la optimización de ingresos empresariales.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  2. Estimaciones y Presupuestos
                </h3>
                <p>
                  Las cifras arrojadas por la calculadora interactiva de proyectos y el auditor de e-commerce constituyen cotizaciones orientativas sujetas a validación técnica formal mediante propuesta comercial firmada entre las partes.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  3. Acuerdos de Confidencialidad (NDA)
                </h3>
                <p>
                  SBS garantiza que cualquier dato de facturación, bases de clientes, inventarios o información comercial suministrada por el cliente está amparada por estricta confidencialidad profesional, formalizándose mediante NDA bilateral previo a la fase de integración técnica.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  4. Propiedad Intelectual
                </h3>
                <p>
                  Una vez completados los pagos contractuales pactados, el cliente ostenta la titularidad de los entregables a medida desarrollados específicamente para su negocio, garantizando autonomía total sobre sus canales comerciales.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-5">
              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  1. Recopilación de Información
                </h3>
                <p>
                  Solo recopilamos los datos estrictamente necesarios ingresados voluntariamente a través del formulario multi-paso, la calculadora o las sesiones de consulta (nombre, empresa, correo electrónico y número de teléfono corporativo).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  2. Finalidad del Tratamiento de Datos
                </h3>
                <p>
                  Los datos se utilizan exclusivamente para: (a) formular propuestas técnicas y económicas detalladas; (b) coordinar sesiones de consultoría por Google Meet o WhatsApp; (c) dar cumplimiento a los acuerdos contractuales suscritos.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  3. No Comercialización con Terceros
                </h3>
                <p>
                  Smith Business Solutions nunca vende, arrienda ni transfiere bases de datos o información confidencial de clientes a intermediarios ni redes de publicidad de terceros.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  4. Derechos de Acceso y Cancelación (ARCO)
                </h3>
                <p>
                  Cualquier representante corporativo puede solicitar en cualquier momento la modificación o eliminación total de sus registros comunicándose directamente a nuestro canal legal: <strong>empresaalhadiqainvest@gmail.com</strong>.
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-slate-400">
            Contacto oficial: <strong>empresaalhadiqainvest@gmail.com</strong> · WhatsApp: <strong>0422 027 3766</strong>
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/584220273766?text=Hola%20Smith%20Business%20Solutions.%20Tengo%20una%20consulta%20legal%20o%20contractual."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-semibold border border-emerald-400/30 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Legal</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
