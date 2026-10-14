import { services as tr } from "../services";
import type { Service, ServiceSlug } from "../types";

type Text = Pick<Service, "title" | "short" | "tagline" | "lead" | "body" | "highlight" | "scope">;

const text: Record<ServiceSlug, Text> = {
  "ana-hat": {
    title: "Mainline Railway Systems",
    short: "Mainline Railways",
    tagline: "High-Speed and Conventional Lines",
    lead: "With our capabilities in electrification, signalling, infrastructure and superstructure, we make rail transport more efficient and safer.",
    body: [
      "To ensure seamless passenger and freight operations, we integrate advanced technologies into mainline projects and build sustainable, robust railway infrastructure.",
      "With qualified staff and engineers, we played a key role in the High-Speed Rail Project as the first Turkish company to deliver state-of-the-art superstructure, electrification, signalling and communication solutions.",
    ],
    highlight: {
      title: "On mainline railway systems",
      text: "we build durable, reliable solutions for the demands of long-distance transport.",
    },
    scope: [
      "25 kV AC catenary systems",
      "High-speed line electrification",
      "Conventional line electrification",
      "Infrastructure and superstructure works",
      "Maintenance and repair",
      "Turnout supply and installation",
    ],
  },
  "hafif-rayli": {
    title: "Light Rail Systems",
    short: "Light Rail Systems",
    tagline: "Tramway Works",
    lead: "As a specialist in light rail projects that bring comfort and speed to urban transport, we deliver electrification, signalling, infrastructure and superstructure solutions.",
    body: [
      "These systems reduce congestion in urban areas while offering an environmentally friendly transport alternative.",
      "From İstanbul to Antalya, and from Bursa to Eskişehir and Kocaeli, we have delivered traction power, catenary, SCADA and electromechanical works on tram and light rail lines in many cities.",
    ],
    highlight: {
      title: "Efficient, safe and modern",
      text: "light rail lines that strengthen the sustainable transport infrastructure of our cities.",
    },
    scope: [
      "Tramway construction",
      "Overhead catenary systems",
      "Traction power and electrification",
      "SCADA systems",
      "Traffic and junction control systems",
      "Electromechanical works",
    ],
  },
  sinyalizasyon: {
    title: "Signalling",
    short: "Signalling",
    tagline: "Signalling System Installation",
    lead: "Safety and efficiency depend on the right signalling infrastructure. We add value to railway projects with modern, innovative signalling solutions.",
    body: [
      "With signalling systems designed specifically for each project, we deliver maximum safety and optimal traffic management for both passenger and freight services.",
      "We manage the full process, from installing signalling, SCADA and telecommunication systems and laying, jointing, earthing and terminating cables, through to testing and commissioning.",
    ],
    highlight: {
      title: "Smart signalling technologies",
      text: "that raise energy efficiency and lower operating costs, shaping the future of the sector.",
    },
    scope: [
      "Signalling system installation",
      "SCADA and telecommunications",
      "Fibre-optic cabling and termination",
      "Signalling relocation",
      "Relay panels and telecontrol",
      "Testing and commissioning",
    ],
  },
  enerji: {
    title: "Energy",
    short: "Energy",
    tagline: "Power Generation, Transmission and Distribution",
    lead: "We provide comprehensive solutions in electrification and power generation, transmission and distribution.",
    body: [
      "Led by railway projects, we build the reliable energy systems that many sectors depend on, ensuring sustainability.",
      "Our work spans 154 kV substations, hydroelectric plant operation, LV/MV distribution networks and reactive power compensation.",
    ],
    highlight: {
      title: "Equipped with modern technology,",
      text: "our production capacity advances energy infrastructure with efficient, environmentally conscious solutions.",
    },
    scope: [
      "154 kV substations",
      "Hydroelectric plant operation",
      "LV / MV distribution networks",
      "Power transmission lines",
      "SVC reactive power compensation",
      "Substation operation",
    ],
  },
  insaat: {
    title: "Construction Works",
    short: "Construction",
    tagline: "Construction and Repair Works",
    lead: "We provide comprehensive, high-standard services for all the construction works required in railway projects.",
    body: [
      "From infrastructure to superstructure, our specialised team and modern equipment deliver reliable solutions at every stage.",
      "We build at every scale — sewerage and drinking-water lines, school strengthening and repair, station buildings and industrial facilities.",
    ],
    highlight: {
      title: "Safety and durability",
      text: "combined with good design, for long-lasting and functional structures.",
    },
    scope: [
      "Building construction and strengthening",
      "Sewerage and drinking-water lines",
      "Station buildings",
      "Drainage and infrastructure works",
      "Industrial facility construction",
      "General repair",
    ],
  },
  malzeme: {
    title: "Material Supply and Sales",
    short: "Material Supply",
    tagline: "Material Supply and Sales",
    lead: "We supply all the materials your railway projects need, to high quality standards.",
    body: [
      "Offering a wide range from infrastructure to superstructure, we help your projects progress without interruption.",
      "In our two factories, with 20,000 m² and 6,000 m² of enclosed space, we manufacture steel structures, catenary, energy and signalling materials.",
    ],
    highlight: {
      title: "Reliable sales and support.",
      text: "With the right material selection and on-time delivery, we add value to the success of your projects.",
    },
    scope: [
      "Catenary materials",
      "Silicone insulators and tensioning devices",
      "Contact wire and droppers",
      "Power transformers and circuit breakers",
      "Signalling materials",
      "After-sales support",
    ],
  },
};

export const servicesEn: Service[] = tr.map((s) => ({ ...s, ...text[s.slug] }));
