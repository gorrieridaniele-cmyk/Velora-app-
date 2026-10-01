import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GIFT_EXPERIENCES, RESTAURANT_INFO } from '../data/restaurantData';
import { Gift, Check, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const RegalaEsperienzaSection: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedGiftIndex, setSelectedGiftIndex] = useState(0);
  const activeGift = GIFT_EXPERIENCES[selectedGiftIndex];

  const [recipient, setRecipient] = useState('Matteo & Chiara');
  const [sender, setSender] = useState('Lorenzo');
  const [message, setMessage] = useState(
    lang === 'it'
      ? 'Per festeggiare il vostro anniversario speciale con una serata memorabile a Firenze.'
      : 'To celebrate your special anniversary with an unforgettable evening in Florence.'
  );

  const [requested, setRequested] = useState(false);

  return (
    <section id="regala" className="py-24 md:py-32 bg-[#FBF9F5] border-b border-[#1E1D1B]/10 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {lang === 'it' ? 'Un Pensiero d’Autore' : 'A Bespoke Gift'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E1D1B] font-normal leading-tight">
            {lang === 'it' ? 'Regala un’Esperienza a Palazzo Serlupi' : 'Gift a Culinary Experience at Palazzo Serlupi'}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className="text-base sm:text-lg text-[#1E1D1B]/80 font-light leading-relaxed">
            {lang === 'it'
              ? 'Un voucher gastronomico di VELORA è un invito a rallentare. Stampato su carta cotone artigianale e sigillato con cera d’api, oppure inviato in formato digitale ad alta risoluzione con la vostra dedica personale.'
              : 'A VELORA dining voucher is an invitation to pause time. Issued on handmade cotton parchment sealed with beeswax, or delivered digitally with your personalized dedication.'}
          </p>
        </div>

        {/* 3 Voucher Packages Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {GIFT_EXPERIENCES.map((gift, idx) => (
            <button
              key={gift.id}
              onClick={() => setSelectedGiftIndex(idx)}
              className={`p-6 text-left border transition-all ${
                selectedGiftIndex === idx
                  ? 'bg-white border-[#2C3E35] shadow-md ring-1 ring-[#2C3E35]'
                  : 'bg-[#F5F2EB]/50 border-[#1E1D1B]/10 hover:border-[#1E1D1B]/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#A57143]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-xs text-[#2C3E35] font-semibold bg-[#2C3E35]/10 px-2 py-0.5">
                  {gift.pricePlaceholder}
                </span>
              </div>
              <h3 className="font-serif text-lg text-[#1E1D1B] mb-1">
                {gift.title[lang]}
              </h3>
              <p className="text-xs text-[#1E1D1B]/60 line-clamp-2">
                {gift.subtitle[lang]}
              </p>
            </button>
          ))}
        </div>

        {/* Customizer & Live Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Customizer Controls */}
          <div className="lg:col-span-6 bg-white border border-[#1E1D1B]/10 p-8 space-y-6">
            <h4 className="font-serif text-2xl text-[#1E1D1B]">
              {lang === 'it' ? 'Personalizza la Dedica' : 'Personalize the Dedication'}
            </h4>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-1">
                  {lang === 'it' ? 'Nome dei destinatari' : 'Recipient(s) name'}
                </label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Es. Matteo & Chiara"
                  className="w-full p-2.5 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-xs text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-1">
                  {lang === 'it' ? 'Il tuo nome (mittente)' : 'Sender name'}
                </label>
                <input
                  type="text"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  placeholder="Es. Lorenzo"
                  className="w-full p-2.5 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-xs text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-1">
                  {lang === 'it' ? 'Messaggio d’auguri' : 'Personal dedication note'}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-xs text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E1D1B]/10 space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1E1D1B] block">
                {lang === 'it' ? 'L’Esperienza include:' : 'The Experience Includes:'}
              </span>
              <ul className="space-y-1.5 text-xs text-[#1E1D1B]/75">
                {activeGift.includes[lang].map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2C3E35] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-[#A57143] pt-2 font-mono">
                {activeGift.validity[lang]}
              </p>
            </div>

            <div className="pt-4">
              {!requested ? (
                <button
                  onClick={() => setRequested(true)}
                  className="w-full py-3 bg-[#2C3E35] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1E1D1B] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'it' ? 'Richiedi questo voucher regalo' : 'Request this gift voucher'}</span>
                </button>
              ) : (
                <div className="p-4 bg-[#F5F2EB] border border-[#2C3E35]/30 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-[#2C3E35] mx-auto" />
                  <p className="text-xs text-[#1E1D1B] font-medium">
                    {lang === 'it'
                      ? 'Richiesta voucher registrata. Il ristorante vi contatterà per confermare la personalizzazione.'
                      : 'Voucher inquiry noted. Our team will contact you to finalize personal inscription.'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Live Voucher Card Preview */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="text-xs uppercase tracking-wider text-[#A57143] font-semibold mb-3">
              {lang === 'it' ? 'Anteprima del Cartoncino Regalo' : 'Gift Voucher Live Preview'}
            </div>

            <div className="bg-[#FAF7F0] border-2 border-[#1E1D1B]/15 p-8 sm:p-10 shadow-xl relative overflow-hidden">
              {/* Decorative subtle border line */}
              <div className="absolute inset-3 border border-[#A57143]/30 pointer-events-none" />

              <div className="relative z-10 text-center space-y-5">
                <span className="font-serif text-2xl tracking-[0.3em] font-medium text-[#1E1D1B] block">
                  {RESTAURANT_INFO.name}
                </span>

                <div className="text-[11px] uppercase tracking-[0.2em] text-[#A57143]">
                  Palazzo Serlupi — Firenze
                </div>

                <div className="w-12 h-[1px] bg-[#A57143] mx-auto my-2" />

                <div className="space-y-1">
                  <span className="text-[11px] text-[#1E1D1B]/60 uppercase tracking-widest block">
                    {lang === 'it' ? 'Dedicato a' : 'Presented to'}
                  </span>
                  <div className="font-serif italic text-2xl sm:text-3xl text-[#1E1D1B]">
                    {recipient || '...'}
                  </div>
                </div>

                <p className="text-xs text-[#1E1D1B]/80 font-light italic max-w-sm mx-auto leading-relaxed pt-1">
                  “{message || '...'}”
                </p>

                <div className="pt-4 border-t border-[#1E1D1B]/10 space-y-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#2C3E35] block">
                    {activeGift.title[lang]}
                  </span>
                  <span className="text-[11px] text-[#1E1D1B]/60 block">
                    {lang === 'it' ? 'Con i migliori auguri da ' : 'With warmest wishes from '} <strong>{sender || '...'}</strong>
                  </span>
                </div>

                <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-[#1E1D1B]/50 border-t border-[#1E1D1B]/10">
                  <span>VEL-VOUCHER-{new Date().getFullYear()}</span>
                  <span>{activeGift.validity[lang]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
