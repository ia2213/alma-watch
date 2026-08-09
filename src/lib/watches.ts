export interface Watch {
  id: string;
  name: string;
  subtitle: string;
  ref: string;
  series: string;
  images: string[];
  case: string;
  dial: string;
  hands: string;
  glass: string;
  bracelet: string;
  limited: string;
  description: string;
  color: string;
  specs: { label: string; value: string }[];
  isTeasing?: boolean;
}

export const watches: Watch[] = [
  {
    id: "v1",
    name: "LA TOLÉRANCE Acier Noir",
    subtitle: "Boîtier Acier 316L, Cadran Laque Ardoise",
    ref: "BBL-STL-BLK-01",
    series: "Fondateur",
    images: [
      "/watches/acier-noir.png",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&q=90",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=90"
    ],
    case: "39mm, Acier inoxydable 316L brossé et poli",
    dial: "Laque noir ardoise, finition mate",
    hands: "Aiguilles Alpha facettées",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau grainé noir, largeur 20 mm",
    limited: "Édition Fondateur — 12 pièces numérotées",
    description: "Une interprétation moderne et ténébreuse du temps. L'acier brut contraste avec la profondeur du cadran noir ardoise, mettant en valeur les douze écritures de l'humanité dans leur forme la plus pure.",
    color: "#222222",
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Mouvement", value: "Sellita SW200-2" },
      { label: "Réserve", value: "65 heures" },
      { label: "Étanchéité", value: "5 ATM" }
    ]
  },
  {
    id: "v3",
    name: "LA TOLÉRANCE Or Blanc",
    subtitle: "Boîtier Laiton PVD Or, Cadran Blanc",
    ref: "BBL-GLD-WHT-03",
    series: "Fondateur",
    images: [
      "/watches/or-blanc.png",
      "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=1200&q=90",
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=1200&q=90"
    ],
    case: "39mm, Laiton PVD Or (Halal-compatible)",
    dial: "Blanc neige, finition opaline",
    hands: "Aiguilles Alpha polies or",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau marron foncé, largeur 20 mm",
    limited: "Édition Fondateur — 12 pièces numérotées",
    description: "L'élégance absolue sans compromis éthique. Le traitement PVD Or sur laiton respecte les principes stricts de la marque tout en offrant un éclat chaleureux et intemporel.",
    color: "#c9a850",
    specs: [
      { label: "Boîtier", value: "39mm Laiton PVD Or" },
      { label: "Mouvement", value: "Sellita SW200-2" },
      { label: "Réserve", value: "65 heures" },
      { label: "Étanchéité", value: "5 ATM" }
    ]
  },
  {
    id: "v2",
    name: "LA TOLÉRANCE Acier Blanc",
    subtitle: "Boîtier Acier 316L, Cadran Blanc Champagne",
    ref: "BBL-STL-WHT-02",
    series: "Collection",
    images: [
      "/watches/acier-blanc.png",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=1200&q=90",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&q=90"
    ],
    case: "39mm, Acier inoxydable 316L poli",
    dial: "Blanc champagne, finition opaline",
    hands: "Aiguilles Alpha bleuies",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau cognac, largeur 20 mm",
    limited: "Édition continue — Sans limite",
    description: "La pureté originelle. Un cadran blanc champagne lumineux qui sublime les index des 12 systèmes d'écriture, capturant l'essence du projet LA TOLÉRANCE dans sa forme la plus classique.",
    color: "#f5f5dc",
    isTeasing: true,
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Mouvement", value: "Sellita SW200-2" },
      { label: "Réserve", value: "65 heures" },
      { label: "Étanchéité", value: "5 ATM" }
    ]
  },
  {
    id: "v4",
    name: "LA TOLÉRANCE Or Rose Nacre",
    subtitle: "Boîtier Laiton PVD Or Rose, Cadran Nacre",
    ref: "BBL-RGL-MOP-04",
    series: "Collection",
    images: [
      "/watches/or-rose-nacre.png",
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1200&q=90",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=90"
    ],
    case: "39mm, Laiton PVD Or Rose",
    dial: "Nacre véritable de Tahiti",
    hands: "Aiguilles Alpha polies or rose",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir croco bordeaux, largeur 20 mm",
    limited: "Édition Ultra-Limitée — 50 pièces",
    description: "Une pièce d'exception où chaque cadran en nacre naturelle est unique. Le PVD or rose souligne la douceur des reflets marins, offrant une lecture du temps presque onirique.",
    color: "#b76e79",
    isTeasing: true,
    specs: [
      { label: "Boîtier", value: "39mm Laiton PVD Or Rose" },
      { label: "Mouvement", value: "Sellita SW200-2" },
      { label: "Réserve", value: "65 heures" },
      { label: "Cadran", value: "Nacre Naturelle" }
    ]
  },
  {
    id: "v5",
    name: "LA TOLÉRANCE Or Noir",
    subtitle: "Boîtier Laiton PVD Or, Cadran Noir",
    ref: "BBL-GLD-BLK-05",
    series: "Collection",
    images: [
      "/watches/or-noir.png",
      "https://images.unsplash.com/photo-1623998021446-45ca94ddcf68?w=1200&q=90",
      "https://images.unsplash.com/photo-1548171915-e76a3e0f9b6e?w=1200&q=90"
    ],
    case: "39mm, Laiton PVD Or (Halal-compatible)",
    dial: "Laque noir profond, finition brillante",
    hands: "Aiguilles Alpha polies or",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau noir surpiqûres or, largeur 20 mm",
    limited: "Édition Ultra-Limitée — 50 pièces",
    description: "Le contraste roi. L'or et le noir s'affrontent sur ce modèle au caractère puissant. Un hommage aux luxueuses montres de soirée, pensé pour s'affirmer.",
    color: "#111111",
    isTeasing: true,
    specs: [
      { label: "Boîtier", value: "39mm Laiton PVD Or" },
      { label: "Mouvement", value: "Sellita SW200-2" },
      { label: "Réserve", value: "65 heures" },
      { label: "Étanchéité", value: "5 ATM" }
    ]
  }
];

export function getWatch(id: string): Watch | undefined {
  return watches.find(w => w.id === id);
}