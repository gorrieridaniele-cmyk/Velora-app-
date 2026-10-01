import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MENU_CATEGORIES, RESTAURANT_INFO } from '../data/restaurantData';
import { Printer, X, Download } from 'lucide-react';

interface PrintMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintMenuModal: React.FC<PrintMenuModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const tastingMenu = MENU_CATEGORIES[0]; // Percorso "Memoria e Orizzonte"

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1E1D1B]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F0] border-2 border-[#1E1D1B]/20 w-full max-w-2xl my-8 p-8 sm:p-14 shadow-2xl relative text-[#1E1D1B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close & Print Buttons Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1E1D1B]/15 print:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#2C3E35] text-[#FBF9F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#1E1D1B] transition-colors flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'it' ? 'Stampa Menu Fine Art' : 'Print Fine Art Menu'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#1E1D1B]/60 hover:text-[#1E1D1B]"
            aria-label="Chiudi anteprima"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fine Art Printable Menu Card */}
        <div className="space-y-8 text-center">
          {/* Header */}
          <div className="space-y-2">
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.25em] font-medium block">
              {RESTAURANT_INFO.name}
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-[#A57143] font-medium block">
              Palazzo Serlupi — Firenze
            </span>
            <div className="w-12 h-[1px] bg-[#A57143] mx-auto my-3" />
            <p className="font-serif italic text-sm text-[#1E1D1B]/80">
              “{RESTAURANT_INFO.motto[lang]}”
            </p>
          </div>

          {/* Tasting Title */}
          <div className="py-2 border-y border-[#1E1D1B]/15">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1E1D1B]">
              {tastingMenu.title[lang]}
            </h3>
            <span className="text-xs font-mono text-[#1E1D1B]/60 block mt-0.5">
              {new Date().toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          {/* Courses list */}
          <div className="space-y-6 text-left max-w-lg mx-auto py-2">
            {tastingMenu.items.map((item, idx) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xs text-[#A57143]">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-serif text-base font-medium text-[#1E1D1B] leading-snug">
                    {item.name[lang]}
                  </span>
                </div>
                <p className="text-xs text-[#1E1D1B]/70 font-light pl-6 leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            ))}
          </div>

          {/* Footer & Signature */}
          <div className="pt-8 border-t border-[#1E1D1B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#1E1D1B]/70">
            <div className="text-left">
              <span className="font-serif italic block text-sm text-[#1E1D1B]">
                Chef Elena Vieri
              </span>
              <span className="text-[11px] text-[#A57143]">Cucina d’Autore & Territorio</span>
            </div>

            <div className="text-right">
              <span className="font-serif italic block text-sm text-[#1E1D1B]">
                Sommelier Marco Valeri
              </span>
              <span className="text-[11px] text-[#A57143]">Cantina Storica Palazzo Serlupi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
