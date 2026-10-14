import type { Policy } from "../policies";

export const policiesEn: Policy[] = [
  {
    slug: "quality-policy",
    code: "POL-002",
    title: "Quality Policy",
    items: [
      "Becoming a well-known and trusted company in our sector by ensuring that our work is completed on time and in compliance with all applicable legal and sector requirements;",
      "In line with our mission and vision as an organisation, serving as a trusted and leading company in our sector, providing accessible and safe services by monitoring and using evolving and current technologies, and demonstrating customer focus and leadership in order to meet customer expectations;",
      "Achieving company and departmental objectives in a spirit of teamwork, founded on our organisational culture and customer focus;",
      "Reviewing our business processes through performance measurement, monitoring and analysis, and adopting improvement and corrective approaches that will enhance our performance;",
      "Developing the efficiency of all our processes to international standards in line with the principle of continual improvement;",
      "Establishing and implementing the ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 management systems within our organisation under the umbrella of an “Integrated Management System”, in accordance with standard, regulatory, legal, organisational and customer requirements, and fulfilling their requirements, documenting, certifying and continually improving them in a sustainable manner;",
      "Acting as a team and in accordance with our organisation’s mission and vision;",
      "Acting in compliance with the applicable laws and regulations;",
      "Understanding the needs and expectations of our customers;",
      "Focusing on customer satisfaction in all our activities;",
      "Providing the best possible support in after-sales services;",
      "Applying a transparent management system that is open to continual improvement at every stage of our activities;",
      "Recognising that quality is a team effort, supporting the effectiveness of teamwork through training, and ensuring the continual development of our employees’ competences;",
      "While raising our quality, becoming the preferred choice among our competitors by offering our customers products with a favourable price–performance ratio exactly when they need them;",
      "Identifying and monitoring environmental aspects and product life cycles;",
      "Taking all necessary measures to protect the health of our employees and the safety of the workplace, and always being prepared for any adverse situation;",
      "Adopting risk-based thinking when planning and implementing the Integrated Management System, the high-level integration of the Quality, Environmental and OHS management systems;",
      "As top management, leading the integrated management system with a focus on the customer and supporting leadership among all our employees;",
      "Encouraging leadership in our business processes both within and outside our organisation, and planning, delivering and sustaining training that will enhance our employees’ competences;",
      "Managing our activities in an integrated manner together with our Environmental and Occupational Health and Safety Management Systems, and developing and fulfilling all requirements with the aim of becoming an exemplary organisation through our leadership in quality in the railway and energy sectors.",
    ],
    closing: "As our quality policy, we commit to all of the above.",
    signature: "General Manager",
    date: "01.05.2025",
  },
  {
    slug: "environment-ohs-policy",
    code: "POL-001",
    title: "Environmental and OHS Policy",
    intro:
      "Guided by the principle of “sustainable development”, we direct our work as an organisation towards minimising the environmental impacts arising from all our activities and contributing to the protection of the environment. On the basis of this vision, we continually renew ourselves and adopt the following principles. We commit to:",
    items: [
      "Complying with all legal regulations and other obligations relating to the environment and occupational health and safety applicable to our sector;",
      "Establishing, implementing and continually improving our Environmental and OHS management systems;",
      "Striving to reduce waste from our facilities at source and to recover it wherever possible;",
      "Reducing losses by following technological developments and keeping the efficiency of our facilities at the highest level;",
      "Minimising the use of natural resources through our continual improvement efforts;",
      "Raising awareness of environmental and occupational health and safety matters among all our employees and all the individuals and companies with which we have dealings;",
      "Continually improving our OHS and environmental performance, and taking occupational safety and environmental impacts into account in our new investments;",
      "Establishing and continually developing an integrated management system focused on preventing all occupational accidents, occupational diseases, environmental damage and nonconformities;",
      "Complying with the legal requirements in force;",
      "Establishing measurable performance indicators and monitoring them through regular audits;",
      "Creating a supportive organisational culture that calls for visible leadership and clear accountability;",
      "Identifying risks and requirements, and regularly updating our emergency procedures;",
      "Communicating effectively with our stakeholders and spreading the awareness that the defined objectives can be achieved through the safe behaviour and contribution of all employees.",
    ],
    closing:
      "Together with our employees as a team, we commit to continuing our work and investment in order to fulfil the requirements of this policy and our environmental and occupational health and safety responsibilities, to continually develop and improve our work in the light of the principles set out above, and to comply with legal, customer and other requirements.",
    signature: "General Manager",
    date: "01.05.2025",
  },
];

export const policySlugMap: Record<string, string> = {
  "kalite-politikasi": "quality-policy",
  "cevre-ve-isg-politikasi": "environment-ohs-policy",
};
