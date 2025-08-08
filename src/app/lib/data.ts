const seals: Seal[] = [
  {
    slug: "cable-seal",
    name: "Cable Seal",
    pdf: "/fixed-length/Cable_Seal_Fixed_Length_Brochure.pdf",
    category: "fixed-length",
    description:
      "Cable seal which forms a loop when locked. for truck doors or container van",
    moq: 5000,
    image: "/fixed-length/Fix_Cable_Seal_2.avif",
  },
  {
    slug: "hybrid",
    name: "Hybrid Metal",
    pdf: "/fixed-length/Hybrid_Brochure.pdf",
    category: "fixed-length",
    description:
      "Hybrid seal is a metal seal that offers versatility of color-coding to identify origin and destination depots quickly.",
    image: "/fixed-length/Hybrid_Metal_locked.jpg",
  },
  {
    slug: "metal-t-seal",
    name: "Metal T Seal",
    pdf: "/fixed-length/Metal_T_Seal_Brochure.pdf",
    category: "fixed-length",
    description:
      "Metal T Seal is a metal seal for delivery truck & van doors. Higher average breaking strength of 70 Kg.",
    image: "/fixed-length/T_Seal_bundle.jpg",
  },
  {
    slug: "twinlock",
    name: "Twinlock",
    pdf: "/fixed-length/TWINlock_Brochure.pdf",
    category: "fixed-length",
    description:
      "Twinlock is a metal seal for securing delivery truck & van doors from tampering.",
    image: "/fixed-length/TwinLock_Pastel_shades.JPG",
  },
  {
    slug: "alphaseal",
    name: "Alphaseal",
    pdf: "/variable-length/Alphaseal.pdf",
    category: "variable-length",
    description:
      "Alphaseal features transparent locking cap for visible tamper evidence on the locking jaw.",
    image: "/variable-length/AlphaLock.avif",
  },
  {
    slug: "dobolox",
    name: "Dobolox",
    pdf: "/variable-length/Dobolox_Brochure.pdf",
    category: "variable-length",
    description: "The double locking design enhances the security feature.",
    image: "/variable-length/Dobolox.avif",
  },
  {
    slug: "lightlock",
    name: "Lightlock",
    pdf: "/variable-length/LightLock_Brochure.pdf",
    category: "variable-length",
    description:
      "Lightlock is for fire extinguisher, emergency cabinets, medical kits. (low break strength)",
    image: "/variable-length/maseco.avif",
  },
  {
    slug: "mini-jawlock",
    name: "Mini Jawlock",
    pdf: "/variable-length/Mini_Jawlock_Brochure.pdf",
    category: "variable-length",
    description: `Mini Jawlock is for sealing small holes. strap length in 150 mm (6"), 200 mm (8"), 300 mm (12"), 400 mm (16")"`,
    image: "/variable-length/MJ_Tags.avif",
  },

  {
    slug: "segur-lock",
    name: "SegurLock",
    pdf: "/variable-length/SegurLock_Brochure.pdf",
    category: "variable-length",
    description:
      "SegurLock is for for sealing courier sacks, postal bags, cash bags, truck doors",
    image: "/variable-length/segur.avif",
  },
  {
    slug: "snc",
    name: "SNC",
    pdf: "/variable-length/SNC_Brochure.pdf",
    category: "variable-length",
    description: `Biodegredable (Bio-D) 200 mm (8") stocks available.`,
    image: "/variable-length/SNC.avif",
  },
  {
    slug: "tera-lock",
    name: "TeraLock",
    pdf: "/variable-length/TeraLock_Type-X_Brochure.pdf",
    category: "variable-length",
    description: `TeraLock Type-X features ruler scale on strap (to guide seal tightening level) and tail keeper slot (to tuck protruding tail)`,
    image: "/variable-length/teralock.avif",
  },
  {
    slug: "nic-lock",
    name: "Nic Lock",
    pdf: "/variable-length/Niclock_Brochure.pdf",
    category: "variable-length",
  },

  {
    slug: "cable-seal",
    name: "Cable Seal",
    pdf: "/barrier-seal/Cable_Seal_Brochure.pdf",
    category: "barrier-seal",
    description: `For sealing container vans or high value items. Cable will fray when cut. Model D3.5 is ISO17712:2013 compliant. Classified as High Security Seal`,
    moq: 250,
    image: "/barrier-seal/cableseal.avif",
  },
  {
    slug: "permaseal",
    name: "Permaseal",
    pdf: "/barrier-seal/Permaseal_Brochure.pdf",
    category: "barrier-seal",
    description: `High security cable seal with zinc locking house. Cable frays when cut and can't re-insert.`,
    moq: 5000,
    image: "/barrier-seal/permaseal.avif",
  },
  {
    slug: "alulock",
    name: "Alulock",
    pdf: "/barrier-seal/Alulock_Cable_Seal_Brochure.pdf",
    category: "barrier-seal",
  },
  {
    slug: "tav-bolt",
    name: "TavBolt",
    pdf: "/barrier-seal/TavBolt_Brochure.pdf",
    category: "barrier-seal",
  },
  {
    slug: "anchorlock",
    name: "AnchorLock",
    pdf: "/special-purpose/AnchorLock_Brochure.pdf",
    category: "special-purpose",
    description: `AnchorLock is used together with sealing wire for sealing meters, tankers, and items which need longer length`,
    moq: 250,
    image: "/special-purpose/anchorlock.avif",
  },
  {
    slug: "securitape",
    name: "SecuriTape",
    pdf: "/special-purpose/SecuriTape_Brochure.pdf",
    category: "special-purpose",
    description:
      "Warranty/void label for computer products, emergency kits, medical kits, security docs",
    image: "/special-purpose/securitape.avif",
  },
];

export default seals;

export const categories = [
  {
    slug: "fixed-length",
    name: "Fixed Length",
  },
  {
    slug: "variable-length",
    name: "Variable Length",
  },
  {
    slug: "barrier-seal",
    name: "Barrier Seals",
  },
  {
    slug: "special-purpose",
    name: "Special Purpose",
  },
];

export type Seal = {
  slug: string;
  name: string;
  pdf: string;
  category: string;
  image?: string;
  description?: string;
  moq?: number;
};

export type Category = {
  slug: string;
  name: string;
};
