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
    pdf: "/variable-length/NicLock_Brochure.pdf",
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
    image: "/fixed-length/TwinLock_Pastel_shades.JPG",
  },
  {
    slug: "variable-length",
    name: "Variable Length",
    image: "/variable-length/Dobolox.avif",
  },
  {
    slug: "barrier-seal",
    name: "Barrier Seals",
    image: "/barrier-seal/cableseal.avif",
  },
  {
    slug: "special-purpose",
    name: "Special Purpose",
    image: "/special-purpose/securitape.avif",
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

export const blogPosts: Blog[] = [
  {
    slug: "instructions",
    title: "Sealing It Right",
    date: "2019-07-29",
    author: "Masterseal Corporation",
    time: 2,
    inlineImage: "/post/instructions.avif",
    content: `**SEALING PROTOCOL**

For security seals to be effective, they have to be integrated into a security system. Continuous monitoring and proper documentation of its usage will ensure the company prevents pilferage and theft.


**ORDERING**

Done by a designated person from a reputable supplier. Order seals SUITABLE for INTENDED APPLICATION  – consider the type of seal, value of the item, the length of time the seal will be left on the item, short or long trips, the areas that the delivery truck will pass by.


Seals should have marking and serial number unique to the company using it. Color coding can be used to help identify different depots.


**PROPER STORAGE**

Seals should be KEPT IN SECURED AREA that is only accessible by trusted/ authorized personnel.

[image]

**USAGE**

Before loading, check each van for hidden trapdoors or loose hinges that may be opened without opening the seal.  Hidden openings may be on the floor, side or ceiling of the van and covered by flooring, posters. 

Keep a RECORD book of outbound SEAL DETAILS - date, time, seal color, seal marking & serial number, name of person installing the seal, vehicle number, valve designation, driver, helper name. 

Always have a TRUSTED PERSON INSTALL THE SEAL and not the driver nor the helper. Aside from the seal, continue to PADLOCK the van to prevent theft. After sealing pull part of the seal to ensure it is properly locked.


**RECEIVING**

Only AUTHORIZED PERSONNEL be allowed to REMOVE the seal. Again not the driver nor the helper. Before removing, be sure to pull the seal to check that it is still locked. Check the seal for signs of tampering – attempts to alter the marking or serial numbers, scratches, broken seals. Match that the seal color, marking and number to the one written on the bill of lading. RECORD the seal description, driver, helper name, date, time, vehicle number.


For questionable seals, report to the manager, take picture of the seal while still on the item, keep the seal. Must investigate immediately if there is pilferage.


Seals are TAMPER-EVIDENT and not tamper-proof.  Senders and receivers must observe sealing protocols. Constantly check the seals for signs of tampering.
    
    `,
  },

  {
    slug: "imitation-seals",
    title: "Defeat the Cheats",
    date: "2019-07-29",
    author: "Masterseal Corporation",
    time: 2,
    image: "/post/defeat.avif",
    inlineImage: "/post/white.avif",
    caption: "Seals Turning White",
    content: `**BEWARE OF IMITATION SEALS.**
    
Rest assured with MASTERSEAL you are getting original product made by ISO Certified Manufacturing plant. Imitation seals may initially be good, but cannot continuously provide consistent quality.  With this, your asset may not be well-protected.

---

**WHY DO THE COLORED PLASTIC SEAL TURN WHITISH? IS IT A SIGN THAT SEAL IS WEAK / EASILY BREAK?**

KNOW THAT Essentra uses virgin PP (Polypropylene). When bent the colored plastic turns whitish / "namumuti" (AKA stress mark). Do not worry, Essentra plastic seals will not crack. It will need repeated bending to break virgin PP material. 

---

[image]

---

**TIP:** Colored seals that have scattered whitish portion is a sign of attempts to tamper the seal. 

Some seals in the market are made of PE (Polyethylene) which does not turn white. PE is cheaper than PP. However, PE has the ability to stretch and return to its original shape after a while. This makes the seal prone to tampering.`,
  },
  {
    slug: "best-seals-to-secure-your-product",
    title: "The Seal Dilemma",
    date: "2019-07-29",
    author: "Masterseal Corporation",
    time: 2,
    image: "/post/seal.avif",
    content: `
Choosing which seal to secure your products can be a difficult choice, as Masterseal Corporation provides a wide variety of seals to choose from. That's why you can follow this blog to check which seal is the best for you!


The following are just some criteria you can use to decide which seal to buy:

---
**SEAL TYPE**

1) **VARIABLE LENGTH / PULL-TIGHT** 

Like a belt that can be tightened

Used where seals must be snug onto the item to avoid pilfer

Example:  cash / courier bags. bags, tanker valves, fire extinguishers, emergency device, atm cassette box

2) **FIXED LENGTH** - sometimes called **LOOP SEAL**

Forms a loop like a bracelet once locked.

Used where seals should have an allowance for movement

Example – truck doors. container vans doors, bonded warehouse.

---
**SEAL STRENGTH**


1) **VARIABLE LENGTH / PULL-TIGHT** - have different degrees of strengths

Sample application and seals names

Example: fire extinguishers, emergency devices without monetary value – lightlock

Cash boxes, Airline trolley, Weighing scales - mini-jawlock

Tanker valves - mini jawlock, duolock

Utility Meters - AnchorLock with wire

Big currency bags / postal bags – MaXi – Jawlock, SegurLock, TeraLock

Inter-island cargo –Alulock cable seal



2) **FIXED LENGTH**

 Short trips - TwinLock plastic seal

 Long bumpy trips, theft-prone areas – MetalLock, SegurLock

 Inter-island – EinLock Bolt Seal  Export



3) **BARRIER SEALS**

have very high break strength - cannot claim seal is accidentally broken.

Suitable for high value cargo, inter-island containers, export shipments

require ISO Certificate or C-TPAT compliant seas  - AluLock D3.5,  UnoLock`,
  },
];

export type Blog = {
  slug: string;
  title: string;
  date: string;
  author: string;
  time: number;
  image?: string;
  inlineImage?: string;
  content: string;
  caption?: string;
};
