import { Suspense, lazy, useState } from 'react';
import { MatrixRainCanvas, type RainIntensity } from './components/MatrixRainCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { FunctionOrderCalculator } from './components/FunctionOrderCalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import type { CapabilityPillar } from './types';

const CapabilityModal = lazy(() =>
  import('./components/CapabilityModal').then((m) => ({ default: m.CapabilityModal }))
);
const LegalModal = lazy(() =>
  import('./components/LegalModal').then((m) => ({ default: m.LegalModal }))
);

export default function App() {
  const [rainIntensity, setRainIntensity] = useState<RainIntensity>('normal');
  const [selectedFunctionIds, setSelectedFunctionIds] = useState<string[]>([
    'ia-whatsapp',
    'cloud-web',
  ]);
  const [inspectedPillar, setInspectedPillar] = useState<CapabilityPillar | null>(null);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    tab: 'terms' | 'privacy';
  }>({
    isOpen: false,
    tab: 'terms',
  });

  const cycleRainIntensity = () => {
    setRainIntensity((prev) =>
      prev === 'normal' ? 'subtle' : prev === 'subtle' ? 'off' : 'normal'
    );
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddPillarFunctions = (pillar: CapabilityPillar) => {
    const merged = Array.from(
      new Set([...selectedFunctionIds, ...pillar.presetFunctionIds])
    );
    setSelectedFunctionIds(merged);
    scrollToSection('configurador');
  };

  const handleOrderBusinessApp = () => {
    const merged = Array.from(
      new Set([...selectedFunctionIds, 'cloud-panel', 'cloud-web', 'est-capacitacion'])
    );
    setSelectedFunctionIds(merged);
    scrollToSection('configurador');
  };

  return (
    <div className="min-h-screen bg-[#050805] text-emerald-50 flex flex-col relative">
      {/* Lightweight Matrix Digital Rain Backdrop */}
      <MatrixRainCanvas intensity={rainIntensity} />

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00FF41] focus:text-[#050805] focus:font-bold focus:rounded-lg focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      {/* Strict 3-Zone Top Navigation */}
      <Navbar
        selectedCount={selectedFunctionIds.length}
        onScrollToCalculator={() => scrollToSection('configurador')}
      />

      <main id="main-content" className="flex-1 relative z-10">
        {/* 01. Summarized Matrix Hero */}
        <HeroSection
          onScrollToCalculator={() => scrollToSection('configurador')}
          onScrollToCapabilities={() => scrollToSection('capacidades')}
          rainIntensity={rainIntensity}
          onCycleRainIntensity={cycleRainIntensity}
        />

        {/* 02. Core 4 Capabilities + Entrepreneur Management Web App */}
        <CapabilitiesSection
          selectedFunctionIds={selectedFunctionIds}
          onInspectPillar={(pillar) => setInspectedPillar(pillar)}
          onAddPillarFunctions={handleAddPillarFunctions}
          onOrderBusinessApp={handleOrderBusinessApp}
        />

        {/* 03. Function-Based Order Calculator (Zero Prices -> WhatsApp & Email Dispatch) */}
        <FunctionOrderCalculator
          selectedFunctionIds={selectedFunctionIds}
          onChangeSelectedFunctions={setSelectedFunctionIds}
        />

        {/* 04. Frequently Asked Questions Accordion */}
        <FAQSection onScrollToCalculator={() => scrollToSection('configurador')} />
      </main>

      <Footer
        onOpenTerms={() => setLegalModalState({ isOpen: true, tab: 'terms' })}
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, tab: 'privacy' })}
      />

      <CookieBanner
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, tab: 'privacy' })}
      />

      <Suspense fallback={null}>
        {inspectedPillar && (
          <CapabilityModal
            pillar={inspectedPillar}
            onClose={() => setInspectedPillar(null)}
            onLoadPillarFunctions={handleAddPillarFunctions}
          />
        )}

        {legalModalState.isOpen && (
          <LegalModal
            isOpen={legalModalState.isOpen}
            initialTab={legalModalState.tab}
            onClose={() => setLegalModalState((prev) => ({ ...prev, isOpen: false }))}
          />
        )}
      </Suspense>
    </div>
  );
}
