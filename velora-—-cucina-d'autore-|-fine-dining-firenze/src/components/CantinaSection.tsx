import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SOMMELIER_INFO, WINE_LIST_SAMPLE, NON_ALCOHOLIC_PAIRINGS } from '../data/restaurantData';
import { Wine, Sparkles, Droplets, Compass, Search, Filter } from 'lucide-react';

export const CantinaSection: React.FC = () => {
  const { lang, atmosphere, t } = useLanguage();
  const isEvening = atmosphere === 'evening';
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState<'all' | 'chianti' | 'montalcino' | 'bianchi' | 'bolgheri' | 'bollicine'>('all');
  const [activePairingPath, setActivePairingPath] = useState<'classico' | 'rari' | 'analcolico'>('classico');

  const pairingPaths = {
    classico: {
      title: { it: 'Percorso Toscana Classica & Sangiovese d’Autore', en: 'Classic Tuscan & Sangiovese Master Flight' },
      subtitle: { it: '4 calici dedicati all’eleganza del Sangiovese e ai suoli storici toscani', en: '4 glasses celebrating Sangiovese elegance and historic Tuscan soils' },
      price: '[prezzo da confermare — es. € 65]',
      glasses: [
        {
          course: { it: 'Antipasto & Giardino', en: 'First Course & Garden' },
          dish: { it: 'Carciofo violetto di San Miniato cotto alla brace di rovere', en: 'Oak-ember roasted violet artichoke from San Miniato' },
          wine: 'Vernaccia di San Gimignano Riserva DOCG',
          producer: 'Montenidoli',
          vintage: '2020',
          glassType: { it: 'Calice a tulipano medio', en: 'Medium tulip glass' },
          temp: '11°C',
          notes: {
            it: 'La sapidità fossile della sabbia gialla di San Gimignano e la sottile mandorla amara dialogano alla perfezione con la fibra del carciofo.',
            en: 'Prehistoric marine salinity and tender almond peel cut through the artichoke fibers with sublime clarity.'
          }
        },
        {
          course: { it: 'Primo della Tradizione', en: 'Handmade Pasta Course' },
          dish: { it: 'Tortelli di farro e borragine al burro nocciola e fondo vegetale', en: 'Farro & borage tortelli with hazelnut butter and roasted vegetable glacé' },
          wine: 'Chianti Classico Riserva DOCG',
          producer: 'Castell’in Villa (Castelnuovo Berardenga)',
          vintage: '2018',
          glassType: { it: 'Calice Borgogna Zalto', en: 'Zalto Burgundy glass' },
          temp: '16°C',
          notes: {
            it: 'Austero, minerale, con tannini setosi plasmati da anni di riposo in botte grande. Rispetta la grana della pasta fresca senza sovrastarla.',
            en: 'Austere and silken, shaped by years in large neutral casks. Elevates the delicate earthiness of borage.'
          }
        },
        {
          course: { it: 'Piatto di Mezzo & Brace', en: 'Main Fire Course' },
          dish: { it: 'Piccione di cascina in due cotture, fegatino al tartufo e ginepro', en: 'Farmstead squab in two services with truffled liver and wild juniper' },
          wine: 'Brunello di Montalcino DOCG',
          producer: 'Pian dell’Orino (Montalcino)',
          vintage: '2017',
          glassType: { it: 'Calice ampio Bordeaux', en: 'Broad Bordeaux glass' },
          temp: '17°C',
          notes: {
            it: 'Coltivazione biodinamica pura. Note ferrose, ciliegia selvatica e una persistenza ematica che esalta il petto rosato del piccione.',
            en: 'Pure biodynamic terroir. Iron nuances, forest floor, and wild fruit that mirror the savory depth of squab.'
          }
        },
        {
          course: { it: 'Formaggi d’Alpeggio o Finale Dolce', en: 'Cheese Course or Dessert' },
          dish: { it: 'Pecorino a latte crudo stagionato in fossa e fichi caramellati', en: 'Raw sheep milk cheese pit-aged with honeyed Carmignano figs' },
          wine: 'Vin Santo del Chianti Rufina DOC',
          producer: 'Fattoria Selvapiana',
          vintage: '2013',
          glassType: { it: 'Calice piccolo da meditazione', en: 'Snifter tasting glass' },
          temp: '13°C',
          notes: {
            it: 'Sei anni nei caratelli di castagno. Noci tostate, albicocca disidratata e un’acidità tagliente che lascia il palato mondato e fresco.',
            en: 'Six years in chestnut caratelli casks. Toasted hazelnut, candied stone fruit, and vibrant energetic acidity.'
          }
        }
      ]
    },
    rari: {
      title: { it: 'Percorso Terroir Eroici, Anfore & Biodinamica', en: 'Heroic Terroir, Amphora & Natural Crus' },
      subtitle: { it: '5 calici da micro-parcelle, macerazioni sulle bucce e vitigni rari salvati dall’oblio', en: '5 glasses from micro-plots, skin macerations, and heirloom grapes' },
      price: '[prezzo da confermare — es. € 95]',
      glasses: [
        {
          course: { it: 'Accoglienza & Crudo', en: 'Welcome & Crudo' },
          dish: { it: 'Carpaccio di fungo porcino, olio novello e polline di bosco', en: 'Sliced porcini mushroom carpaccio with newly pressed olive oil and forest pollen' },
          wine: 'Trebbiano Toscano in Anfora di Terracotta IGT',
          producer: 'Tenuta di Valgiano (Colline Lucchesi)',
          vintage: '2021',
          glassType: { it: 'Calice a stelo lungo universale', en: 'Universal long-stem crystal' },
          temp: '12°C',
          notes: {
            it: 'Macerazione sulle bucce di 20 giorni in giare di terracotta d’Impruneta. Profumi di resina, fiori secchi e una trama tannica luminosa.',
            en: '20 days of skin contact in Impruneta terracotta. Notes of dry wild flowers, tea leaves, and electric texture.'
          }
        },
        {
          course: { it: 'Mare & Roccia', en: 'Sea & Coastal Stone' },
          dish: { it: 'Triglia di scoglio affumicata al mirto con finocchio di mare', en: 'Rock red mullet cold-smoked over myrtle twigs with coastal sea fennel' },
          wine: 'Ansonica dell’Isola del Giglio IGT',
          producer: 'Castellari Isola del Giglio',
          vintage: '2022',
          glassType: { it: 'Calice Borgogna', en: 'Burgundy crystal' },
          temp: '12°C',
          notes: {
            it: 'Viti a piede franco coltivate su ripidi muretti a secco a picco sul Tirreno. Salinità iodata intensa, erbe di macchia e zeste di cedro.',
            en: 'Ungrafted vines clinging to granite sea cliffs. High-definition maritime iodine, dry scrub, and wild citrus.'
          }
        },
        {
          course: { it: 'Primo & Brace', en: 'First Course & Coals' },
          dish: { it: 'Pici senesi trafilati a bronzo con ragù bianco d’anatra e buccia d’arancia', en: 'Bronze-drawn Pici with white duck ragù and bitter orange zest' },
          wine: 'Ciliegiolo di Maremma Vecchie Vigne',
          producer: 'Sassotondo (Sovana)',
          vintage: '2019',
          glassType: { it: 'Calice Ballon', en: 'Large balloon glass' },
          temp: '16°C',
          notes: {
            it: 'Suoli vulcanici di tufo di Sovana. Frutti rossi selvatici polposi, pepe nero macinato e una freschezza scorrevole ideale per la selvaggina da piuma.',
            en: 'From volcanic tufa soils. Ripe wild cherries, crushed peppercorn, and a lively vibrancy tailored for duck.'
          }
        },
        {
          course: { it: 'Piatto d’Autore Principale', en: 'Signature Main Course' },
          dish: { it: 'Diaframma di Chianina affumicato alle erbe con fondo di midollo', en: 'Herb-smoked Chianina cut with roasted marrow reduction and embers' },
          wine: 'Syrah di Cortona Cru',
          producer: 'Stefano Amerighi',
          vintage: '2018',
          glassType: { it: 'Calice ampio Syrah Zalto', en: 'Broad Syrah stemware' },
          temp: '17°C',
          notes: {
            it: 'Pigiatura coi piedi, fermentazione spontanea in cemento, nessuna chiarifica. Speziatura nobilissima, oliva nera e profondità carnale.',
            en: 'Foot-trodden in cement vats, unfiltered. Black olive tapenade, cracked white pepper, and profound savory grip.'
          }
        },
        {
          course: { it: 'Epilogo di Bosco', en: 'Forest Epilogue' },
          dish: { it: 'Mousse di castagna del Mugello, cenere di rosmarino e gelato al latte di capra', en: 'Mugello chestnut mousse, rosemary ash, and raw goat milk ice cream' },
          wine: 'Aleatico Passito dell’Elba DOCG',
          producer: 'Acquabona',
          vintage: '2020',
          glassType: { it: 'Calice piccolo da passito', en: 'Dessert wine tulip' },
          temp: '14°C',
          notes: {
            it: 'Appassimento all’aria marina dell’Elba. Rosa damascena, amarena sciroppata e note erbacee che bilanciano la ricchezza della castagna.',
            en: 'Dried in sea breezes. Damask rose petals, dark wild cherry, and herbal hints that frame the chestnut richness.'
          }
        }
      ]
    },
    analcolico: {
      title: { it: 'Percorso Alchimia Botanica & Fermentazioni (Zero Proof)', en: 'Artisan Botanical Alchemy & Zero Proof Flight' },
      subtitle: { it: '4 estrazioni a freddo, kombucha d’olivo e decotti preparati ogni mattina nella dispensa di Palazzo Serlupi', en: '4 cold extractions, olive leaf kombucha, and herbal decoctions crafted daily in-house' },
      price: '[prezzo da confermare — es. € 38]',
      glasses: [
        {
          course: { it: 'Apertura Vegetale', en: 'Vegetal Prelude' },
          dish: { it: 'Radici toscane arrostite con emulsione d’erbe amare', en: 'Roasted Tuscan heirloom roots with bitter field herb emulsion' },
          wine: 'Infuso di Rosmarino Selvatico e Mela Cotogna Fermentata',
          producer: 'Dispensa di Palazzo Serlupi',
          vintage: 'Lotto della Settimana',
          glassType: { it: 'Calice Riedel da vino bianco', en: 'White wine crystal' },
          temp: '9°C',
          notes: {
            it: 'Fermentazione lattica di mele cotogne toscane e macerazione a freddo di rosmarino. Acidità viva che risveglia le papille gustative.',
            en: 'Lacto-fermented quince with cold-macerated wild rosemary. Crisp, salivating acidity.'
          }
        },
        {
          course: { it: 'Primo & Sfoglia', en: 'Handmade Pasta' },
          dish: { it: 'Tortelli di patate del Mugello e tartufo bianco di San Miniato', en: 'Mugello potato tortelli with freshly shaved San Miniato white truffle' },
          wine: 'Kombucha di Foglie d’Olivo Frantoiano e Scorza d’Arancia Amara',
          producer: 'Dispensa di Palazzo Serlupi',
          vintage: '21 giorni di fermentazione',
          glassType: { it: 'Calice ampio da Pinot', en: 'Generous Pinot glass' },
          temp: '11°C',
          notes: {
            it: 'Ossidazione controllata delle foglie d’olivo di collina. Tannini vegetali fini e agrumato amaro che sostengono la cremosità del burro e del tartufo.',
            en: 'Controlled oxidation of hillside olive leaves. Gentle natural tannins that cradle butter and truffle richness.'
          }
        },
        {
          course: { it: 'Piatto della Brace', en: 'Ember-Charred Course' },
          dish: { it: 'Cipolla di Certaldo cotta sotto la cenere con fondo ristretto di fieno', en: 'Certaldo red onion roasted in embers with condensed hay jus' },
          wine: 'Decotto di Radici di Bardana, Ginepro Toscano e Caramello di Fieno',
          producer: 'Dispensa di Palazzo Serlupi',
          vintage: 'Estratto lento 12 ore',
          glassType: { it: 'Bicchiere Old Fashioned in cristallo spesso', en: 'Heavy crystal tumbler' },
          temp: '14°C',
          notes: {
            it: 'Profondo, legnoso, con sentori balsamici di bosco appenninico e la morbidezza calda del fieno tostato di maggio.',
            en: 'Deep, wooded, with resinous mountain juniper and the caramelized warmth of May meadow hay.'
          }
        },
        {
          course: { it: 'Dolce Chiusura', en: 'Sweet Closing' },
          dish: { it: 'Millefoglie croccante al miele d’erica e polline fresco', en: 'Crisp pastry layered with heather blossom honey and wild pollen' },
          wine: 'Idrolato di Fiori di Sambuco dell’Arno e Succo di Mela Rustica',
          producer: 'Dispensa di Palazzo Serlupi',
          vintage: 'Distillazione in corrente di vapore',
          glassType: { it: 'Coppa da dessert in cristallo', en: 'Crystal coupe' },
          temp: '8°C',
          notes: {
            it: 'Distillazione delicata senza alcool dei fiori freschi primaverili. Florealità pura, freschezza e nessuna stucchevolezza zuccherina.',
            en: 'Gentle zero-proof steam extraction of wild riverbank elderflower. Floral innocence and crisp apple refreshment.'
          }
        }
      ]
    }
  };

  const currentPairing = pairingPaths[activePairingPath];

  const filteredWines = WINE_LIST_SAMPLE.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.producer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.notes[lang].toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (regionFilter === 'chianti') return w.name.includes('Chianti') || w.region.includes('Chianti');
    if (regionFilter === 'montalcino') return w.name.includes('Brunello') || w.region.includes('Montalcino');
    if (regionFilter === 'bianchi') return w.name.includes('Trebbiano') || w.name.includes('Vernaccia') || w.name.includes('Ansonica');
    if (regionFilter === 'bolgheri') return w.name.includes('Bolgheri') || w.region.includes('Costa') || w.region.includes('Giglio');
    if (regionFilter === 'bollicine') return w.name.includes('Classico') || w.region.includes('Franciacorta');

    return true;
  });

  return (
    <section
      id="cantina"
      className={`py-24 md:py-32 border-b scroll-mt-12 transition-colors duration-500 ${
        isEvening
          ? 'bg-[#181716] border-white/10 text-[#F5F2EB]'
          : 'bg-[#F5F2EB]/40 border-[#1E1D1B]/10 text-[#1E1D1B]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-3">
            {t('kicker.cellar')}
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight ${isEvening ? 'text-white' : 'text-[#1E1D1B]'}`}>
            {lang === 'it' ? 'La Cantina e i Custodi della Vigna' : 'The Cellar & Guardians of the Vine'}
          </h2>
          <div className="w-12 h-[1px] bg-[#A57143] my-6" />
          <p className={`text-base sm:text-lg font-light leading-relaxed ${isEvening ? 'text-[#EFECE6]/80' : 'text-[#1E1D1B]/80'}`}>
            {lang === 'it'
              ? 'Nelle fondamenta di Palazzo Serlupi riposano oltre 380 etichette selezionate con pazienza. Privilegiamo vignaioli artigiani, vitigni toscani autoctoni, fermentazioni spontanee e una visione della cantina che dialoga con la cucina senza timori né eccessi.'
              : 'Within the masonry vaults of Palazzo Serlupi rest over 380 thoughtfully chosen labels. We champion artisan vignerons, native Tuscan cultivars, wild fermentations, and a cellar philosophy that dialogues seamlessly with the kitchen.'}
          </p>
        </div>

        {/* Sommelier & Cellar Atmosphere Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1E1D1B] text-[#FBF9F5] p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="lg:col-span-7 space-y-5 z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold">
              {SOMMELIER_INFO.role[lang]}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              {SOMMELIER_INFO.name}
            </h3>
            <blockquote className="font-serif italic text-lg sm:text-xl text-[#EFECE6]/90 border-l border-[#A57143] pl-4 py-1">
              {SOMMELIER_INFO.philosophy[lang]}
            </blockquote>
            <p className="text-xs sm:text-sm text-[#EFECE6]/80 font-light leading-relaxed">
              {SOMMELIER_INFO.bio[lang]}
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border border-white/10 z-10">
            <img
              src="/src/assets/images/wine_cellar_palazzo_1790846144588.jpg"
              alt="La cantina storica con scaffalature in ferro e bottiglie d'annata"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.05]"
            />
          </div>
        </div>

        {/* 3 Pillars Grid: Wine Flights, By the Glass, Non-Alcoholic */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 1. Tasting Flights */}
          <div className="p-6 bg-white/80 border border-[#1E1D1B]/10 space-y-4">
            <div className="flex items-center gap-2 text-[#2C3E35] text-xs uppercase tracking-wider font-semibold">
              <Compass className="w-4 h-4 text-[#A57143]" />
              <span>{t('cellar.tastingsTitle')}</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E1D1B]">
              {lang === 'it' ? 'Percorsi Guidati dal Sommelier' : 'Curated Sommelier Flights'}
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-[#1E1D1B]/80 font-light pt-2">
              <div className="pb-3 border-b border-[#1E1D1B]/10">
                <div className="flex justify-between font-medium text-[#1E1D1B] mb-1">
                  <span>{lang === 'it' ? 'Percorso Territorio Toscano (4 calici)' : 'Tuscan Terroir Flight (4 glasses)'}</span>
                  <span className="font-mono text-[#2C3E35]">[prezzo da confermare — es. € 60]</span>
                </div>
                <p className="text-[11px] text-[#1E1D1B]/60">
                  {lang === 'it'
                    ? 'Un viaggio dal Chianti Classico alle marne di Montalcino fino ai rari bianchi della costa.'
                    : 'A journey from high Chianti Classico to Montalcino marl and coastal white gems.'}
                </p>
              </div>

              <div className="pb-3 border-b border-[#1E1D1B]/10">
                <div className="flex justify-between font-medium text-[#1E1D1B] mb-1">
                  <span>{lang === 'it' ? 'Percorso Grandi Riserve & Rari (6 calici)' : 'Grand Reserves & Rarities (6 glasses)'}</span>
                  <span className="font-mono text-[#2C3E35]">[prezzo da confermare — es. € 110]</span>
                </div>
                <p className="text-[11px] text-[#1E1D1B]/60">
                  {lang === 'it'
                    ? 'Vecchie annate conservate nella nostra cantina e cru europei di straordinaria purezza.'
                    : 'Aged vintages cellared at Palazzo Serlupi alongside pristine European crus.'}
                </p>
              </div>
            </div>
          </div>

          {/* 2. Non-Alcoholic Botanical Creations */}
          <div className="p-6 bg-white/80 border border-[#1E1D1B]/10 space-y-4">
            <div className="flex items-center gap-2 text-[#2C3E35] text-xs uppercase tracking-wider font-semibold">
              <Droplets className="w-4 h-4 text-[#A57143]" />
              <span>{t('cellar.nonAlcTitle')}</span>
            </div>
            <h4 className="font-serif text-xl text-[#1E1D1B]">
              {lang === 'it' ? 'Fermentazioni Botaniche d’Autore' : 'Artisan Botanical Fermentations'}
            </h4>
            <div className="space-y-3 pt-2">
              {NON_ALCOHOLIC_PAIRINGS.map((na) => (
                <div key={na.id} className="pb-3 border-b border-[#1E1D1B]/10 text-xs">
                  <div className="flex justify-between font-medium text-[#1E1D1B] mb-0.5">
                    <span>{na.name[lang]}</span>
                    <span className="font-mono text-[#2C3E35]">{na.pricePlaceholder}</span>
                  </div>
                  <p className="text-[11px] text-[#1E1D1B]/65 font-light">
                    {na.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. By the Glass philosophy */}
          <div className="p-6 bg-[#2C3E35] text-[#FBF9F5] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#EFECE6]/80 text-xs uppercase tracking-wider font-semibold">
                <Wine className="w-4 h-4 text-[#A57143]" />
                <span>{lang === 'it' ? 'La Filosofia del Calice' : 'By the Glass Philosophy'}</span>
              </div>
              <h4 className="font-serif text-xl text-white">
                {lang === 'it' ? 'La libertà di scegliere a ogni portata' : 'Freedom to choose with each course'}
              </h4>
              <p className="text-xs text-[#EFECE6]/80 font-light leading-relaxed">
                {lang === 'it'
                  ? 'Ogni giorno apriamo bottiglie rare grazie a sistemi di mescita a gas inerte Coravin, garantendo l’integrità di ogni singolo sorso. Chiedete al sommelier la lavagna delle etichette del giorno.'
                  : 'Every day we uncork rare vintages with inert argon preservation systems, safeguarding absolute purity in every glass. Inquire with our sommelier for daily unlisted cellar gems.'}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] text-[#A57143] block uppercase tracking-wider font-medium">
                {lang === 'it' ? 'Oltre 380 etichette in carta' : '380+ cellar labels available'}
              </span>
              <span className="text-xs text-[#EFECE6]/70 mt-1 block">
                {lang === 'it' ? 'Carta completa consultabile al tavolo' : 'Full cellar ledger available at table'}
              </span>
            </div>
          </div>
        </div>

        {/* Sommelier Pairing Journey Explorer */}
        <div className={`p-8 sm:p-12 border mb-16 transition-colors duration-300 ${
          isEvening ? 'bg-[#22211F] border-white/10' : 'bg-white/95 border-[#1E1D1B]/10 shadow-xs'
        }`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b border-[#1E1D1B]/10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A57143] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'it' ? 'Simulatore di Abbinamento al Calice' : 'Interactive Sommelier Pairing Explorer'}</span>
              </div>
              <h3 className={`font-serif text-2xl sm:text-3xl ${isEvening ? 'text-white' : 'text-[#1E1D1B]'}`}>
                {lang === 'it' ? 'I Percorsi Curati da Marco Valeri' : 'Curated Tasting Journeys by Marco Valeri'}
              </h3>
              <p className={`text-xs sm:text-sm font-light mt-1 ${isEvening ? 'text-[#EFECE6]/70' : 'text-[#1E1D1B]/70'}`}>
                {lang === 'it'
                  ? 'Seleziona uno dei tre percorsi per scoprire l’evoluzione dei calici, le temperature e il dialogo con ogni portata del menu degustazione.'
                  : 'Select a flight to explore the wine progression, glassware, serving temperatures, and culinary synergy with each course.'}
              </p>
            </div>

            {/* Flight Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'classico', label: lang === 'it' ? '1. Classico Toscano' : '1. Classic Tuscan' },
                { id: 'rari', label: lang === 'it' ? '2. Terroir Eroici & Anfore' : '2. Heroic & Amphora' },
                { id: 'analcolico', label: lang === 'it' ? '3. Alchimia Zero-Proof' : '3. Zero-Proof Alchemy' },
              ].map((path) => (
                <button
                  key={path.id}
                  onClick={() => setActivePairingPath(path.id as any)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase font-semibold transition-all ${
                    activePairingPath === path.id
                      ? 'bg-[#2C3E35] text-[#FBF9F5] shadow-xs'
                      : isEvening
                      ? 'bg-[#181716] text-[#EFECE6]/80 hover:bg-white/10'
                      : 'bg-[#F5F2EB] text-[#1E1D1B]/70 hover:bg-[#EFECE6] hover:text-[#1E1D1B]'
                  }`}
                >
                  {path.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Flight Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#A57143]/10 border border-[#A57143]/20 mb-8">
            <div>
              <h4 className={`font-serif text-lg sm:text-xl font-medium ${isEvening ? 'text-white' : 'text-[#1E1D1B]'}`}>
                {currentPairing.title[lang]}
              </h4>
              <p className={`text-xs mt-0.5 ${isEvening ? 'text-[#EFECE6]/80' : 'text-[#1E1D1B]/80'}`}>
                {currentPairing.subtitle[lang]}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[11px] uppercase tracking-wider text-[#A57143] font-semibold block">
                {lang === 'it' ? 'Supplemento Degustazione' : 'Tasting Pairing Add-on'}
              </span>
              <span className="font-mono text-sm font-semibold text-[#2C3E35] dark:text-[#A57143]">
                {currentPairing.price}
              </span>
            </div>
          </div>

          {/* Glasses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPairing.glasses.map((g, idx) => (
              <div
                key={idx}
                className={`p-5 border transition-colors ${
                  isEvening ? 'bg-[#1C1B19] border-white/10' : 'bg-[#FBF9F5] border-[#1E1D1B]/10'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-[#A57143] mb-1">
                  <span>{g.course[lang]}</span>
                  <span className="font-mono text-xs">{g.temp}</span>
                </div>

                <h5 className={`font-serif text-lg font-medium mb-1 ${isEvening ? 'text-white' : 'text-[#1E1D1B]'}`}>
                  {g.wine}
                </h5>

                <div className="flex flex-wrap items-center gap-2 text-xs text-[#1E1D1B]/70 mb-3">
                  <span className={`font-medium ${isEvening ? 'text-[#EFECE6]' : 'text-[#1E1D1B]'}`}>
                    {g.producer}
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="font-mono text-[11px] opacity-80">{g.vintage}</span>
                  <span className="opacity-40">•</span>
                  <span className="italic text-[11px] text-[#A57143]">{g.glassType[lang]}</span>
                </div>

                <div className={`p-3 text-xs mb-3 border-l-2 border-[#2C3E35] ${
                  isEvening ? 'bg-[#22211F] text-[#EFECE6]/90' : 'bg-white text-[#1E1D1B]/90'
                }`}>
                  <span className="text-[10px] uppercase tracking-widest text-[#A57143] font-semibold block mb-0.5">
                    {lang === 'it' ? 'Piatto d’Autore Abbinato:' : 'Paired Signature Dish:'}
                  </span>
                  <p className="font-serif italic text-[13px]">{g.dish[lang]}</p>
                </div>

                <p className={`text-xs font-light leading-relaxed ${isEvening ? 'text-[#EFECE6]/70' : 'text-[#1E1D1B]/70'}`}>
                  {g.notes[lang]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1E1D1B]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className={`font-light ${isEvening ? 'text-[#EFECE6]/70' : 'text-[#1E1D1B]/70'}`}>
              {lang === 'it'
                ? '* Tutti i calici vengono serviti a temperatura certificata e ossigenati al momento mediante decanter in vetro soffiato.'
                : '* All wines are served at certified temperature and decanted tableside using mouth-blown crystal.'}
            </span>
            <a
              href="#prenotazioni"
              className="px-5 py-2 bg-[#2C3E35] text-white uppercase tracking-wider text-[11px] font-semibold hover:bg-[#1E1D1B] transition-colors shrink-0"
            >
              {lang === 'it' ? 'Richiedi con la prenotazione' : 'Request with reservation'}
            </a>
          </div>
        </div>

        {/* Interactive Wine Ledger with Search & Terroir Filters */}
        <div className={`border p-6 sm:p-8 transition-colors ${
          isEvening ? 'bg-[#22211F] border-white/10' : 'bg-white/90 border-[#1E1D1B]/10'
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-[#1E1D1B]/10 gap-4">
            <div>
              <h4 className={`font-serif text-xl sm:text-2xl ${isEvening ? 'text-white' : 'text-[#1E1D1B]'}`}>
                {t('cellar.byGlassTitle')}
              </h4>
              <span className="text-xs text-[#A57143] font-medium uppercase tracking-wider mt-0.5 block">
                {lang === 'it' ? 'Motore di ricerca carta dei vini' : 'Cellar search & filter engine'}
              </span>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1E1D1B]/50" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'it' ? 'Cerca vino, produttore o vitigno...' : 'Search wine, vigneron or region...'}
                className={`w-full pl-9 pr-3 py-2 text-xs border focus:outline-hidden focus:border-[#2C3E35] ${
                  isEvening
                    ? 'bg-[#181716] border-white/15 text-white placeholder-white/40'
                    : 'bg-[#F5F2EB] border-[#1E1D1B]/15 text-[#1E1D1B]'
                }`}
              />
            </div>
          </div>

          {/* Terroir Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6 pb-4 border-b border-[#1E1D1B]/10 text-xs">
            <span className={`text-[11px] uppercase tracking-wider font-medium mr-2 flex items-center gap-1 ${
              isEvening ? 'text-[#EFECE6]/60' : 'text-[#1E1D1B]/60'
            }`}>
              <Filter className="w-3 h-3 text-[#A57143]" />
              <span>{lang === 'it' ? 'Terroir:' : 'Terroir:'}</span>
            </span>

            {[
              { id: 'all', label: lang === 'it' ? 'Tutti i Territori' : 'All Regions' },
              { id: 'chianti', label: 'Chianti Classico' },
              { id: 'montalcino', label: 'Montalcino' },
              { id: 'bianchi', label: lang === 'it' ? 'Bianchi & Macerati' : 'Whites & Amphora' },
              { id: 'bolgheri', label: lang === 'it' ? 'Costa & Isole' : 'Coast & Islands' },
              { id: 'bollicine', label: 'Bollicine d’Autore' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setRegionFilter(tab.id as any)}
                className={`px-3 py-1 text-[11px] uppercase tracking-wider font-medium transition-colors ${
                  regionFilter === tab.id
                    ? 'bg-[#2C3E35] text-[#FBF9F5]'
                    : isEvening
                    ? 'bg-[#181716] text-[#EFECE6]/70 hover:bg-white/10 hover:text-white'
                    : 'bg-[#F5F2EB] text-[#1E1D1B]/70 hover:bg-[#EFECE6] hover:text-[#1E1D1B]'
                }`}
              >
                {tab.label}
              </button>
            ))}

            {(searchTerm || regionFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setRegionFilter('all');
                }}
                className="text-[11px] text-[#A57143] underline hover:text-[#1E1D1B] ml-auto"
              >
                {lang === 'it' ? 'Azzera filtri' : 'Reset filters'}
              </button>
            )}
          </div>

          {/* Wine Items Display */}
          <div className="divide-y divide-[#1E1D1B]/10">
            {filteredWines.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#1E1D1B]/60">
                {lang === 'it' ? 'Nessuna etichetta corrisponde ai criteri di ricerca.' : 'No cellar entries match the current search.'}
              </div>
            ) : (
              filteredWines.map((wine) => (
                <div key={wine.id} className="py-4 flex flex-col md:flex-row md:items-baseline justify-between gap-3">
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className={`font-serif text-base font-medium ${isEvening ? 'text-white' : 'text-[#1E1D1B]'}`}>
                        {wine.name}
                      </span>
                      <span className={`text-xs font-light ${isEvening ? 'text-[#EFECE6]/60' : 'text-[#1E1D1B]/60'}`}>
                        — {wine.producer} ({wine.region})
                      </span>
                    </div>
                    <p className={`text-xs font-light mt-1 ${isEvening ? 'text-[#EFECE6]/70' : 'text-[#1E1D1B]/70'}`}>
                      {wine.notes[lang]}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono tabular-nums shrink-0 self-start md:self-auto">
                    <span className={isEvening ? 'text-[#EFECE6]/60' : 'text-[#1E1D1B]/60'}>{wine.vintagePlaceholder}</span>
                    <span className={`px-2.5 py-1 font-semibold border ${
                      isEvening
                        ? 'bg-[#181716] text-[#A57143] border-white/10'
                        : 'bg-[#F5F2EB] text-[#2C3E35] border-[#1E1D1B]/10'
                    }`}>
                      Calice: {wine.glassPricePlaceholder}
                    </span>
                    <span className={`hidden sm:inline ${isEvening ? 'text-[#EFECE6]/70' : 'text-[#1E1D1B]/70'}`}>
                      Bottiglia: {wine.bottlePricePlaceholder}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

