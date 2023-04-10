import WhizzperLogo from "../assets/portfolio/whizzper.png";
import PrimalLogo from "../assets/portfolio/primal.png";
import ReweLogo from "../assets/portfolio/rewe-ipad-app.jpeg";
import IGPLogo from "../assets/portfolio/igp.jpeg";
import VermieterlupeLogo from "../assets/portfolio/vermieterlupe.jpeg";

const PROJECTS = {
  REWE: {
    name: "Rewe Allergene Terminal",
    colorClass: "bg-green-50",
    description: "Informationen an der Frischetheke für REWE Kunden. Automatische Updates und intelligente Suche über die spezialisierte iPad App.",
    technologies: ["ionic", "typescript", "nestjs"],
    image: ReweLogo,
  },
  MWAY: {
    name: "mway interaktiver Messeplan",
    colorClass: "bg-green-50",
    description: "Interaktiver Plan zur Navigation von Messen und Hallen. Auflistung von Events und Ausstellern.",
    technologies: ["angular", "ionic", "typescript", "node", "graphql"],
    image: IGPLogo,
    url: "https://automechanika.messefrankfurt.com/frankfurt/de/suche.html",
  },
  WHIZZPER: {
    name: "whizzper",
    colorClass: "bg-yellow-50",
    description: "Die unternehmensinterne Audio-Bibliothek.",
    technologies: ["angular", "ionic", "strapi", "flutter", "node", "dart", "typescript"],
    image: WhizzperLogo,
    url: "https://whizzper.de",
  },
  PRIMAL: {
    name: "primal.fm",
    colorClass: "bg-red-50",
    description: "Dein Web-Radiosender für Hardstyle & EDM!",
    technologies: ["flutter", "dart", "firebase-notifications", "kotlin"],
    image: PrimalLogo,
    url: "https://primal.fm",
  },
  VERMIETERLUPE: {
    name: "Vermieterlupe",
    colorClass: "",
    description: "Bewertungsportal zur anonymen Bewertung von Vermietern.",
    technologies: ["vue", "typescript", "node", "firebase", "quasar"],
    image: VermieterlupeLogo,
  },
};

export { PROJECTS };
