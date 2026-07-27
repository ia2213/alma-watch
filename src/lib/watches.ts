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

export interface Watch {
  id: string;
  name: string;
  subtitle: string;
  seriesLabel: string;
  price: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const watches: Watch[] = [
  {
    id: "v1",
    name: "BABEL Acier Noir",
    subtitle: "Boîtier Acier 316L, Cadran Laque Ardoise",
    seriesLabel: "Édition Fondateur",
    price: "4 500 €",
    description: "L'élégance intemporelle de l'acier mariée à la profondeur d'un cadran noir ardoise. Une interprétation moderne des 12 civilisations.",
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Cadran", value: "Laque noir ardoise" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Bracelet", value: "Cuir noir" }
    ]
  },
  {
    id: "v2",
    name: "BABEL Acier Blanc",
    subtitle: "Boîtier Acier 316L, Cadran Blanc Champagne",
    seriesLabel: "Édition Fondateur",
    price: "4 500 €",
    description: "La pureté originelle. Un cadran blanc champagne lumineux qui sublime les index des 12 systèmes d'écriture.",
    specs: [
      { label: "Boîtier", value: "39mm Acier 316L" },
      { label: "Cadran", value: "Blanc champagne" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Bracelet", value: "Cuir brun" }
    ]
  },
  {
    id: "v3",
    name: "BABEL Or Blanc",
    subtitle: "Boîtier finition Or, Cadran Blanc",
    seriesLabel: "Édition Limitée",
    price: "4 800 €",
    description: "Le contraste parfait entre la chaleur du boîtier doré et la clarté du cadran blanc. Une pièce de collection singulière.",
    specs: [
      { label: "Boîtier", value: "39mm finition Or (PVD 5 microns)" },
      { label: "Cadran", value: "Blanc pur" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Bracelet", value: "Cuir cognac" }
    ]
  },
  {
    id: "v4",
    name: "BABEL Or Rose Nacre",
    subtitle: "Boîtier Or Rose, Cadran Nacre",
    seriesLabel: "Édition Limitée",
    price: "5 500 €",
    description: "Une pièce d'exception. Le cadran en nacre véritable offre des reflets uniques à chaque mouvement du poignet.",
    specs: [
      { label: "Boîtier", value: "39mm finition Or Rose" },
      { label: "Cadran", value: "Nacre véritable" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Bracelet", value: "Cuir brun foncé" }
    ]
  },
  {
    id: "v5",
    name: "BABEL Or Noir",
    subtitle: "Boîtier finition Or, Cadran Noir",
    seriesLabel: "Édition Nuit",
    price: "4 800 €",
    description: "L'audace du noir absolu ceinturé d'or. Une présence forte et mystérieuse pour cette édition nocturne.",
    specs: [
      { label: "Boîtier", value: "39mm finition Or (PVD 5 microns)" },
      { label: "Cadran", value: "Laque noir profond" },
      { label: "Aiguilles", value: "Dauphine Super-LumiNova" },
      { label: "Bracelet", value: "Cuir croco noir" }
    ]
  }
];

export function getWatch(id: string): Watch | undefined {
  return watches.find(w => w.id === id);
}
