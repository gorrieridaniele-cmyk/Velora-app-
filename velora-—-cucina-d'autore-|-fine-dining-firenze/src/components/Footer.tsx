import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Globe, ArrowUp, Settings, Check } from 'lucide-react';

interface FooterProps {
  onOpenPlaceholderModal: () => void;
  onOpenCookieModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPlaceholderModal, onOpenCookieModal }) => {
  const { lang, toggleLang, t } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1E1D1B] text-[#FBF9F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-3xl tracking-[0.2em] font-normal block">
              {RESTAURANT_INFO.name}
            </span>
            <p className="font-serif italic text-sm text-[#EFECE6]/80 leading-relaxed">
              “{RESTAURANT_INFO.motto[lang]}”
            </p>
            <p className="text-xs text-[#EFECE6]/60 leading-relaxed font-light pt-2 max-w-sm">
              {lang === 'it'
                ? 'Ristorante fine dining italiano contemporaneo. Palazzo Serlupi, Via delle Viole 18, Firenze. Cucina d’autore della Chef Elena Vieri.'
                : 'Contemporary Italian fine dining. Palazzo Serlupi, Via delle Viole 18, Florence. Authorial cuisine by Chef Elena Vieri.'}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenPlaceholderModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono bg-white/5 hover:bg-white/10 text-[#A57143] border border-[#A57143]/40 rounded-xs transition-colors"
                title="Visualizza i campi segnaposto da personalizzare"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{lang === 'it' ? 'Guida configurazione segnaposto' : 'Placeholder configuration guide'}</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#A57143] font-semibold block">
              {lang === 'it' ? 'Esplora' : 'Explore'}
            </span>
            <ul className="space-y-2 text-xs text-[#EFECE6]/80 font-light">
              <li><a href="#ristorante" className="hover:text-white transition-colors">{t('nav.restaurant')}</a></li>
              <li><a href="#cucina" className="hover:text-white transition-colors">{t('nav.cuisine')}</a></li>
              <li><a href="#stagioni" className="hover:text-white transition-colors">{lang === 'it' ? '8 Micro-Stagioni' : '8 Micro-Seasons'}</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#cantina" className="hover:text-white transition-colors">{t('nav.cellar')}</a></li>
              <li><a href="#eventi" className="hover:text-white transition-colors">{t('nav.events')}</a></li>
              <li><a href="#concierge" className="hover:text-white transition-colors">{lang === 'it' ? 'Concierge Firenze' : 'Florence Concierge'}</a></li>
              <li><a href="#diario" className="hover:text-white transition-colors">{t('nav.diary')}</a></li>
              <li><a href="#contatti" className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contacts & Hours */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-xs uppercase tracking-wider text-[#A57143] font-semibold block">
              {lang === 'it' ? 'Recapiti & Orari' : 'Contacts & Hours'}
            </span>
            <div className="space-y-2 text-[#EFECE6]/80 font-mono text-[11px]">
              <p>{RESTAURANT_INFO.address}</p>
              <p>Tel: {RESTAURANT_INFO.phonePlaceholder}</p>
              <p>Email: {RESTAURANT_INFO.emailPlaceholder}</p>
              <div className="pt-2 text-[#EFECE6]/60">
                <p>{RESTAURANT_INFO.hoursLunchPlaceholder}</p>
                <p>{RESTAURANT_INFO.hoursDinnerPlaceholder}</p>
                <p className="text-[#A57143]">{RESTAURANT_INFO.closedDayPlaceholder}</p>
              </div>
            </div>
          </div>

          {/* Seasonal Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#A57143] font-semibold block">
              {lang === 'it' ? 'Lettera delle Stagioni' : 'Seasonal Dispatch'}
            </span>
            <p className="text-xs text-[#EFECE6]/70 font-light leading-relaxed">
              {lang === 'it'
                ? 'Ricevi aggiornamenti sui cambi di menu, l’arrivo dei nuovi raccolti e gli eventi esclusivi di Palazzo Serlupi.'
                : 'Receive intimate notes on menu evolutions, harvest arrivals, and private cellar dinners.'}
            </p>

            {!newsletterSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-1">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="email@dominio.it"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 text-xs text-white placeholder-[#EFECE6]/40 focus:outline-hidden focus:border-[#A57143]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#2C3E35] text-xs font-semibold text-white uppercase tracking-wider hover:bg-[#A57143] transition-colors whitespace-nowrap"
                  >
                    OK
                  </button>
                </div>
                <span className="text-[10px] text-[#EFECE6]/40 block">
                  {lang === 'it' ? 'Nessun invio massivo. Cancellazione in ogni momento.' : 'Zero spam. Unsubscribe at any time.'}
                </span>
              </form>
            ) : (
              <div className="p-3 bg-white/10 text-xs text-[#EFECE6] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#A57143]" />
                <span>{lang === 'it' ? 'Iscrizione registrata con successo.' : 'Successfully subscribed.'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFECE6]/60">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} VELORA — Cucina d’Autore. {t('footer.rights')}</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenCookieModal}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              {t('footer.cookie')}
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="#contatti"
              className="hover:text-white transition-colors"
            >
              {t('footer.privacy')}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-xs text-[#EFECE6]/80 hover:text-white font-medium"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'it' ? 'Italiano (IT)' : 'English (EN)'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 bg-white/5 hover:bg-white/10 text-[#EFECE6] transition-colors"
              aria-label="Torna all'inizio della pagina"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
