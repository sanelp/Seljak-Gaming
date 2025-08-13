import char1 from "../img/produkt1/char1.jpg";
import char2 from "../img/produkt1/char2.jpg";
import char3 from "../img/produkt1/char3.jpg";
import char4 from "../img/produkt1/char4.jpg";
import red1 from "../img/produkt2/red1.jpg";
import red2 from "../img/produkt2/red2.jpg";
import red3 from "../img/produkt2/red3.jpg";
import red4 from "../img/produkt2/red4.jpg";
import red5 from "../img/produkt2/red5.jpg";
import ram from "../img/ram/hyperx/ram.jpg";
import keyboard from "../img/Accessories/keyboard/keyboard.jpg";

const products = [
  {
    id: 1,
    name: "Charmander Limited Edition PC",
    category: "PCs",
    description: "Høyytelses gaming-PC med unikt Charmander-tema og kraftige komponenter.",
    specifications: [
      "GIGABYTE RTX 2060",
      "AMD Ryzen 5 3600",
      "AMD Wraith Stealth",
      "GIGABYTE A520M S2H",
      "16GB DDR4 RAM",
      "Montech XR TG",
      "500 WATTS PSU",
    ],
    price: 8999,
    images: [char1, char2, char3, char4],
    detailedDescription:
      "Charmander Limited Edition PC er en høyytelses gaming-PC med et unikt Charmander-tema. Denne PC-en er utstyrt med en GIGABYTE RTX 2060 grafikkort som gir deg fantastisk grafikkytelse for alle dine favorittspill. Den kraftige AMD Ryzen 5 3600 prosessoren sikrer at du kan kjøre flere applikasjoner samtidig uten problemer. PC-en kommer med en AMD Wraith Stealth kjøler som holder systemet kjølig selv under intense gamingøkter. Hovedkortet er et GIGABYTE A520M S2H som gir deg pålitelig ytelse og mange tilkoblingsmuligheter. Kabinettet er et Montech XR TG som gir et stilig utseende og god luftstrøm for å holde komponentene dine kjølige.",
  },
  {
    id: 2,
    name: "Red Beast Gaming PC",
    category: "PCs",
    description: "Kraftig gaming-PC designet for enestående ytelse og pålitelighet.",
    specifications: [
      "ASUS GTX 1070",
      "i5 11400F",
      "16GB DDR4 RAM",
      "500GB M.2 SSD",
      "500GB HDD",
      "500 WATTS PSU",
    ],
    price: 5500,
    images: [red1, red2, red3, red4, red5],
    detailedDescription:
      "Red Beast Gaming PC er en kraftig gaming-PC designet for å levere enestående ytelse og pålitelighet. Utstyrt med et ASUS GTX 1070 grafikkort, gir denne PC-en deg imponerende grafikk og jevn spilling selv på de mest krevende spillene. Den kraftige i5 11400F prosessoren sikrer rask og effektiv behandling av data, slik at du kan multitaske uten problemer. Med 16GB DDR4 RAM får du rask og responsiv ytelse, og den store lagringskapasiteten med 500GB M.2 SSD og 500GB HDD gir deg rikelig med plass til spill, applikasjoner og filer. 500 WATTS PSU sørger for stabil strømforsyning til alle komponentene. Denne PC-en er perfekt for gamere som ønsker en pålitelig og kraftig maskin til en rimelig pris.",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    category: "Accessories",
    description: "Høyytelses gaming-tastatur med mekaniske brytere og RGB-belysning.",
    specifications: [
      "Mechanical switches",
      "RGB lighting",
      "Programmable keys",
    ],
    price: 999,
    images: [keyboard],
    detailedDescription:
      "Gaming Keyboard er et høyytelses gaming-tastatur med mekaniske brytere og RGB-belysning. Dette tastaturet gir deg enestående respons og holdbarhet, og de programmerbare tastene lar deg tilpasse tastaturet etter dine behov. Perfekt for gamere som ønsker en pålitelig og kraftig tastatur.",
  },
  {
    id: 4,
    name: "Hyper X Fury 16 GB DDR4 RAM",
    category: "Components",
    description: "HyperX Fury DDR4-RAM gir deg topp ytelse for gaming og avanserte oppgaver.",
    specifications: ["2x8 GB DDR4 RAM", "2133 MHz"],
    price: 999,
    images: [ram],
    detailedDescription:
      "HyperX Fury Black DDR4-RAM fra Kingston gir deg topp ytelse. Med 16 GB RAM på 2133 MHz får du kraften du trenger når du spiller spill eller gjør andre avanserte øvelser.",
  },
];

export default products;
