import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MICRO_SEASONS_DATA } from '../data/restaurantData';
import { Calendar, Utensils, ChevronLeft, ChevronRight, Leaf, Wind, Sparkles } from 'lucide-react';

export const MicroSeasonsSection: React.FC = () => {
  const { lang, atmosphere } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSeason = MICRO_SEASONS_DATA[activeIndex];
  const isEvening = atmosphere === 'evening';

  const prevSeason = () => {
    setActiveIndex((prev) => (prev === 0 ? MICRO_SEASONS_DATA.length - 1 : prev - 1));
  };

  const nextSeason = () => {
    setActiveIndex((prev) => (prev === MICRO_SEASONS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="stagioni"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#141312] border-[#2E2C2A]'
          : 'bg-[#F7F4EE] border-[#1E1D1B]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            <Leaf className="w-3.5 h-3.5" />
            <span>{lang === 'it' ? 'La Terra e i Suoi Cicli' : 'The Land & Natural Rhythms'}</span>
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
            {lang === 'it' ? 'Il Tempo del Raccolto: Le 8 Micro-Stagioni' : 'The Harvest Wheel: 8 Tuscan Micro-Seasons'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className={`text-base sm:text-lg font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
            {lang === 'it'
              ? 'In Toscana la natura non si lascia imprigionare in sole quattro stagioni. La cucina di Elena Vieri segue otto momenti climatici distinti: ogni mese ha una sua luce, un profumo di terra e una maturazione millimetrica che dura a volte poche settimane.'
              : 'In Tuscany, nature resists being confined to four conventional seasons. Elena Vieri’s kitchen honors eight distinct climatic windows: each month brings its unique light, soil fragrance, and fleeting ingredients that flourish for only a few weeks.'}
          </p>
        </div>

        {/* Interactive Master Showcase Card */}
        <div className={`border overflow-hidden shadow-sm transition-colors duration-300 mb-14 ${
          isEvening ? 'bg-[#1E1D1B] border-[#333]' : 'bg-white border-[#1E1D1B]/10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Photography Column with Season Overlay */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#1E1D1B]/10 min-h-[340px] sm:min-h-[440px]">
              <img
                key={activeSeason.id}
                src={activeSeason.image}
                alt={activeSeason.title[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-[#1E1D1B]/85 text-white backdrop-blur-xs text-[11px] font-mono uppercase tracking-wider">
                  {String(activeIndex + 1).padStart(2, '0')} / 08
                </span>
                {activeSeason.seasonGroup && (
                  <span className="px-3 py-1 bg-[#A57143]/90 text-white backdrop-blur-xs text-[11px] uppercase tracking-wider font-medium">
                    {activeSeason.seasonGroup[lang]}
                  </span>
                )}
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#A57143] font-medium block">
                  {lang === 'it' ? 'Materia Prima Protagonista' : 'Seasonal Botanical Key'}
                </span>
                <p className="font-serif italic text-sm sm:text-base text-[#F5F2EB]/95 mt-0.5">
                  {activeSeason.ingredients[lang][0]}
                </p>
              </div>
            </div>

            {/* Editorial Content Details Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                {/* Period & Climate metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#1E1D1B]/10 text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[#A57143] font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeSeason.period[lang]}</span>
                  </div>

                  <div className={`flex items-center gap-1.5 ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                    <Wind className="w-3.5 h-3.5 text-[#2C3E35]" />
                    <span className="italic">{activeSeason.climate[lang]}</span>
                  </div>
                </div>

                {/* Season Title */}
                <h3 className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-normal mt-5 leading-tight ${
                  isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'
                }`}>
                  {activeSeason.title[lang]}
                </h3>

                {/* Field Harvest Botanical List */}
                <div className="mt-6 space-y-2.5">
                  <span className={`text-xs uppercase tracking-wider font-semibold block ${
                    isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'
                  }`}>
                    {lang === 'it' ? 'Il Raccolto del Mattino:' : 'Morning Field Harvest:'}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {activeSeason.ingredients[lang].map((ing, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 p-2.5 border text-xs font-light transition-colors ${
                          isEvening
                            ? 'bg-[#141312] border-[#2E2C2A] text-[#F5F2EB]/85'
                            : 'bg-[#FBF9F5] border-[#1E1D1B]/10 text-[#1E1D1B]/85'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A57143] shrink-0" />
                        <span className="leading-snug">{ing}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signature Dish Callout */}
                <div className={`mt-6 p-5 border-l-2 border-[#A57143] space-y-1.5 ${
                  isEvening ? 'bg-[#141312]' : 'bg-[#F7F4EE]'
                }`}>
                  <div className="flex items-center gap-1.5 text-[#A57143] text-[11px] uppercase tracking-wider font-semibold">
                    <Utensils className="w-3.5 h-3.5" />
                    <span>{lang === 'it' ? 'Nel Piatto di Elena Vieri' : 'On Elena Vieri’s Plate'}</span>
                  </div>
                  <p className={`font-serif text-base sm:text-lg leading-snug italic ${
                    isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'
                  }`}>
                    “{activeSeason.dishHighlight[lang]}”
                  </p>
                </div>
              </div>

              {/* Prev / Next Controls & Reserve Link */}
              <div className={`pt-6 border-t flex items-center justify-between gap-4 ${
                isEvening ? 'border-[#333]' : 'border-[#1E1D1B]/10'
              }`}>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSeason}
                    className={`p-2 border transition-colors ${
                      isEvening
                        ? 'border-[#333] text-[#F5F2EB] hover:bg-[#333]'
                        : 'border-[#1E1D1B]/15 text-[#1E1D1B] hover:bg-[#1E1D1B]/5'
                    }`}
                    aria-label={lang === 'it' ? 'Micro-stagione precedente' : 'Previous micro-season'}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-[#A57143] px-1">
                    {String(activeIndex + 1).padStart(2, '0')} / 08
                  </span>
                  <button
                    onClick={nextSeason}
                    className={`p-2 border transition-colors ${
                      isEvening
                        ? 'border-[#333] text-[#F5F2EB] hover:bg-[#333]'
                        : 'border-[#1E1D1B]/15 text-[#1E1D1B] hover:bg-[#1E1D1B]/5'
                    }`}
                    aria-label={lang === 'it' ? 'Micro-stagione successiva' : 'Next micro-season'}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href="#menu"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#A57143] hover:underline underline-offset-4"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'it' ? 'Vedi menu stagionale' : 'View seasonal menu'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 8-Season Visual Gallery Selector */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs uppercase tracking-wider font-semibold ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
              {lang === 'it' ? 'Tutte le 8 micro-stagioni toscane (clicca per esplorare):' : 'All 8 Tuscan Micro-Seasons (click to explore):'}
            </span>
            <span className="text-xs font-mono text-[#A57143]">
              {lang === 'it' ? 'Ciclo Annuale 2026' : 'Annual Cycle 2026'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {MICRO_SEASONS_DATA.map((season, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={season.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group text-left border overflow-hidden transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#A57143] ring-1 ring-[#A57143] shadow-md scale-[1.02]'
                      : isEvening
                      ? 'border-[#2E2C2A] bg-[#1A1918] hover:border-[#A57143]/50'
                      : 'border-[#1E1D1B]/10 bg-white hover:border-[#A57143]/50'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1E1D1B]/10">
                    <img
                      src={season.image}
                      alt={season.title[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-[#1E1D1B]/85 text-white px-1.5 py-0.5 text-[9px] font-mono">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Caption & Title */}
                  <div className="p-2.5 space-y-1">
                    <span className="block font-mono text-[9px] text-[#A57143] truncate">
                      {season.period[lang].split('—')[0].trim()}
                    </span>
                    <h4 className={`text-xs font-serif font-medium leading-snug line-clamp-2 ${
                      isSelected
                        ? 'text-[#A57143]'
                        : isEvening
                        ? 'text-[#F5F2EB] group-hover:text-[#A57143]'
                        : 'text-[#1E1D1B] group-hover:text-[#A57143]'
                    }`}>
                      {season.title[lang]}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
