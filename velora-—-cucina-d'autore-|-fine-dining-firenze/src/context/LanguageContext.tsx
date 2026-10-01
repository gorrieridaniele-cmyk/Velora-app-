import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  atmosphere: 'day' | 'evening';
  toggleAtmosphere: () => void;
  t: (key: string) => string;
}

const UI_STRINGS: Record<string, { it: string; en: string }> = {
  // Nav
  'nav.restaurant': { it: 'Il Ristorante', en: 'The Restaurant' },
  'nav.cuisine': { it: 'Cucina & Chef', en: 'Cuisine & Chef' },
  'nav.menu': { it: 'I Nostri Menu', en: 'Our Menus' },
  'nav.cellar': { it: 'La Cantina', en: 'The Wine Cellar' },
  'nav.events': { it: 'Eventi Privati', en: 'Private Dining' },
  'nav.gift': { it: 'Regala Esperienza', en: 'Gift a Voucher' },
  'nav.diary': { it: 'Diario d’Autore', en: 'The Journal' },
  'nav.contact': { it: 'Contatti & Visita', en: 'Contacts & Visit' },
  'nav.reserve': { it: 'Prenota un tavolo', en: 'Reserve a table' },

  // Hero
  'hero.discover': { it: 'Scopri la cucina', en: 'Explore the cuisine' },
  'hero.scroll': { it: 'Scorri per esplorare', en: 'Scroll to explore' },
  'hero.palazzo': { it: 'Palazzo Serlupi — Firenze', en: 'Palazzo Serlupi — Florence' },

  // Sections headers & kicker
  'kicker.concept': { it: 'La Nostra Visione', en: 'Our Vision' },
  'kicker.spaces': { it: 'Gli Ambienti', en: 'The Spaces' },
  'kicker.chef': { it: 'La Guida della Cucina', en: 'Culinary Direction' },
  'kicker.raw': { it: 'Dalla Materia Prima al Piatto', en: 'From Soil to Plate' },
  'kicker.menu': { it: 'La Tavola delle Stagioni', en: 'The Seasonal Table' },
  'kicker.cellar': { it: 'La Selezione di Cantina', en: 'Cellar Selections' },
  'kicker.reservation': { it: 'Accoglienza & Prenotazioni', en: 'Hospitality & Reservations' },
  'kicker.events': { it: 'Occasioni Esclusive', en: 'Bespoke Occasions' },
  'kicker.diary': { it: 'Storie & Stagioni', en: 'Stories & Seasons' },
  'kicker.visit': { it: 'Raggiungerci', en: 'How to Reach Us' },

  // Menu notices
  'menu.allergenNotice': {
    it: 'Menu e ingredienti seguono il ritmo naturale delle stagioni. Il nostro personale di sala è a disposizione per dettagli completi sugli allergeni e sulle variazioni dedicate.',
    en: 'Menus and ingredients follow the natural seasonal cycle. Our dining room team is available for comprehensive allergen information and dedicated dietary adjustments.'
  },
  'menu.placeholderBadge': {
    it: 'Dato da confermare',
    en: 'To be confirmed'
  },
  'menu.dietaryNotice': {
    it: 'Vi invitiamo a segnalare ogni allergia, intolleranza o preferenza alimentare con anticipo al momento della prenotazione.',
    en: 'We invite you to notify us of any allergies, intolerances, or dietary preferences in advance upon booking.'
  },

  // Cellar
  'cellar.sommelierTitle': { it: 'Il Dialogo con la Vigna', en: 'Dialogue with the Vineyard' },
  'cellar.byGlassTitle': { it: 'Una Selezione al Calice', en: 'By the Glass Selection' },
  'cellar.nonAlcTitle': { it: 'Proposte Analcoliche d’Autore', en: 'House Botanical Non-Alcoholic Pairings' },
  'cellar.tastingsTitle': { it: 'Percorsi di Degustazione Vini', en: 'Curated Wine Flights' },

  // Reservations
  'res.title': { it: 'Prenota la Tua Esperienza', en: 'Reserve Your Experience' },
  'res.subtitle': {
    it: 'Un tavolo a Palazzo Serlupi è un momento dedicato. La disponibilità è limitata per garantire cura e silenzio.',
    en: 'A table at Palazzo Serlupi is a dedicated moment. Seating is intentionally limited to ensure serenity and care.'
  },
  'res.stepDate': { it: '1. Data & Orario', en: '1. Date & Time' },
  'res.stepGuests': { it: '2. Ospiti & Spazio', en: '2. Guests & Seating' },
  'res.stepDetails': { it: '3. I Tuoi Recapiti', en: '3. Your Details' },
  'res.stepSummary': { it: '4. Riepilogo & Invio', en: '4. Summary & Submit' },
  'res.dateLabel': { it: 'Seleziona data', en: 'Select date' },
  'res.serviceLabel': { it: 'Servizio', en: 'Service' },
  'res.lunch': { it: 'Pranzo', en: 'Lunch' },
  'res.dinner': { it: 'Cena', en: 'Dinner' },
  'res.timeSlotLabel': { it: 'Orario preferito', en: 'Preferred time' },
  'res.guestsLabel': { it: 'Numero di ospiti', en: 'Number of guests' },
  'res.areaLabel': { it: 'Ambiente desiderato (soggetto a conferma)', en: 'Desired area (subject to confirmation)' },
  'res.areaSala': { it: 'La Sala delle Volte (Standard)', en: 'The Vaulted Hall (Standard)' },
  'res.areaChef': { it: 'Il Tavolo dello Chef (Banco a vista, max 6)', en: 'Chef’s Table (Open counter, max 6)' },
  'res.areaSalotto': { it: 'Il Salottino Serlupi (Area riservata)', en: 'Serlupi Private Salon (Secluded)' },
  'res.firstName': { it: 'Nome', en: 'First Name' },
  'res.lastName': { it: 'Cognome', en: 'Last Name' },
  'res.email': { it: 'Indirizzo Email', en: 'Email Address' },
  'res.phone': { it: 'Recapito Telefonico', en: 'Phone Number' },
  'res.occasion': { it: 'Occasione speciale (opzionale)', en: 'Special occasion (optional)' },
  'res.dietary': { it: 'Allergie o preferenze alimentari', en: 'Allergies or dietary preferences' },
  'res.requests': { it: 'Note e richieste aggiuntive', en: 'Additional notes & requests' },
  'res.confirmBtn': { it: 'Invia richiesta di prenotazione', en: 'Submit reservation request' },
  'res.modifyNotice': {
    it: 'Per modificare o cancellare una richiesta, contattare il ristorante via email a [prenotazioni@velorafirenze.it] o al telefono [+39 055 000 0000] con almeno 24 ore di anticipo.',
    en: 'To modify or cancel a request, please contact the restaurant at [prenotazioni@velorafirenze.it] or by phone at [+39 055 000 0000] at least 24 hours in advance.'
  },
  'res.externalPlaceholder': {
    it: 'Configura integrazione gestionale (TheFork / SevenRooms / Resy)',
    en: 'Configure external reservation engine (TheFork / SevenRooms / Resy)'
  },
  'res.demoNotice': {
    it: 'Nota per il gestore: Questo è un modulo dimostrativo pronto per essere allacciato al vostro gestionale o account email.',
    en: 'Manager note: This is a fully functional demonstration booking flow ready to be linked to your reservation software or mailer.'
  },

  // Private events
  'events.title': { it: 'Cene ed Eventi Privati su Misura', en: 'Private Dining & Bespoke Events' },
  'events.subtitle': {
    it: 'Dalle cene di lavoro riservate alle celebrazioni intime nel Salottino Serlupi o nel Chiostro d’Inverno.',
    en: 'From discrete business gatherings to intimate celebrations in the Serlupi Salon or Winter Cloister.'
  },
  'events.formTitle': { it: 'Richiedi una proposta personalizzata', en: 'Request a customized proposal' },
  'events.guestCount': { it: 'Numero indicativo di ospiti', en: 'Estimated guest count' },
  'events.date': { it: 'Data presunta', en: 'Proposed date' },
  'events.budget': { it: 'Budget indicativo per ospite (opzionale)', en: 'Approximate budget per guest (optional)' },
  'events.notes': { it: 'Dettagli dell’evento o preferenze', en: 'Event details or preferences' },
  'events.submit': { it: 'Invia richiesta per evento', en: 'Submit event inquiry' },
  'events.disclaimer': {
    it: 'Ogni evento viene valutato su richiesta specifica con il coordinamento diretto della chef Elena Vieri e del sommelier. Nessun servizio è confermato fino a colloquio preliminare.',
    en: 'Each private gathering is tailored upon individual request in direct consultation with Chef Elena Vieri and our sommelier. No booking is binding until mutual confirmation.'
  },

  // Contacts
  'contact.title': { it: 'Come Raggiungerci & Informazioni', en: 'Location & Practical Information' },
  'contact.addressTitle': { it: 'La Nostra Sede', en: 'Our Location' },
  'contact.hoursTitle': { it: 'Orari di Servizio', en: 'Service Hours' },
  'contact.practicalTitle': { it: 'Indicazioni Pratiche', en: 'Practical Guidelines' },
  'contact.dressCodeTitle': { it: 'Codice di Abbigliamento', en: 'Dress Code' },
  'contact.dressCodeText': {
    it: '[Indicazione da confermare: Si suggerisce un abbigliamento smart casual curato. Non sono graditi capi sportivi o infradito durante la sera.]',
    en: '[Guideline to be confirmed: Smart casual attire is appreciated. Athletic sportswear and open beach sandals are discouraged for evening dining.]'
  },
  'contact.accessTitle': { it: 'Accessibilità & Mobilità', en: 'Accessibility & Mobility' },
  'contact.accessText': {
    it: '[Indicazione da confermare: Palazzo Serlupi è provvisto di rampa d’accesso al piano terra e servizi dedicati per persone a mobilità ridotta. Si prega di segnalarlo alla prenotazione.]',
    en: '[Guideline to be confirmed: Palazzo Serlupi provides ground-floor ramp access and designated facilities for guests with reduced mobility. Kindly notify us upon reserving.]'
  },
  'contact.parkingTitle': { it: 'ZTL & Parcheggio', en: 'ZTL & Parking' },
  'contact.parkingText': {
    it: '[Indicazione da confermare: Il ristorante si trova in ZTL Firenze. È disponibile garage convenzionato custodito con autorizzazione d’accesso telematico su prenotazione.]',
    en: '[Guideline to be confirmed: Located in the historic Florence ZTL. Partner secure valet garage with automatic vehicle clearance is available upon request.]'
  },

  // Diary
  'diary.readMore': { it: 'Leggi l’articolo', en: 'Read article' },
  'diary.back': { it: 'Torna al diario', en: 'Back to journal' },

  // Footer & Cookie
  'footer.rights': { it: 'Tutti i diritti riservati.', en: 'All rights reserved.' },
  'footer.privacy': { it: 'Informativa Privacy', en: 'Privacy Policy' },
  'footer.cookie': { it: 'Gestione Cookie', en: 'Cookie Settings' },
  'footer.accessibility': { it: 'Accessibilità', en: 'Accessibility' },
  'cookie.title': { it: 'Trasparenza e Rispetto dei Tuoi Dati', en: 'Data Transparency & Privacy' },
  'cookie.text': {
    it: 'Utilizziamo solo cookie tecnici essenziali e, previo tuo consenso, cookie statistici anonimi per migliorare la tua esperienza sul sito di VELORA.',
    en: 'We use essential technical cookies and, with your consent, anonymous analytical cookies to optimize your experience on the VELORA website.'
  },
  'cookie.accept': { it: 'Accetta tutti', en: 'Accept all' },
  'cookie.decline': { it: 'Solo necessari', en: 'Essential only' },
  'cookie.customize': { it: 'Personalizza', en: 'Customize' }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'it',
  setLang: () => {},
  toggleLang: () => {},
  atmosphere: 'day',
  toggleAtmosphere: () => {},
  t: (key: string) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('it');
  const [atmosphere, setAtmosphere] = useState<'day' | 'evening'>('day');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'it' ? 'en' : 'it'));
  };

  const toggleAtmosphere = () => {
    setAtmosphere((prev) => (prev === 'day' ? 'evening' : 'day'));
  };

  const t = (key: string): string => {
    if (UI_STRINGS[key]) {
      return UI_STRINGS[key][lang];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, atmosphere, toggleAtmosphere, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
