import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { SoundscapePlayer } from './SoundscapePlayer';
import { Menu, X, Globe, Calendar, Moon, Sun } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, atmosphere, toggleAtmosphere, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#ristorante', label: t('nav.restaurant') },
    { href: '#cucina', label: t('nav.cuisine') },
    { href: '#menu', label: t('nav.menu') },
    { href: '#cantina', label: t('nav.cellar') },
    { href: '#eventi', label: t('nav.events') },
    { href: '#regala', label: t('nav.gift') },
    { href: '#diario', label: t('nav.diary') },
    { href: '#contatti', label: t('nav.contact') },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#1E1D1B]/10 shadow-xs py-3.5'
            : 'bg-gradient-to-b from-[#1E1D1B]/60 via-[#1E1D1B]/30 to-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className={`font-serif text-2xl md:text-3xl tracking-[0.25em] font-medium transition-colors ${
              scrolled ? 'text-[#1E1D1B] hover:text-[#A57143]' : 'text-[#FBF9F5] hover:text-[#EFECE6]'
            }`}
            aria-label="VELORA Homepage"
          >
            {RESTAURANT_INFO.name}
          </a>

          {/* Zone 2: Navigation Links (single line, subtle hover) */}
          <nav className="hidden xl:flex items-center gap-6 text-[12px] tracking-wider uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all hover:after:w-full ${
                  scrolled
                    ? 'text-[#1E1D1B]/80 hover:text-[#1E1D1B] after:bg-[#A57143]'
                    : 'text-[#FBF9F5]/85 hover:text-white after:bg-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Soundscape + Atmosphere dimmer + Language switch + Reservation CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ambient Soundscape Player */}
            <SoundscapePlayer />

            {/* Atmosphere Dimmer (Pranzo / Sera) */}
            <button
              onClick={toggleAtmosphere}
              className={`p-1.5 rounded transition-colors text-xs flex items-center gap-1 ${
                scrolled
                  ? 'text-[#1E1D1B]/70 hover:text-[#1E1D1B] hover:bg-[#1E1D1B]/5'
                  : 'text-[#FBF9F5]/80 hover:text-white hover:bg-white/10'
              }`}
              title={
                atmosphere === 'day'
                  ? (lang === 'it' ? 'Passa ad Atmosfera Serale a lume di candela' : 'Switch to Candlelit Evening Mode')
                  : (lang === 'it' ? 'Passa a Luce del Giorno' : 'Switch to Daylight Mode')
              }
              aria-label={lang === 'it' ? 'Cambia atmosfera luce' : 'Toggle ambiance lighting'}
            >
              {atmosphere === 'day' ? (
                <Moon className="w-3.5 h-3.5" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-[#A57143]" />
              )}
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs tracking-wider uppercase font-medium rounded transition-colors ${
                scrolled
                  ? 'text-[#1E1D1B]/80 hover:text-[#1E1D1B] hover:bg-[#1E1D1B]/5'
                  : 'text-[#FBF9F5]/90 hover:text-white hover:bg-white/10'
              }`}
              aria-label={`Cambia lingua: attualmente in ${lang.toUpperCase()}`}
            >
              <Globe className="w-3.5 h-3.5 opacity-70" />
              <span>{lang === 'it' ? 'IT' : 'EN'}</span>
            </button>

            {/* Reservation CTA Button */}
            <a
              href="#prenotazioni"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-200 whitespace-nowrap shadow-xs ${
                scrolled
                  ? 'bg-[#2C3E35] text-[#FBF9F5] hover:bg-[#1E1D1B]'
                  : 'bg-[#FBF9F5] text-[#1E1D1B] hover:bg-[#F5F2EB]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 opacity-80" />
              <span>{t('nav.reserve')}</span>
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded transition-colors ${
                scrolled ? 'text-[#1E1D1B] hover:bg-[#1E1D1B]/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1E1D1B]/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-[#FBF9F5] p-8 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1E1D1B]/10">
                <span className="font-serif text-2xl tracking-[0.2em] font-medium text-[#1E1D1B]">
                  {RESTAURANT_INFO.name}
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#1E1D1B]/70 hover:text-[#1E1D1B]"
                  aria-label="Chiudi menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base tracking-wider uppercase text-[#1E1D1B]/85 hover:text-[#A57143] py-1 border-b border-[#1E1D1B]/5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#1E1D1B]/10 flex flex-col gap-4">
              <a
                href="#prenotazioni"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#2C3E35] text-[#FBF9F5] text-center text-xs uppercase tracking-widest font-semibold hover:bg-[#1E1D1B] transition-colors"
              >
                {t('nav.reserve')}
              </a>

              <div className="flex items-center justify-between text-xs text-[#1E1D1B]/60 pt-2">
                <span>{RESTAURANT_INFO.city}, Italia</span>
                <button
                  onClick={toggleLang}
                  className="underline underline-offset-4 font-semibold text-[#1E1D1B]"
                >
                  Lingua: {lang.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
