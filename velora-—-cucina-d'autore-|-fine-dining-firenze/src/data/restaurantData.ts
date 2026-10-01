import { MenuCategory, WineItem, SpaceItem, RawIngredient, Article } from '../types';

export const RESTAURANT_INFO = {
  name: 'VELORA',
  descriptor: "Cucina d'Autore",
  address: 'Palazzo Serlupi, Via delle Viole 18, Firenze',
  city: 'Firenze',
  postalCode: '50123',
  country: 'Italia',
  phonePlaceholder: '[+39 055 000 0000]',
  emailPlaceholder: 'gorrieridaniele@gmail.com',
  targetEmail: 'gorrieridaniele@gmail.com',
  pressEmailPlaceholder: 'gorrieridaniele@gmail.com',
  eventsEmailPlaceholder: 'gorrieridaniele@gmail.com',
  hoursLunchPlaceholder: '[Mar - Dom: 12:30 — 14:30]',
  hoursDinnerPlaceholder: '[Mar - Dom: 19:30 — 22:30]',
  closedDayPlaceholder: '[Lunedì intera giornata chiuso]',
  socialInstagramPlaceholder: '[@velora_firenze]',
  motto: {
    it: 'La memoria della terra, in una forma nuova.',
    en: 'The memory of the land, in a renewed form.'
  },
  submotto: {
    it: 'Cucina toscana stagionale reinterpretata con sensibilità contemporanea a Palazzo Serlupi.',
    en: 'Seasonal Tuscan cuisine reinterpreted with contemporary sensibility at Palazzo Serlupi.'
  }
};

export const SPACES_DATA: SpaceItem[] = [
  {
    id: 'sala-volte',
    name: {
      it: 'La Sala delle Volte',
      en: 'The Vaulted Hall'
    },
    subtitle: {
      it: 'Intonaco a calce naturale, pietra serena e luce morbida',
      en: 'Natural lime plaster, pietra serena and soft diffused light'
    },
    description: {
      it: 'Il cuore di VELORA. Le antiche campate del Quattrocento dialogano con tavoli in noce massello non trattato e sedute in lino grezzo. Uno spazio pensato per accogliere senza fretta, dove ogni conversazione trova la propria intimità.',
      en: 'The heart of VELORA. 15th-century architectural vaults engage with untreated solid walnut tables and raw linen seating. A space designed to welcome at an unhurried pace, where every conversation finds its intimacy.'
    },
    capacity: {
      it: 'Fino a 28 coperti disposti con ampio respiro',
      en: 'Up to 28 guests spaced with generous privacy'
    },
    atmosphere: {
      it: 'Luce calda soffusa, silenzio acustico studiato, tessuti naturali',
      en: 'Soft warm illumination, acoustic comfort, natural textiles'
    },
    image: '/src/assets/images/hero_dining_room_1790846106219.jpg'
  },
  {
    id: 'tavolo-chef',
    name: {
      it: 'Il Tavolo dello Chef',
      en: "The Chef's Table"
    },
    subtitle: {
      it: 'A tu per tu con la brigata e la materia',
      en: 'Face to face with the kitchen brigade and raw ingredients'
    },
    description: {
      it: 'Un unico banco ricavato da un tronco di noce toscano e pietra di cava, posizionato davanti al pass a vista. Sei sedute dedicate a chi desidera assistere alla precisione dei gesti e dialogare con Elena Vieri durante il servizio.',
      en: 'A single counter carved from Tuscan walnut and quarry stone, set before the open kitchen pass. Six seats dedicated to those who wish to observe the precision of each gesture and converse with Elena Vieri throughout service.'
    },
    capacity: {
      it: 'Massimo 6 persone (su prenotazione anticipata)',
      en: 'Maximum 6 guests (advance reservation required)'
    },
    atmosphere: {
      it: 'Concentrazione artigianale, vista sulla fiamma e sul piatto che prende vita',
      en: 'Artisanal focus, direct view of the hearth and dishes taking shape'
    },
    image: '/src/assets/images/chef_hands_plating_1790846656429.jpg'
  },
  {
    id: 'salottino-serlupi',
    name: {
      it: 'Il Salottino Serlupi',
      en: 'The Serlupi Private Salon'
    },
    subtitle: {
      it: 'Riservatezza assoluta per incontri e ricorrenze private',
      en: 'Absolute seclusion for private gatherings and celebrations'
    },
    description: {
      it: 'Un ambiente raccolto all’interno dell’ala ovest del palazzo, con soffitto a cassettoni restaurato e camino originale. Dotato di servizio di sala e sommelier dedicati, ideale per cene istituzionali o anniversari intimi.',
      en: 'A secluded sanctuary within the western wing of the palazzo, featuring a restored coffered ceiling and original stone fireplace. Served by dedicated waitstaff and sommelier, ideal for diplomatic dinners or private celebrations.'
    },
    capacity: {
      it: 'Da 4 a 12 ospiti',
      en: 'From 4 to 12 guests'
    },
    atmosphere: {
      it: 'Eleganza discreta, totale riservatezza acustica e visiva',
      en: 'Understated elegance, total acoustic and visual privacy'
    },
    image: '/src/assets/images/private_salon_serlupi_1790846667778.jpg'
  },
  {
    id: 'chiostro-dehors',
    name: {
      it: 'Il Chiostro d’Inverno e Giardino Segreto',
      en: 'The Winter Cloister & Secret Garden'
    },
    subtitle: {
      it: 'Un’oasi silenziosa di pietra e gelsomini nel centro storico',
      en: 'A quiet haven of stone and jasmine in the historic center'
    },
    description: {
      it: 'Nascosto dietro le mura di Palazzo Serlupi, il nostro cortile interno conserva piante aromatiche toscane, allori secolari e pavimentazione in cotto fatto a mano. Climatizzato nei mesi freddi e aperto al cielo stellato nelle sere estive.',
      en: 'Concealed behind the ancient walls of Palazzo Serlupi, our internal courtyard nurtures Tuscan aromatic botanicals, century-old laurels, and hand-formed terracotta pavers. Climate-protected in cooler seasons and open to the evening sky in summer.'
    },
    capacity: {
      it: '16 coperti estivi / 12 coperti invernali',
      en: '16 summer covers / 12 winter covers'
    },
    atmosphere: {
      it: 'Profumo di erbe aromatiche, pietra fresca e cielo aperto',
      en: 'Scent of botanicals, cool stone and open sky'
    },
    image: '/src/assets/images/cloister_garden_florence_1790846644552.jpg'
  }
];

export const RAW_INGREDIENTS: RawIngredient[] = [
  {
    id: 'carciofo',
    ingredient: {
      it: 'Carciofo Violetto di San Miniato',
      en: 'Violet Artichoke of San Miniato'
    },
    origin: {
      it: 'Coltivato da un micro-produttore nelle piane argillose dell’Arno',
      en: 'Grown by a micro-farmer in the clay plains of the Arno'
    },
    technique: {
      it: 'Cottura sottovuoto a bassa temperatura in olio al rosmarino selvatico, brustolatura rapida alla brace e velo croccante di foglie tostate',
      en: 'Gentle low-temperature immersion in wild rosemary oil, quick embers charring, and crisp roasted bract veil'
    },
    dish: {
      it: 'Carciofo intero, brodo di erbe amare e spuma di pecorino di grotta',
      en: 'Whole violet artichoke, bitter herb broth and cave-aged pecorino foam'
    },
    description: {
      it: 'Raccogliamo i carciofi all’alba quando i petali interni conservano ancora la rugiada. L’amaro naturale viene addolcito da una lenta concentrazione degli zuccheri.',
      en: 'Harvested at dawn when the inner leaves retain dew. The natural bitterness is tempered through gentle concentration of sugars.'
    }
  },
  {
    id: 'farro',
    ingredient: {
      it: 'Farro Monococco della Garfagnana IGP',
      en: 'Monococcum Farro of Garfagnana IGP'
    },
    origin: {
      it: 'Mulino a pietra azionato ad acqua nei boschi sopra Castelnuovo',
      en: 'Water-powered stone mill nestled in the forests above Castelnuovo'
    },
    technique: {
      it: 'Tostatura a secco in tegame di ghisa, risottatura lenta in decotto di radici toscane e mantecatura con olio d’oliva novello',
      en: 'Dry skillet toasting in cast iron, slow risotto technique in Tuscan root decoction, finished with freshly pressed olive oil'
    },
    dish: {
      it: 'Farro tostato, estratto di cipolla di Certaldo bruciata e polline selvatico',
      en: 'Toasted farro, charred Certaldo onion reduction and wild bee pollen'
    },
    description: {
      it: 'Un cereale arcaico coltivato da tremila anni. Restituisce una masticabilità profonda e note calde di nocciola e paglia essiccata al sole.',
      en: 'An ancient grain cultivated for three millennia, delivering earthy chewiness with warm undertones of hazelnut and sun-dried straw.'
    }
  },
  {
    id: 'piccione',
    ingredient: {
      it: 'Piccione di Fattoria di Valdarno',
      en: 'Heritage Valdarno Squab'
    },
    origin: {
      it: 'Allevamento all’aperto a terra con alimentazione a granaglie biologiche toscane',
      en: 'Pasture-raised on Tuscan organic grains with natural day-night cycles'
    },
    technique: {
      it: 'Frollatura controllata di 12 giorni, petto scottato su rami di vite e coscetta confit laccata con melata di bosco',
      en: '12-day controlled dry aging, breast seared over grapevine embers, confit leg glazed with forest honeydew'
    },
    dish: {
      it: 'Piccione in due servizi: petto alla brace di vigna e raviolo aperto di frattaglie nobili',
      en: 'Squab in two acts: grapevine-grilled breast and open raviolo of delicate offal'
    },
    description: {
      it: 'Nessuna parte dell’animale viene tralasciata. La carcassa tostate genera il fondo lucido e denso, mentre le interiora diventano un pâté setoso con spezie medievali toscane.',
      en: 'Every cut is honored. Roasted bones yield the lustrous jus, while offal is blended into a silky pâté with historic medieval Tuscan spices.'
    }
  },
  {
    id: 'olio',
    ingredient: {
      it: 'Olio Extravergine Monovarietale di Frantoio',
      en: 'Single-Variety Frantoio Extra Virgin Olive Oil'
    },
    origin: {
      it: 'Oliveti terrazzati a 400 metri su marna calcarea tra Fiesole e Settignano',
      en: 'Terraced olive groves at 400m altitude on limestone marl between Fiesole and Settignano'
    },
    technique: {
      it: 'Raccolta manuale a metà ottobre, frangitura a freddo entro 4 ore a ciclo continuo senza aggiunta d’acqua',
      en: 'Hand-picked in mid-October, cold-extracted within 4 hours in continuous loop with zero added water'
    },
    dish: {
      it: 'Servito puro come apertura con pane al lievito madre macinato a pietra e sale di Volterra',
      en: 'Served pure as opening gesture with heritage sourdough and Volterra mineral salt'
    },
    description: {
      it: 'Pungente, erbaceo, con vivide note di carciofo crudo e mandorla amara. È il filo conduttore che unisce ogni piatto della nostra tavola.',
      en: 'Pungent, grassy, with vivid notes of raw artichoke and green almond. It is the golden thread running through our kitchen.'
    }
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'degustazione-memoria',
    title: {
      it: 'Percorso "Memoria e Orizzonte"',
      en: '"Memory & Horizon" Tasting Journey'
    },
    subtitle: {
      it: '7 passaggi attraverso la memoria gastronomica toscana riletta in chiave essenziale',
      en: '7-course journey exploring Tuscan culinary memory rendered with distilled purity'
    },
    priceInfo: {
      it: '[prezzo da confermare — es. € 145 a persona]',
      en: '[price to be confirmed — e.g. € 145 per person]'
    },
    pairingInfo: {
      it: 'Abbinamento 5 calici curato dal sommelier: [prezzo da confermare — es. € 75] | Percorso analcolico botanico: [prezzo da confermare — es. € 45]',
      en: 'Sommelier 5-wine pairing: [price to be confirmed — e.g. € 75] | Botanical non-alcoholic pairing: [price to be confirmed — e.g. € 45]'
    },
    notes: {
      it: 'Servito per l’intero tavolo. I piatti seguono il ritmo delle stagioni e la disponibilità quotidiana del mercato e dell’orto.',
      en: 'Served for the entire table. Dishes evolve with the season and daily harvests from our partner growers.'
    },
    items: [
      {
        id: 'mem-1',
        name: {
          it: 'Apertura: Acqua di pomodoro invernale, foglia d’alloro e cialda di segale',
          en: 'Prelude: Clarified winter tomato water, bay laurel essence and crisp rye waver'
        },
        description: {
          it: 'Concentrazione a freddo di pomodori toscani conservati in coccio con gocce di distillato di rosmarino.',
          en: 'Cold clarification of preserved Tuscan plum tomatoes with drops of wild rosemary distillate.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Glutine']
      },
      {
        id: 'mem-2',
        name: {
          it: 'Animella di vitello da pascolo, riduzione di mosto cotto e polvere di cappero',
          en: 'Pasture-raised veal sweetbread, concentrated must glaze and wild caper dust'
        },
        description: {
          it: 'Glassata lentamente in padella di ferro, servita su un letto di scarola selvatica appassita al fumo.',
          en: 'Gently glazed in iron skillet over braised wild escarole with delicate wood-smoke.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Latticini']
      },
      {
        id: 'mem-3',
        name: {
          it: 'Bottone di pasta fresca all’uovo ripieno di cibreo e limone salato',
          en: 'Handmade egg pasta bottoni filled with heirloom cibreo and preserved salted lemon'
        },
        description: {
          it: 'Sfoglia sottilissima tirata al mattarello, crema vellutata di rigaglie nobili e brodo limpido di cappone di Morozzo.',
          en: 'Paper-thin pasta rolled by hand, noble giblet emulsion and crystal-clear heritage capon broth.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Glutine', 'Uova', 'Sedano']
      },
      {
        id: 'mem-4',
        name: {
          it: 'Risotto con riso Carnaroli autentico, carciofo violetto e liquirizia di selva',
          en: 'Authentic Carnaroli risotto, violet artichoke textures and wild wood licorice'
        },
        description: {
          it: 'Mantecato all’olio extravergine d’oliva di Fiesole, mantello di carciofo essiccato e polvere di radice di liquirizia.',
          en: 'Creamed with Fiesole extra virgin olive oil, crisp artichoke crisps and wild licorice bark powder.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Latticini', 'Sedano']
      },
      {
        id: 'mem-5',
        name: {
          it: 'Luccio di lago toscano in oliocottura, salsa di finocchio di mare e rapa bianca',
          en: 'Tuscan freshwater pike poached in olive oil, sea rock samphire and turnip veil'
        },
        description: {
          it: 'Pesce d’acqua dolce cotto a 52°C, emulsione iodata di finocchio marino e rapa marinata al miele di spiaggia.',
          en: 'Freshwater fish slowly poached at 52°C, aromatic saline samphire emulsion and honey-cured white turnip.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Pesce']
      },
      {
        id: 'mem-6',
        name: {
          it: 'Piccione di Valdarno alla brace di vite, fegatino al ginepro e scorzonera',
          en: 'Valdarno squab grilled on vine embers, juniper liver parfait and black salsify'
        },
        description: {
          it: 'Doppio servizio: petto rosato al sangue e coscetta croccante glassata con melata toscana.',
          en: 'Two-stage service: medium-rare vine-smoked breast and glazed crispy confit leg with forest honeydew.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Sedano', 'Solfiti']
      },
      {
        id: 'mem-7',
        name: {
          it: 'Neccio moderno: cialda di castagna dell’Amiata, gelato al fieno e caramello d’orzo',
          en: 'Modern Neccio: Monte Amiata chestnut crisp, steeped hay gelato and barley caramel'
        },
        description: {
          it: 'Farina di castagne essiccata nei metati storici, crema di ricotta di pecora fresca e gelato infuso con fieno maggengo.',
          en: 'Stone-dried chestnut flour, fresh sheep milk ricotta and gentle cream infused with May meadow hay.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Latticini', 'Uova', 'Frutta a guscio']
      }
    ]
  },
  {
    id: 'degustazione-radici',
    title: {
      it: 'Percorso "Radici e Stagioni" (Vegetariano)',
      en: '"Roots & Seasons" Tasting Journey (Vegetarian)'
    },
    subtitle: {
      it: '6 portate dedicate al mondo vegetale, ai funghi, alle erbe spontanee e alle fermentazioni',
      en: '6-course botanical journey honoring heirloom vegetables, wild fungi, and ancient fermentations'
    },
    priceInfo: {
      it: '[prezzo da confermare — es. € 125 a persona]',
      en: '[price to be confirmed — e.g. € 125 per person]'
    },
    pairingInfo: {
      it: 'Abbinamento 4 calici territorio o botanici artigianali: [prezzo da confermare — es. € 60]',
      en: 'Curated 4-glass terroir or botanical pairing: [price to be confirmed — e.g. € 60]'
    },
    notes: {
      it: 'Interamente vegetariano. Adattabile per vegani e intolleranze con preavviso alla prenotazione.',
      en: 'Completely vegetarian. Can be adapted for vegans with advance notice upon booking.'
    },
    items: [
      {
        id: 'rad-1',
        name: {
          it: 'Consommé di bucce di verdure arrostite, olio al lentisco e cialda di semi',
          en: 'Roasted vegetable peel consommé, wild mastic oil and ancient seed wafer'
        },
        description: {
          it: 'Filosofia zero sprechi: estrazione lenta di ortaggi invernali cotti su brace viva.',
          en: 'Zero-waste ethos: slow extraction of roasted winter vegetables over live hardwood embers.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        dietary: 'vegan'
      },
      {
        id: 'rad-2',
        name: {
          it: 'Topinambur cotto sotto cenere, salsa fermentata di pere e noci tostate',
          en: 'Ash-roasted sunchoke, lacto-fermented pear reduction and toasted Tuscan walnuts'
        },
        description: {
          it: 'Radice cotta lentamente nella cenere di quercia, consistenza morbida e note terrose affumicate.',
          en: 'Tuscan tuber roasted in oak hearth ash, silky center and smoky earthy tones.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Frutta a guscio'],
        dietary: 'veg'
      },
      {
        id: 'rad-3',
        name: {
          it: 'Tortello di grano antico ripieno di cavolo nero toscano e fonduta di pecorino di Pienza',
          en: 'Heritage flour tortello filled with Tuscan cavolo nero and aged Pienza pecorino fondue'
        },
        description: {
          it: 'Foglie di cavolo invernale scottate con aglio dolce e burro di malga nocciola.',
          en: 'Winter tuscan kale gently wilted with sweet garlic and browned alpine pasture butter.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Glutine', 'Uova', 'Latticini'],
        dietary: 'veg'
      },
      {
        id: 'rad-4',
        name: {
          it: 'Farro monococco mantecato alla crema di radici e polvere di funghi pioppini',
          en: 'Garfagnana monococcum farro creamed with winter root essence and wild mushroom powder'
        },
        description: {
          it: 'Cereale della Garfagnana cotto come un risotto in brodo di sedano rapa e carote antiche.',
          en: 'Ancient Tuscan grain cooked risotto-style in rich celeriac and heirloom carrot broth.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Sedano', 'Glutine'],
        dietary: 'veg'
      },
      {
        id: 'rad-5',
        name: {
          it: 'Sedano rapa glassato al fondo di cipolla bionda, foglie d’alloro e ginepro',
          en: 'Celeriac roasted in caramelized blond onion demi-glace, bay laurel and juniper'
        },
        description: {
          it: 'Il cuore della rapa assume la consistenza e la profondità di un taglio nobile arrosto.',
          en: 'The heart of celeriac develops the unctuous density and savory depth of a prime roast.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Sedano'],
        dietary: 'vegan'
      },
      {
        id: 'rad-6',
        name: {
          it: 'Mela cotogna cotta nel mosto, crumble di farina di mais e gelato al rosmarino',
          en: 'Quince stewed in grape must, stone-ground polenta crumble and fresh rosemary gelato'
        },
        description: {
          it: 'Equilibrio tra l’astringenza della cotogna selvatica e la nota balsamica dell’erba toscana.',
          en: 'Harmonious balance between tart wild quince and the fragrant balsamic warmth of rosemary.'
        },
        pricePlaceholder: '[Incluso nel percorso]',
        allergens: ['Latticini', 'Uova'],
        dietary: 'veg'
      }
    ]
  },
  {
    id: 'a-la-carte',
    title: {
      it: 'Carta delle Stagioni (À la Carte)',
      en: 'Seasonal À la Carte'
    },
    subtitle: {
      it: 'Una composizione libera in tre o quattro portate a scelta dell’ospite',
      en: 'A bespoke selection of three or four courses chosen by the guest'
    },
    priceInfo: {
      it: '[prezzi delle portate indicativi da confermare]',
      en: '[course prices indicative to be confirmed]'
    },
    notes: {
      it: 'Vi invitiamo a comporre un percorso di almeno due portate principali e un dessert per garantire il giusto equilibrio del servizio.',
      en: 'We invite you to compose a journey of at least two savory courses and a dessert for optimal dining harmony.'
    },
    items: [
      {
        id: 'alc-1',
        name: {
          it: 'Tartare di manzo Chianina battuta al coltello, midollo affumicato e nasturzio',
          en: 'Hand-cut Chianina beef tartare, light smoked marrow emulsion and nasturtium'
        },
        description: {
          it: 'Carne proveniente da allevamenti etici della Valdichiana, sale marino integrale e capperi essiccati.',
          en: 'Ethically raised Valdichiana beef, whole grey sea salt and sun-dried capers.'
        },
        pricePlaceholder: '[€ da confermare — es. 32]',
        allergens: ['Uova']
      },
      {
        id: 'alc-2',
        name: {
          it: 'Carciofo violetto di San Miniato cotto sotto vuoto, brodo di erbe e pecorino',
          en: 'Slow-poached San Miniato violet artichoke, bitter meadow broth and aged pecorino'
        },
        description: {
          it: 'Cuore tenerissimo con sfoglie croccanti alla brace e gocce di riduzione d’aceto di mele toscane.',
          en: 'Tender heart with ember-crisped bracts and drops of aged Tuscan apple vinegar.'
        },
        pricePlaceholder: '[€ da confermare — es. 28]',
        allergens: ['Latticini'],
        dietary: 'veg'
      },
      {
        id: 'alc-3',
        name: {
          it: 'Pici tirati a mano al ragù bianco di cortile, timo selvatico e briciole di pane all’aglio dolce',
          en: 'Hand-rolled pici pasta with white poultry ragù, wild thyme and sweet garlic breadcrumbs'
        },
        description: {
          it: 'La tipica pasta senese allungata a mano una ad una, mantecata con carni bianche cotte a fuoco lento.',
          en: 'Traditional hand-pulled Sienese strands, slow-simmered farm poultry and golden toasted crumbs.'
        },
        pricePlaceholder: '[€ da confermare — es. 34]',
        allergens: ['Glutine', 'Sedano']
      },
      {
        id: 'alc-4',
        name: {
          it: 'Tortelli di patate del Mugello in brodo concentrato di gallina faraona e tartufo nero',
          en: 'Mugello potato tortelli in concentrated guinea fowl brodo and shaved black winter truffle'
        },
        description: {
          it: 'Patate rosse schiacciate con noce moscata e parmigiano 36 mesi, racchiuse in sfoglia finissima.',
          en: 'Red-skinned mountain potatoes scented with nutmeg and 36-month Parmigiano in delicate pasta.'
        },
        pricePlaceholder: '[€ da confermare — es. 38]',
        allergens: ['Glutine', 'Uova', 'Latticini', 'Sedano']
      },
      {
        id: 'alc-5',
        name: {
          it: 'Trancio di ombrina pescata all’amo, estratto di cime di rapa e limone bruciato',
          en: 'Line-caught Mediterranean sea umbrina, broccoli rabe extraction and charred lemon essence'
        },
        description: {
          it: 'Pelle croccante alla plancha, polpa umida e salsa amara leggermente piccante con sentori di brace.',
          en: 'Crispy plancha skin, moist pearly flake, bitter winter greens and fragrant blackened citrus.'
        },
        pricePlaceholder: '[€ da confermare — es. 42]',
        allergens: ['Pesce']
      },
      {
        id: 'alc-6',
        name: {
          it: 'Cinghiale da selezione naturale cotto in argilla, ginepro toscano e purea di radici',
          en: 'Free-roaming wild boar cooked in clay pot, wild juniper berries and root puree'
        },
        description: {
          it: 'Cottura lentissima a bassa gradazione con spezie toscane e salsa lucida di vino rosso Sangiovese.',
          en: 'Gentle clay-vessel braise with woodland spices and glossy Sangiovese reduction.'
        },
        pricePlaceholder: '[€ da confermare — es. 44]',
        allergens: ['Sedano', 'Solfiti']
      }
    ]
  },
  {
    id: 'dessert-formaggi',
    title: {
      it: 'I Dessert e I Formaggi di Malga',
      en: 'Desserts & Artisan Cheeses'
    },
    subtitle: {
      it: 'Pasticceria contemporanea a ridotto contenuto di zuccheri e affinamenti toscani',
      en: 'Low-sugar contemporary pastry and rare Tuscan farmstead cheese affineurs'
    },
    priceInfo: {
      it: '[prezzi da confermare — es. dessert € 18 / carrello formaggi € 24]',
      en: '[prices to be confirmed — e.g. dessert € 18 / cheese selection € 24]'
    },
    items: [
      {
        id: 'des-1',
        name: {
          it: 'Cioccolato fondente 72% Criollo, olio extravergine fruttato e sale di Volterra',
          en: '72% Single-origin Criollo chocolate ganache, robust green olive oil and Volterra rock salt'
        },
        description: {
          it: 'Ganache fondente aerata, biscotto morbido al cacao e filo d’olio toscano appena franto.',
          en: 'Aerated dark ganache, soft cocoa biscuit and an unadorned drizzle of fresh autumn olive oil.'
        },
        pricePlaceholder: '[€ da confermare — es. 18]',
        allergens: ['Latticini', 'Uova']
      },
      {
        id: 'des-2',
        name: {
          it: 'Pera cotta nel Vin Santo di Caratello, cremoso alla fava tonka e cialda di noci',
          en: 'Pera cured in heirloom Vin Santo, tonka bean diplomat cream and walnut tuile'
        },
        description: {
          it: 'Pera toscana marinata per tre giorni con spezie dolci e servita con gelato alla cannella naturale.',
          en: 'Slowly poached heirloom pear, aromatic diplomat cream and crisp cinnamon bark wafer.'
        },
        pricePlaceholder: '[€ da confermare — es. 18]',
        allergens: ['Latticini', 'Uova', 'Frutta a guscio', 'Solfiti']
      },
      {
        id: 'des-3',
        name: {
          it: 'Selezione di 5 Pecorini toscani a latte crudo con mostarda d’arance amare e pan brioche',
          en: 'Selection of 5 raw-milk Tuscan pecorino cheeses with bitter orange mostarda and warm brioche'
        },
        description: {
          it: 'Affinati in grotta, sotto foglie di noce e nelle vinacce di Chianti Classico da piccoli casari del Casentino.',
          en: 'Aged in limestone caves, walnut leaves and Chianti pomace by small Casentino shepherds.'
        },
        pricePlaceholder: '[€ da confermare — es. 24]',
        allergens: ['Latticini', 'Glutine']
      }
    ]
  },
  {
    id: 'menu-bambini',
    title: {
      it: 'Proposta Giovani Ospiti (Su Richiesta)',
      en: 'Young Guests Menu (Upon Request)'
    },
    subtitle: {
      it: 'Piatti semplici preparati con le stesse materie prime nobili della cucina principale',
      en: 'Gentle, comforting dishes crafted with the same pristine ingredients as the main kitchen'
    },
    priceInfo: {
      it: '[prezzo da concordare al momento della richiesta — es. € 45]',
      en: '[price upon request — e.g. € 45]'
    },
    notes: {
      it: 'Pensato per i bambini fino a 10 anni. Personalizzabile con lo staff di sala prima del servizio.',
      en: 'Designed for children up to 10 years of age. Easily tailored with our dining room team upon arrival.'
    },
    items: [
      {
        id: 'kid-1',
        name: {
          it: 'Pasta all’uovo fresca fatta in casa con burro di fattoria o pomodoro fresco dolce',
          en: 'Fresh handmade tagliolini with sweet mountain farm butter or gentle heirloom tomato coulis'
        },
        description: {
          it: 'Sfoglia semplice senza sale aggiunto in cottura, condita al momento con formaggio dolce.',
          en: 'Fresh hand-cut noodles gently tossed with pure sweet butter or mild fresh tomato.'
        },
        pricePlaceholder: '[Incluso nel menu bambini]',
        allergens: ['Glutine', 'Uova', 'Latticini']
      },
      {
        id: 'kid-2',
        name: {
          it: 'Filetto di pescato del giorno o vitellina di latte alla piastra con purea di patate del Mugello',
          en: 'Seared fresh fish fillet or tender milk-fed veal paillard with velvety Mugello potato purée'
        },
        description: {
          it: 'Cottura delicata alla griglia, purea vellutata e verdure croccanti al vapore.',
          en: 'Gentle searing, velvety mashed potatoes and crisp sweet steamed carrots.'
        },
        pricePlaceholder: '[Incluso nel menu bambini]',
        allergens: ['Latticini']
      },
      {
        id: 'kid-3',
        name: {
          it: 'Gelato artigianale alla crema di latte con biscotti toscani al burro',
          en: 'Artisan fior di latte sweet milk gelato with delicate Tuscan butter biscuits'
        },
        description: {
          it: 'Fatto ogni mattina con latte fresco delle colline fiorentine.',
          en: 'Churned daily with fresh whole milk from the hills of Florence.'
        },
        pricePlaceholder: '[Incluso nel menu bambini]',
        allergens: ['Latticini', 'Glutine']
      }
    ]
  }
];

export const SOMMELIER_INFO = {
  name: 'Marco Valeri',
  role: {
    it: 'Responsabile di Cantina & Sommelier',
    en: 'Head Sommelier & Cellar Master'
  },
  bio: {
    it: 'Nato tra i vigneti del Chianti, Marco ha dedicato la sua vita alla scoperta di viticoltori custodi di pratiche autentiche. La carta di VELORA riunisce oltre 380 referenze con particolare risalto ai territori toscani, ai vitigni rari e ai percorsi di abbinamento analcolici creati con erbe spontanee.',
    en: 'Raised amidst the vineyards of Chianti, Marco has dedicated his work to uncovering artisan winemakers who preserve native terroir. The VELORA cellar features over 380 selections with a focused spotlight on Tuscan micro-appellations, rare indigenous varieties, and house-crafted botanical pairings.'
  },
  philosophy: {
    it: '“Il vino non deve sovrastare il piatto, ma dialogare con il ritmo della terra da cui entrambi provengono.”',
    en: '“Wine should never dominate the plate, but converse gently with the rhythm of the soil from which both originate.”'
  }
};

export const WINE_LIST_SAMPLE: WineItem[] = [
  {
    id: 'w-1',
    name: 'Chianti Classico Riserva DOCG',
    producer: 'Azienda Agricola Castell’in Villa',
    region: 'Castelnuovo Berardenga, Toscana',
    vintagePlaceholder: '[annata da confermare — es. 2018]',
    glassPricePlaceholder: '[€ da confermare — es. 18]',
    bottlePricePlaceholder: '[€ da confermare — es. 85]',
    notes: {
      it: 'Sangiovese in purezza. Note austere di ciliegia selvatica, tabacco toscano e pietra focaia.',
      en: '100% Sangiovese. Austere nuances of wild sour cherry, Tuscan cigar leaf and crushed flint.'
    }
  },
  {
    id: 'w-2',
    name: 'Brunello di Montalcino DOCG',
    producer: 'Pian dell’Orino',
    region: 'Montalcino, Toscana',
    vintagePlaceholder: '[annata da confermare — es. 2017]',
    glassPricePlaceholder: '[€ da confermare — es. 26]',
    bottlePricePlaceholder: '[€ da confermare — es. 140]',
    notes: {
      it: 'Vigneti condotti in biodinamica. Trama tannica setosa, violetta appassita e finale balsamico persistente.',
      en: 'Biodynamically cultivated. Silken tannins, dried violet florality, and deep balsamic finish.'
    }
  },
  {
    id: 'w-3',
    name: 'Trebbiano Toscano IGT',
    producer: 'Tenuta di Valgiano',
    region: 'Colline Lucchesi, Toscana',
    vintagePlaceholder: '[annata da confermare — es. 2021]',
    glassPricePlaceholder: '[€ da confermare — es. 16]',
    bottlePricePlaceholder: '[€ da confermare — es. 70]',
    notes: {
      it: 'Macerazione breve sulle bucce in anfora di terracotta. Camomilla essiccata, agrume candito e sapidità marina.',
      en: 'Brief skin contact in terracotta amphora. Dried chamomile blossoms, candied citrus and saline minerality.'
    }
  },
  {
    id: 'w-4',
    name: 'Vernaccia di San Gimignano Riserva DOCG',
    producer: 'Montenidoli',
    region: 'San Gimignano, Toscana',
    vintagePlaceholder: '[annata da confermare — es. 2020]',
    glassPricePlaceholder: '[€ da confermare — es. 15]',
    bottlePricePlaceholder: '[€ da confermare — es. 65]',
    notes: {
      it: 'Viti piantate su antichi sedimenti marini. Mandorla fresca, resina di pino e grande longevità al palato.',
      en: 'Vines rooted in prehistoric marine fossils. Fresh green almond, pine resin and remarkable longevity.'
    }
  },
  {
    id: 'w-5',
    name: 'Metodo Classico Dosaggio Zero',
    producer: 'Barone Pizzini',
    region: 'Franciacorta, Lombardia',
    vintagePlaceholder: '[annata da confermare — es. 2019]',
    glassPricePlaceholder: '[€ da confermare — es. 19]',
    bottlePricePlaceholder: '[€ da confermare — es. 90]',
    notes: {
      it: 'Chardonnay e Pinot Nero da agricoltura biologica. Bollicina finissima, crosta di pane e freschezza gessosa.',
      en: 'Organic Chardonnay and Pinot Noir. Micro-fine effervescence, fresh brioche crust and chalky acidity.'
    }
  },
  {
    id: 'w-6',
    name: 'Bolgheri Superiore DOC',
    producer: 'Tenuta Guado al Melo',
    region: 'Bolgheri, Costa Toscana',
    vintagePlaceholder: '[annata da confermare — es. 2019]',
    glassPricePlaceholder: '[€ da confermare — es. 22]',
    bottlePricePlaceholder: '[€ da confermare — es. 115]',
    notes: {
      it: 'Cabernet Franc e Merlot su alluvioni marine. Macchia mediterranea, mirto, ribes nero e tannini vellutati.',
      en: 'Cabernet Franc and Merlot on marine terraces. Mediterranean maquis, wild myrtle, cassis and cashmere tannins.'
    }
  },
  {
    id: 'w-7',
    name: 'Ansonica Costa dell’Argentario DOC',
    producer: 'Bibi Graetz — Testamatta',
    region: 'Isola del Giglio, Toscana',
    vintagePlaceholder: '[annata da confermare — es. 2022]',
    glassPricePlaceholder: '[€ da confermare — es. 20]',
    bottlePricePlaceholder: '[€ da confermare — es. 95]',
    notes: {
      it: 'Viti centenarie su terrazzamenti granitici a picco sul mare. Miele di corbezzolo, zafferano e spiccata iodatura.',
      en: 'Centenarian vines on sea-cliff granite terraces. Arbutus honey, wild saffron and pronounced saline tension.'
    }
  },
  {
    id: 'w-8',
    name: 'Syrah di Cortona DOC',
    producer: 'Stefano Amerighi',
    region: 'Cortona, Toscana',
    vintagePlaceholder: '[annata da confermare — es. 2020]',
    glassPricePlaceholder: '[€ da confermare — es. 18]',
    bottlePricePlaceholder: '[€ da confermare — es. 85]',
    notes: {
      it: 'Vinificazione biodinamica con pigiatura coi piedi e affinamento in cemento. Pepe nero tostato e mora selvatica.',
      en: 'Foot-trodden biodynamic Syrah aged in concrete vats. Toasted cracked black peppercorn and wild bramble.'
    }
  }
];

export const NON_ALCOHOLIC_PAIRINGS = [
  {
    id: 'na-1',
    name: {
      it: 'Infuso di Rosmarino Selvatico e Mela Cotogna Fermentata',
      en: 'Wild Rosemary & Lacto-Fermented Quince Infusion'
    },
    description: {
      it: 'Equilibrio acido e balsamico pensato per accompagnare gli antipasti vegetali e le carni bianche delicate.',
      en: 'Crisp acidity and pine notes designed to complement earthy vegetable starters and gentle poultry.'
    },
    pricePlaceholder: '[€ da confermare — es. 12]'
  },
  {
    id: 'na-2',
    name: {
      it: 'Kombucha di Foglie d’Olivo Frantoiano e Scorza d’Arancia Amara',
      en: 'Frantoio Olive Leaf & Bitter Orange Peel Kombucha'
    },
    description: {
      it: 'Fermentazione naturale di 21 giorni. Note tanniche fini che richiamano la complessità di un vino rosso giovane.',
      en: '21-day wild fermentation. Gentle phenolic tannins reminiscent of a vibrant light red wine.'
    },
    pricePlaceholder: '[€ da confermare — es. 14]'
  },
  {
    id: 'na-3',
    name: {
      it: 'Decotto di Radici di Bardana, Ginepro e Caramello di Fieno',
      en: 'Decoction of Burdock Root, Tuscan Juniper & Hay Caramel'
    },
    description: {
      it: 'Profondo, legnoso e caldo. L’abbinamento ideale per i piatti alla brace e il piccione arrosto.',
      en: 'Earthy, wooded, and comforting. The natural partner for ember-roasted meats and game courses.'
    },
    pricePlaceholder: '[€ da confermare — es. 14]'
  }
];

export const DIARY_ARTICLES: Article[] = [
  {
    id: 'carciofo-san-miniato',
    title: {
      it: 'Il tempo del carciofo violetto: viaggio tra le argille di San Miniato',
      en: 'The Season of the Violet Artichoke: Journey into the Clay of San Miniato'
    },
    category: {
      it: 'Stagionalità & Produttori',
      en: 'Seasonality & Growers'
    },
    date: '[Data da confermare — es. 14 Marzo 2026]',
    readTime: {
      it: '4 min di lettura',
      en: '4 min read'
    },
    excerpt: {
      it: 'Nelle anse del fiume Arno, quando l’inverno cede il passo alle prime arie miti, spuntano i primi capolini compatti del carciofo violetto.',
      en: 'Along the serpentine bends of the river Arno, as winter yields to mild air, the compact violet artichoke emerges from damp clay.'
    },
    content: {
      it: [
        'La sveglia suona alle 5:30 quando il vapore del fiume avvolge ancora i campi di San Miniato. Con Elena Vieri scendiamo nell’appezzamento di Pietro, custode di sementi autoctone che non hanno mai conosciuto concimi chimici.',
        'Il carciofo violetto di questa terra possiede una fibra serrata e un profilo amaro nobilissimo, privo di punte metalliche. In cucina lavoriamo l’ortaggio nella sua interezza: le foglie esterne più coriacee vengono tostate al forno per estrarne un brodo denso e aromatico; il cuore tenero viene cotto a bassa temperatura in olio d’oliva novello, per poi ricevere una breve fiammata alla brace di rovere.',
        '“Non c’è bisogno di coprire la voce della terra,” spiega Elena mentre pulisce il gambo con un piccolo coltello ricurvo. “Il nostro compito è solo togliere il superfluo e lasciar parlare l’acqua, il sale e il calore.”'
      ],
      en: [
        'The alarm sounds at 5:30 AM while dense mist still hovers over the fields of San Miniato. With Chef Elena Vieri, we step into the plots tended by Pietro, guardian of native seeds untouched by chemical fertilizers.',
        'The violet artichoke of this valley possesses dense fibers and a deeply noble bitter register, devoid of metallic notes. In our kitchen, every facet of the plant is revered: outer leaves are oven-toasted to produce an aromatic broth; the tender heart is gently submerged in olive oil before meeting glowing oak coals.',
        '“There is no need to drown out the voice of the land,” explains Elena as she trims the stem with a curved paring knife. “Our sole duty is to strip away the superfluous and allow water, salt, and heat to articulate.”'
      ]
    },
    image: '/src/assets/images/dish_seasonal_creation_1790846133456.jpg'
  },
  {
    id: 'fermentazioni-selvagge',
    title: {
      it: 'L’arte della fermentazione silenziosa nella nostra dispensa',
      en: 'The Art of Silent Fermentation in Our Palazzo Cellar'
    },
    category: {
      it: 'Tecnica & Ricerca',
      en: 'Technique & Research'
    },
    date: '[Data da confermare — es. 28 Febbraio 2026]',
    readTime: {
      it: '5 min di lettura',
      en: '5 min read'
    },
    excerpt: {
      it: 'Nei sotterranei di Palazzo Serlupi, grandi orci in ceramica toscana custodiscono le trasformazioni lente di koji, miso di legumi e kombucha.',
      en: 'In the stone cellars of Palazzo Serlupi, traditional terracotta jars house the slow transformations of koji, bean miso and botanicals.'
    },
    content: {
      it: [
        'La dispensa di VELORA è uno spazio silenzioso dove il tempo agisce come secondo cuoco. Abbiamo sostituito l’uso massiccio di sale raffinato e addensanti con acidità naturali e paste fermentate ricavate da legumi toscani.',
        'Utilizziamo il ceppo antico di Aspergillus oryzae su farro della Garfagnana per sviluppare un koji nostrano. Dopo 48 ore di controllo minuzioso di umidità e temperatura, i chicchi si ricoprono di una soffice peluria bianca che profuma di funghi freschi e albicocca.',
        'Questo approccio ci consente di ridurre gli sprechi a zero: i gambi di cavolo, le bucce di mela e gli scarti di potatura delle erbe aromatiche diventano idrolati, aceti vivi e fondi vegetali dalla concentrazione ineguagliabile.'
      ],
      en: [
        'The pantry at VELORA is a tranquil sanctuary where time serves as a second chef. We have replaced table salt and synthetic thickeners with living acidities and fermented pastes crafted from indigenous Tuscan legumes.',
        'We inoculate Garfagnana farro with traditional Aspergillus oryzae cultures to nurture our own koji. After 48 hours of humidity balancing, grains develop a snowy bloom that smells of fresh chanterelles and stone fruit.',
        'This technique anchors our zero-waste discipline: vegetable trimmings, wild herb stems, and fruit peelings are transmuted into living vinegars, botanical hydrolats, and savory reductions of unmatched concentration.'
      ]
    },
    image: '/src/assets/images/fermentation_terracotta_jars_1790847017442.jpg'
  },
  {
    id: 'vignaioli-chianti',
    title: {
      it: 'Tra le marne di Radda: l’anima minerale del Sangiovese',
      en: 'Among the Marls of Radda: The Mineral Soul of Sangiovese'
    },
    category: {
      it: 'Cantina & Terroir',
      en: 'Cellar & Terroir'
    },
    date: '[Data da confermare — es. 10 Febbraio 2026]',
    readTime: {
      it: '3 min di lettura',
      en: '3 min read'
    },
    excerpt: {
      it: 'Il nostro sommelier Marco Valeri racconta la visita invernale tra i vigneti d’alta quota, dove l’alberello toscano affonda le radici nella roccia alberese.',
      en: 'Head Sommelier Marco Valeri recounts his winter visit to high-altitude vineyards where bush vines cling to stony alberese limestone.'
    },
    content: {
      it: [
        'Salire verso Radda in Chianti a gennaio significa respirare aria tagliente e toccare con mano la pietra calcarea che conferisce al Sangiovese la sua proverbiale tensione gustativa.',
        'Insieme ai vignaioli artigiani abbiamo degustato dai fusti di rovere austriaco le annate ancora giovani. Ciò che cerchiamo per la carta dei vini di VELORA non sono i corpi muscolari o le concentrazioni estreme, ma la trasparenza: vogliamo che il bicchiere restituisca la luce fredda del mattino e il profumo di terra bagnata.',
        'Questi vini non accompagnano semplicemente il piatto: ne completano la struttura aromatica senza mai soffocarne la delicatezza.'
      ],
      en: [
        'Ascending toward Radda in Chianti in mid-winter means breathing crisp air and touching the limestone shale that endows Sangiovese with its electric vitality.',
        'Alongside independent vignerons, we sampled young vintages straight from neutral Austrian oak casks. What we seek for VELORA’s list is not muscular alcohol or extraction, but utter transparency: we want the glass to echo morning mountain mist and damp pine earth.',
        'These wines do not merely accompany a plate; they complete its architectural profile without masking its subtleties.'
      ]
    },
    image: '/src/assets/images/tuscan_vineyard_chianti_1790846990973.jpg'
  },
  {
    id: 'ceramica-toscana',
    title: {
      it: 'Pietra, argilla e lino: l’artigianato che accoglie la nostra cucina',
      en: 'Stone, Terracotta & Linen: The Crafts Welcoming Our Kitchen'
    },
    category: {
      it: 'Architettura & Dettagli',
      en: 'Architecture & Details'
    },
    date: '[Data da confermare — es. 20 Gennaio 2026]',
    readTime: {
      it: '4 min di lettura',
      en: '4 min read'
    },
    excerpt: {
      it: 'Ogni piatto in ceramica, posata in acciaio brunito e tovagliolo in lino grezzo di VELORA nasce da botteghe artigiane toscane.',
      en: 'Every ceramic plate, burnished steel flatware, and raw linen textile at VELORA is born in small Tuscan family workshops.'
    },
    content: {
      it: [
        'Quando abbiamo progettato la sala a Palazzo Serlupi, sapevamo che nessun dettaglio industriale avrebbe potuto convivere con le volte quattrocentesche.',
        'I nostri piatti sono stati foggiati al tornio a Montelupo Fiorentino utilizzando terre locali arricchite con cenere di legna. Ognuno di essi presenta minime variazioni impercettibili nella curvatura, testimonianza vivente della mano che lo ha modellato.',
        'I tavoli in noce toscano non sono coperti da tovaglie lucide: lasciamo che il polpastrello tocchi la venatura viva del legno, scaldato dalla luce di candele di cera d’api biologica.'
      ],
      en: [
        'When conceiving the dining rooms of Palazzo Serlupi, we understood that no mass-manufactured artifact could harmonize with our 15th-century stone vaults.',
        'Our custom plates were wheel-thrown in Montelupo Fiorentino using local clays enriched with natural wood ash glaze. Each dish displays subtle textural nuances, quiet proof of human hands at work.',
        'Our walnut tables bear no heavy synthetic cloths: we welcome fingertips to rest against raw grain, warmed only by natural beeswax tapers.'
      ]
    },
    image: '/src/assets/images/mise_en_place_detail_1790846686616.jpg'
  },
  {
    id: 'pasta-fresca-arte',
    title: {
      it: 'La piega del tortello: geometria e memoria nella pasta all’uovo',
      en: 'The Fold of the Tortello: Geometry & Heritage in Fresh Egg Pasta'
    },
    category: {
      it: 'Artigianalità & Bottega',
      en: 'Craft & Kitchen Workshop'
    },
    date: '[Data da confermare — es. 12 Gennaio 2026]',
    readTime: {
      it: '3 min di lettura',
      en: '3 min read'
    },
    excerpt: {
      it: 'Ogni mattina alle otto, il legno di pioppo del banco di cucina accoglie il rito silenzioso della sfoglia tirata con il mattarello di faggio.',
      en: 'Every morning at eight, the poplar worktable welcomes the rhythmic silence of pasta sheets hand-rolled with beechwood pins.'
    },
    content: {
      it: [
        'Non usiamo laminatrici elettriche. La sfoglia lavorata con il mattarello conserva microscopiche porosità superficiali che nessun rullo metallico può replicare.',
        'La farina di grani antichi toscani macinata a pietra e le uova fresche da galline livornesi al pascolo conferiscono all’impasto un colore dorato profondo e una tenacità al morso inconfondibile.',
        'Chiudere un tortello o tirare un picio senese non è un gesto automatico: richiede la sensibilità delle dita per percepire il grado di umidità dell’aria fiorentina di quella specifica mattina.'
      ],
      en: [
        'We deliberately avoid motorized sheeting machines. Fresh pasta rolled across wood maintains microscopic porosity that metal rollers cannot produce.',
        'Stone-ground heritage Tuscan grains and farm-fresh eggs from pastured Livorno hens bestow deep golden radiance and an unmistakable al dente resilience.',
        'Pleating a tortello or hand-pulling a Sienese picio is never mechanical: it demands tactile awareness to feel the subtle morning humidity of Florence.'
      ]
    },
    image: '/src/assets/images/handmade_pasta_artisan_1790846676843.jpg'
  },
  {
    id: 'apicoltura-erica-bosco',
    title: {
      it: 'L’oro amaro del bosco: l’apicoltura nomade e il miele d’erica',
      en: 'The Forest’s Bitter Gold: Transhumant Beekeeping & Heather Honey'
    },
    category: {
      it: 'Botanica & Paesaggio',
      en: 'Botanicals & Landscape'
    },
    date: '[Data da confermare — es. 5 Gennaio 2026]',
    readTime: {
      it: '4 min di lettura',
      en: '4 min read'
    },
    excerpt: {
      it: 'Sulle colline metallifere toscane, arnie in legno di castagno seguono la fioritura violacea dell’erica arborea per produrre un nettare dal carattere resinoso e balsamico.',
      en: 'Across the Tuscan mineral hills, chestnut beehives follow wild heather blossoms to yield an intense, resinous amber nectar.'
    },
    content: {
      it: [
        'L’apicoltura che rifornisce VELORA non è stanziale. Segue il passo antico della transumanza delle api: in primavera le arnie salgono verso i castagneti appenninici, per poi ridiscendere nelle macchie d’erica prima dell’inverno.',
        'Il miele d’erica arborea che Elena Vieri impiega nei fondi di selvaggina e nei dessert al formaggio è opaco, denso, con note marcate di cuoio, fumo dolce e resina di pino. È la memoria viva del sottobosco toscano.',
        '“Non usiamo zuccheri raffinati per dolcificare,” sottolinea Elena. “Ogni dolcezza a Palazzo Serlupi deve portare con sé il sapore di un fiore, di un albero o del tempo che le api hanno impiegato per raccoglierlo.”'
      ],
      en: [
        'The beekeeping that supplies VELORA is strictly transhumant. It honors the ancient rhythm of nomadic apiaries: climbing to mountain chestnut groves in spring, then descending to heather scrub before frost.',
        'The wild heather honey Elena Vieri employs in game reductions and savory cheese desserts is dense and deeply amber, echoing notes of saddle leather, sweet smoke, and pine resin.',
        '“We do not use refined sweeteners,” notes Elena. “Every touch of sweetness at Palazzo Serlupi must carry the identity of a blossom, a tree, and the patience of the bees that gathered it.”'
      ]
    },
    image: '/src/assets/images/diary_wild_honey_bees_1790850172862.jpg'
  },
  {
    id: 'tartufo-san-miniato',
    title: {
      it: 'Nella nebbia con il cane da cerca: il silenzio del tartufo bianco',
      en: 'Into the River Mists: The Silent Quest for the White Truffle'
    },
    category: {
      it: 'Terroir & Tradizione',
      en: 'Terroir & Foraging'
    },
    date: '[Data da confermare — es. 18 Dicembre 2025]',
    readTime: {
      it: '5 min di lettura',
      en: '5 min read'
    },
    excerpt: {
      it: 'All’alba nei boschi di fondovalle, il tartufo bianco toscano si concede solo a chi sa camminare senza rumore e rispettare le radici secolari dei pioppi e delle querce.',
      en: 'At dawn in the river valleys, the Tuscan white truffle reveals itself only to those who tread silently beneath ancient poplars and mossy oaks.'
    },
    content: {
      it: [
        'C’è un patto non scritto tra il tartufaio, il cane e il bosco. Non si usano vanghe pesanti; si usa solo il vanghetto triangolare per aprire una ferita minima nella terra umida, subito ricomposta dopo aver estratto la pepita d’oro bianco.',
        'Il tartufo di San Miniato possiede una fragranza allilica pulitissima, con sfumature di formaggio fermentato, aglio nobile e terriccio di sottobosco. A tavola lo serviamo a lamelle sottili a crudo sopra preparazioni tiepide, mai surriscaldato per non disperdere i composti aromatici volatili.',
        'Questo legame con i cercatori del territorio è il nucleo di VELORA: l’ingrediente arriva in cucina poche ore dopo essere stato dissotterrato dalla terra d’Arno.'
      ],
      en: [
        'There is an unwritten covenant between forager, hound, and forest. Heavy tools are forbidden; only a miniature triangular trowel is used to open a modest incision in wet earth, carefully smoothed back over.',
        'The white truffle of San Miniato possesses an ethereal fragrance with nuances of aged pasture curd, noble allium, and woodland humus. We shave it paper-thin tableside over warm dishes to let aromatics soar.',
        'This direct communion with regional foragers defines VELORA: the tuber reaches our stone pass just hours after leaving its clay sanctuary.'
      ]
    },
    image: '/src/assets/images/diary_white_truffle_wood_1790850184588.jpg'
  },
  {
    id: 'pane-lievito-madre-antico',
    title: {
      it: 'La coltura viva del 1932: il lievito madre e il pane quotidiano di Palazzo Serlupi',
      en: 'The 1932 Living Culture: Sourdough Starter & Heritage Bread at Palazzo Serlupi'
    },
    category: {
      it: 'Panificazione & Rito',
      en: 'Baking & Ritual'
    },
    date: '[Data da confermare — es. 2 Dicembre 2025]',
    readTime: {
      it: '4 min di lettura',
      en: '4 min read'
    },
    excerpt: {
      it: 'Il nostro pane nasce da una pasta madre rinnovata ogni giorno da novant’anni e farine toscane macinate a pietra nel mulino a legna di Firenzuola.',
      en: 'Our table loaf is born from a sourdough starter refreshed daily for nine decades, paired with stone-milled flours from an ancient watermill in Firenzuola.'
    },
    content: {
      it: [
        'Il primo gesto che accoglie l’ospite al tavolo di VELORA non è una portata complessa, ma una pagnotta calda di grano antico Verna e un piattino di olio extravergine nuovo.',
        'La nostra pasta madre è stata affidata a Elena Vieri dalla famiglia Serlupi: una colonia di fermenti lattici e lieviti naturali custodita in un vaso di vetro ambrato a temperatura controllata. La lunga fermentazione a 16 gradi per 36 ore sviluppa un’alveolatura irregolare e una crosta spessa e bruna che scricchiola al taglio.',
        'È il sapore della Toscana contadina: senza sale, per rispettare la tradizione toscana e fare da spalla armoniosa alle acidità e ai brodi dei piatti d’autore.'
      ],
      en: [
        'The first gesture welcoming a diner to VELORA is not an intricate course, but a warm, crusty loaf of ancient Verna wheat and a shallow dish of emerald green olive oil.',
        'Our sourdough starter was passed down to Elena Vieri by the Serlupi household: a living culture nurtured in an amber glass jar. A 36-hour slow fermentation at 16°C fosters irregular air pockets and a deep caramelized crust.',
        'It is the authentic taste of rural Tuscany: baked without salt according to historic custom, serving as a noble foil to the pure broths and sauces of the dining room.'
      ]
    },
    image: '/src/assets/images/diary_sourdough_mother_1790850196747.jpg'
  }
];

export const MICRO_SEASONS_DATA = [
  {
    id: 's-1',
    seasonGroup: { it: 'Fine Inverno / Inizio Primavera', en: 'Late Winter / Early Spring' },
    period: { it: 'Febbraio — Inizio Marzo', en: 'February — Early March' },
    title: { it: 'Disgelo & Germogli Silvestri', en: 'First Thaw & Wild Shoots' },
    climate: { it: 'Aria frizzante lungo l’Arno, terra umida', en: 'Crisp air along the Arno, damp clay soil' },
    image: '/src/assets/images/season_micro_1_artichoke_1790849481080.jpg',
    ingredients: {
      it: ['Carciofo violetto di San Miniato', 'Radice di scorzonera', 'Broccolo fiorentino tardivo', 'Rosmarino in fiore'],
      en: ['San Miniato violet artichoke', 'Black salsify root', 'Late Florentine winter broccoli', 'Flowering rosemary']
    },
    dishHighlight: {
      it: 'Carciofo intero alla brace, brodo di bucce tostate e gocce di aceto di mele cotogne',
      en: 'Ember-charred violet artichoke, roasted peel broth and wild quince vinegar'
    }
  },
  {
    id: 's-2',
    seasonGroup: { it: 'Piena Primavera', en: 'Mid Spring' },
    period: { it: 'Fine Marzo — Aprile', en: 'Late March — April' },
    title: { it: 'Risveglio di Primavera', en: 'The Spring Awakening' },
    climate: { it: 'Luce morbida del mattino, fioritura dei prugnoli', en: 'Soft morning radiance, sloe blossom in Chianti' },
    image: '/src/assets/images/season_micro_2_wild_asparagus_1790849493507.jpg',
    ingredients: {
      it: ['Asparagi selvatici di macchia', 'Fave novelle dolci', 'Pecorino di grotta fresco', 'Pimpinella ed erbe amare'],
      en: ['Wild forest asparagus', 'Sweet baby broad beans', 'Fresh cave-aged sheep curd', 'Salad burnet & field herbs']
    },
    dishHighlight: {
      it: 'Tortello ripieno di fave e pecorino con emulsione di erbe spontanee di campo',
      en: 'Handmade tortello of tender beans and fresh pecorino with meadow herb emulsion'
    }
  },
  {
    id: 's-3',
    seasonGroup: { it: 'Tarda Primavera', en: 'Late Spring' },
    period: { it: 'Maggio — Inizio Giugno', en: 'May — Early June' },
    title: { it: 'Il Tempo dei Fieni e delle Rose', en: 'Hay Meadow & Wild Rose' },
    climate: { it: 'Primi caldi miti, profumo di fieno maggengo', en: 'Gentle warmth, heady scent of May meadow hay' },
    image: '/src/assets/images/season_micro_3_may_hay_peas_1790849506152.jpg',
    ingredients: {
      it: ['Piselli novelli dolci', 'Fiori di zucca', 'Fieno di pascolo per infusioni', 'Ciliegie selvatiche di Lari'],
      en: ['Sweet petit pois', 'Courgette blossoms', 'Mountain meadow hay for infusions', 'Wild Lari cherries']
    },
    dishHighlight: {
      it: 'Riso Carnaroli cotto in decotto di fieno maggengo, piselli crudi e polvere di camomilla',
      en: 'Carnaroli rice cooked in steeped May hay broth, crushed sweet peas and chamomile pollen'
    }
  },
  {
    id: 's-4',
    seasonGroup: { it: 'Inizio Estate', en: 'Early Summer' },
    period: { it: 'Metà Giugno — Luglio', en: 'Mid-June — July' },
    title: { it: 'Sole Alto & Orti Fiorentini', en: 'High Sun & Florentine Kitchen Gardens' },
    climate: { it: 'Cielo terso, cicale nel chiostro, pietra calda', en: 'Azure skies, cicadas in the cloister, warm stone' },
    image: '/src/assets/images/season_micro_4_costoluto_tomato_1790849518093.jpg',
    ingredients: {
      it: ['Pomodoro costoluto fiorentino', 'Basilico greco e genovese', 'Melanzana violetta', 'Pesche noci di collina'],
      en: ['Florentine costoluto ribbed tomatoes', 'Greek & Genovese basil', 'Violet eggplant', 'Hillside nectarines']
    },
    dishHighlight: {
      it: 'Acqua chiarificata di pomodoro costoluto, cialda di segale e olio al basilico selvatico',
      en: 'Clarified heirloom tomato water, rye crisp and aromatic wild basil oil'
    }
  },
  {
    id: 's-5',
    seasonGroup: { it: 'Piena Estate', en: 'Mid Summer' },
    period: { it: 'Agosto — Inizio Settembre', en: 'August — Early September' },
    title: { it: 'Maturazione & Fichi di Carmignano', en: 'Sun-Drenched Ripening & Carmignano Figs' },
    climate: { it: 'Brezza serale fresca dopo il calore del meriggio', en: 'Cool evening breeze following midday furnace' },
    image: '/src/assets/images/season_micro_5_carmignano_figs_1790849533373.jpg',
    ingredients: {
      it: ['Fichi dottati di Carmignano', 'Piccione di Valdarno', 'Finocchietto selvatico marino', 'Mandorle verdi'],
      en: ['Carmignano dottato honey figs', 'Valdarno heritage squab', 'Wild sea fennel', 'Green almonds']
    },
    dishHighlight: {
      it: 'Petto di piccione scottato su rami di vite con riduzione di fichi e finocchietto',
      en: 'Grapevine-seared squab breast with glazed wild fig reduction and aromatic fennel'
    }
  },
  {
    id: 's-6',
    seasonGroup: { it: 'Inizio Autunno', en: 'Early Autumn' },
    period: { it: 'Fine Settembre — Ottobre', en: 'Late September — October' },
    title: { it: 'Vendemmia & Primi Funghi di Bosco', en: 'Grape Harvest & First Forest Forage' },
    climate: { it: 'Odore di mosto e vinaccia nei tini di legno', en: 'Fragrance of fermenting must in wooden vats' },
    image: '/src/assets/images/season_micro_6_sangiovese_porcini_1790849544941.jpg',
    ingredients: {
      it: ['Uva Sangiovese da selezione', 'Funghi porcini dell’Amiata', 'Zucca berrettina', 'Noci fresche'],
      en: ['Hand-picked Sangiovese berries', 'Mount Amiata porcini mushrooms', 'Heirloom winter squash', 'Fresh walnuts']
    },
    dishHighlight: {
      it: 'Farro tostato mantecato con funghi porcini a crudo e gocce di mosto d’uva cotto',
      en: 'Toasted Garfagnana farro, shaved raw porcini mushrooms and concentrated grape must'
    }
  },
  {
    id: 's-7',
    seasonGroup: { it: 'Tardo Autunno', en: 'Late Autumn' },
    period: { it: 'Novembre — Dicembre', en: 'November — December' },
    title: { it: 'L’Olio Nuovo & Le Castagne', en: 'The New Green Oil & Sweet Chestnut' },
    climate: { it: 'Nebbie sottili al mattino, fumo dei camini', en: 'Pale morning mists, woodsmoke from palazzo chimneys' },
    image: '/src/assets/images/season_micro_7_new_oil_chestnut_1790849554505.jpg',
    ingredients: {
      it: ['Olio extravergine d’oliva novello', 'Farina di castagne dei metati', 'Tartufo nero pregiato toscano', 'Cavolo nero'],
      en: ['Fresh green pressed extra virgin olive oil', 'Dried mountain chestnut flour', 'Tuscan black truffle', 'Cavolo nero kale']
    },
    dishHighlight: {
      it: 'Neccio di castagne dell’Amiata con ricotta di pecora a latte crudo e filo d’olio novello pungente',
      en: 'Amiata chestnut wafer with raw-milk sheep ricotta and pungent new green olive oil'
    }
  },
  {
    id: 's-8',
    seasonGroup: { it: 'Pieno Inverno', en: 'Mid Winter' },
    period: { it: 'Gennaio — Febbraio', en: 'January — February' },
    title: { it: 'Radici nel Fuoco & La Brace Lenta', en: 'Root Cellar, Fireplace & Slow Embers' },
    climate: { it: 'Inverno raccolto, intimità del camino acceso', en: 'Intimate winter stillness, open stone hearth' },
    image: '/src/assets/images/season_micro_8_hearth_root_game_1790849567409.jpg',
    ingredients: {
      it: ['Sedano rapa sotto cenere', 'Topinambur toscano', 'Cipolla dorata di Certaldo', 'Selvaggina da selezione etica'],
      en: ['Ash-roasted celeriac', 'Tuscan sunchoke', 'Certaldo sweet golden onion', 'Ethically culled wild game']
    },
    dishHighlight: {
      it: 'Cinghiale cotto in argilla nel camino con bacche di ginepro selvatico e purea di radici',
      en: 'Clay-pot wild boar braised in hearth embers with woodland juniper and winter root purée'
    }
  }
];

export const FLORENCE_CONCIERGE_DATA = [
  {
    id: 'concierge-bardini',
    category: { it: 'Passeggiata d’Arte Silenziosa', en: 'Quiet Artistic Stroll' },
    title: { it: 'Il Giardino Bardini all’Ora Dorata', en: 'The Bardini Gardens at Golden Hour' },
    timeToVisit: { it: 'Ore 18:00 (Prima della cena a Palazzo Serlupi)', en: '6:00 PM (Prior to dinner at Palazzo Serlupi)' },
    distance: { it: '12 minuti a piedi attraverso il Ponte alle Grazie', en: '12-minute walk across Ponte alle Grazie' },
    description: {
      it: 'Lontano dalle folle degli Uffizi, le terrazze del Giardino Bardini offrono la vista più limpida e solitaria sulla cupola del Brunelleschi, incorniciata da pergolati di glicine e ulivi centenari.',
      en: 'Far from crowded corridors, the elevated terraces of Bardini offer the most contemplative panorama of Brunelleschi’s dome, framed by century-old olive groves and quiet stone steps.'
    },
    curatorTip: {
      it: 'Consiglio di Elena: Salite dalla scalinata barocca e fermatevi sulla panchina di pietra sotto il belvedere.',
      en: 'Elena’s Tip: Ascend via the baroque stairs and pause on the stone bench beneath the belvedere.'
    },
    image: '/src/assets/images/florence_bardini_view_1790847409948.jpg'
  },
  {
    id: 'concierge-bottega',
    category: { it: 'Artigianato & Mestiere Storico', en: 'Heritage Atelier & Living Craft' },
    title: { it: 'La Bottega della Carta Marmorizzata e Rilegatura', en: 'Hand-Marbled Paper & Bookbinding Atelier' },
    timeToVisit: { it: 'Pomeriggio (15:30 — 18:30)', en: 'Afternoon (3:30 PM — 6:30 PM)' },
    distance: { it: '5 minuti a piedi da Palazzo Serlupi', en: '5-minute walk from Palazzo Serlupi' },
    description: {
      it: 'Una delle ultime botteghe fiorentine dove i pigmenti naturali vengono pettinati a mano a pelo d’acqua secondo la tecnica del Seicento per creare la carta usata nei menu di VELORA.',
      en: 'One of the last Florentine sanctuaries where mineral pigments are floated and combed by hand across water using 17th-century craft techniques to form custom paper.'
    },
    curatorTip: {
      it: 'Consiglio di Marco: Chiedete del maestro rilegatore Giulio per ammirare le pelli toscane conciate al vegetale.',
      en: 'Marco’s Tip: Ask master bookbinder Giulio to inspect vegetable-tanned Tuscan leather skins.'
    },
    image: '/src/assets/images/bottega_leather_paper_1790847421752.jpg'
  }
];

export const ARTISANS_DATA = [
  {
    id: 'art-ceramica',
    name: 'Bottega Ceramiche Montelupo',
    craft: {
      it: 'Ceramica al tornio con smalti naturali a cenere di legna',
      en: 'Wheel-thrown stoneware with natural wood-ash glazes'
    },
    location: 'Montelupo Fiorentino, FI',
    description: {
      it: 'Ogni piatto di VELORA viene tornito a mano uno ad uno con argille locali toscane. La cottura ad alta temperatura crea superfici materiche imperfette e tattili.',
      en: 'Every plate at VELORA is wheel-turned individually using indigenous Tuscan clay, fired at high temperature for tactile mineral depth.'
    },
    image: '/src/assets/images/artisan_potter_hands_1790846968918.jpg'
  },
  {
    id: 'art-ferro',
    name: 'Coltelleria Artigiana di Scarperia',
    craft: {
      it: 'Coltelli forgiati a mano con manico in radica d’olivo toscano',
      en: 'Hand-forged dining knives with Tuscan olive wood handles'
    },
    location: 'Scarperia nel Mugello, FI',
    description: {
      it: 'Lame affilate su pietra naturale secondo l’antica corporazione dei coltellinai toscani. Nessuna serigrafia o metallo cromato: solo acciaio al carbonio e legno vivo.',
      en: 'Blades whetted on natural river stone according to traditional Guild guilds, featuring hand-carved Tuscan olivewood grips.'
    },
    image: '/src/assets/images/artisan_cutler_forge_1790846978981.jpg'
  },
  {
    id: 'art-lino',
    name: 'Tessiture Manuali di Anghiari',
    craft: {
      it: 'Tovagliato in lino grezzo e canapa naturale a telaio a navetta',
      en: 'Shuttle-loom woven raw linen and heritage hemp table runners'
    },
    location: 'Valtiberina, AR',
    description: {
      it: 'Tessuti biologici non candeggiati che conservano il colore biondo della fibra vegetale e una piacevole ruvidità al tatto.',
      en: 'Unbleached biological textiles retaining the warm ecru tint of raw fiber and an unhurried, reassuring drape.'
    },
    image: '/src/assets/images/handloom_linen_weaving_1790847032049.jpg'
  },
  {
    id: 'art-pietra',
    name: 'Scalpellini di Firenzuola',
    craft: {
      it: 'Lavorazione della Pietra Serena da cava storica',
      en: 'Carved Pietra Serena sandstone from historical quarries'
    },
    location: 'Appennino Tosco-Emiliano, FI',
    description: {
      it: 'I basamenti e i banchi di servizio di Palazzo Serlupi nascono dal taglio manuale della pietra grigia che caratterizza l’architettura fiorentina dal Brunelleschi a oggi.',
      en: 'The dining counters and service plinths of Palazzo Serlupi are chiseled by hand from the gray stone gracing Florentine monuments.'
    },
    image: '/src/assets/images/stone_mason_pietra_serena_1790847001903.jpg'
  }
];

export const GIFT_EXPERIENCES = [
  {
    id: 'gift-memoria',
    title: {
      it: 'Esperienza "Memoria e Orizzonte" per Due',
      en: '"Memory & Horizon" Experience for Two'
    },
    subtitle: {
      it: 'Il percorso degustazione completo di 7 portate della Chef Elena Vieri con abbinamento vini del Sommelier',
      en: 'The complete 7-course tasting journey by Chef Elena Vieri with Sommelier wine pairing'
    },
    includes: {
      it: [
        'Aperitivo di benvenuto nel Chiostro o Salotto Serlupi',
        'Menu degustazione 7 passaggi per due ospiti',
        'Abbinamento 5 calici curato dal sommelier',
        'Acqua minerale di sorgente toscana e caffè d’autore',
        'Carta regalo personalizzata su carta cotone sigillata a ceralacca'
      ],
      en: [
        'Welcome glass in the Cloister or Serlupi Salon',
        '7-course tasting journey for two guests',
        'Curated 5-glass sommelier wine flight',
        'Tuscan spring water and artisan single-origin coffee',
        'Personalized dedication voucher on cotton card with wax seal'
      ]
    },
    pricePlaceholder: '[voucher da confermare — es. € 440 per due]',
    validity: {
      it: 'Validità 12 mesi dalla data di emissione, prenotabile previa disponibilità.',
      en: 'Valid for 12 months from issue date, upon reservation confirmation.'
    }
  },
  {
    id: 'gift-radici',
    title: {
      it: 'Esperienza "Radici e Stagioni" (Vegetariano) per Due',
      en: '"Roots & Seasons" (Vegetarian) Experience for Two'
    },
    subtitle: {
      it: '6 portate dedicate alla terra toscana, erbe spontanee e percorsi botanici',
      en: '6-course plant-forward botanical tasting exploring Tuscan terroir'
    },
    includes: {
      it: [
        'Benvenuto con kombucha di foglie d’olivo autoprodotta',
        'Menu degustazione vegetariano 6 passaggi per due ospiti',
        'Abbinamento 4 calici territorio o pairing analcolico botanico',
        'Carta regalo stampata su carta cotone con dedica personalizzata'
      ],
      en: [
        'House-fermented olive leaf kombucha welcome',
        '6-course botanical tasting for two guests',
        '4-glass terroir wine pairing or botanical pairing',
        'Custom dedication voucher on fine cotton paper'
      ]
    },
    pricePlaceholder: '[voucher da confermare — es. € 370 per due]',
    validity: {
      it: 'Validità 12 mesi dalla data di emissione.',
      en: 'Valid for 12 months from issue date.'
    }
  },
  {
    id: 'gift-chef-table',
    title: {
      it: 'Esperienza Esclusiva al "Tavolo dello Chef" per Due',
      en: 'Exclusive "Chef’s Table" Experience for Two'
    },
    subtitle: {
      it: 'A tu per tu con la brigata e la chef Elena Vieri con creazioni fuori carta',
      en: 'Front-row seating before the open hearth with Chef Elena Vieri and off-menu rarities'
    },
    includes: {
      it: [
        'Sedute riservate al banco monolitico in noce massello',
        'Percorso a mano libera di 9 portate creato al momento dalla chef',
        'Abbinamento vini rari da vecchie annate della cantina sotterranea',
        'Omaggio della bottega gastronomica di VELORA'
      ],
      en: [
        'Dedicated seating at the monolithic walnut counter',
        '9-course improvisational sequence crafted live by the chef',
        'Rare vintage cellar flight poured directly by the sommelier',
        'Artisanal gastronomic farewell gift from VELORA'
      ]
    },
    pricePlaceholder: '[voucher da confermare — es. € 580 per due]',
    validity: {
      it: 'Validità 12 mesi dalla data di emissione, richiesta prenotazione con anticipo.',
      en: 'Valid for 12 months from issue date, advance booking required.'
    }
  }
];

export const CHEF_BIO = {
  name: 'Elena Vieri',
  title: {
    it: 'Chef de Cuisine & Fondatrice',
    en: 'Chef de Cuisine & Founder'
  },
  portrait: '/src/assets/images/chef_elena_vieri_1790846121611.jpg',
  quote: {
    it: '“La vera cucina d’autore non inventa da zero: ascolta la terra, ne comprende la fatica e ne restituisce il valore con gesti essenziali.”',
    en: '“True authorial cuisine does not invent from nothing: it listens to the land, respects its labor, and returns its worth through distilled gestures.”'
  },
  paragraphs: {
    it: [
      'Cresciuta tra le colline del Chianti fiorentino e i boschi della Lunigiana, Elena Vieri ha respirato fin dall’infanzia la cultura della terra toscana: la raccolta delle erbe spontanee all’alba, la frangitura dell’oliva a novembre e la panificazione con farine macinate a pietra.',
      'Dopo importanti percorsi di formazione in botteghe gastronomiche storiche tra Firenze e la Francia, Elena ha scelto di tornare nel cuore della sua città per dare vita a VELORA. La sua cucina rifugge l’artificio e l’esibizionismo tecnico fine a se stesso: ogni preparazione nasce da un dialogo quotidiano e diretto con contadini, allevatori e vignaioli.',
      'La sua filosofia si fonda su tre pilastri rigorosi: rispetto assoluto della stagionalità climatica, valorizzazione delle parti meno nobili ma ricche di sapore (secondo la migliore tradizione contadina), e un’estetica visiva che richiama le forme pulite e misurate dell’arte rinascimentale toscana.'
    ],
    en: [
      'Raised between the rolling hills of Florentine Chianti and the chestnut forests of Lunigiana, Elena Vieri imbibed Tuscan terroir from early childhood: wild foraging at dawn, the autumn olive pressing, and sourdough bread baking with stone-ground heirloom grains.',
      'Following rigorous formative years in venerable culinary workshops across Florence and France, Elena returned to the heart of her city to inaugurate VELORA. Her kitchen deliberately shuns gratuitous theatrics and cold technical virtuosity: every preparation stems from an intimate daily dialogue with farmers, shepherds, and independent vintners.',
      'Her culinary ethos rests upon three unyielding principles: strict adherence to micro-seasonal rhythms, reverence for humble cuts and overlooked botanical parts (true to Tuscan peasant wisdom), and a plate architecture evoking the clean proportion of Renaissance masonry.'
    ]
  }
};
