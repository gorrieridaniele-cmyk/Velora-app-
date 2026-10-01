import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IlRistorante } from './components/IlRistorante';
import { CucinaChef } from './components/CucinaChef';
import { MicroSeasonsSection } from './components/MicroSeasonsSection';
import { ArtigianiSection } from './components/ArtigianiSection';
import { MenuSection } from './components/MenuSection';
import { CantinaSection } from './components/CantinaSection';
import { EventiSection } from './components/EventiSection';
import { RegalaEsperienzaSection } from './components/RegalaEsperienzaSection';
import { ConciergeFirenzeSection } from './components/ConciergeFirenzeSection';
import { DiarioSection } from './components/DiarioSection';
import { PrenotazioniSection } from './components/PrenotazioniSection';
import { ContattiSection } from './components/ContattiSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { PlaceholderGuideModal } from './components/PlaceholderGuideModal';
import { Calendar } from 'lucide-react';

function RestaurantApp() {
  const { lang, atmosphere, t } = useLanguage();
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [placeholderModalOpen, setPlaceholderModalOpen] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 selection:bg-[#2C3E35]/15 selection:text-[#1E1D1B] ${
        atmosphere === 'evening'
          ? 'bg-[#181716] text-[#F5F2EB]'
          : 'bg-[#FBF9F5] text-[#1E1D1B]'
      }`}
    >
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="grow">
        <Hero />
        <IlRistorante />
        <CucinaChef />
        <MicroSeasonsSection />
        <ArtigianiSection />
        <MenuSection />
        <CantinaSection />
        <EventiSection />
        <RegalaEsperienzaSection />
        <ConciergeFirenzeSection />
        <DiarioSection />
        <PrenotazioniSection />
        <ContattiSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPlaceholderModal={() => setPlaceholderModalOpen(true)}
        onOpenCookieModal={() => setCookieModalOpen(true)}
      />

      {/* Modals & Banners */}
      <CookieBanner
        modalOpen={cookieModalOpen}
        setModalOpen={setCookieModalOpen}
      />

      <PlaceholderGuideModal
        isOpen={placeholderModalOpen}
        onClose={() => setPlaceholderModalOpen(false)}
      />

      {/* Floating Mobile Reserve Button (Only visible on small screens when scrolled) */}
      <div className="fixed bottom-4 right-4 z-30 sm:hidden">
        <a
          href="#prenotazioni"
          className="flex items-center gap-2 px-4 py-2.5 bg-[#2C3E35] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
          aria-label={t('nav.reserve')}
        >
          <Calendar className="w-4 h-4" />
          <span>{t('nav.reserve')}</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <RestaurantApp />
    </LanguageProvider>
  );
}
