import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/restaurantData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Accessibility,
  Shirt,
  CheckCircle2,
  ExternalLink,
  Navigation,
  Compass,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

export const ContattiSection: React.FC = () => {
  const { lang, atmosphere, t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mapZoom, setMapZoom] = useState<'close' | 'center' | 'wide'>('center');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const isEvening = atmosphere === 'evening';

  const copyAddress = () => {
    navigator.clipboard.writeText(`${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);

    const targetEmail = 'gorrieridaniele@gmail.com';
    const emailSubject = encodeURIComponent(`[VELORA] Messaggio da ${formData.name}: ${formData.subject || 'Informazioni'}`);
    const emailBody = encodeURIComponent(
`MESSAGGIO DAL SITO - VELORA PALAZZO SERLUPI
------------------------------------------------------------
Mittente: ${formData.name}
Email: ${formData.email}
Oggetto: ${formData.subject || 'Informazioni generali'}

Messaggio:
${formData.message}

Destinatario: gorrieridaniele@gmail.com`
    );

    const mailtoUrl = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;
    try {
      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback handled in UI
    }
  };

  // Dynamic OpenStreetMap bounding box based on zoom level
  const bboxMap = {
    close: '11.2515%2C43.7658%2C11.2625%2C43.7715', // Close-up around Palazzo Serlupi
    center: '11.2465%2C43.7630%2C11.2675%2C43.7745', // Historic Center of Florence
    wide: '11.2330%2C43.7540%2C11.2800%2C43.7830'   // Florence & Arno River Valley
  };

  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bboxMap[mapZoom]}&layer=mapnik&marker=43.7687%2C11.2569`;

  return (
    <section
      id="contatti"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#141312] border-[#2E2C2A]'
          : 'bg-[#F7F4EE] border-[#1E1D1B]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {t('kicker.visit')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
            {t('contact.title')}
          </h2>
          <div className="w-12 h-[1px] bg-[#2C3E35] my-6" />
          <p className={`text-base sm:text-lg font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
            {lang === 'it'
              ? 'Palazzo Serlupi sorge nel cuore storico di Firenze, in una via appartata e protetta dai flussi turistici principali. Vi accogliamo su prenotazione per il servizio del pranzo e della cena.'
              : 'Palazzo Serlupi is set within the historic heart of Florence, along a quiet side street shielded from primary tourist corridors. We welcome diners by advance reservation for lunch and dinner.'}
          </p>
        </div>

        {/* 2-Column Main Section: Location & Practical + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Address, Hours, Practical Info */}
          <div className="lg:col-span-6 space-y-8">
            {/* Address & Hours card */}
            <div className={`p-8 border space-y-6 ${
              isEvening ? 'bg-[#1E1D1B] border-[#333]' : 'bg-white border-[#1E1D1B]/10'
            }`}>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A57143] font-semibold block mb-2">
                  {t('contact.addressTitle')}
                </span>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A57143] shrink-0 mt-0.5" />
                    <div>
                      <h3 className={`font-serif text-xl sm:text-2xl ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                        {RESTAURANT_INFO.address}
                      </h3>
                      <p className={`text-xs mt-0.5 ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                        {RESTAURANT_INFO.city}, {RESTAURANT_INFO.country} — Centro Storico (Zona ZTL)
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-mono text-[11px] text-[#A57143]">
                          43°46'07.3"N 11°15'24.8"E
                        </span>
                        <button
                          onClick={copyAddress}
                          className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 border rounded-xs transition-colors ${
                            isEvening
                              ? 'border-[#444] text-[#F5F2EB]/80 hover:bg-[#333]'
                              : 'border-[#1E1D1B]/15 text-[#1E1D1B]/80 hover:bg-[#F5F2EB]'
                          }`}
                          title="Copia indirizzo negli appunti"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600">{lang === 'it' ? 'Copiato' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>{lang === 'it' ? 'Copia' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editable Hours */}
              <div className={`pt-4 border-t ${isEvening ? 'border-[#333]' : 'border-[#1E1D1B]/10'}`}>
                <span className="text-xs uppercase tracking-wider text-[#A57143] font-semibold block mb-2">
                  {t('contact.hoursTitle')}
                </span>
                <div className={`space-y-1.5 text-xs font-mono ${isEvening ? 'text-[#F5F2EB]/80' : 'text-[#1E1D1B]/80'}`}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#A57143]" />
                    <span>Pranzo: {RESTAURANT_INFO.hoursLunchPlaceholder}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#A57143]" />
                    <span>Cena: {RESTAURANT_INFO.hoursDinnerPlaceholder}</span>
                  </div>
                  <div className="text-[#A57143] pt-1">
                    {RESTAURANT_INFO.closedDayPlaceholder}
                  </div>
                </div>
              </div>

              {/* Phone & Email contacts */}
              <div className={`pt-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono ${
                isEvening ? 'border-[#333]' : 'border-[#1E1D1B]/10'
              }`}>
                <div>
                  <span className={`block mb-1 ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                    Telefono (da confermare):
                  </span>
                  <a href={`tel:${RESTAURANT_INFO.phonePlaceholder}`} className="text-[#A57143] hover:underline font-medium">
                    {RESTAURANT_INFO.phonePlaceholder}
                  </a>
                </div>
                <div>
                  <span className={`block mb-1 ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                    Email prenotazioni:
                  </span>
                  <a href={`mailto:${RESTAURANT_INFO.emailPlaceholder}`} className="text-[#A57143] hover:underline font-medium break-all">
                    {RESTAURANT_INFO.emailPlaceholder}
                  </a>
                </div>
              </div>
            </div>

            {/* Practical Information Cards */}
            <div className={`p-8 border space-y-5 ${
              isEvening ? 'bg-[#1E1D1B] border-[#333]' : 'bg-white border-[#1E1D1B]/10'
            }`}>
              <h4 className={`font-serif text-xl ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                {t('contact.practicalTitle')}
              </h4>

              {/* Dress code */}
              <div className="flex items-start gap-3">
                <Shirt className="w-4 h-4 text-[#A57143] shrink-0 mt-1" />
                <div className="text-xs">
                  <strong className={`block font-semibold mb-0.5 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                    {t('contact.dressCodeTitle')}
                  </strong>
                  <p className={`font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
                    {t('contact.dressCodeText')}
                  </p>
                </div>
              </div>

              {/* Accessibility */}
              <div className="flex items-start gap-3">
                <Accessibility className="w-4 h-4 text-[#A57143] shrink-0 mt-1" />
                <div className="text-xs">
                  <strong className={`block font-semibold mb-0.5 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                    {t('contact.accessTitle')}
                  </strong>
                  <p className={`font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
                    {t('contact.accessText')}
                  </p>
                </div>
              </div>

              {/* Parking and ZTL */}
              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-[#A57143] shrink-0 mt-1" />
                <div className="text-xs">
                  <strong className={`block font-semibold mb-0.5 ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                    {t('contact.parkingTitle')}
                  </strong>
                  <p className={`font-light leading-relaxed ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
                    {t('contact.parkingText')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: REAL INTERACTIVE FLORENCE MAP + Quick Contact Form */}
          <div className="lg:col-span-6 space-y-8">
            {/* Real Interactive Map Card */}
            <div className={`p-6 border space-y-4 shadow-xs ${
              isEvening ? 'bg-[#1E1D1B] border-[#333]' : 'bg-white border-[#1E1D1B]/10'
            }`}>
              {/* Map Controls Header */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className={`text-xs uppercase tracking-wider font-semibold ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                    {lang === 'it' ? 'Mappa Live di Firenze — Palazzo Serlupi' : 'Live Florence Map — Palazzo Serlupi'}
                  </span>
                </div>

                {/* Zoom Level Switcher */}
                <div className="flex items-center gap-1 text-[11px] font-mono">
                  <span className={`hidden sm:inline mr-1 text-[10px] uppercase tracking-wider ${isEvening ? 'text-[#F5F2EB]/50' : 'text-[#1E1D1B]/50'}`}>
                    {lang === 'it' ? 'Scala:' : 'Zoom:'}
                  </span>
                  <button
                    onClick={() => setMapZoom('close')}
                    className={`px-2 py-0.5 border transition-colors ${
                      mapZoom === 'close'
                        ? 'bg-[#2C3E35] text-white border-[#2C3E35]'
                        : isEvening
                        ? 'border-[#444] text-[#F5F2EB]/70 hover:bg-[#333]'
                        : 'border-[#1E1D1B]/15 text-[#1E1D1B]/70 hover:bg-[#F5F2EB]'
                    }`}
                  >
                    {lang === 'it' ? 'Quartiere' : 'Block'}
                  </button>
                  <button
                    onClick={() => setMapZoom('center')}
                    className={`px-2 py-0.5 border transition-colors ${
                      mapZoom === 'center'
                        ? 'bg-[#2C3E35] text-white border-[#2C3E35]'
                        : isEvening
                        ? 'border-[#444] text-[#F5F2EB]/70 hover:bg-[#333]'
                        : 'border-[#1E1D1B]/15 text-[#1E1D1B]/70 hover:bg-[#F5F2EB]'
                    }`}
                  >
                    {lang === 'it' ? 'Centro' : 'Center'}
                  </button>
                  <button
                    onClick={() => setMapZoom('wide')}
                    className={`px-2 py-0.5 border transition-colors ${
                      mapZoom === 'wide'
                        ? 'bg-[#2C3E35] text-white border-[#2C3E35]'
                        : isEvening
                        ? 'border-[#444] text-[#F5F2EB]/70 hover:bg-[#333]'
                        : 'border-[#1E1D1B]/15 text-[#1E1D1B]/70 hover:bg-[#F5F2EB]'
                    }`}
                  >
                    {lang === 'it' ? 'Città' : 'City'}
                  </button>
                </div>
              </div>

              {/* Real OpenStreetMap Live Interactive Iframe */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full border border-[#1E1D1B]/15 overflow-hidden bg-[#EAE6DF]">
                <iframe
                  title="Mappa interattiva reale di Firenze con posizione di VELORA a Palazzo Serlupi"
                  src={mapEmbedUrl}
                  className="w-full h-full border-0 filter contrast-[1.02] saturate-[0.95]"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating Interactive Badge with Venue Pin details */}
                <div className="absolute top-3 left-3 max-w-[240px] sm:max-w-xs bg-white/95 backdrop-blur-md p-3.5 shadow-lg border border-[#1E1D1B]/15 text-[#1E1D1B] z-10 pointer-events-auto">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#2C3E35] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#A57143]" />
                    </div>
                    <div>
                      <div className="font-serif text-sm font-semibold tracking-wide leading-tight">
                        VELORA
                      </div>
                      <div className="text-[11px] text-[#A57143] font-medium uppercase tracking-wider">
                        Palazzo Serlupi
                      </div>
                      <div className="text-[10px] text-[#1E1D1B]/70 font-mono mt-0.5">
                        Via delle Viole 18, Firenze
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Actions Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className={`text-[11px] ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                  {lang === 'it' ? 'Apri per calcolare il percorso in tempo reale:' : 'Open for real-time turn-by-turn navigation:'}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=43.7687,11.2569"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#2C3E35] text-white text-[11px] uppercase tracking-wider font-semibold hover:bg-[#1E1D1B] transition-colors"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Google Maps</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                  </a>

                  <a
                    href="https://maps.apple.com/?ll=43.7687,11.2569&q=VELORA+Palazzo+Serlupi"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`inline-flex items-center gap-1 px-3 py-1.5 border text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                      isEvening
                        ? 'border-[#444] text-[#F5F2EB] hover:bg-[#333]'
                        : 'border-[#1E1D1B]/20 text-[#1E1D1B] hover:bg-[#F5F2EB]'
                    }`}
                  >
                    <span>Apple Maps</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Walking Distances Table from Florence Landmarks */}
              <div className={`p-3.5 border rounded-xs text-xs space-y-2 ${
                isEvening ? 'bg-[#141312] border-[#2E2C2A]' : 'bg-[#FBF9F5] border-[#1E1D1B]/10'
              }`}>
                <span className={`text-[10px] uppercase tracking-wider font-semibold block ${
                  isEvening ? 'text-[#A57143]' : 'text-[#2C3E35]'
                }`}>
                  {lang === 'it' ? 'Distanze pedonali dai principali punti di Firenze:' : 'Walking distances from Florence landmarks:'}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                  <div>
                    <span className="block text-[10px] opacity-60">Uffizi / Signoria</span>
                    <span className="font-semibold text-[#A57143]">350 m (4 min)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] opacity-60">Piazza del Duomo</span>
                    <span className="font-semibold text-[#A57143]">650 m (8 min)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] opacity-60">Ponte alle Grazie</span>
                    <span className="font-semibold text-[#A57143]">250 m (3 min)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] opacity-60">Stazione SMN</span>
                    <span className="font-semibold text-[#A57143]">1.3 km (16 min)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick General Inquiry Form */}
            <div className={`p-8 border ${
              isEvening ? 'bg-[#1E1D1B] border-[#333]' : 'bg-white border-[#1E1D1B]/10'
            }`}>
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className={`font-serif text-xl ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                    {lang === 'it' ? 'Scrivici un messaggio' : 'Send us an inquiry'}
                  </h4>
                  <p className={`text-xs mb-4 ${isEvening ? 'text-[#F5F2EB]/60' : 'text-[#1E1D1B]/60'}`}>
                    {lang === 'it'
                      ? 'Per richieste generali, informazioni stampa o contatti con la cantina.'
                      : 'For general inquiries, press information or cellar contacts.'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs uppercase tracking-wider font-medium mb-1 ${
                        isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'
                      }`}>
                        {t('res.firstName')} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nome e Cognome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full p-2.5 border text-xs focus:outline-hidden ${
                          isEvening
                            ? 'bg-[#141312] border-[#333] text-[#F5F2EB] focus:border-[#A57143]'
                            : 'bg-[#FBF9F5] border-[#1E1D1B]/15 text-[#1E1D1B] focus:border-[#2C3E35]'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs uppercase tracking-wider font-medium mb-1 ${
                        isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'
                      }`}>
                        {t('res.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nome@dominio.it"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full p-2.5 border text-xs focus:outline-hidden ${
                          isEvening
                            ? 'bg-[#141312] border-[#333] text-[#F5F2EB] focus:border-[#A57143]'
                            : 'bg-[#FBF9F5] border-[#1E1D1B]/15 text-[#1E1D1B] focus:border-[#2C3E35]'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs uppercase tracking-wider font-medium mb-1 ${
                      isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'
                    }`}>
                      {lang === 'it' ? 'Oggetto' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === 'it' ? 'Informazioni generali / Visite' : 'General request'}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full p-2.5 border text-xs focus:outline-hidden ${
                        isEvening
                          ? 'bg-[#141312] border-[#333] text-[#F5F2EB] focus:border-[#A57143]'
                          : 'bg-[#FBF9F5] border-[#1E1D1B]/15 text-[#1E1D1B] focus:border-[#2C3E35]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs uppercase tracking-wider font-medium mb-1 ${
                      isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'
                    }`}>
                      {lang === 'it' ? 'Messaggio' : 'Message'} *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder={lang === 'it' ? 'Il vostro messaggio...' : 'Your message...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full p-2.5 border text-xs focus:outline-hidden ${
                        isEvening
                          ? 'bg-[#141312] border-[#333] text-[#F5F2EB] focus:border-[#A57143]'
                          : 'bg-[#FBF9F5] border-[#1E1D1B]/15 text-[#1E1D1B] focus:border-[#2C3E35]'
                      }`}
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#2C3E35] text-[#FBF9F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#1E1D1B] transition-colors"
                    >
                      {lang === 'it' ? 'Invia messaggio' : 'Send message'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#2C3E35] mx-auto" />
                  <h4 className={`font-serif text-xl ${isEvening ? 'text-[#F5F2EB]' : 'text-[#1E1D1B]'}`}>
                    {lang === 'it' ? 'Messaggio inoltrato con successo' : 'Message sent successfully'}
                  </h4>

                  {/* Destination email badge */}
                  <div className="max-w-xs mx-auto p-3.5 bg-[#2C3E35]/10 border border-[#2C3E35]/30 text-xs text-[#2C3E35] space-y-1">
                    <span className="font-semibold block uppercase tracking-wider text-[10px] text-[#A57143]">
                      {lang === 'it' ? 'Recapito diretto alla direzione:' : 'Direct dispatch to management:'}
                    </span>
                    <span className="font-mono font-medium text-xs">gorrieridaniele@gmail.com</span>
                  </div>

                  <p className={`text-xs font-light ${isEvening ? 'text-[#F5F2EB]/70' : 'text-[#1E1D1B]/70'}`}>
                    {lang === 'it'
                      ? 'Grazie per averci contattato. Il messaggio è stato inoltrato a gorrieridaniele@gmail.com e risponderemo entro 24 ore.'
                      : 'Thank you for reaching out. Your message was routed to gorrieridaniele@gmail.com and we will reply within 24 hours.'}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs text-[#A57143] hover:underline"
                  >
                    {lang === 'it' ? 'Invia un altro messaggio' : 'Send another note'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
