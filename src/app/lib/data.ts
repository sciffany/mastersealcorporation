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
];

export default seals;

export const categories = [
  {
    slug: "fixed-length",
    name: "Fixed Length",
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
