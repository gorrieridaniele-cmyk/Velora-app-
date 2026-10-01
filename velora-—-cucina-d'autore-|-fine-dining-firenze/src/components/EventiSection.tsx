import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CheckCircle2, ShieldAlert, Sparkles, Building, Wine } from 'lucide-react';

export const EventiSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '10',
    date: '',
    budget: '',
    notes: '',
    eventType: 'Cena Privata Istituzionale'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const targetEmail = 'gorrieridaniele@gmail.com';
    const emailSubject = encodeURIComponent(`[VELORA] Richiesta Evento Privato: ${formData.name} (${formData.eventType})`);
    const emailBody = encodeURIComponent(
`RICHIESTA EVENTO PRIVATO - VELORA PALAZZO SERLUPI
------------------------------------------------------------
Referente: ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone}

PARAMETRI DELL'EVENTO:
Spazio Richiesto: ${formData.eventType}
Numero Ospiti: ${formData.guests}
Data Presunta: ${formData.date || 'Da concordare'}
Formula Gastronomica / Budget: ${formData.budget || 'Da confermare'}

Note e Richieste Particolari:
${formData.notes || 'Nessuna nota'}

Destinatario Notifiche: gorrieridaniele@gmail.com`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="eventi" className="py-24 md:py-32 bg-[#F5F2EB]/50 border-b border-[#1E1D1B]/10 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {t('kicker.events')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E1D1B] font-normal leading-tight">
            {t('events.title')}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className="text-base sm:text-lg text-[#1E1D1B]/80 font-light leading-relaxed">
            {t('events.subtitle')}
          </p>
        </div>

        {/* 3 Pillars of Private Dining */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white/80 border border-[#1E1D1B]/10 space-y-3">
            <Building className="w-5 h-5 text-[#A57143]" />
            <h3 className="font-serif text-xl text-[#1E1D1B]">
              {lang === 'it' ? 'Il Salottino Riservato' : 'Private Salon Buyout'}
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1D1B]/75 leading-relaxed font-light">
              {lang === 'it'
                ? 'Un’ala autonoma di Palazzo Serlupi con accesso discreto, camino del Cinquecento e guardaroba privato per un massimo di 12 ospiti.'
                : 'A secluded wing of Palazzo Serlupi with discreet arrival, 16th-century fireplace, and private wardrobe for up to 12 guests.'}
            </p>
          </div>

          <div className="p-8 bg-white/80 border border-[#1E1D1B]/10 space-y-3">
            <Sparkles className="w-5 h-5 text-[#A57143]" />
            <h3 className="font-serif text-xl text-[#1E1D1B]">
              {lang === 'it' ? 'Menu Disegnato con Elena Vieri' : 'Custom Menu with Chef Elena'}
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1D1B]/75 leading-relaxed font-light">
              {lang === 'it'
                ? 'La chef progetta un percorso gastronomico dedicato, selezionando ingredienti rari reperiti su misura per l’occasione.'
                : 'Chef Elena crafts a tailored culinary sequence, sourcing rare seasonal ingredients specifically for your private occasion.'}
            </p>
          </div>

          <div className="p-8 bg-white/80 border border-[#1E1D1B]/10 space-y-3">
            <Wine className="w-5 h-5 text-[#A57143]" />
            <h3 className="font-serif text-xl text-[#1E1D1B]">
              {lang === 'it' ? 'Sommelier & Servizio Esclusivi' : 'Dedicated Cellar Concierge'}
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1D1B]/75 leading-relaxed font-light">
              {lang === 'it'
                ? 'La cantina apre formati speciali e vecchie annate, con personale di sala costantemente dedicato al vostro tavolo.'
                : 'The cellar uncorks large formats and aged verticals, accompanied by devoted waitstaff attentive only to your guests.'}
            </p>
          </div>
        </div>

        {/* Interactive Event Package & Space Calculator */}
        <div className="bg-[#FAF7F0] border border-[#2C3E35]/20 p-8 mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E1D1B]/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#A57143] font-semibold block">
                {lang === 'it' ? 'Configuratore di Proposta' : 'Event Proposal Estimator'}
              </span>
              <h3 className="font-serif text-2xl text-[#1E1D1B]">
                {lang === 'it' ? 'Simula il tuo evento privato a Palazzo Serlupi' : 'Simulate Your Private Event at Palazzo Serlupi'}
              </h3>
            </div>
            <span className="text-xs font-mono text-[#2C3E35] bg-[#2C3E35]/10 px-3 py-1 font-semibold">
              {lang === 'it' ? 'Preventivo su Misura' : 'Custom Estimate'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Space selector */}
            <div>
              <label className="block text-[#1E1D1B]/70 uppercase tracking-wider font-semibold mb-2">
                {lang === 'it' ? '1. Spazio Riservato' : '1. Private Space'}
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full p-2.5 bg-white border border-[#1E1D1B]/15 text-xs text-[#1E1D1B]"
              >
                <option value="Salottino Serlupi (4-12 ospiti)">
                  {lang === 'it' ? 'Il Salottino Serlupi (max 12 persone)' : 'The Serlupi Salon (max 12 guests)'}
                </option>
                <option value="Chiostro d’Inverno (10-24 ospiti)">
                  {lang === 'it' ? 'Il Chiostro d’Inverno (max 24 persone)' : 'The Winter Cloister (max 24 guests)'}
                </option>
                <option value="Esclusiva Intero Palazzo Serlupi">
                  {lang === 'it' ? 'Esclusiva Intero Palazzo Serlupi' : 'Full Palazzo Buyout'}
                </option>
              </select>
            </div>

            {/* Menu format */}
            <div>
              <label className="block text-[#1E1D1B]/70 uppercase tracking-wider font-semibold mb-2">
                {lang === 'it' ? '2. Formula Gastronomica' : '2. Culinary Format'}
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full p-2.5 bg-white border border-[#1E1D1B]/15 text-xs text-[#1E1D1B]"
              >
                <option value="Cena Istituzionale 5 portate [es. € 150/ospite]">
                  {lang === 'it' ? 'Percorso Istituzionale 5 portate [es. € 150/ospite]' : 'Institutional 5-course [e.g. € 150/guest]'}
                </option>
                <option value="Gran Percorso 7 portate con abbinamento Riserve [es. € 220/ospite]">
                  {lang === 'it' ? 'Gran Percorso 7 portate con Riserve [es. € 220/ospite]' : 'Grand 7-course with Reserves [e.g. € 220/guest]'}
                </option>
                <option value="Aperitivo a passaggio nel Chiostro + Cena seduta">
                  {lang === 'it' ? 'Aperitivo nel Chiostro + Cena seduta' : 'Cloister Cocktail + Seated Dinner'}
                </option>
              </select>
            </div>

            {/* Guests slider count */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[#1E1D1B]/70 uppercase tracking-wider font-semibold">
                  {lang === 'it' ? '3. Numero Ospiti' : '3. Guest Count'}
                </label>
                <span className="font-mono font-semibold text-[#2C3E35]">{formData.guests}</span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full accent-[#2C3E35] cursor-pointer mt-2"
              />
            </div>
          </div>

          <div className="p-4 bg-white border border-[#1E1D1B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-[#1E1D1B]/60 block font-light">
                {lang === 'it' ? 'Riepilogo parametri selezionati:' : 'Estimated parameters selected:'}
              </span>
              <strong className="text-[#1E1D1B] font-serif text-sm">
                {formData.eventType} · {formData.guests} {lang === 'it' ? 'ospiti' : 'guests'} · {formData.budget || '[da confermare]'}
              </strong>
            </div>
            <span className="text-[11px] font-mono text-[#A57143] uppercase tracking-wider">
              {lang === 'it' ? 'Parametri precompilati nel modulo sottostante' : 'Pre-filled into inquiry below'}
            </span>
          </div>
        </div>

        {/* Private Event Request Form */}
        <div className="bg-white border border-[#1E1D1B]/10 p-8 sm:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#1E1D1B]/10 pb-4 mb-6">
                <h3 className="font-serif text-2xl text-[#1E1D1B]">
                  {t('events.formTitle')}
                </h3>
                <p className="text-xs text-[#1E1D1B]/60 mt-1">
                  {lang === 'it'
                    ? 'Compilate i dettagli per consentire alla direzione di formulare una proposta dedicata.'
                    : 'Fill in your initial parameters so management may assemble a bespoke proposal.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-2">
                    {t('events.date')} *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-sm text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-2">
                    {t('events.guestCount')} *
                  </label>
                  <input
                    type="number"
                    min="4"
                    max="30"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full p-3 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-sm text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-2">
                    {t('events.budget')}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === 'it' ? 'Es. [€ 150 - € 250 a persona]' : 'e.g. [€ 150 - € 250 per guest]'}
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full p-3 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-sm text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-2">
                    {t('res.firstName')} & {t('res.lastName')} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Giulia Neri"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-sm text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-2">
                    {t('res.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="giulia@societa.it"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-sm text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-2">
                    {t('res.phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+39 055 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-sm text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1E1D1B]/70 font-medium mb-2">
                  {t('events.notes')}
                </label>
                <textarea
                  rows={3}
                  placeholder={lang === 'it' ? 'Tipologia dell’evento, orari ipotizzati, allestimenti particolari...' : 'Nature of event, timeline, specific floral or sommelier requests...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-[#FBF9F5] border border-[#1E1D1B]/15 text-sm text-[#1E1D1B] focus:outline-hidden focus:border-[#2C3E35]"
                />
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 text-xs text-[#1E1D1B]/70 pt-2 font-light">
                <ShieldAlert className="w-4 h-4 text-[#A57143] shrink-0 mt-0.5" />
                <p>{t('events.disclaimer')}</p>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#2C3E35] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1E1D1B] transition-colors"
                >
                  {t('events.submit')}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#2C3E35] mx-auto" />
              <h4 className="font-serif text-2xl text-[#1E1D1B]">
                {lang === 'it' ? 'Richiesta per Evento Inoltrata' : 'Private Event Inquiry Forwarded'}
              </h4>

              {/* Direct email destination badge */}
              <div className="max-w-md mx-auto p-4 bg-[#2C3E35]/10 border border-[#2C3E35]/30 text-xs text-[#2C3E35] space-y-1">
                <span className="font-semibold block uppercase tracking-wider text-[11px] text-[#A57143]">
                  {lang === 'it' ? 'Notifica inoltrata alla direzione:' : 'Inquiry dispatched to management:'}
                </span>
                <span className="font-mono font-medium text-sm">gorrieridaniele@gmail.com</span>
                <p className="text-[11px] text-[#1E1D1B]/70 font-light mt-1">
                  {lang === 'it'
                    ? 'La richiesta per il vostro evento è stata preparata e indirizzata a gorrieridaniele@gmail.com.'
                    : 'Your private dining request has been formatted and forwarded to gorrieridaniele@gmail.com.'}
                </p>
              </div>

              <p className="text-sm text-[#1E1D1B]/80 max-w-md mx-auto font-light leading-relaxed">
                {lang === 'it'
                  ? `La direzione eventi di Palazzo Serlupi contatterà ${formData.email} per definire i dettagli personalizzati.`
                  : `Our private dining director at Palazzo Serlupi will connect with ${formData.email} to structure your tailored program.`}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 border border-[#1E1D1B]/20 text-xs uppercase tracking-wider text-[#1E1D1B]"
              >
                {lang === 'it' ? 'Invia nuova richiesta' : 'New inquiry'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
