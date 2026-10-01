import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MENU_CATEGORIES } from '../data/restaurantData';
import { PrintMenuModal } from './PrintMenuModal';
import { Info, Wine, AlertCircle, Sparkles, Filter, Printer } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { lang, atmosphere, t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'gluten-free'>('all');
  const [printModalOpen, setPrintModalOpen] = useState(false);
  const isEvening = atmosphere === 'evening';

  const activeCategory = MENU_CATEGORIES[activeCategoryIndex];

  const filteredItems = activeCategory.items.filter((item) => {
    if (dietaryFilter === 'veg') {
      return item.dietary === 'veg' || item.dietary === 'vegan';
    }
    if (dietaryFilter === 'gluten-free') {
      return !item.allergens?.includes('Glutine');
    }
    return true;
  });

  return (
    <section
      id="menu"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#181716] border-[#333]/50'
          : 'bg-[#FBF9F5] border-[#1E1D1B]/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {t('kicker.menu')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
            {lang === 'it' ? 'La Tavola delle Stagioni' : 'The Seasonal Table'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className={`text-sm sm:text-base font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
            {lang === 'it'
              ? 'I nostri percorsi sono composti quotidianamente in base alla raccolta nei campi e all’arrivo dei prodotti dai piccoli produttori. Ogni piatto è pensato per celebrare la purezza del gusto.'
              : 'Our menus are curated daily in harmony with field harvests and fresh morning arrivals from independent artisans. Every dish honors the distilled purity of flavour.'}
          </p>
        </div>

        {/* Category Tabs & Dietary Filter Controls */}
        <div className={`flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 border-b pb-5 ${isEvening ? 'border-[#333]' : 'border-[#1E1D1B]/10'}`}>
          {/* Main Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {MENU_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setDietaryFilter('all');
                }}
                className={`px-4 py-2.5 text-xs uppercase tracking-wider font-medium transition-all ${
                  activeCategoryIndex === idx
                    ? 'bg-[#2C3E35] text-[#FBF9F5] shadow-xs'
                    : isEvening
                    ? 'bg-[#222120] text-[#F5F2EB]/75 hover:bg-[#2c2b29] hover:text-[#F5F2EB]'
                    : 'bg-[#F5F2EB] text-[#1E1D1B]/75 hover:bg-[#EFECE6] hover:text-[#1E1D1B]'
                }`}
                aria-pressed={activeCategoryIndex === idx}
              >
                {cat.title[lang]}
              </button>
            ))}
          </div>

          {/* Quick Dietary Filter Buttons & Print Menu CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <div className={`flex items-center gap-1.5 text-xs p-1 border ${
              isEvening ? 'bg-[#222120] border-[#333]' : 'bg-[#F5F2EB] border-[#1E1D1B]/10'
            }`}>
              <span className={`text-[11px] uppercase tracking-wider px-2 font-medium flex items-center gap-1 ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                <Filter className="w-3 h-3 text-[#A57143]" />
                <span className="hidden sm:inline">{lang === 'it' ? 'Filtra:' : 'Filter:'}</span>
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  dietaryFilter === 'all'
                    ? isEvening ? 'bg-[#181716] text-[#F5F2EB] shadow-xs font-semibold' : 'bg-white text-[#1E1D1B] shadow-xs font-semibold'
                    : isEvening ? 'text-[#F5F2EB]/70 hover:text-[#F5F2EB]' : 'text-[#1E1D1B]/70 hover:text-[#1E1D1B]'
                }`}
              >
                {lang === 'it' ? 'Tutti' : 'All'}
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  dietaryFilter === 'veg'
                    ? isEvening ? 'bg-[#181716] text-[#A57143] shadow-xs font-semibold' : 'bg-white text-[#2C3E35] shadow-xs font-semibold'
                    : isEvening ? 'text-[#F5F2EB]/70 hover:text-[#F5F2EB]' : 'text-[#1E1D1B]/70 hover:text-[#1E1D1B]'
                }`}
              >
                {lang === 'it' ? 'Vegetariani' : 'Vegetarian'}
              </button>
              <button
                onClick={() => setDietaryFilter('gluten-free')}
                className={`px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  dietaryFilter === 'gluten-free'
                    ? isEvening ? 'bg-[#181716] text-[#A57143] shadow-xs font-semibold' : 'bg-white text-[#2C3E35] shadow-xs font-semibold'
                    : isEvening ? 'text-[#F5F2EB]/70 hover:text-[#F5F2EB]' : 'text-[#1E1D1B]/70 hover:text-[#1E1D1B]'
                }`}
              >
                {lang === 'it' ? 'Senza Glutine' : 'Gluten-Free'}
              </button>
            </div>

            {/* Print Menu Trigger Button */}
            <button
              onClick={() => setPrintModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider font-semibold border border-[#A57143] text-[#A57143] hover:bg-[#A57143] hover:text-[#FBF9F5] transition-colors"
              title={lang === 'it' ? 'Visualizza e stampa la carta del menu in stile editoriale' : 'Preview and print the editorial tasting menu'}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'it' ? 'Carta da Stampa' : 'Printable Card'}</span>
            </button>
          </div>
        </div>

        {/* Active Category Header Card */}
        <div className={`border p-6 sm:p-8 mb-10 ${
          isEvening ? 'bg-[#222120] border-[#333]' : 'bg-[#F5F2EB]/70 border-[#1E1D1B]/10'
        }`}>
          <div className={`flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-4 border-b ${
            isEvening ? 'border-[#333]' : 'border-[#1E1D1B]/10'
          }`}>
            <div>
              <h3 className={`font-serif text-2xl sm:text-3xl font-normal ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                {activeCategory.title[lang]}
              </h3>
              <p className={`text-xs sm:text-sm mt-1 font-light italic ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
                {activeCategory.subtitle[lang]}
              </p>
            </div>

            {/* Price Placeholder marker */}
            <div className="flex flex-col md:items-end">
              <span className={`font-mono text-sm sm:text-base font-semibold px-3 py-1 border ${
                isEvening
                  ? 'text-[#A57143] bg-[#181716] border-[#333]'
                  : 'text-[#2C3E35] bg-white/70 border-[#1E1D1B]/10'
              }`}>
                {activeCategory.priceInfo[lang]}
              </span>
              <span className="text-[11px] text-[#A57143] font-medium mt-1 uppercase tracking-wider">
                {t('menu.placeholderBadge')}
              </span>
            </div>
          </div>

          {activeCategory.pairingInfo && (
            <div className={`mt-4 flex items-start gap-2.5 text-xs font-light ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
              <Wine className="w-4 h-4 text-[#A57143] shrink-0 mt-0.5" />
              <span>{activeCategory.pairingInfo[lang]}</span>
            </div>
          )}

          {activeCategory.notes && (
            <div className={`mt-3 flex items-start gap-2.5 text-xs font-light ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
              <Info className="w-4 h-4 text-[#A57143] shrink-0 mt-0.5" />
              <span>{activeCategory.notes[lang]}</span>
            </div>
          )}
        </div>

        {/* Dishes List */}
        <div className="space-y-6 mb-16">
          {filteredItems.length === 0 ? (
            <div className={`p-8 text-center text-xs border ${
              isEvening ? 'bg-[#222120] text-[#F5F2EB]/60 border-[#333]' : 'bg-white text-[#1E1D1B]/60 border-[#1E1D1B]/10'
            }`}>
              {lang === 'it'
                ? 'Nessun piatto corrisponde al filtro selezionato per questa categoria. Vi invitiamo a consultare il nostro percorso vegetariano dedicato o a segnalare le vostre esigenze al personale.'
                : 'No dishes strictly match this filter in this category. We invite you to explore our dedicated vegetarian tasting journey or speak directly with our service team.'}
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`group p-6 border transition-colors ${
                  isEvening
                    ? 'bg-[#222120] border-[#333] hover:border-[#A57143]/60'
                    : 'bg-white/80 border-[#1E1D1B]/10 hover:border-[#A57143]/40'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-[#A57143] font-medium">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h4 className={`font-serif text-lg sm:text-xl font-medium transition-colors ${
                      isEvening
                        ? 'text-[#F5F2EB] group-hover:text-[#A57143]'
                        : 'text-[#1E1D1B] group-hover:text-[#2C3E35]'
                    }`}>
                      {item.name[lang]}
                    </h4>
                  </div>

                  {item.pricePlaceholder && (
                    <span className={`font-mono text-xs sm:text-sm shrink-0 self-start sm:self-auto ${
                      isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'
                    }`}>
                      {item.pricePlaceholder}
                    </span>
                  )}
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed font-light pl-7 ${
                  isEvening ? 'text-[#F5F2EB]/75' : 'text-[#1E1D1B]/75'
                }`}>
                  {item.description[lang]}
                </p>

                {/* Unboxed Metadata */}
                <div className={`pl-7 mt-3 flex flex-wrap items-center gap-2 text-[11px] ${
                  isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'
                }`}>
                  {item.allergens && item.allergens.length > 0 && (
                    <>
                      <span className={`uppercase tracking-wider font-medium ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
                        {lang === 'it' ? 'Allergeni:' : 'Allergens:'}
                      </span>
                      <span>{item.allergens.join(', ')}</span>
                    </>
                  )}

                  {item.dietary && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#A57143] font-medium">
                        {item.dietary === 'veg'
                          ? lang === 'it' ? 'Vegetariano' : 'Vegetarian'
                          : item.dietary === 'vegan'
                          ? lang === 'it' ? 'Vegano' : 'Vegan'
                          : 'Gluten-Free'}
                      </span>
                    </>
                  )}

                  {item.winePairing && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="italic text-[#A57143]">
                        {lang === 'it' ? 'Abbinamento consigliato: ' : 'Recommended pairing: '}
                        {item.winePairing[lang]}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Dietary & Allergen Advisory Callout */}
        <div className={`p-6 border-l-2 border-[#A57143] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${
          isEvening ? 'bg-[#222120]' : 'bg-[#F5F2EB]'
        }`}>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#A57143] shrink-0 mt-0.5" />
            <div className={`text-xs sm:text-sm leading-relaxed font-light ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
              <strong className={`font-semibold block mb-1 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                {lang === 'it' ? 'Comunicazione allergeni e intolleranze' : 'Dietary Requirements & Allergens'}
              </strong>
              <p>{t('menu.allergenNotice')}</p>
              <p className={`mt-1 ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>{t('menu.dietaryNotice')}</p>
            </div>
          </div>

          <a
            href="#prenotazioni"
            className="px-6 py-2.5 bg-[#2C3E35] text-[#FBF9F5] text-xs uppercase tracking-widest font-semibold hover:bg-[#1E1D1B] transition-colors whitespace-nowrap shrink-0"
          >
            {t('nav.reserve')}
          </a>
        </div>
      </div>

      {/* Printable Fine Art Menu Modal */}
      <PrintMenuModal
        isOpen={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
      />
    </section>
  );
};
