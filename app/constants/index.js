import Lottie from "lottie-react";
import animationData1 from "../../public/animation_lmhp8aib.json"
import animationData2 from "../../public/animation_lmlvgjqf.json"
import animationData3 from "../../public/animation_lmhpbp4b.json"

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.jpg',
    title: 'Assistenza',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.jpg',
    title: 'Tracciabilitá',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.jpg',
    title: 'Vendi',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.jpg',
    title: 'Acquista',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.jpg',
    title: 'Recensisci',
  },
];

export const startingFeatures = [
  'Registrati come meccanico o come sfasciacarrozze',
  'Inizia la ricerca o la vendita di ricambi',
  'Traccia la tua spedizione e contatta l assistenza per qualsiasi problema',
];

export const newFeatures = [
  {
    imgUrl: '/cart.png',
    title: 'Acquista in pochi click',
    subtitle:
        'La miglior piattaforma per acquistare velocemente il tuo ricambio',
  },
  {
    imgUrl: '/vrpano.png',
    title: 'Vendita agevolata',
    subtitle:
        'In pochi click potrai mettere a disposizione online i tuoi pezzi da vendere',
  },
];

export const insights = [
  {
    imgUrl: animationData1,
    title: 'Utilizza il form per la ricerca del ricambio',
    subtitle:
        'Puoi provare in anteprima senza registrarti il nostro form per la ricerca veloce del tuo componente',
    url: '/search'
  },
  {
    imgUrl: animationData3,
    title: 'Acquista il ricambio',
    subtitle:
        'Inizia ad acquistare registrandoti o accedendo al tuo account aziendale / privato, usufruendo di tutti i servizi disponibili',
    url: '#'
  },
  {
    imgUrl: animationData2,
    title: 'Vendi i tuoi componenti',
    subtitle:
        'Registrati come azienda / societá ed inizia a vendere online i ricambi che non utilizzi piu',
    url: '#'
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
