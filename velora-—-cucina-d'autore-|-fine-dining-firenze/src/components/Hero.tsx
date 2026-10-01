import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center bg-[#1E1D1B] overflow-hidden">
      {/* Background Image with Fallback and Scrim */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/exterior_palazzo_serlupi_1790846956663.jpg"
          alt="L'ingresso rinascimentale di Palazzo Serlupi in Via delle Viole al crepuscolo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#1E1D1B]/55 to-[#1E1D1B]/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FBF9F5] pt-24 pb-16 flex flex-col items-center">
        {/* Kicker */}
        <div className="text-xs uppercase tracking-[0.3em] text-[#EFECE6]/80 mb-6 font-medium">
          {t('hero.palazzo')}
        </div>

        {/* Brand Display */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.18em] font-light leading-none mb-6 text-white text-balance">
          {RESTAURANT_INFO.name}
        </h1>

        <div className="w-12 h-[1px] bg-[#A57143] my-4" />

        {/* Motto */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F5F2EB] font-light max-w-2xl mb-6 text-balance leading-snug">
          “{RESTAURANT_INFO.motto[lang]}”
        </p>

        {/* Evocative Description */}
        <p className="text-sm sm:text-base text-[#EFECE6]/90 max-w-xl font-light leading-relaxed mb-10 text-balance">
          {RESTAURANT_INFO.submotto[lang]}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href="#cucina"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#FBF9F5]/40 text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/10 hover:border-white transition-all duration-200 text-center"
          >
            {t('hero.discover')}
          </a>
          <a
            href="#prenotazioni"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FBF9F5] text-[#1E1D1B] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#EFECE6] transition-all duration-200 text-center shadow-md"
          >
            {t('nav.reserve')}
          </a>
        </div>
      </div>

      {/* Discrete Scroll Indicator */}
      <a
        href="#ristorante"
        aria-label={t('hero.scroll')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#FBF9F5]/70 hover:text-white flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] transition-colors"
      >
        <span className="hidden sm:inline">{t('hero.scroll')}</span>
        <ArrowDown className="w-4 h-4 animate-bounce opacity-80" />
      </a>
    </section>
  );
};
