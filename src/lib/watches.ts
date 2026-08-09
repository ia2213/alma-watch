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
  specs: { label: string; value: string }[];
}

export const watches: Watch[] = [
  {
    id: "v1",
    name: "LA TOLÉRANCE Acier Noir",
    subtitle: "Boîtier Acier 316L, Cadran Laque Ardoise",
    ref: "BBL-STL-BLK-01",
    series: "Fondateur",
    seriesLabel: "Édition Fondateur",
    price: "4 500 €",
    material: "Acier inoxydable 316L",
    dial: "Laque noir ardoise avec 12 systèmes d'écriture",
    caseMaterial: "Acier inoxydable 316L",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau noir, largeur 20 mm",
    limited: "12 pièces numérotées (01/12 — 12/12)",
    description: "L'élégance intemporelle de l'acier mariée à la profondeur d'un cadran noir ardoise. Une interprétation moderne des 12 civilisations, sans or réel pour respecter les principes halal-compatibles de la collection.",
    color: "#1a1a1a",
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Cadran", value: "Laque noir ardoise" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Mouvement", value: "Sellita SW200-2 Mᵇ" }
    ]
  },
  {
    id: "v2",
    name: "LA TOLÉRANCE Acier Blanc",
    subtitle: "Boîtier Acier 316L, Cadran Blanc Champagne",
    ref: "BBL-STL-WHT-02",
    series: "Collection",
    seriesLabel: "Collection Principale",
    price: "1 500 €",
    material: "Acier inoxydable 316L",
    dial: "Laque blanc champagne avec 12 systèmes d'écriture",
    caseMaterial: "Acier inoxydable 316L",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau cognac, largeur 20 mm",
    limited: "Édition continue — Sans limite",
    description: "La pureté originelle. Un cadran blanc champagne lumineux qui sublime les index des 12 systèmes d'écriture, capturant l'essence du projet LA TOLÉRANCE dans sa forme la plus classique.",
    color: "#f5f5dc",
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Cadran", value: "Blanc champagne" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Mouvement", value: "Sellita SW200-2 Mᵇ" }
    ]
  },
  {
    id: "v3",
    name: "LA TOLÉRANCE Or Blanc",
    subtitle: "Boîtier Laiton PVD Or, Cadran Blanc",
    ref: "BBL-GLD-WHT-03",
    series: "Fondateur",
    seriesLabel: "Édition Fondateur",
    price: "4 500 €",
    material: "Laiton PVD Or 5 microns",
    dial: "Blanc pur avec 12 systèmes d'écriture",
    caseMaterial: "Laiton PVD Or 5 microns",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau cognac, largeur 20 mm",
    limited: "12 pièces numérotées (01/12 — 12/12)",
    description: "Le contraste parfait entre la chaleur du boîtier doré et la clarté du cadran blanc. Le revêtement PVD garantit la conformité halal en évitant l'utilisation d'or massif.",
    color: "#f5f5f5",
    specs: [
      { label: "Boîtier", value: "39mm PVD Or" },
      { label: "Cadran", value: "Blanc pur" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Mouvement", value: "Sellita SW200-2 Mᵇ" }
    ]
  },
  {
    id: "v4",
    name: "LA TOLÉRANCE Or Rose Nacre",
    subtitle: "Boîtier Laiton PVD Or Rose, Cadran Nacre",
    ref: "BBL-RGL-MOP-04",
    series: "Collection",
    seriesLabel: "Collection Principale",
    price: "1 500 €",
    material: "Laiton PVD Or Rose",
    dial: "Nacre véritable avec 12 systèmes d'écriture",
    caseMaterial: "Laiton PVD Or Rose",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau brun foncé, largeur 20 mm",
    limited: "Édition continue — Sans limite",
    description: "Une pièce d'exception. Le cadran en nacre véritable offre des reflets uniques à chaque mouvement du poignet, s'accordant avec élégance au ton chaud du boîtier PVD or rose.",
    color: "#fdf5e6",
    specs: [
      { label: "Boîtier", value: "39mm PVD Or Rose" },
      { label: "Cadran", value: "Nacre véritable" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Mouvement", value: "Sellita SW200-2 Mᵇ" }
    ]
  },
  {
    id: "v5",
    name: "LA TOLÉRANCE Or Noir",
    subtitle: "Boîtier Laiton PVD Or, Cadran Noir",
    ref: "BBL-GLD-BLK-05",
    series: "Collection",
    seriesLabel: "Collection Principale",
    price: "1 500 €",
    material: "Laiton PVD Or 5 microns",
    dial: "Laque noir profond avec 12 systèmes d'écriture",
    caseMaterial: "Laiton PVD Or 5 microns",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir croco noir, largeur 20 mm",
    limited: "Édition continue — Sans limite",
    description: "L'audace du noir absolu ceinturé d'un éclat doré. Une présence forte et mystérieuse pour cette édition nocturne, pensée pour les amateurs de contrastes tranchants.",
    color: "#000000",
    specs: [
      { label: "Boîtier", value: "39mm PVD Or" },
      { label: "Cadran", value: "Laque noir profond" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Mouvement", value: "Sellita SW200-2 Mᵇ" }
    ]
  }
];

export function getWatch(id: string): Watch | undefined {
  return watches.find(w => w.id === id);
}
