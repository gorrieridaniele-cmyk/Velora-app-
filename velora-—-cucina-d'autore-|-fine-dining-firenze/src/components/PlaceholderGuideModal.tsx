import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle, HelpCircle, FileEdit, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface PlaceholderGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderGuideModal: React.FC<PlaceholderGuideModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const placeholdersList = [
    {
      label: lang === 'it' ? 'Numero di telefono' : 'Telephone number',
      current: RESTAURANT_INFO.phonePlaceholder,
      location: lang === 'it' ? 'Header, Prenotazioni, Contatti, Footer' : 'Header, Bookings, Contacts, Footer',
      note: lang === 'it' ? 'Inserire il numero reale di rete fissa o cellulare con prefisso (+39)' : 'Enter verified phone line with international dialing prefix (+39)'
    },
    {
      label: lang === 'it' ? 'Email di prenotazione & info' : 'Booking & General email',
      current: RESTAURANT_INFO.emailPlaceholder,
      location: lang === 'it' ? 'Prenotazioni, Contatti, Footer' : 'Bookings, Contacts, Footer',
      note: lang === 'it' ? 'Configurare la casella di posta che riceverà le notifiche dei moduli' : 'Provide mailbox receiving inquiry transmissions'
    },
    {
      label: lang === 'it' ? 'Orari di servizio effettivi' : 'Actual service hours',
      current: `${RESTAURANT_INFO.hoursLunchPlaceholder} / ${RESTAURANT_INFO.hoursDinnerPlaceholder}`,
      location: lang === 'it' ? 'Contatti & Visita, Footer' : 'Contacts & Visit, Footer',
      note: lang === 'it' ? 'Aggiornare con i turni confermati di pranzo, cena e giorno di chiusura' : 'Confirm lunch/dinner shifts and weekly closure day'
    },
    {
      label: lang === 'it' ? 'Prezzi dei menu degustazione e à la carte' : 'Tasting and à la carte pricing',
      current: '[es. € 145 / € 125 / vini € 75 / à la carte € 28 - € 44]',
      location: lang === 'it' ? 'Sezione Menu, Sezione Cantina' : 'Menu section, Cellar section',
      note: lang === 'it' ? 'Stabilire i prezzi definitivi delle portate e degli abbinamenti vini' : 'Set final price points for courses and wine pairings'
    },
    {
      label: lang === 'it' ? 'Annate e prezzi al calice della cantina' : 'Cellar vintages and by-the-glass rates',
      current: '[annate es. 2017-2021, calici es. € 15 - € 26]',
      location: lang === 'it' ? 'Sezione Cantina' : 'Wine Cellar section',
      note: lang === 'it' ? 'Aggiornare in base alle bottiglie correntemente in rotazione' : 'Keep aligned with active cellar bottle allocations'
    },
    {
      label: lang === 'it' ? 'Collegamento gestionale esterno' : 'External reservation system link',
      current: 'TheFork / SevenRooms / Resy / Zenchef / OpenTable',
      location: lang === 'it' ? 'Modulo Prenotazioni' : 'Reservations flow',
      note: lang === 'it' ? 'Inserire il widget o il redirect al vostro motore di booking online' : 'Embed widget iframe or direct link to your reservation portal'
    },
    {
      label: lang === 'it' ? 'Indicazioni ZTL, Parcheggio e Dress Code' : 'ZTL access, parking and dress code',
      current: '[indicazioni da confermare in Contatti]',
      location: lang === 'it' ? 'Contatti & Visita' : 'Contacts & Visit',
      note: lang === 'it' ? 'Confermare accordi con garage convenzionato e regole di sala' : 'Confirm agreements with partner valet garage and dining room guidelines'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1E1D1B]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF9F5] border border-[#1E1D1B]/20 w-full max-w-2xl p-6 sm:p-10 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#1E1D1B]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A57143] mb-1">
              <FileEdit className="w-4 h-4" />
              <span>{lang === 'it' ? 'Pannello Gestore' : 'Client Configuration Panel'}</span>
            </div>
            <h3 className="font-serif text-2xl text-[#1E1D1B]">
              {lang === 'it' ? 'Guida e Riepilogo dei Campi Segnaposto' : 'Placeholder Audit & Configuration Guide'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#1E1D1B]/60 hover:text-[#1E1D1B]"
            aria-label="Chiudi guida"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Intro */}
        <p className="text-xs text-[#1E1D1B]/75 leading-relaxed my-4">
          {lang === 'it'
            ? 'Come richiesto, il sito di VELORA non inventa dati sensibili non verificabili (prezzi finali, orari tassativi, recensioni o numeri reali). Tutti gli elementi evidenziati tra parentesi quadre sono chiaramente predisposti per essere personalizzati prima della pubblicazione definitiva.'
            : 'As specified, the VELORA site avoids fabricating unverifiable details (fixed tariffs, strict hours, or speculative reviews). All bracketed placeholders are explicitly prepared for final verification prior to public launch.'}
        </p>

        {/* List of Placeholders */}
        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2 divide-y divide-[#1E1D1B]/10">
          {placeholdersList.map((item, idx) => (
            <div key={idx} className="pt-3 first:pt-0">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs font-semibold text-[#1E1D1B]">{item.label}</span>
                <span className="text-[11px] font-mono text-[#2C3E35] bg-[#2C3E35]/10 px-2 py-0.5">
                  {item.current}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#1E1D1B]/60 mt-0.5">
                <span>{lang === 'it' ? 'Posizione:' : 'Location:'} {item.location}</span>
              </div>
              <p className="text-[11px] text-[#A57143] font-light mt-1">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 mt-4 border-t border-[#1E1D1B]/10 flex items-center justify-between">
          <span className="text-xs text-[#1E1D1B]/60 font-light">
            File di configurazione: <code className="font-mono text-[11px] text-[#2C3E35]">src/data/restaurantData.ts</code>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2C3E35] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#1E1D1B]"
          >
            {lang === 'it' ? 'Ho compreso' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  );
};
