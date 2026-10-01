import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DIARY_ARTICLES } from '../data/restaurantData';
import { Article } from '../types';
import { X, ArrowRight, BookOpen, Clock, Calendar, Volume2, Pause, Play, Sparkles } from 'lucide-react';

export const DiarioSection: React.FC = () => {
  const { lang, atmosphere, t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);
  const isEvening = atmosphere === 'evening';

  useEffect(() => {
    // Stop speech synthesis when modal closes
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedArticle]);

  const toggleNarration = () => {
    if (!('speechSynthesis' in window) || !selectedArticle) return;

    if (isNarrating) {
      window.speechSynthesis.cancel();
      setIsNarrating(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = `${selectedArticle.title[lang]}. ${selectedArticle.content[lang].join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = lang === 'it' ? 'it-IT' : 'en-US';
      utterance.rate = 0.9; // Calm, editorial cadence
      utterance.pitch = 0.95;

      utterance.onend = () => setIsNarrating(false);
      utterance.onerror = () => setIsNarrating(false);

      window.speechSynthesis.speak(utterance);
      setIsNarrating(true);
    }
  };

  return (
    <section
      id="diario"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#141312] border-[#2E2C2A]'
          : 'bg-[#FBF9F5] border-[#1E1D1B]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {t('kicker.diary')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
            {lang === 'it' ? 'Diario di Cucina & Cronache di Campagna' : 'Kitchen Journal & Rural Chronicles'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className={`text-base sm:text-lg font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
            {lang === 'it'
              ? 'Otto racconti di terra e di sala: riflessioni sulla stagionalità, visite ai custodi dei campi toscani, appunti di cantina e pensieri dalla brigata di Elena Vieri.'
              : 'Eight chronicles of land and craft: reflections on seasonal change, visits with Tuscan growers, cellar ledger notes, and perspectives from Elena Vieri’s kitchen team.'}
          </p>
        </div>

        {/* Article Cards Grid (8 articles: perfectly balanced 4x2 on desktop, 2x4 on tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DIARY_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className={`group cursor-pointer border transition-all flex flex-col justify-between ${
                isEvening
                  ? 'bg-[#1E1D1B] border-[#2E2C2A] hover:border-[#A57143]/60'
                  : 'bg-white border-[#1E1D1B]/10 hover:border-[#A57143]/50'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1E1D1B]/10">
                  <img
                    src={article.image}
                    alt={article.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-6 space-y-3">
                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#A57143] font-light">
                    <span className="uppercase tracking-wider font-semibold">
                      {article.category[lang]}
                    </span>
                    <span aria-hidden="true" className="opacity-50">·</span>
                    <span className="opacity-80">{article.readTime[lang]}</span>
                  </div>

                  <h3 className={`font-serif text-lg leading-snug group-hover:text-[#A57143] transition-colors line-clamp-2 ${
                    isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'
                  }`}>
                    {article.title[lang]}
                  </h3>

                  <p className={`text-xs leading-relaxed font-light line-clamp-3 ${
                    isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/75'
                  }`}>
                    {article.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A57143] group-hover:translate-x-1 transition-transform font-semibold">
                <span>{t('diary.readMore')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </article>
          ))}
        </div>

        {/* Article Reading Modal */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-[#1E1D1B]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="bg-[#FBF9F5] border border-[#1E1D1B]/15 w-full max-w-3xl my-8 p-6 sm:p-12 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 text-[#1E1D1B]/60 hover:text-[#1E1D1B] transition-colors"
                aria-label="Chiudi articolo"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Article Content */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#1E1D1B]/60 font-light border-b border-[#1E1D1B]/10 pb-4">
                  <span className="text-[#A57143] uppercase tracking-wider font-semibold">
                    {selectedArticle.category[lang]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{selectedArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime[lang]}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1D1B] leading-tight">
                  {selectedArticle.title[lang]}
                </h2>

                {/* Audio Story Narration Player */}
                <div className="p-3.5 bg-[#F5F2EB] border border-[#1E1D1B]/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-[#1E1D1B]/80">
                    <Volume2 className="w-4 h-4 text-[#A57143]" />
                    <span className="font-medium">
                      {lang === 'it' ? 'Audio-Racconto della Terra' : 'Audio Journal Story'}
                    </span>
                    <span className="text-[10px] text-[#1E1D1B]/50 font-mono hidden sm:inline">
                      {isNarrating ? (lang === 'it' ? 'In riproduzione...' : 'Narrating...') : (lang === 'it' ? 'Voce narrante naturale' : 'Natural voice narration')}
                    </span>
                  </div>

                  <button
                    onClick={toggleNarration}
                    className="px-3.5 py-1.5 bg-[#2C3E35] text-[#FBF9F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#1E1D1B] transition-colors flex items-center gap-1.5"
                  >
                    {isNarrating ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>{lang === 'it' ? 'Pausa' : 'Pause'}</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>{lang === 'it' ? 'Ascolta storia' : 'Listen'}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="w-12 h-[1px] bg-[#A57143]" />

                <div className="aspect-[16/9] w-full overflow-hidden my-6 border border-[#1E1D1B]/10">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#1E1D1B]/85 font-light leading-relaxed">
                  {selectedArticle.content[lang].map((paragraph, idx) => (
                    <p key={idx} className={idx === 0 ? 'first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#2C3E35]' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-8 border-t border-[#1E1D1B]/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-xs uppercase tracking-wider text-[#1E1D1B] hover:text-[#A57143] font-semibold"
                  >
                    ← {t('diary.back')}
                  </button>

                  <a
                    href="#prenotazioni"
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-2.5 bg-[#2C3E35] text-[#FBF9F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#1E1D1B]"
                  >
                    {t('nav.reserve')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
