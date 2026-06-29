export interface Watch {
  id: string;
  name: string;
  subtitle: string;
  ref: string;
  series: string;
  seriesLabel: string;
  price: string;
  priceNote?: string;
  material: string;
  dial: string;
  caseMaterial: string;
  caseSize: string;
  movement: string;
  waterResistance: string;
  glass: string;
  bracelet: string;
  limited: string;
  description: string;
  color: string;
}

export const watches: Watch[] = [
  {
    id: 'v1',
    name: 'KS Exclusive',
    subtitle: 'Météorite Gibeon',
    ref: 'KS 01/25 — KS 25/25',
    series: 'v1',
    seriesLabel: 'Série Fondateurs',
    price: '4 000 €',
    material: 'Titane Grade 5',
    dial: 'Météorite Gibeon authentique',
    caseMaterial: 'Titane Grade 5 brossé',
    caseSize: '42 mm',
    movement: 'Sellita SW200-2 (Swiss Made)',
    waterResistance: '100 m / 10 ATM',
    glass: 'Saphir bombé anti-reflet double face',
    bracelet: 'Cuir Shell Cordovan brun tabac',
    limited: '25 pièces numérotées',
    description: "La pièce fondatrice d'ALMA. Son cadran en météorite Gibeon, formée il y a 4 milliards d'années, inscrit l'éternité au poignet. Chacune des 25 pièces est numérotée à la main et livrée avec son certificat d'authenticité et un fragment de météorite.",
    color: '#B8860B',
  },
  {
    id: 'v2',
    name: 'Carbone Météorite',
    subtitle: 'Full Carbone Forgé',
    ref: 'ALMA-CBN-MET — 001/100',
    series: 'v2',
    seriesLabel: 'Série Fondateurs',
    price: '4 500 €',
    material: 'Carbone forgé',
    dial: 'Météorite Gibeon & Carbone',
    caseMaterial: 'Carbone forgé haute résistance',
    caseSize: '42 mm',
    movement: 'Sellita SW200-2 (Swiss Made)',
    waterResistance: '100 m / 10 ATM',
    glass: 'Saphir bombé anti-reflet double face',
    bracelet: 'Bracelet carbone avec boucle ardillon titane',
    limited: '100 pièces numérotées',
    description: "L'alliance du cosmos et de l'ingénierie moderne. Le boîtier en carbone forgé, d'une légèreté absolue, encadre un cadran météorite Gibeon dont les motifs de Widmanstätten sont uniques à chaque exemplaire.",
    color: '#333333',
  },
  {
    id: 'v3',
    name: 'Classique Blanc',
    subtitle: 'Blanc Céramique',
    ref: '001/100 — 100/100',
    series: 'v3',
    seriesLabel: 'Série Limitée',
    price: '6 100 €',
    material: 'Acier 316L poli',
    dial: 'Blanc céramique haute résistance',
    caseMaterial: 'Acier inoxydable 316L poli miroir',
    caseSize: '42 mm',
    movement: 'Sellita SW200-2 (Swiss Made)',
    waterResistance: '100 m / 10 ATM',
    glass: 'Saphir bombé anti-reflet double face',
    bracelet: 'Cuir Shell Cordovan blanc crème',
    limited: '100 pièces numérotées',
    description: "L'épure portée au sommet. Le cadran blanc céramique offre une luminosité immaculée qui magnifie les 12 systèmes de numérotation gravés à la main. Une montre qui transcende les cultures dans un écrin intemporel.",
    color: '#DDDDDD',
  },
  {
    id: 'v4',
    name: 'Sport-Luxe',
    subtitle: 'Noir Mat',
    ref: '001/100 — 100/100',
    series: 'v4',
    seriesLabel: 'Série Limitée',
    price: '6 100 €',
    material: 'Acier 316L DLC noir',
    dial: 'Noir mat ardoise',
    caseMaterial: 'Acier 316L traitement DLC noir mat',
    caseSize: '42 mm',
    movement: 'Sellita SW200-2 (Swiss Made)',
    waterResistance: '100 m / 10 ATM',
    glass: 'Saphir bombé anti-reflet double face',
    bracelet: 'Bracelet caoutchouc noir avec ardillon DLC',
    limited: '100 pièces numérotées',
    description: "Puissance silencieuse. Le traitement DLC (Diamond-Like Carbon) confère au boîtier une résistance aux rayures exceptionnelle et un noir profond envoûtant. Les 12 chiffres universels ressortent en or sur ardoise.",
    color: '#222222',
  },
  {
    id: 'v5',
    name: 'Élégant',
    subtitle: 'Nacre & Or Rose',
    ref: 'ALMA-MOP-RG',
    series: 'v5',
    seriesLabel: 'Série Prestige',
    price: 'Sur demande',
    priceNote: 'Pièce unique — commande privée',
    material: 'Or rose 18 carats',
    dial: 'Nacre naturelle (MOP)',
    caseMaterial: 'Or rose 18 carats 750/1000',
    caseSize: '42 mm',
    movement: 'Sellita SW200-2 (Swiss Made)',
    waterResistance: '50 m / 5 ATM',
    glass: 'Saphir bombé anti-reflet double face',
    bracelet: 'Bracelet crocodile blanc couture main',
    limited: 'Pièce unique sur commande',
    description: "Le summum de la collection ALMA. Le cadran en nacre naturelle irrise d'un chatoiement unique selon la lumière, sublimé par un boîtier en or rose massif 18 carats. Chaque exemplaire est une commande privée, réalisée sur mesure dans les ateliers partenaires suisses.",
    color: '#C9A84C',
  },
];

export function getWatch(id: string): Watch | undefined {
  return watches.find(w => w.id === id);
}
