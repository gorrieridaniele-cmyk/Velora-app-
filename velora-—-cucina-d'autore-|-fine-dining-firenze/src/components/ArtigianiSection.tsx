import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ARTISANS_DATA } from '../data/restaurantData';
import { MapPin, Hammer, Sparkles } from 'lucide-react';

export const ArtigianiSection: React.FC = () => {
  const { lang, atmosphere } = useLanguage();
  const isEvening = atmosphere === 'evening';

  return (
    <section
      id="artigiani"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#181716] border-[#333]/50'
          : 'bg-[#F5F2EB]/60 border-[#1E1D1B]/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {lang === 'it' ? 'Artigianato & Materia' : 'Craft & Living Material'}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
            {lang === 'it' ? 'I Custodi del Gesto: le botteghe di VELORA' : 'Keepers of the Craft: VELORA’s Artisan Guilds'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className={`text-base sm:text-lg font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
            {lang === 'it'
              ? 'L’esperienza a tavola non è fatta solo di sapori. È la carezza del lino grezzo sotto le dita, il peso calibrato di una lama forgiata a mano e la porosità dell’argilla cotta con cenere di legna. Ogni oggetto a Palazzo Serlupi è nato in piccole botteghe toscane.'
              : 'The dining experience is not merely flavor. It is the unhurried texture of raw linen, the poise of a hand-forged blade, and the mineral warmth of wood-ash glazed clay. Every artifact within Palazzo Serlupi was fashioned in independent Tuscan workshops.'}
          </p>
        </div>

        {/* 4 Artisans Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTISANS_DATA.map((art) => (
            <div
              key={art.id}
              className={`border p-6 flex flex-col justify-between transition-colors ${
                isEvening
                  ? 'bg-[#222120] border-[#333] hover:border-[#A57143]/60'
                  : 'bg-white border-[#1E1D1B]/10 hover:border-[#A57143]/40'
              }`}
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden mb-5 bg-[#1E1D1B]/5">
                  <img
                    src={art.image}
                    alt={art.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-[1.02] hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#A57143] font-medium uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{art.location}</span>
                </div>

                <h3 className={`font-serif text-lg font-medium mb-1 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                  {art.name}
                </h3>

                <p className="text-xs font-serif italic text-[#A57143] mb-3">
                  {art.craft[lang]}
                </p>

                <p className={`text-xs leading-relaxed font-light ${isEvening ? 'text-[#F5F2EB]/75' : 'text-[#1E1D1B]/75'}`}>
                  {art.description[lang]}
                </p>
              </div>

              <div className={`pt-4 mt-4 border-t flex items-center gap-1 text-[11px] ${
                isEvening ? 'border-[#333] text-[#F5F2EB]/60' : 'border-[#1E1D1B]/10 text-[#1E1D1B]/60'
              }`}>
                <Sparkles className="w-3 h-3 text-[#A57143]" />
                <span>{lang === 'it' ? 'Fatto su misura per VELORA' : 'Custom crafted for VELORA'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
