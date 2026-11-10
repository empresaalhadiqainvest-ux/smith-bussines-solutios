import React, { useState } from 'react';
import {
  ArrowDownToLine,
  Check,
  CheckCircle2,
  Copy,
  FileText,
  MessageSquare,
  TrendingUp,
  X,
} from 'lucide-react';
import { WhitepaperItem } from '../types';

interface WhitepaperReaderModalProps {
  whitepaper: WhitepaperItem | null;
  isOpen: boolean;
  onClose: () => void;
  onDownload: (wp: WhitepaperItem) => void;
  onRequestBriefing: (wp: WhitepaperItem) => void;
}

export const WhitepaperReaderModal: React.FC<WhitepaperReaderModalProps> = ({
  whitepaper,
  isOpen,
  onClose,
  onDownload,
  onRequestBriefing,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'summary' | 'full' | 'methodology'>('summary');

  if (!isOpen || !whitepaper) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/#insights-${whitepaper.slug}`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl glass-panel-elevated border border-white/20 shadow-2xl z-10 overflow-hidden animate-slideUp text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-slate-900/90">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25">
                {whitepaper.categoryLabel}
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                {whitepaper.publishDate} · {whitepaper.readTime}
              </span>
              <span className="text-emerald-400 font-mono text-[11px] font-semibold">
                {whitepaper.fileFormat}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              {whitepaper.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/10 bg-slate-900/50 text-xs">
          <button
            onClick={() => setActiveTab('summary')}
            className={`pb-3 px-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'summary'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Resumen Ejecutivo & Hallazgos
          </button>
          <button
            onClick={() => setActiveTab('full')}
            className={`pb-3 px-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'full'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Capítulos & Desarrollo Técnico
          </button>
          <button
            onClick={() => setActiveTab('methodology')}
            className={`pb-3 px-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'methodology'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Metodología & Autoría
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {activeTab === 'summary' && (
            <div className="space-y-8">
              {/* Quantified Metrics Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {whitepaper.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">
                      {metric.label}
                    </span>
                    <span className="text-2xl font-extrabold text-amber-300 font-mono tracking-tight">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Executive Summary */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Síntesis para Directores y Tomadores de Decisión</span>
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  {whitepaper.executiveSummary}
                </p>
              </div>

              {/* Key Findings List */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>Hallazgos Clave Auditados</span>
                </h3>
                <div className="space-y-2.5">
                  {whitepaper.keyFindings.map((finding, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-emerald-500/15 text-xs text-slate-200 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Índice de Contenido del Documento Completo:
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                  {whitepaper.tableOfContents.map((chapter, idx) => (
                    <li
                      key={idx}
                      className="p-2 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between"
                    >
                      <span>{chapter}</span>
                      <span className="text-slate-500 text-[10px]">Pág. {idx * 4 + 3}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'full' && (
            <div className="space-y-6">
              {whitepaper.fullSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="space-y-3 p-6 rounded-2xl bg-slate-900/70 border border-white/10"
                >
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {sec.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sec.body}
                  </p>
                  {sec.takeaway && (
                    <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 font-medium">
                      <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px] block mb-1">
                        Conclusión Operativa Estratégica:
                      </span>
                      {sec.takeaway}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Información del Autor y División de Investigación
                </h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-emerald-400 p-[1px] flex items-center justify-center font-extrabold text-slate-950 font-mono text-sm">
                    {whitepaper.author.avatar}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {whitepaper.author.name}
                    </span>
                    <span className="text-xs text-slate-400 block">
                      {whitepaper.author.role}
                    </span>
                    <span className="text-[11px] text-amber-400 block mt-0.5">
                      Smith Business Solutions · Research & Capital Labs
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 text-xs text-slate-300 leading-relaxed">
                <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">
                  Rigor Metodológico y Fuentes de Datos
                </h5>
                <p>
                  Las investigaciones publicadas por Smith Business Solutions combinan análisis de telemetría en sistemas de producción, modelos estocásticos parametrizados y encuestas directas a más de 40 directores de tecnología y finanzas en el ecosistema corporativo iberoamericano.
                </p>
                <p>
                  Toda la información empírica ha sido anonimizada y validada conforme a acuerdos de confidencialidad estrictos (NDA) bajo el holding Al-Hadiqa Invest.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="p-6 border-t border-white/10 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyLink}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enlace Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Copiar Enlace</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-slate-500 font-mono hidden sm:inline-block">
              {whitepaper.downloadCount.toLocaleString()} descargas verificadas
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onRequestBriefing(whitepaper)}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Solicitar Sesión Técnica</span>
            </button>

            <button
              onClick={() => onDownload(whitepaper)}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:brightness-110 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-transform active:scale-95"
            >
              <ArrowDownToLine className="w-4 h-4 text-slate-950" />
              <span>Descargar Whitepaper ({whitepaper.fileSize})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
