import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, X, Check } from 'lucide-react';

interface CookieBannerProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ modalOpen, setModalOpen }) => {
  const { lang, t } = useLanguage();
  const [bannerVisible, setBannerVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    preferences: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('velora_cookie_consent');
    if (!consent) {
      setBannerVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('velora_cookie_consent', 'all');
    setBannerVisible(false);
    setModalOpen(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('velora_cookie_consent', 'essential');
    setBannerVisible(false);
    setModalOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('velora_cookie_consent', JSON.stringify(preferences));
    setBannerVisible(false);
    setModalOpen(false);
  };

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      {bannerVisible && (
        <aside
          aria-label={t('cookie.title')}
          className="fixed bottom-0 inset-x-0 z-40 bg-[#1E1D1B]/95 text-[#FBF9F5] border-t border-white/10 p-4 sm:p-5 shadow-2xl backdrop-blur-md"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-3xl">
              <Shield className="w-5 h-5 text-[#A57143] shrink-0 mt-0.5" />
              <div className="text-xs text-[#EFECE6]/90 font-light leading-relaxed">
                <strong className="font-semibold text-white block mb-0.5">
                  {t('cookie.title')}
                </strong>
                <p>{t('cookie.text')}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setModalOpen(true)}
                className="px-3 py-1.5 text-xs text-[#EFECE6]/80 hover:text-white underline underline-offset-2"
              >
                {t('cookie.customize')}
              </button>
              <button
                onClick={handleAcceptEssential}
                className="px-4 py-2 border border-white/20 text-xs text-[#EFECE6] hover:bg-white/10 uppercase tracking-wider font-medium"
              >
                {t('cookie.decline')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-[#2C3E35] text-xs text-white hover:bg-[#A57143] uppercase tracking-wider font-semibold transition-colors"
              >
                {t('cookie.accept')}
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#1E1D1B]/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-[#FBF9F5] border border-[#1E1D1B]/15 w-full max-w-lg p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#1E1D1B]/10">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1E1D1B]">
                {lang === 'it' ? 'Preferenze di Riservatezza & Cookie' : 'Cookie & Privacy Preferences'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 text-[#1E1D1B]/60 hover:text-[#1E1D1B]"
                aria-label="Chiudi finestra preferenze"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 space-y-5 text-xs">
              {/* Category 1: Essential */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1E1D1B]/10">
                <div>
                  <strong className="text-sm font-semibold text-[#1E1D1B] block mb-1">
                    {lang === 'it' ? 'Cookie Tecnici Essenziali (Sempre Attivi)' : 'Essential Technical Cookies (Always Active)'}
                  </strong>
                  <p className="text-[#1E1D1B]/70 leading-relaxed font-light">
                    {lang === 'it'
                      ? 'Indispensabili per consentire la navigazione del sito, la memorizzazione della lingua e la compilazione del modulo di prenotazione.'
                      : 'Required to ensure smooth website navigation, retain language preferences, and handle reservation requests.'}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#2C3E35] font-semibold bg-[#2C3E35]/10 px-2 py-1 uppercase">
                  Attivo
                </span>
              </div>

              {/* Category 2: Analytics */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1E1D1B]/10">
                <div>
                  <strong className="text-sm font-semibold text-[#1E1D1B] block mb-1">
                    {lang === 'it' ? 'Statistiche Anonime Aggregati' : 'Anonymous Aggregated Analytics'}
                  </strong>
                  <p className="text-[#1E1D1B]/70 leading-relaxed font-light">
                    {lang === 'it'
                      ? 'Ci aiutano a comprendere le pagine più consultate senza tracciare l’indirizzo IP o l’identità dell’utente.'
                      : 'Helps us comprehend popular sections without tracking IP addresses or individual user identity.'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 mt-1 accent-[#2C3E35]"
                />
              </div>

              {/* Category 3: Preferences */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <strong className="text-sm font-semibold text-[#1E1D1B] block mb-1">
                    {lang === 'it' ? 'Preferenze d’Esperienza' : 'Experience Preferences'}
                  </strong>
                  <p className="text-[#1E1D1B]/70 leading-relaxed font-light">
                    {lang === 'it'
                      ? 'Consentono di ricordare scelte personalizzate tra visite successive.'
                      : 'Allows retention of tailored choices across recurring visits.'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                  className="w-4 h-4 mt-1 accent-[#2C3E35]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1E1D1B]/10">
              <button
                onClick={handleAcceptEssential}
                className="px-4 py-2 border border-[#1E1D1B]/20 text-xs text-[#1E1D1B] hover:bg-[#1E1D1B]/5 uppercase tracking-wider"
              >
                {t('cookie.decline')}
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2 bg-[#2C3E35] text-xs text-white hover:bg-[#1E1D1B] uppercase tracking-wider font-semibold"
              >
                {lang === 'it' ? 'Salva preferenze' : 'Save preferences'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
