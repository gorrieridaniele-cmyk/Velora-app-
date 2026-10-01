import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CHEF_BIO, RAW_INGREDIENTS } from '../data/restaurantData';
import { ArrowRight, Leaf, Flame, UtensilsCrossed } from 'lucide-react';

export const CucinaChef: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedIngredientIndex, setSelectedIngredientIndex] = useState(0);
  const currentIngredient = RAW_INGREDIENTS[selectedIngredientIndex];

  return (
    <section id="cucina" className="py-24 md:py-32 bg-[#F5F2EB]/50 border-b border-[#1E1D1B]/10 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {t('kicker.chef')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E1D1B] font-normal leading-tight">
            {lang === 'it' ? 'Elena Vieri e la ricerca dell’essenziale' : 'Elena Vieri & the Pursuit of Essence'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
        </div>

        {/* Chef Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#1E1D1B]/5 border border-[#1E1D1B]/10">
              <img
                src={CHEF_BIO.portrait}
                alt={`Ritratto della Chef ${CHEF_BIO.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter contrast-[1.02]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141413]/85 to-transparent p-6 text-white">
                <span className="font-serif text-xl tracking-wide block">{CHEF_BIO.name}</span>
                <span className="text-xs text-[#EFECE6]/80 uppercase tracking-widest">{CHEF_BIO.title[lang]}</span>
              </div>
            </div>
          </div>

          {/* Biography & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <blockquote className="font-serif italic text-xl sm:text-2xl text-[#2C3E35] leading-relaxed border-l-2 border-[#A57143] pl-6 py-1">
              {CHEF_BIO.quote[lang]}
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#1E1D1B]/80 font-light leading-relaxed">
              {CHEF_BIO.paragraphs[lang].map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#1E1D1B]/10 text-xs">
              <div>
                <span className="font-semibold text-[#1E1D1B] block mb-1 uppercase tracking-wider">
                  {lang === 'it' ? 'Stagionalità viva' : 'Living Micro-Seasons'}
                </span>
                <span className="text-[#1E1D1B]/70 leading-normal">
                  {lang === 'it'
                    ? 'Il menu cambia fino a otto volte l’anno secondo il raccolto reale.'
                    : 'The menu evolves up to eight times a year based on true harvests.'}
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#1E1D1B] block mb-1 uppercase tracking-wider">
                  {lang === 'it' ? 'Recupero integrale' : 'Zero-Waste Whole Cut'}
                </span>
                <span className="text-[#1E1D1B]/70 leading-normal">
                  {lang === 'it'
                    ? 'Bucce, lische, frattaglie e potature diventano fondi ed essenze.'
                    : 'Peels, bones, offal and vine pruning become unctuous broths and glazes.'}
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#1E1D1B] block mb-1 uppercase tracking-wider">
                  {lang === 'it' ? 'Mano artigiana' : 'Handmade Discipline'}
                </span>
                <span className="text-[#1E1D1B]/70 leading-normal">
                  {lang === 'it'
                    ? 'Paste stese al mattarello ogni giorno e cotture su fuoco di legna.'
                    : 'Fresh pasta hand-rolled daily and wood ember cookery.'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Feature: "Dalla materia prima al piatto" */}
        <div className="bg-[#FBF9F5] border border-[#1E1D1B]/10 p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-2">
              {t('kicker.raw')}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1D1B] font-normal">
              {lang === 'it'
                ? 'Come nasce un piatto a VELORA: la tracciabilità della trasformazione'
                : 'How a dish comes to life at VELORA: tracing transformation'}
            </h3>
            <p className="text-sm text-[#1E1D1B]/70 mt-2 font-light">
              {lang === 'it'
                ? 'Seleziona un ingrediente per seguire il passaggio dalla terra alla tecnica fino alla portata finita.'
                : 'Select an ingredient below to follow its evolution from soil to culinary technique to finished plate.'}
            </p>
          </div>

          {/* Ingredient Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#1E1D1B]/10 pb-4">
            {RAW_INGREDIENTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIngredientIndex(idx)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all ${
                  selectedIngredientIndex === idx
                    ? 'bg-[#2C3E35] text-[#FBF9F5]'
                    : 'bg-[#F5F2EB] text-[#1E1D1B]/75 hover:bg-[#EFECE6] hover:text-[#1E1D1B]'
                }`}
                aria-pressed={selectedIngredientIndex === idx}
              >
                {item.ingredient[lang]}
              </button>
            ))}
          </div>

          {/* 3-Step Process Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1: Soil & Origin */}
            <div className="p-6 bg-[#F5F2EB]/50 border border-[#1E1D1B]/5 space-y-3">
              <div className="flex items-center gap-2 text-[#A57143] text-xs font-semibold uppercase tracking-wider">
                <Leaf className="w-4 h-4" />
                <span>{lang === 'it' ? '1. Origine & Raccolta' : '1. Terroir & Harvest'}</span>
              </div>
              <h4 className="font-serif text-lg text-[#1E1D1B]">
                {currentIngredient.ingredient[lang]}
              </h4>
              <p className="text-xs text-[#1E1D1B]/60 font-medium">
                {currentIngredient.origin[lang]}
              </p>
              <p className="text-xs sm:text-sm text-[#1E1D1B]/80 leading-relaxed font-light pt-2">
                {currentIngredient.description[lang]}
              </p>
            </div>

            {/* Step 2: Technique */}
            <div className="p-6 bg-[#F5F2EB]/50 border border-[#1E1D1B]/5 space-y-3">
              <div className="flex items-center gap-2 text-[#2C3E35] text-xs font-semibold uppercase tracking-wider">
                <Flame className="w-4 h-4" />
                <span>{lang === 'it' ? '2. Tecnica & Trasformazione' : '2. Craft & Technique'}</span>
              </div>
              <h4 className="font-serif text-lg text-[#1E1D1B]">
                {lang === 'it' ? 'La Mano del Cuoco' : 'The Chef’s Hand'}
              </h4>
              <p className="text-xs sm:text-sm text-[#1E1D1B]/80 leading-relaxed font-light">
                {currentIngredient.technique[lang]}
              </p>
            </div>

            {/* Step 3: Finished Plate */}
            <div className="p-6 bg-[#2C3E35] text-[#FBF9F5] space-y-3">
              <div className="flex items-center gap-2 text-[#EFECE6]/80 text-xs font-semibold uppercase tracking-wider">
                <UtensilsCrossed className="w-4 h-4 text-[#A57143]" />
                <span>{lang === 'it' ? '3. Nel Piatto' : '3. On the Plate'}</span>
              </div>
              <h4 className="font-serif text-lg text-white">
                {currentIngredient.dish[lang]}
              </h4>
              <p className="text-xs text-[#EFECE6]/80 leading-relaxed font-light pt-2">
                {lang === 'it'
                  ? 'Presentato su ceramica artigianale toscana, senza elementi decorativi non commestibili.'
                  : 'Presented on bespoke wheel-thrown Tuscan ceramic, strictly devoid of non-edible garnishes.'}
              </p>
              <div className="pt-2">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#A57143] hover:text-white font-medium"
                >
                  <span>{lang === 'it' ? 'Vedi nei nostri menu' : 'View in our menus'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
