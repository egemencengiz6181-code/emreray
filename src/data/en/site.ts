import type { ProjectCategory } from "../types";

export const companyEn = {
  name: "EMRERAY",
  legal: "EMRERAY Enerji A.Ş.",
  founded: 1994,
  summary:
    "EMRERAY carries a responsibility for superior service and, today as yesterday, continues to move forward without compromising on quality.",
};

export const officeTitlesEn = ["Head Office", "Emreray Energy"];

export const statsEn = [
  { value: 2679, suffix: "km", label: "Conventional line electrification" },
  { value: 811, suffix: "km", label: "High-speed line electrification" },
  { value: 600, suffix: "MVA", label: "Installed capacity — power transmission and distribution" },
  { value: 80, prefix: "%", label: "Market share in railway electrification construction" },
  { value: 26000, suffix: "m²", label: "Enclosed production space across 2 factories" },
  { value: 1994, label: "Year founded", plain: true },
];

export const certificationsEn = [
  { code: "ISO 9001:2015", name: "Quality Management System", note: "TÜV NORD CERT · 11.05.2004" },
  { code: "ISO 14001:2015", name: "Environmental Management System", note: "TÜV AUSTRIA · 10.11.2008" },
  { code: "ISO 45001:2018", name: "Occupational Health & Safety", note: "Successor to OHSAS 18001" },
];

export const valuesEn = [
  {
    title: "High Technology",
    text: "We follow the dynamics of fast-changing technology closely and bring the latest solutions to every project.",
  },
  {
    title: "High Quality",
    text: "We take world standards as our benchmark and document quality at every stage through our integrated management system.",
  },
  {
    title: "High Satisfaction",
    text: "We work in a transparent, dynamic, reliable and forward-looking way, with strong relationships with people and the environment.",
  },
];

export const categoryLabelsEn: Record<ProjectCategory, string> = {
  yht: "High-Speed Rail",
  konvansiyonel: "Conventional Lines",
  sinyalizasyon: "Signalling",
  "hafif-rayli": "Light Rail",
  altyapi: "Infrastructure / Superstructure",
  "enerji-uretim": "Power Generation",
  "enerji-dagitim": "Power Distribution",
  trafo: "Substations",
  insaat: "Construction",
  malzeme: "Material Supply",
};

export const filterLabelsEn: Record<string, string> = {
  all: "All",
  yht: "High-Speed Rail",
  konvansiyonel: "Conventional Lines",
  sinyalizasyon: "Signalling",
  "hafif-rayli": "Light Rail",
  altyapi: "Infrastructure",
  enerji: "Energy",
  insaat: "Construction",
  malzeme: "Materials",
};
