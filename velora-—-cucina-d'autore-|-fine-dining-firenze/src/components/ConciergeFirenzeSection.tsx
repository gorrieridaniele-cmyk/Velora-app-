import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FLORENCE_CONCIERGE_DATA } from '../data/restaurantData';
import { MapPin, Clock, Compass, Sparkles } from 'lucide-react';

export const ConciergeFirenzeSection: React.FC = () => {
  const { lang, atmosphere } = useLanguage();
  const isEvening = atmosphere === 'evening';

  return (
    <section
      id="concierge"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#181716] border-[#333]/50'
          : 'bg-[#FBF9F5] border-[#1E1D1B]/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {lang === 'it' ? 'Ospitalità & Territorio' : 'Hospitality & Terroir'}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
            {lang === 'it' ? 'Firenze attraverso gli occhi di VELORA' : 'Florence Through the Eyes of VELORA'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className={`text-base sm:text-lg font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
            {lang === 'it'
              ? 'I nostri ospiti ci chiedono spesso come respirare l’anima più autentica della città prima di sedersi a tavola. Abbiamo raccolto i percorsi silenziosi e le botteghe storiche che la nostra brigata ama frequentare.'
              : 'Our diners often inquire how to experience the city’s quietest beauty prior to dinner. Here are the contemplative strolls and historic family workshops cherished by our team.'}
          </p>
        </div>

        {/* 2-Column Curated Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {FLORENCE_CONCIERGE_DATA.map((item) => (
            <div
              key={item.id}
              className={`border overflow-hidden flex flex-col justify-between transition-colors ${
                isEvening
                  ? 'bg-[#222120] border-[#333] hover:border-[#A57143]/60'
                  : 'bg-white border-[#1E1D1B]/10 hover:border-[#A57143]/40'
              }`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1E1D1B]/10">
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#1E1D1B]/85 text-white px-3 py-1 text-[11px] uppercase tracking-wider font-medium">
                    {item.category[lang]}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className={`flex flex-wrap items-center gap-4 text-xs font-mono ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A57143]" />
                      <span>{item.timeToVisit[lang]}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A57143]" />
                      <span>{item.distance[lang]}</span>
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                    {item.title[lang]}
                  </h3>

                  <p className={`text-xs sm:text-sm font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
                    {item.description[lang]}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <div className={`p-4 border text-xs font-serif italic ${
                  isEvening
                    ? 'bg-[#181716] border-[#333] text-[#F5F2EB]/90'
                    : 'bg-[#F5F2EB] border-[#1E1D1B]/10 text-[#2C3E35]'
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-[#A57143] inline mr-1.5" />
                  <span>{item.curatorTip[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
