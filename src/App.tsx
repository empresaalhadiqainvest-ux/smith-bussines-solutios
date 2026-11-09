import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpotlightServicesGrid } from './components/SpotlightServicesGrid';
import { InternationalPricing } from './components/InternationalPricing';
import { ThreeBackground } from './components/ThreeBackground';
import { ProjectCalculator } from './components/ProjectCalculator';
import { CaseStudies } from './components/CaseStudies';
import { Methodology } from './components/Methodology';
import { ContactSection } from './components/ContactSection';
import { FloatingChatWidget } from './components/FloatingChatWidget';
import { Footer } from './components/Footer';
import { VanillaWidgetModal } from './components/VanillaWidgetModal';
import { SpotlightCodeModal } from './components/SpotlightCodeModal';
import { MultiStepCodeModal } from './components/MultiStepCodeModal';
import { ChatWidgetCodeModal } from './components/ChatWidgetCodeModal';
import { ProposalModal } from './components/ProposalModal';
import { ServiceDetailsModal } from './components/ServiceDetailsModal';
import { InsightsSection } from './components/InsightsSection';
import { WhitepaperReaderModal } from './components/WhitepaperReaderModal';
import { EcommerceGrowthHook } from './components/EcommerceGrowthHook';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PerformanceMetricsDashboard } from './components/PerformanceMetricsDashboard';
import { SidebarNav } from './components/SidebarNav';
import { SuccessAnimationOverlay, SuccessOverlayData } from './components/SuccessAnimationOverlay';
import { CalculatorState, ServiceItem, SolutionType, WhitepaperItem } from './types';

export default function App() {
  // Sidebar navigation drawer state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Modal states for previewing and copying code
  const [isWidgetModalOpen, setIsWidgetModalOpen] = useState(false);
  const [isSpotlightModalOpen, setIsSpotlightModalOpen] = useState(false);
  const [isMultiStepModalOpen, setIsMultiStepModalOpen] = useState(false);
  const [isChatWidgetModalOpen, setIsChatWidgetModalOpen] = useState(false);

  // Proposal, Service detail, and Whitepaper reader modals
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);
  const [activeWhitepaper, setActiveWhitepaper] = useState<WhitepaperItem | null>(null);

  // Global synchronized calculator state
  const [calcState, setCalcState] = useState<CalculatorState>({
    solutionType: 'software',
    scale: 'pyme',
    deliverySpeed: 'standard',
    selectedAddons: ['security_audit'],
  });

  const [prefilledTotal, setPrefilledTotal] = useState<number>(5880);
  const [prefilledWeeks, setPrefilledWeeks] = useState<number>(5);

  // Success animation overlay state for contact form and calculator finalization
  const [successOverlay, setSuccessOverlay] = useState<{
    isOpen: boolean;
    data: SuccessOverlayData | null;
  }>({
    isOpen: false,
    data: null,
  });

  // Scroll helpers
  const scrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('servicios');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInsights = () => {
    const el = document.getElementById('insights');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a service card's "Estimar" is clicked
  const handleSelectServiceForCalculator = (solutionType: SolutionType) => {
    setCalcState((prev) => ({ ...prev, solutionType }));
    scrollToCalculator();
  };

  // When calculator emits proposal request
  const handleOpenProposal = (state: CalculatorState, total: number, weeks: number) => {
    setCalcState(state);
    setPrefilledTotal(total);
    setPrefilledWeeks(weeks);
    setIsProposalModalOpen(true);
  };

  // 3D Interactive Hologram Inspection State
  const [isHologram3DActive, setIsHologram3DActive] = useState(false);

  const handleOpenProposalWithAudit = (auditData: {
    monthlyVisitors: number;
    avgTicket: number;
    currentConversion: number;
    lostRevenue: number;
    projectedGain: number;
  }) => {
    setCalcState((prev) => ({
      ...prev,
      solutionType: 'software',
      scale: 'pyme',
    }));
    setPrefilledTotal(3850);
    setIsProposalModalOpen(true);
  };

  // Success overlay trigger handlers
  const handleFinalizeEstimation = (data: {
    total: number;
    weeks: number;
    solutionTitle: string;
    scaleTitle: string;
    state: CalculatorState;
  }) => {
    setCalcState(data.state);
    setPrefilledTotal(data.total);
    setPrefilledWeeks(data.weeks);

    setSuccessOverlay({
      isOpen: true,
      data: {
        type: 'project_estimation',
        title: '¡Estimación de Proyecto Finalizada!',
        subtitle:
          'Estructura presupuestaria y cronograma calculados con éxito según tus especificaciones.',
        total: data.total,
        weeks: data.weeks,
        solutionTitle: data.solutionTitle,
        scaleTitle: data.scaleTitle,
        primaryActionLabel: 'Formalizar en Propuesta Formal',
        onPrimaryAction: () => {
          setIsProposalModalOpen(true);
        },
      },
    });
  };

  const handleContactSuccess = (leadData: { fullName: string; companyName: string; referenceId: string }) => {
    setSuccessOverlay({
      isOpen: true,
      data: {
        type: 'contact_form',
        title: '¡Solicitud Registrada Exitosamente!',
        subtitle: `Estimado/a ${leadData.fullName}, tu solicitud para ${leadData.companyName} ha sido formalizada con éxito.`,
        referenceId: leadData.referenceId,
        clientName: leadData.fullName,
        companyName: leadData.companyName,
      },
    });
  };

  const handleProposalSuccess = (refId: string, company: string, name: string) => {
    setSuccessOverlay({
      isOpen: true,
      data: {
        type: 'contact_form',
        title: '¡Propuesta Formal Registrada!',
        subtitle:
          'Hemos recibido tus parámetros y especificaciones técnicas. Un director comercial te contactará en menos de 2 horas.',
        referenceId: refId,
        clientName: name,
        companyName: company || 'Empresa',
        total: prefilledTotal,
        weeks: prefilledWeeks,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#030712]/80 bg-subtle-grid text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 relative backdrop-blur-[0.5px]">
      {/* Immersive 3D Holographic Ambient HUD Background */}
      <ThreeBackground
        interactiveMode={isHologram3DActive}
        onToggleInteractive={() => setIsHologram3DActive(!isHologram3DActive)}
      />

      {/* Strict 3-zone Top Bar Contract Navbar */}
      <Navbar
        onOpenWidgetCode={() => setIsWidgetModalOpen(true)}
        onOpenSpotlightCode={() => setIsSpotlightModalOpen(true)}
        onOpenMultiStepCode={() => setIsMultiStepModalOpen(true)}
        onOpenChatCode={() => setIsChatWidgetModalOpen(true)}
        onScrollToCalculator={scrollToCalculator}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* Interactive Sidebar Navigation for Sections with Scrollspy */}
      <SidebarNav
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenToggle={() => setIsSidebarOpen(true)}
        onOpenProposalModal={() => setIsProposalModalOpen(true)}
      />

      <main className="flex-1 relative z-10">
        {/* Modern Corporate Hero */}
        <Hero
          onScrollToCalculator={scrollToCalculator}
          onScrollToServices={scrollToServices}
          onOpenHologram={() => setIsHologram3DActive(true)}
        />

        {/* High-Retention Star Hook: Interactive E-Commerce Friction & Sales Leak Audit */}
        <EcommerceGrowthHook
          onOpenProposalWithAudit={handleOpenProposalWithAudit}
          onScrollToContact={scrollToContact}
        />

        {/* Semantic 3-Column Spotlight Hover Services Grid */}
        <SpotlightServicesGrid
          onSelectServiceForCalculator={handleSelectServiceForCalculator}
          onOpenServiceDetails={(service) => setActiveServiceDetail(service)}
          onOpenSpotlightCodeModal={() => setIsSpotlightModalOpen(true)}
        />

        {/* International Enterprise Pricing with Live USD/EUR Currency Conversion */}
        <InternationalPricing
          onSelectSolution={handleSelectServiceForCalculator}
          onOpenProposalModal={() => setIsProposalModalOpen(true)}
        />

        {/* Centered Star Feature: Project Estimation Calculator */}
        <ProjectCalculator
          initialSolution={calcState.solutionType}
          onOpenProposalModal={handleOpenProposal}
          onOpenWidgetCodeModal={() => setIsWidgetModalOpen(true)}
          onFinalizeEstimation={handleFinalizeEstimation}
        />

        {/* Quantified Empirical Growth Visualizer: Recharts Performance Metrics Dashboard */}
        <PerformanceMetricsDashboard
          onOpenProposalModal={() => setIsProposalModalOpen(true)}
          onScrollToAuditor={() => {
            const el = document.getElementById('auditor-ecommerce');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Quantified Case Studies & Proof */}
        <CaseStudies />

        {/* Dynamic Insights & Executive Whitepapers Section */}
        <InsightsSection
          onOpenWhitepaperDetail={(wp) => setActiveWhitepaper(wp)}
          onRequestBriefing={() => {
            setActiveWhitepaper(null);
            scrollToContact();
          }}
        />

        {/* Social Proof: Frosted Glass Client Testimonials Carousel */}
        <TestimonialsSection
          onOpenProposalModal={() => setIsProposalModalOpen(true)}
        />

        {/* Framework & Methodology */}
        <Methodology />

        {/* Interactive Multi-Step Lead Qualification Form & Contact */}
        <ContactSection
          calcState={calcState}
          total={prefilledTotal}
          weeks={prefilledWeeks}
          onOpenMultiStepCodeModal={() => setIsMultiStepModalOpen(true)}
          onSuccessSubmission={handleContactSuccess}
        />
      </main>

      {/* Corporate Floating AI Chat Widget (Bottom Right Corner) */}
      <FloatingChatWidget
        onScrollToServices={scrollToServices}
        onScrollToCalculator={scrollToCalculator}
        onScrollToContact={scrollToContact}
        onScrollToInsights={scrollToInsights}
      />

      {/* Quiet Corporate Footer */}
      <Footer onOpenWidgetCode={() => setIsWidgetModalOpen(true)} />

      {/* Standalone Code Modals */}
      <VanillaWidgetModal
        isOpen={isWidgetModalOpen}
        onClose={() => setIsWidgetModalOpen(false)}
      />

      <SpotlightCodeModal
        isOpen={isSpotlightModalOpen}
        onClose={() => setIsSpotlightModalOpen(false)}
      />

      <MultiStepCodeModal
        isOpen={isMultiStepModalOpen}
        onClose={() => setIsMultiStepModalOpen(false)}
      />

      <ChatWidgetCodeModal
        isOpen={isChatWidgetModalOpen}
        onClose={() => setIsChatWidgetModalOpen(false)}
      />

      {/* Interactive Detail & Formal Proposal Modals */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        calcState={calcState}
        total={prefilledTotal}
        weeks={prefilledWeeks}
        onSuccessSubmission={handleProposalSuccess}
      />

      <ServiceDetailsModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onSelectForCalculator={handleSelectServiceForCalculator}
      />

      {/* Interactive Whitepaper & Trend Report Reader Modal */}
      <WhitepaperReaderModal
        whitepaper={activeWhitepaper}
        isOpen={!!activeWhitepaper}
        onClose={() => setActiveWhitepaper(null)}
        onDownload={(wp) => {
          // Trigger download and keep modal open or notify
          const fileContent = `================================================================================\nSMITH BUSINESS SOLUTIONS · WHITE PAPER\n================================================================================\n${wp.title}\n\nRESUMEN:\n${wp.executiveSummary}\n\nHALLAZGOS:\n${wp.keyFindings.join('\n')}`;
          const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `SBS_${wp.slug}.txt`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }}
        onRequestBriefing={() => {
          setActiveWhitepaper(null);
          scrollToContact();
        }}
      />

      {/* Subtle Confetti & Success Animation Overlay */}
      <SuccessAnimationOverlay
        isOpen={successOverlay.isOpen}
        onClose={() => setSuccessOverlay((prev) => ({ ...prev, isOpen: false }))}
        data={successOverlay.data}
      />
    </div>
  );
}
