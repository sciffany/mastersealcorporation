const seals: Seal[] = [
  {
    slug: "twinlock",
    name: "Twinlock",
    pdf: "/fixed-length/TWINlock_Brochure.pdf",
    category: "fixed-length",
    description:
      "Plastic seal ideal for securing delivery truck & van doors from tampering.",
    moq: "1,000",
    image: "/fixed-length/TwinLock_Pastel_shades.JPG",
  },
  {
    slug: "hybrid",
    name: "Hybrid Metal",
    pdf: "/fixed-length/Hybrid_Brochure.pdf",
    category: "fixed-length",
    description:
      "Metal van seal that offers versatility of color-coding to identify origin and destination depots quickly.",
    moq: "1,000",
    image: "/fixed-length/Hybrid_Metal_locked.jpg",
  },
  {
    slug: "metal-t-seal",
    name: "Metal T Seal",
    pdf: "/fixed-length/Metal_T_Seal_Brochure.pdf",
    category: "fixed-length",
    description:
      "Metal van seal with hiigher break strength of 70 Kg.  Suitable for long bumpy trips",
    moq: "1,000",
    image: "/fixed-length/Metal_T_Seal_bundle.jpg",
  },
  {
    slug: "fix-cable-seal",
    name: "Cable Seal - Fix Length",
    pdf: "/fixed-length/Cable_Seal_Fix_Length_Brochure.pdf",
    category: "fixed-length",
    description:
      "Cable seal which forms a loop when locked. for truck doors or container van",
    moq: "5,000",
    image: "/fixed-length/Cable_Seal_Fix_Length.avif",
  },
  {
    slug: "mini-jawlock",
    name: "Mini Jawlock",
    pdf: "/variable-length/Mini_Jawlock_Brochure.pdf",
    category: "variable-length",
    description:
      'For sealing small holes. Comes in 150 mm (6"), 200 mm (8"), 300 mm (12"), 400 mm (16")',
    moq: "1,000",
    image: "/variable-length/Mini-Jawlock.avif",
  },
  {
    slug: "lightlock",
    name: "Lightlock",
    pdf: "/variable-length/LightLock_Brochure.pdf",
    category: "variable-length",
    description:
      "Suitable for fire extinguisher, emergency devices, medical kits. ",
    moq: "1,000",
    image: "/variable-length/Lightlock.jpg",
  },
  {
    slug: "m-lock",
    name: "M-Lock",
    pdf: "/variable-length/M-Lock_Brochure.pdf",
    category: "variable-length",
    description:
      "Offers economical sealing solution.  Single-piece moulding seal",
    moq: "1,000",
    image: "/variable-length/M-Lock.jpg",
  },
  {
    slug: "nic-lock",
    name: "Nic-Lock",
    pdf: "/variable-length/Nic-Lock_Brochure.pdf",
    category: "variable-length",
    description:
      "Offers economical sealing solution.  Single-piece moulding seal",
    moq: "1,000",
    image: "/variable-length/Nic-Lock.jpg",
  },
  {
    slug: "snc",
    name: "SNC",
    pdf: "/variable-length/SNC_Brochure.pdf",
    category: "variable-length",
    description:
      "Strap is smooth & flexible suitable for small holes. Biodegredable stocks available for 200 mmL",
    moq: "1,000",
    image: "/variable-length/SNC.avif",
  },
  {
    slug: "dobolox",
    name: "Dobolox",
    pdf: "/variable-length/Dobolox_Brochure.pdf",
    category: "variable-length",
    description:
      "Has 2 stainless locking mechansims that enhances the security feature.",
    moq: "1,000",
    image: "/variable-length/Dobolox.avif",
  },
  {
    slug: "segurlock",
    name: "SegurLock",
    pdf: "/variable-length/SegurLock_Brochure.pdf",
    category: "variable-length",
    description: "Wide strap for sealing courier sacks, postal bags, cash bags",
    moq: "10,000",
    image: "/variable-length/Segurlock.avif",
  },
  {
    slug: "alphaseal",
    name: "Alphaseal",
    pdf: "/variable-length/Alphaseal_Brochure.pdf",
    category: "variable-length",
    description:
      "Features transparent locking cap & striped strap for more visible tamper evidence",
    moq: "1,000",
    image: "/variable-length/Alphaseal.jpg",
  },
  {
    slug: "maxi-jawlock",
    name: "MaXi Jawlock",
    pdf: "/variable-length/MaXi_Jawlock_Brochure.pdf",
    category: "variable-length",
    description:
      'Higher Break Strength than typical plastic seal.  Longest is 500vmm (20")',
    moq: "1,000",
    image: "/variable-length/MAXI_Jawlock.jpg",
  },
  {
    slug: "novalock",
    name: "NovaLock",
    pdf: "/variable-length/Novaock_Brochure.pdf",
    category: "variable-length",
    description: "Features triple locking mechansim & transparent window. ",
    moq: "10,000",
    image: "/variable-length/Novalock.jpg",
  },
  {
    slug: "teralock",
    name: "TeraLock-X",
    pdf: "/variable-length/TeraLock_Type-X_Brochure.pdf",
    category: "variable-length",
    description:
      "TeraLock Type-X features ruler scale on strap (to guide seal tightening level) ",
    moq: "10,000",
    image: "/variable-length/Teralock2.avif",
  },
  {
    slug: "alu-cable-seal",
    name: "Alulock Cable Seal",
    pdf: "/barrier-seal/Alulock_Cable_Seal_Brochure.pdf",
    category: "barrier-seal",
    description:
      "For container vans or high value items. Cable will fray when cut. The D3.5 is ISO17712:2013 compliant as High Security Seal",
    moq: "250",
    image: "/barrier-seal/AluLock.avif",
  },
  {
    slug: "plaska",
    name: "Cable Seal - Plaska",
    pdf: "/barrier-seal/Cable_Seal_Plaska_Brochure.pdf",
    category: "barrier-seal",
    description:
      "A secure alternative to padlock. Can contain carcode and up to 13-digit serial numbers",
    moq: "3,000",
    image: "/barrier-seal/Cable_Seal_Plaska.jpg",
  },
  {
    slug: "cable-grip",
    name: "Cable Grip Seal",
    pdf: "/barrier-seal/Cable_Seal_Grip_Brochure.pdf",
    category: "barrier-seal",
    description:
      "Cable seal with robust locking mechanism. Cable fray when cut.",
    moq: "5,000",
    image: "/barrier-seal/Cable_Seal_Grip.jpg",
  },
  {
    slug: "permaseal",
    name: "Permaseal",
    pdf: "/barrier-seal/Cable_Seal_Permaseal_Brochure.pdf",
    category: "barrier-seal",
    description:
      "High security cable seal with zinc locking house. Cable frays when cut and can't re-insert.",
    moq: "5,000",
    image: "/barrier-seal/Cable_Seal_Permaseal.avif",
  },
  {
    slug: "fix-cable-seal",
    name: "Cable Seal - Fix Length",
    pdf: "/barrier-seal/Cable_Seal_Fix_Length_Brochure.pdf",
    category: "barrier-seal",
    description:
      "Cable seal which forms a loop when locked. for truck doors or container van",
    moq: "5,000",
    image: "/barrier-seal/Cable_Seal_Fix_Length.avif",
  },
  {
    slug: "tav-bolt-bp",
    name: "TavBolt BP",
    pdf: "/barrier-seal/TavBolt_BP_Brochure.pdf",
    category: "barrier-seal",
    description:
      "Classified as High Security. Compliant to ISO 1771:2013. Ideal for freight containers",
    moq: "200",
    image: "/barrier-seal/TavBolt_BP.jpg",
  },
  {
    slug: "tav-bolt-bp-ap",
    name: "TavBolt - angled pin",
    pdf: "",
    category: "barrier-seal",
    description:
      "Classified as High Security. Compliant to ISO 1771:2013. Ideal for freight containers",
    moq: "5,000",
    image: "/barrier-seal/TavBolt_BP-angled_pin.jpg",
  },
  {
    slug: "tav-bolt   ",
    name: "TavBolt",
    pdf: "/barrier-seal/TavBolt_Brochure.pdf",
    category: "barrier-seal",
    description: "Bolt seal with encapsulated pin. Complies with ISO17712:2013",
    moq: "3,000",
    image: "/barrier-seal/TavBolt.jpg",
  },
  {
    slug: "anchorlock",
    name: "AnchorLock",
    pdf: "/special-purpose/AnchorLock_Brochure.pdf",
    category: "special-purpose",
    description:
      "Used with sealing wire for sealing meters, tankers, and items which need longer length",
    moq: "2,000",
    image: "/special-purpose/anchorlock.avif",
  },
  {
    slug: "securitape",
    name: "SecuriTape",
    pdf: "/special-purpose/SecuriTape_Brochure.pdf",
    category: "special-purpose",
    description:
      "Warranty / void label for computer products, emergency kits, medical kits, security docs",
    moq: "1,000",
    image: "/special-purpose/securitape.avif",
  },
  {
    slug: "cartlock",
    name: "Cart Lock",
    pdf: "",
    category: "special-purpose",
    description:
      "Suitable for e-carts & airline trolleys. Easy to lock & remove manually",
    moq: "10,000",
    image: "/special-purpose/CartLock.jpg",
  },
  {
    slug: "padlock",
    name: "Padlock ",
    pdf: "/special-purpose/PadLock_Brochure.pdf",
    category: "special-purpose",
    description: "A disposable alternative to padlock with keys",
    moq: "200",
    image: "/special-purpose/PadLock2.jpg",
  },
  {
    slug: "twistseal",
    name: "Twist Seal",
    pdf: "/special-purpose/TWISTSeal_Brochure.pdf",
    category: "special-purpose",
    description: "For sealing meters, tankers",
    moq: "1,000",
    image: "/special-purpose/TwistSeal.jpg",
  },
  {
    slug: "sealing wires",
    name: "Sealing Wire",
    pdf: "/special-purpose/Sealing_Wire_Brochure.pdf",
    category: "special-purpose",
    description: "Used together with wire seals",
    moq: "1,000",
    image: "/special-purpose/Sealing_Wire.jpg",
  },
  {
    slug: "zip bags",
    name: "Zip Bags & ZipLocks",
    pdf: "",
    category: "special-purpose",
    description:
      "Suitable for securing cheques, sensitive documents, evidences from tampering.",
    moq: "300",
    image: "/special-purpose/ZipPacks_ZipLocks.jpg",
  },
  {
    slug: "card vault",
    name: "Card Vault",
    pdf: "",
    category: "special-purpose",
    description:
      "Transparent case stores 8 decks of playing cards to be sealed with spiderlock",
    moq: "",
    image: "/special-purpose/Card_Vault.jpg",
  },
  {
    slug: "cable tie",
    name: "Cable Tie",
    pdf: "",
    category: "special-purpose",
    description:
      "For closing bins, sacks. Bundling wires.Tagging.. Not a security seal.",
    moq: "Php3000",
    image: "/special-purpose/Cable_Tie.jpg",
  },
  {
    slug: "marker tie",
    name: "Marker Tie",
    pdf: "",
    category: "special-purpose",
    description:
      "Provides a write-on surface to label wires, cables, tubes & hoses",
    moq: "Php3000",
    image: "/special-purpose/Marker_Tie.jpg",
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
    image: "/barrier-seal/TavBolt_BP.jpg",
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
  moq?: number | string;
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
    time: 1,
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
    time: 1,
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

export const meta = {
  "/": {
    keywords: [
      "plastic security seals",
      "metal seal",
      "truck seal",
      "fortris seal",
      "tamper-evident seals",
      "numbered plastic seal",
      "tamper proof",
      "security seals",
      "unisto seal",
    ],
  },
  "/about": {
    description:
      "This page is about what Masterseal Corporation company, has achieved in the area of security seals distribution in the Philippines. It also talks about the variety of products and services that the company provides to manufacturers in the Philippines. For example, some of its main products include metal security seals.",
    keywords: [
      "primera seal",
      "mega fortris",
      "cathay seal",
      "unisto seal",
      "essentra security seal",
    ],
  },
  "/products/fixed-length": {
    description:
      "Masterseal Corporation has various seal products to suit your needs. Feel free to contact us for queries or quotations.",
    keywords: [
      "plastic security seals",
      "bolt seal",
      "cable seal",
      "tanker seals",
      "indicative seal",
      "pre-numbered seals",
      "numbered plastic seals",
      "Essentra distributor",
      "high security truck seal",
      "fortris seal",
      "unisto",
      "metal seals",
    ],
  },
  "/products/variable-length": {
    description:
      "Masterseal Corporation has various seal products to suit your needs. Feel free to contact us for queries or quotations.",
    keywords: [
      "plastic security seals",
      "bolt seal",
      "cable seal",
      "tanker seals",
      "indicative seal",
      "pre-numbered seals",
      "numbered plastic seals",
      "Essentra distributor",
      "high security truck seal",
      "fortris seal",
      "unisto",
      "metal seals",
    ],
  },
  "/products/barrier-seal": {
    description:
      "Masterseal Corporation has various seal products to suit your needs. Feel free to contact us for queries or quotations.",
    keywords: [
      "plastic security seals",
      "bolt seal",
      "cable seal",
      "tanker seals",
      "indicative seal",
      "pre-numbered seals",
      "numbered plastic seals",
      "Essentra distributor",
      "high security truck seal",
      "fortris seal",
      "unisto",
      "metal seals",
    ],
  },
  "/products/special-purpose": {
    description:
      "Masterseal Corporation has various seal products to suit your needs. Feel free to contact us for queries or quotations.",
    keywords: [
      "plastic security seals",
      "bolt seal",
      "cable seal",
      "tanker seals",
      "indicative seal",
      "pre-numbered seals",
      "numbered plastic seals",
      "Essentra distributor",
      "high security truck seal",
      "fortris seal",
      "unisto",
      "metal seals",
    ],
  },
  blogs: {
    description:
      "Masterseal Corporation is dedicated to providing quality seals which you can trust. Thus, in order to help you make an informed decision about which seal to purchase, we have written a blog which will inform and guide you on the seals that will best suit your company's needs.",
  },
};
