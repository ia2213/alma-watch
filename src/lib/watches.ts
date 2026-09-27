export interface Watch {
  id: string;
  name: string;
  subtitle: string;
  ref: string;
  series: string;
  price: number;
  deposit?: number;
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
    ref: "AVN-STL-BLK-01",
    series: "Fondateur",
    price: 4500,
    deposit: 1700,
    images: [
      "/watches/acier-noir.png"
    ],
    case: "39mm, Acier inoxydable 316L brossé et poli",
    dial: "Laque noir ardoise, finition mate avec index 12 civilisations",
    hands: "Aiguilles Alpha facettées, trotteuse rouge signature",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau grainé noir, surpiqûres sellier, largeur 20 mm",
    limited: "Édition Fondateur — 12 pièces numérotées exclusives",
    description: "Une interprétation moderne et ténébreuse du temps. L'acier 316L brut contraste avec la profondeur du cadran noir ardoise, mettant en valeur les douze écritures de l'humanité dans leur forme la plus pure.",
    color: "#222222",
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Mouvement", value: "Sellita SW200-2 Auto" },
      { label: "Réserve", value: "41 heures" },
      { label: "Étanchéité", value: "5 ATM (50m)" },
      { label: "Verre", value: "Saphir bombé traité AR" },
      { label: "Origine", value: "Swiss Made" }
    ]
  },
  {
    id: "v3",
    name: "LA TOLÉRANCE Or Blanc",
    subtitle: "Boîtier Laiton PVD Or, Cadran Blanc Champagne",
    ref: "AVN-GLD-WHT-03",
    series: "Fondateur",
    price: 4500,
    deposit: 1700,
    images: [
      "/watches/or-blanc.png"
    ],
    case: "39mm, Laiton PVD Or 18K (Halal-compatible, sans or massif direct)",
    dial: "Blanc champagne opalin, index 12 civilisations appliqués",
    hands: "Aiguilles Alpha polies or, trotteuse rouge signature",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau marron foncé surpiqué, boucle ardillon dorée, 20 mm",
    limited: "Édition Fondateur — 12 pièces numérotées exclusives",
    description: "L'élégance absolue sans compromis éthique. Le traitement PVD Or sur laiton respecte les principes stricts de la marque tout en offrant un éclat chaleureux, noble et intemporel.",
    color: "#c9a850",
    specs: [
      { label: "Boîtier", value: "39mm Laiton PVD Or" },
      { label: "Mouvement", value: "Sellita SW200-2 Auto" },
      { label: "Réserve", value: "41 heures" },
      { label: "Étanchéité", value: "5 ATM (50m)" },
      { label: "Verre", value: "Saphir bombé traité AR" },
      { label: "Origine", value: "Swiss Made" }
    ]
  },
  {
    id: "v2",
    name: "LA TOLÉRANCE Acier Blanc",
    subtitle: "Boîtier Acier 316L, Cadran Blanc Champagne",
    ref: "AVN-STL-WHT-02",
    series: "Collection",
    price: 1500,
    images: [
      "/watches/acier-blanc.png"
    ],
    case: "39mm, Acier inoxydable 316L poli et satiné",
    dial: "Blanc champagne, finition opaline raffinée",
    hands: "Aiguilles Alpha acier poli / bleuies, trotteuse rouge",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau cognac, largeur 20 mm",
    limited: "Édition continue — Série Découverte",
    description: "La pureté originelle. Un cadran blanc champagne lumineux qui sublime les index des 12 systèmes d'écriture, capturant l'essence du projet AVICEN dans sa forme la plus classique.",
    color: "#e8d8b8",
    isTeasing: true,
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Mouvement", value: "Sellita SW200-2 Auto" },
      { label: "Réserve", value: "41 heures" },
      { label: "Étanchéité", value: "5 ATM (50m)" },
      { label: "Verre", value: "Saphir bombé" },
      { label: "Origine", value: "Swiss Made" }
    ]
  },
  {
    id: "v4",
    name: "LA TOLÉRANCE Or Rose Nacre",
    subtitle: "Boîtier Laiton PVD Or Rose, Cadran Nacre",
    ref: "AVN-RGL-MOP-04",
    series: "Collection",
    price: 1500,
    images: [
      "/watches/or-rose-nacre.png"
    ],
    case: "39mm, Laiton PVD Or Rose",
    dial: "Nacre véritable d'exception aux reflets irisés",
    hands: "Aiguilles Alpha polies or rose, trotteuse rouge",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau bordeaux ou marron chaud, largeur 20 mm",
    limited: "Édition Limitée — 50 pièces",
    description: "Une pièce d'exception où chaque cadran en nacre naturelle est unique. Le PVD or rose souligne la douceur des reflets marins, offrant une lecture du temps poétique et immersive.",
    color: "#b76e79",
    isTeasing: true,
    specs: [
      { label: "Boîtier", value: "39mm PVD Or Rose" },
      { label: "Mouvement", value: "Sellita SW200-2 Auto" },
      { label: "Réserve", value: "41 heures" },
      { label: "Cadran", value: "Nacre Naturelle" },
      { label: "Étanchéité", value: "5 ATM (50m)" },
      { label: "Origine", value: "Swiss Made" }
    ]
  },
  {
    id: "v5",
    name: "LA TOLÉRANCE Or Noir",
    subtitle: "Boîtier Laiton PVD Or, Cadran Noir",
    ref: "AVN-GLD-BLK-05",
    series: "Collection",
    price: 1500,
    images: [
      "/watches/or-noir.png"
    ],
    case: "39mm, Laiton PVD Or (Halal-compatible)",
    dial: "Laque noir profond, finition brillante",
    hands: "Aiguilles Alpha polies or, trotteuse rouge",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau noir surpiqûres or, largeur 20 mm",
    limited: "Édition Limitée — 50 pièces",
    description: "Le contraste roi. L'or et le noir s'affrontent sur ce modèle au caractère puissant. Un hommage aux luxueuses montres de soirée, pensé pour s'affirmer au poignet.",
    color: "#111111",
    isTeasing: true,
    specs: [
      { label: "Boîtier", value: "39mm Laiton PVD Or" },
      { label: "Mouvement", value: "Sellita SW200-2 Auto" },
      { label: "Réserve", value: "41 heures" },
      { label: "Étanchéité", value: "5 ATM (50m)" },
      { label: "Verre", value: "Saphir bombé" },
      { label: "Origine", value: "Swiss Made" }
    ]
  }
];

export function getWatch(id: string): Watch | undefined {
  return watches.find(w => w.id === id);
}
