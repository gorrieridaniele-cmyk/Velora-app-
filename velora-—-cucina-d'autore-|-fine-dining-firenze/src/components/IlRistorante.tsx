import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SPACES_DATA } from '../data/restaurantData';
import { ChevronLeft, ChevronRight, Users, Sparkles, Building2 } from 'lucide-react';

export const IlRistorante: React.FC = () => {
  const { lang, atmosphere, t } = useLanguage();
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const activeSpace = SPACES_DATA[activeSpaceIndex];
  const isEvening = atmosphere === 'evening';

  const galleryItems = [
    {
      src: '/src/assets/images/gallery_bread_olive_oil_1790847195039.jpg',
      caption: {
        it: 'Il pane a lievito madre e l’olio extravergine novello: il primo benvenuto al tavolo',
        en: 'Heritage sourdough loaf and cold-pressed extra virgin olive oil: the table welcome'
      }
    },
    {
      src: '/src/assets/images/gallery_crystal_sommelier_1790847163308.jpg',
      caption: {
        it: 'La mescita al tavolo: calici in cristallo sottilissimo per esaltare i profumi del territorio',
        en: 'Table service: micro-fine crystal stemware enhancing delicate terroir aromatics'
      }
    },
    {
      src: '/src/assets/images/gallery_antique_fireplace_1790847184709.jpg',
      caption: {
        it: 'Il camino del Cinquecento a Palazzo Serlupi: braci vive e cera d’api naturale',
        en: 'The 16th-century stone fireplace at Palazzo Serlupi: live embers and natural beeswax'
      }
    },
    {
      src: '/src/assets/images/gallery_dessert_criollo_1790847173847.jpg',
      caption: {
        it: 'Pasticceria contemporanea: cacao Criollo, cialda al miele e olio toscano a crudo',
        en: 'Contemporary pastry: Criollo cacao, crisp honey tuile and raw Tuscan olive oil'
      }
    }
  ];

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const prevGallery = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextGallery = () => {
    setActiveGalleryIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="ristorante"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#181716] border-[#333]/50'
          : 'bg-[#FBF9F5] border-[#1E1D1B]/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {t('kicker.concept')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-balance ${
            isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'
          }`}>
            {lang === 'it'
              ? 'Un palazzo del Quattrocento dove il tempo riprende il suo respiro'
              : 'A 15th-century Florentine palazzo where time finds its measured rhythm'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className={`text-base sm:text-lg leading-relaxed font-light text-balance ${
            isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'
          }`}>
            {lang === 'it'
              ? 'VELORA nasce all’interno delle campate storiche di Palazzo Serlupi, dimora nobiliare nel cuore di Firenze. Abbiamo restaurato ogni ambiente con il massimo rigore conservativo: le pareti trattate a calce naturale lasciano respirare la pietra originale, mentre i tavoli in noce toscano e il lino artigianale accolgono gli ospiti in un’atmosfera di calore autentico e silenziosa eleganza.'
              : 'VELORA was conceived within the historic vaults of Palazzo Serlupi, a noble residence in the heart of Florence. Each space was restored with meticulous conservation rigor: walls treated in lime plaster breathe with the original masonry, while solid Tuscan walnut and raw artisanal linen welcome diners in quiet warmth and unhurried grace.'}
          </p>
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          <div className={`p-6 border ${
            isEvening ? 'bg-[#222120] border-[#333]' : 'bg-[#F5F2EB]/60 border-[#1E1D1B]/5'
          }`}>
            <h3 className={`font-serif text-xl mb-3 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
              {lang === 'it' ? 'La Memoria della Terra' : 'Memory of the Land'}
            </h3>
            <p className={`text-sm leading-relaxed font-light ${isEvening ? 'text-[#F5F2EB]/75' : 'text-[#1E1D1B]/75'}`}>
              {lang === 'it'
                ? 'Non crediamo nelle mode passeggere. Ogni nostro gesto culinario attinge alla saggezza toscana: le erbe spontanee di campo, i legumi antichi dimenticati, le carni da pascolo etico e la farina macinata a pietra viva.'
                : 'We do not subscribe to transient trends. Every culinary gesture draws from deep Tuscan agrarian wisdom: foraged meadow botanicals, rare heirloom legumes, pasture-raised ethical meats, and stone-milled ancient grains.'}
            </p>
          </div>

          <div className={`p-6 border ${
            isEvening ? 'bg-[#222120] border-[#333]' : 'bg-[#F5F2EB]/60 border-[#1E1D1B]/5'
          }`}>
            <h3 className={`font-serif text-xl mb-3 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
              {lang === 'it' ? 'Ospitalità su Misura' : 'Tailored Hospitality'}
            </h3>
            <p className={`text-sm leading-relaxed font-light ${isEvening ? 'text-[#F5F2EB]/75' : 'text-[#1E1D1B]/75'}`}>
              {lang === 'it'
                ? 'I nostri coperti sono volutamente contenuti a un massimo di ventotto ospiti per servizio. Questo ci consente di dedicare attenzione assoluta a ogni tavolo, modulando il ritmo della degustazione sui desideri dell’ospite.'
                : 'Seating is strictly capped at twenty-eight guests per service. This intentional restraint allows our dining room team to offer devoted attention to each table, tuning the pacing of the tasting to the guest’s desire.'}
            </p>
          </div>

          <div className={`p-6 border ${
            isEvening ? 'bg-[#222120] border-[#333]' : 'bg-[#F5F2EB]/60 border-[#1E1D1B]/5'
          }`}>
            <h3 className={`font-serif text-xl mb-3 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
              {lang === 'it' ? 'Sostenibilità Circolare' : 'Circular Sustainability'}
            </h3>
            <p className={`text-sm leading-relaxed font-light ${isEvening ? 'text-[#F5F2EB]/75' : 'text-[#1E1D1B]/75'}`}>
              {lang === 'it'
                ? 'Dall’utilizzo integrale di vegetali e animali alla totale assenza di plastica monouso, VELORA opera con una filiera corta che sostiene esclusivamente micro-aziende agricole toscane biologiche e biodinamiche.'
                : 'From whole-animal and botanical utilization to zero single-use plastics, VELORA operates on an ultra-short supply chain that exclusively champions independent Tuscan organic and biodynamic micro-farms.'}
            </p>
          </div>
        </div>

        {/* The Spaces Presentation */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-2">
                {t('kicker.spaces')}
              </div>
              <h3 className={`font-serif text-2xl sm:text-3xl font-normal ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                {lang === 'it' ? 'Quattro anime di Palazzo Serlupi' : 'Four Expressions of Palazzo Serlupi'}
              </h3>
            </div>

            {/* Space selector tabs (interactive buttons) */}
            <div className="flex flex-wrap gap-2">
              {SPACES_DATA.map((space, idx) => (
                <button
                  key={space.id}
                  onClick={() => setActiveSpaceIndex(idx)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                    activeSpaceIndex === idx
                      ? 'bg-[#2C3E35] text-[#FBF9F5]'
                      : isEvening
                      ? 'bg-[#222120] text-[#F5F2EB]/70 hover:bg-[#2c2b29] hover:text-[#F5F2EB]'
                      : 'bg-[#F5F2EB] text-[#1E1D1B]/70 hover:bg-[#EFECE6] hover:text-[#1E1D1B]'
                  }`}
                  aria-pressed={activeSpaceIndex === idx}
                >
                  {space.name[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Space Detail Card */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border p-6 sm:p-10 ${
            isEvening ? 'bg-[#222120] border-[#333]' : 'bg-[#F5F2EB]/80 border-[#1E1D1B]/10'
          }`}>
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A57143] font-medium block">
                {activeSpace.subtitle[lang]}
              </span>
              <h4 className={`font-serif text-2xl sm:text-3xl ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                {activeSpace.name[lang]}
              </h4>
              <p className={`text-sm sm:text-base leading-relaxed font-light ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
                {activeSpace.description[lang]}
              </p>

              <div className={`pt-4 border-t flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs ${
                isEvening ? 'border-[#333] text-[#F5F2EB]/70' : 'border-[#1E1D1B]/10 text-[#1E1D1B]/70'
              }`}>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#A57143]" />
                  <span>{activeSpace.capacity[lang]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A57143]" />
                  <span>{activeSpace.atmosphere[lang]}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#prenotazioni"
                  className="inline-flex items-center text-xs uppercase tracking-widest text-[#A57143] hover:underline underline-offset-4 font-semibold"
                >
                  {lang === 'it' ? 'Richiedi disponibilità in questo spazio' : 'Request availability in this space'}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#1E1D1B]/10">
              <img
                src={activeSpace.image}
                alt={activeSpace.name[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Photographic Gallery */}
        <div className="mt-24 pt-16 border-t border-[#1E1D1B]/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold block mb-1">
                {lang === 'it' ? 'Galleria Fotografica' : 'Curated Gallery'}
              </span>
              <h3 className="font-serif text-2xl text-[#1E1D1B]">
                {lang === 'it' ? 'Frammenti di luce e materia' : 'Echoes of Light & Texture'}
              </h3>
            </div>

            {/* Gallery Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevGallery}
                className="p-2.5 border border-[#1E1D1B]/20 text-[#1E1D1B] hover:bg-[#1E1D1B]/5 transition-colors"
                aria-label={lang === 'it' ? 'Immagine precedente' : 'Previous image'}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#1E1D1B]/60 px-2 tabular-nums">
                {activeGalleryIndex + 1} / {galleryItems.length}
              </span>
              <button
                onClick={nextGallery}
                className="p-2.5 border border-[#1E1D1B]/20 text-[#1E1D1B] hover:bg-[#1E1D1B]/5 transition-colors"
                aria-label={lang === 'it' ? 'Immagine successiva' : 'Next image'}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Gallery Viewport */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1E1D1B] rounded-none">
            <img
              src={galleryItems[activeGalleryIndex].src}
              alt={galleryItems[activeGalleryIndex].caption[lang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Measured subtle caption bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141413]/90 via-[#141413]/60 to-transparent p-6 text-white flex items-end justify-between">
              <p className="text-xs sm:text-sm font-light text-[#EFECE6] max-w-2xl leading-relaxed">
                {galleryItems[activeGalleryIndex].caption[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
