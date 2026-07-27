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
    name: "BABEL Acier Noir",
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
    limited: "25 pièces",
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
    name: "BABEL Acier Blanc",
    subtitle: "Boîtier Acier 316L, Cadran Blanc Champagne",
    ref: "BBL-STL-WHT-02",
    series: "Fondateur",
    seriesLabel: "Édition Fondateur",
    price: "4 500 €",
    material: "Acier inoxydable 316L",
    dial: "Laque blanc champagne avec 12 systèmes d'écriture",
    caseMaterial: "Acier inoxydable 316L",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau cognac, largeur 20 mm",
    limited: "25 pièces",
    description: "La pureté originelle. Un cadran blanc champagne lumineux qui sublime les index des 12 systèmes d'écriture, capturant l'essence du projet BABEL dans sa forme la plus classique.",
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
    name: "BABEL Or Blanc",
    subtitle: "Boîtier Laiton PVD Or, Cadran Blanc",
    ref: "BBL-GLD-WHT-03",
    series: "Limitée",
    seriesLabel: "Édition Limitée",
    price: "4 800 €",
    material: "Laiton PVD Or 5 microns",
    dial: "Blanc pur avec 12 systèmes d'écriture",
    caseMaterial: "Laiton PVD Or 5 microns",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau cognac, largeur 20 mm",
    limited: "Édition Limitée",
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
    name: "BABEL Or Rose Nacre",
    subtitle: "Boîtier Laiton PVD Or Rose, Cadran Nacre",
    ref: "BBL-RGL-MOP-04",
    series: "Limitée",
    seriesLabel: "Édition Limitée",
    price: "5 500 €",
    material: "Laiton PVD Or Rose",
    dial: "Nacre véritable avec 12 systèmes d'écriture",
    caseMaterial: "Laiton PVD Or Rose",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir veau brun foncé, largeur 20 mm",
    limited: "Édition Limitée",
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
    name: "BABEL Or Noir",
    subtitle: "Boîtier Laiton PVD Or, Cadran Noir",
    ref: "BBL-GLD-BLK-05",
    series: "Nuit",
    seriesLabel: "Édition Nuit",
    price: "4 800 €",
    material: "Laiton PVD Or 5 microns",
    dial: "Laque noir profond avec 12 systèmes d'écriture",
    caseMaterial: "Laiton PVD Or 5 microns",
    caseSize: "39 mm",
    movement: "Sellita SW200-2 Mᵇ Power+ (manuel, Swiss Made)",
    waterResistance: "50 m / 5 ATM",
    glass: "Saphir bombé anti-reflet double face",
    bracelet: "Cuir croco noir, largeur 20 mm",
    limited: "25 pièces",
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
