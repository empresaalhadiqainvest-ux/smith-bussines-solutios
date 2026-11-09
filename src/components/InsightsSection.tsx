import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  FileCheck2,
  FileDown,
  Filter,
  Layers,
  RefreshCw,
  Search,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { WhitepaperCategory, WhitepaperItem } from '../types';
import { initialWhitepapers } from '../data/insightsData';

interface InsightsSectionProps {
  onOpenWhitepaperDetail: (whitepaper: WhitepaperItem) => void;
  onRequestBriefing: (whitepaper: WhitepaperItem) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onOpenWhitepaperDetail,
  onRequestBriefing,
}) => {
  const [whitepapers, setWhitepapers] = useState<WhitepaperItem[]>(initialWhitepapers);
  const [selectedCategory, setSelectedCategory] = useState<WhitepaperCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  // Simulated dynamic fetch/refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      // Simulate live update of download metrics
      setWhitepapers((prev) =>
        prev.map((item) => ({
          ...item,
          downloadCount: item.downloadCount + Math.floor(Math.random() * 5) + 1,
        }))
      );
      setIsRefreshing(false);
    }, 600);
  };

  // Handle direct download
  const handleDownload = (wp: WhitepaperItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    // Increment download counter
    setWhitepapers((prev) =>
      prev.map((item) =>
        item.id === wp.id ? { ...item, downloadCount: item.downloadCount + 1 } : item
      )
    );

    // Generate executive summary text file for client download
    const fileContent = `================================================================================
SMITH BUSINESS SOLUTIONS · AL-HADIQA INVEST HOLDING
INFORME TÉCNICO & WHITEPAPER CORPORATIVO
================================================================================
Título: ${wp.title}
Categoría: ${wp.categoryLabel}
Fecha de Emisión: ${wp.publishDate}
Tiempo de Lectura: ${wp.readTime}
Autor: ${wp.author.name} (${wp.author.role})
Formato: ${wp.fileFormat}
--------------------------------------------------------------------------------

RESUMEN EJECUTIVO:
${wp.executiveSummary}

--------------------------------------------------------------------------------
HALLAZGOS CLAVE AUDITADOS:
${wp.keyFindings.map((f, i) => `[${i + 1}] ${f}`).join('\n')}

--------------------------------------------------------------------------------
MÉTRICAS CUANTITATIVAS:
${wp.metrics.map((m) => `• ${m.label}: ${m.value}`).join('\n')}

--------------------------------------------------------------------------------
TABLA DE CONTENIDO COMPLETA:
${wp.tableOfContents.map((c) => `  ${c}`).join('\n')}

--------------------------------------------------------------------------------
DESARROLLO DE CAPÍTULOS TÉCNICOS:
${wp.fullSections
  .map(
    (s) =>
      `### ${s.heading}\n${s.body}\n${
        s.takeaway ? `Conclusión Operativa: ${s.takeaway}\n` : ''
      }`
  )
  .join('\n\n')}

================================================================================
© ${new Date().getFullYear()} Smith Business Solutions. Propiedad de Al-Hadiqa Invest Holding.
Para solicitar un briefing ejecutivo o implementar esta arquitectura en su organización,
contacte a: consultoria@alhadiqainvest.com
================================================================================`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SBS_Whitepaper_${wp.slug}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Toast notification
    setDownloadSuccessToast(wp.title);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 4000);
  };

  // Filtered whitepapers
  const filteredWhitepapers = useMemo(() => {
    return whitepapers.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.executiveSummary.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)) ||
        item.author.name.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [whitepapers, selectedCategory, searchQuery]);

  const categories: { id: WhitepaperCategory; label: string; count: number }[] = [
    { id: 'all', label: 'Todos los Informes', count: whitepapers.length },
    {
      id: 'operations',
      label: 'Operaciones & RPA',
      count: whitepapers.filter((w) => w.category === 'operations').length,
    },
    {
      id: 'architecture',
      label: 'Arquitectura Cloud',
      count: whitepapers.filter((w) => w.category === 'architecture').length,
    },
    {
      id: 'fintech',
      label: 'Fintech & Capital',
      count: whitepapers.filter((w) => w.category === 'fintech').length,
    },
    {
      id: 'ai',
      label: 'Inteligencia Artificial',
      count: whitepapers.filter((w) => w.category === 'ai').length,
    },
  ];

  return (
    <section id="insights" className="py-24 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[350px] bg-gradient-to-l from-emerald-500/5 via-amber-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Smith Research & Intelligence Labs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Informes Técnicos, Whitepapers & Tendencias
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Investigación aplicada, benchmarks de rendimiento y modelos analíticos diseñados para guiar decisiones estratégicas de Comités Directivos y Juntas de Inversión.
            </p>
          </div>

          {/* Real-time sync indicator & Refresh */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/10 text-[11px] text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Edición Q4 2026 Activa</span>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white border border-white/10 transition-colors disabled:opacity-50 cursor-pointer"
              title="Sincronizar últimas publicaciones"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 text-amber-400 ${
                  isRefreshing ? 'animate-spin' : ''
                }`}
              />
              <span>{isRefreshing ? 'Sincronizando...' : 'Actualizar'}</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-slate-950/20 text-slate-950'
                      : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema, tecnología o autor..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Whitepapers Grid (Minimal Glassmorphism Cards) */}
        {filteredWhitepapers.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-card border border-white/10 space-y-3">
            <Layers className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-base font-bold text-white">
              No se encontraron informes para este criterio
            </h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Intente con otras palabras clave o seleccione la categoría "Todos los Informes".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-semibold text-amber-400 hover:underline pt-2 inline-block cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredWhitepapers.map((wp) => (
              <div
                key={wp.id}
                onClick={() => onOpenWhitepaperDetail(wp)}
                className={`group rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  wp.featured
                    ? 'bg-gradient-to-b from-[#0f172a] via-[#0a1020] to-[#040711] border border-amber-400/40 shadow-xl shadow-amber-500/5 hover:border-amber-400 hover:scale-[1.01]'
                    : 'glass-panel-elevated hover:border-white/25 hover:scale-[1.01]'
                }`}
              >
                {/* Featured Badge */}
                {wp.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Investigación Destacada</span>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Category, Date & Read Time */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 pt-1">
                    <span
                      className={`font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border text-[10px] ${
                        wp.category === 'operations'
                          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                          : wp.category === 'fintech'
                          ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                          : wp.category === 'architecture'
                          ? 'text-blue-400 bg-blue-500/10 border-blue-500/20'
                          : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                      }`}
                    >
                      {wp.categoryLabel}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="flex items-center gap-1 font-mono text-[10px]">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {wp.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {wp.title}
                  </h3>

                  {/* Executive Summary Snippet */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {wp.executiveSummary}
                  </p>

                  {/* Primary Key Metric Highlight */}
                  {wp.metrics.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          {wp.metrics[0].label}
                        </span>
                        <span className="text-base font-extrabold text-amber-300 font-mono">
                          {wp.metrics[0].value}
                        </span>
                      </div>
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {wp.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Strip: Author & Action Buttons */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  {/* Author */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-amber-300 shrink-0">
                      {wp.author.avatar}
                    </div>
                    <div className="truncate">
                      <span className="text-xs font-semibold text-slate-200 block truncate">
                        {wp.author.name}
                      </span>
                      <span className="text-[10px] text-slate-500 block truncate">
                        {wp.publishDate}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => handleDownload(wp, e)}
                      title={`Descargar ${wp.fileFormat} (${wp.fileSize})`}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-amber-400 border border-white/10 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenWhitepaperDetail(wp);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>Leer</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Download Toast */}
        {downloadSuccessToast && (
          <div className="fixed bottom-24 right-6 z-50 p-4 rounded-2xl glass-panel-elevated border border-emerald-500/40 shadow-2xl flex items-center gap-3 text-xs text-white animate-slideUp">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="space-y-0.5 pr-2">
              <span className="font-bold text-emerald-400 block">
                Descarga Iniciada
              </span>
              <span className="text-slate-300 line-clamp-1 text-[11px]">
                {downloadSuccessToast}
              </span>
            </div>
          </div>
        )}

        {/* Bottom Research Advisory Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-black/80 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Briefings Ejecutivos a Medida
            </span>
            <h4 className="text-xl font-bold text-white">
              ¿Desea una sesión técnica personalizada sobre alguno de estos temas?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nuestros arquitectos y socios directores coordinan workshops confidenciales de 45 minutos para evaluar la aplicabilidad directa de estas investigaciones en su infraestructura corporativa.
            </p>
          </div>

          <a
            href="#contacto"
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/15 transition-all hover:scale-[1.02] shrink-0"
          >
            Agendar Sesión Técnica
          </a>
        </div>
      </div>
    </section>
  );
};
