export const siteName = "GoldenRails";

export const navLinks = [
  { href: "/oferta", label: "Oferta" },
  { href: "/referencje", label: "Referencje" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/wspolpraca", label: "Współpraca" },
  { href: "/kariera", label: "Kariera" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const stats = [
  { value: 100, suffix: "+", label: "klientów" },
  { value: 100000, suffix: "", label: "użytkowników" },
  { value: 240, suffix: "", label: "inwestycji" },
] as const;

export const routeStops = ["Projekt", "Budowa", "Sterowanie", "Serwis"] as const;

export const offer = [
  {
    title: "Projektowanie linii",
    text: "Koncepcje tras, analizy przepustowości i dokumentacja techniczna — od studium wykonalności po projekt wykonawczy.",
  },
  {
    title: "Budowa i modernizacja",
    text: "Kompleksowe roboty torowe, przebudowa stacji i węzłów oraz modernizacja infrastruktury pod wyższe prędkości.",
  },
  {
    title: "Sterowanie ruchem",
    text: "Wdrażanie systemów srk i ETCS, integracja z istniejącą siecią oraz testy bezpieczeństwa.",
  },
  {
    title: "Utrzymanie i serwis",
    text: "Diagnostyka toru, przeglądy okresowe i szybkie reagowanie na awarie — 24 godziny na dobę.",
  },
] as const;

export const references = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Referencja ${String(i + 1).padStart(2, "0")}`,
  company: "Firma",
}));

export const contact = {
  address: "ul. Kosmatki 8, Warszawa",
  mapQuery: "kosmatki 8, warszawa",
};
