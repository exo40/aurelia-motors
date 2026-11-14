export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  year: number;
  category: "SUV" | "Berline" | "Citadine" | "Break";
  fuel: "Électrique" | "Hybride rechargeable";
  power: string;
  range?: string;
  battery?: string;
  price?: number;
  priceStatus: "Prix indicatif" | "Prix confirmé" | "Sur devis";
  availability: "Disponible en France" | "Sur commande";
  transmission: string;
  seats: number;
  dimensions: string;
  colors: string[];
  equipment: string[];
  safety: string[];
  image: string;
  gallery: string[];
  sourceLabel: string;
};

const genericCar = "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80";
const darkCar = "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80";
const interior = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80";
const zeekr001 = "https://www.datocms-assets.com/128969/1775642156-mobile-001.png?auto=format%2Ccompress%2Cenhance&q=65&w=1440";
const zeekrX = "https://www.datocms-assets.com/128969/1744281589-x-pad-mobile3.png?auto=format%2Ccompress%2Cenhance&q=65&w=1440";
const zeekr7x = "https://www.datocms-assets.com/128969/1791794360-26w36d01_cx1e_ext_21inch_f3q_onyx-black.png?auto=format%2Ccompress%2Cenhance&q=65&w=1440";
const silverCar = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85";
const cityCar = "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=85";
const roadCar = "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1400&q=85";
const electricCar = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1400&q=85";
const premiumCar = "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=85";
const crop = (url: string, position: string) => {
  const variant = new URL(url);
  variant.searchParams.set("fit", "crop");
  variant.searchParams.set("w", "1200");
  variant.searchParams.set("h", "820");
  variant.searchParams.set("q", "84");
  variant.searchParams.set("crop", position);
  return variant.toString();
};

export const vehicles: Vehicle[] = [
  { slug: "zeekr-001", brand: "Zeekr", model: "001", year: 2026, category: "Break", fuel: "Électrique", power: "400 kW", range: "620 km WLTP", battery: "100 kWh", price: 58900, priceStatus: "Prix indicatif", availability: "Sur commande", transmission: "Intégrale", seats: 5, dimensions: "4 853 × 1 900 × 1 611 mm", colors: ["Onyx Black", "Crystal White", "Tech Grey"], equipment: ["Toit panoramique", "Audio premium", "Conduite assistée"], safety: ["Aides à la conduite", "Freinage d'urgence", "Surveillance d'angle mort"], image: zeekr001, gallery: [zeekr001, crop(zeekr001, "center"), crop(zeekr001, "top"), zeekrX, interior], sourceLabel: "Visuels constructeur Zeekr — droits à confirmer" },
  { slug: "zeekr-x", brand: "Zeekr", model: "X", year: 2026, category: "SUV", fuel: "Électrique", power: "315 kW", range: "446 km WLTP", battery: "69 kWh", price: 42900, priceStatus: "Prix indicatif", availability: "Sur commande", transmission: "Propulsion", seats: 5, dimensions: "4 450 × 1 836 × 1 572 mm", colors: ["Crystal White", "Tech Grey", "Midnight Blue"], equipment: ["Écran central 14,6\"", "Caméras 360°", "Charge rapide DC"], safety: ["Euro NCAP 5 étoiles", "Assistance autoroute", "Alerte trafic transversal"], image: zeekrX, gallery: [zeekrX, crop(zeekrX, "center"), crop(zeekrX, "bottom"), zeekr001, interior], sourceLabel: "Visuels constructeur Zeekr — droits à confirmer" },
  { slug: "geely-e5", brand: "Geely", model: "E5", year: 2026, category: "SUV", fuel: "Électrique", power: "160 kW", range: "475 km WLTP", battery: "60.2 kWh", price: 37990, priceStatus: "Prix indicatif", availability: "Sur commande", transmission: "Traction", seats: 5, dimensions: "4 615 × 1 901 × 1 670 mm", colors: ["Pearl White", "Graphite", "Ocean Blue"], equipment: ["Charge 10–80 % en 27 min", "Cockpit connecté", "Aide au stationnement"], safety: ["Pack ADAS", "Protection batterie", "Caméra arrière"], image: darkCar, gallery: [darkCar, crop(darkCar, "center"), crop(darkCar, "bottom"), genericCar, interior], sourceLabel: "Référence officielle Geely France — image à valider" },
  { slug: "byd-seal", brand: "BYD", model: "Seal", year: 2026, category: "Berline", fuel: "Électrique", power: "230 kW", range: "570 km WLTP", battery: "82.5 kWh", price: 46990, priceStatus: "Prix indicatif", availability: "Sur commande", transmission: "Propulsion", seats: 5, dimensions: "4 800 × 1 875 × 1 460 mm", colors: ["Arctic Blue", "Aurora White", "Graphite"], equipment: ["Recharge rapide", "Écran rotatif", "V2L"], safety: ["Structure e-Platform", "ADAS complet", "Airbags multi-zones"], image: genericCar, gallery: [genericCar, crop(genericCar, "center"), crop(genericCar, "top"), darkCar, interior], sourceLabel: "Référence gamme BYD France — visuel de démonstration" },
  { slug: "nio-el6", brand: "NIO", model: "EL6", year: 2026, category: "SUV", fuel: "Électrique", power: "360 kW", range: "529 km CLTC", battery: "75 kWh", priceStatus: "Sur devis", availability: "Sur commande", transmission: "Intégrale", seats: 5, dimensions: "4 854 × 1 995 × 1 703 mm", colors: ["Storm Grey", "Warm Gravel", "Deep Blue"], equipment: ["Habitacle cocon", "Sièges massants", "Technologie NOMI"], safety: ["Euro NCAP 5 étoiles", "7 airbags", "Surveillance batterie"], image: zeekr7x, gallery: [zeekr7x, crop(zeekr7x, "center"), crop(zeekr7x, "top"), interior, genericCar], sourceLabel: "Référence officielle NIO — visuel de démonstration" },
  { slug: "mg4-ev", brand: "MG", model: "4 EV", year: 2026, category: "Citadine", fuel: "Électrique", power: "150 kW", range: "450 km WLTP", battery: "64 kWh", price: 29990, priceStatus: "Prix indicatif", availability: "Disponible en France", transmission: "Propulsion", seats: 5, dimensions: "4 287 × 1 836 × 1 504 mm", colors: ["Volcano Orange", "Dover White", "Pebble Black"], equipment: ["Apple CarPlay", "Pompe à chaleur", "Recharge rapide"], safety: ["MG Pilot", "Alerte collision", "Maintien de voie"], image: darkCar, gallery: [darkCar, crop(darkCar, "top"), crop(darkCar, "bottom"), genericCar, interior], sourceLabel: "Référence officielle MG France — image à valider" },
  { slug: "xiaomi-su7", brand: "Xiaomi", model: "SU7", year: 2026, category: "Berline", fuel: "Électrique", power: "220 kW", range: "668 km CLTC", battery: "73.6 kWh", price: 39900, priceStatus: "Prix indicatif", availability: "Sur commande", transmission: "Propulsion", seats: 5, dimensions: "4 997 × 1 963 × 1 455 mm", colors: ["Mineral Grey", "Pearl White", "Ocean Blue"], equipment: ["Écran panoramique", "Cockpit connecté", "Charge rapide 800 V"], safety: ["Aide au maintien de voie", "Freinage automatique", "Caméras haute définition"], image: silverCar, gallery: [silverCar, crop(silverCar, "center"), crop(silverCar, "top"), roadCar, interior], sourceLabel: "Visuel de démonstration — version et droits à confirmer" },
  { slug: "smart-1", brand: "smart", model: "#1", year: 2026, category: "SUV", fuel: "Électrique", power: "200 kW", range: "440 km WLTP", battery: "66 kWh", price: 36990, priceStatus: "Prix indicatif", availability: "Disponible en France", transmission: "Propulsion", seats: 5, dimensions: "4 270 × 1 822 × 1 636 mm", colors: ["Digital White", "Quantum Blue", "Future Black"], equipment: ["Toit panoramique", "Écran 12,8 pouces", "Stationnement automatique"], safety: ["Assistance autoroute", "Surveillance d'angle mort", "Protection proactive"], image: cityCar, gallery: [cityCar, crop(cityCar, "center"), crop(cityCar, "bottom"), electricCar, interior], sourceLabel: "Référence de gamme smart — image à valider" },
  { slug: "volvo-ex30", brand: "Volvo", model: "EX30", year: 2026, category: "Citadine", fuel: "Électrique", power: "200 kW", range: "476 km WLTP", battery: "69 kWh", price: 38990, priceStatus: "Prix indicatif", availability: "Disponible en France", transmission: "Propulsion", seats: 5, dimensions: "4 233 × 1 837 × 1 555 mm", colors: ["Cloud Blue", "Onyx Black", "Moss Yellow"], equipment: ["Audio Harman Kardon", "Google intégré", "Recharge bidirectionnelle"], safety: ["Détection cyclistes", "Alerte ouverture de porte", "City Safety"], image: electricCar, gallery: [electricCar, crop(electricCar, "center"), crop(electricCar, "top"), premiumCar, interior], sourceLabel: "Référence officielle Volvo — image à valider" },
  { slug: "byd-seagull", brand: "BYD", model: "Dolphin Mini", year: 2026, category: "Citadine", fuel: "Électrique", power: "55 kW", range: "305 km WLTP", battery: "38.9 kWh", price: 21990, priceStatus: "Prix indicatif", availability: "Sur commande", transmission: "Traction", seats: 4, dimensions: "3 780 × 1 715 × 1 580 mm", colors: ["Polar White", "Lime Green", "Midnight Blue"], equipment: ["Écran rotatif", "Recharge rapide", "Connectivité mobile"], safety: ["Caméra panoramique", "Alerte collision", "Contrôle de stabilité"], image: premiumCar, gallery: [premiumCar, crop(premiumCar, "center"), crop(premiumCar, "bottom"), cityCar, interior], sourceLabel: "Gamme internationale BYD — disponibilité à confirmer" },
];

export const brandNotes = [
  { name: "BYD", detail: "Électrique & Super Hybride", count: "Seal · Dolphin Mini" },
  { name: "Geely", detail: "Architecture mondiale GEA", count: "E2 · E5 · EM-i" },
  { name: "Chery", detail: "SUV & technologie CSH", count: "Tiggo · Arrizo" },
  { name: "MG", detail: "Électrique & hybride", count: "MG4 · S5 · EHS" },
  { name: "Zeekr", detail: "Électrique premium", count: "001 · X · 7X" },
  { name: "NIO", detail: "Smart electric", count: "EL6 · ET5" },
];

export const costDefaults = { purchase: 28000, transport: 1800, insurance: 420, customs: 900, vat: 6200, compliance: 750, other: 320, margin: 4200 };
export const calculateTotal = (costs: typeof costDefaults) => Object.values(costs).reduce((sum, value) => sum + Number(value || 0), 0);
export const whatsappUrl = (vehicle?: Vehicle) => `https://wa.me/33000000000?text=${encodeURIComponent(vehicle ? `Bonjour, je suis intéressé par le véhicule ${vehicle.brand} ${vehicle.model} présenté sur votre site. Pourriez-vous m'indiquer sa disponibilité, son prix final et les modalités d'importation en France ?` : "Bonjour, je souhaite être accompagné dans mon projet automobile.")}`;
