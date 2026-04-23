export interface Project {
  title: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "AI Soccer Insights Platform",
    role: "Full Stack Developer",
    company: "Edstem Technologies Pvt. Ltd, Kochi",
    period: "2026 – Present",
    description: [
      "Developed an AI-powered soccer insights platform using Next.js and Flask to generate betting tips for upcoming and live matches.",
      "Built REST APIs in Python (Flask) to process historical match data and deliver live game statistics.",
      "Integrated LLM-based text generation to produce automated match analysis, predictions, and betting insights.",
      "Designed real-time APIs and dynamic UI components to display live matches, team metrics, and AI-generated recommendations.",
    ],
    tech: ["Next.js", "Flask", "Python", "OpenAI", "Azure Blob", "PostgreSQL", "AWS"],
  },
  {
    title: "Gym Discovery App",
    role: "Sr Front End Developer",
    company: "Edstem Technologies Pvt. Ltd, Kochi",
    period: "2025 – 2025",
    description: [
      "Developed a cross-platform mobile application using React Native, enabling users to discover nearby gyms, book sessions, and manage fitness schedules seamlessly.",
      "Built and optimized a partner-facing app for gym owners to register gyms, manage bookings, and track user check-ins in real time.",
      "Integrated geolocation services for accurate gym discovery and session tracking based on user proximity.",
      "Implemented interactive map views using Google Maps API, allowing users to view gym locations and directions dynamically.",
    ],
    tech: ["React Native", "Next.js", "AWS", "Google Maps API"],
  },
  {
    title: "Telstra Tconnect",
    role: "Assistant Team Lead / Full Stack Developer",
    company: "Edstem Technologies Pvt. Ltd, Kochi",
    period: "2022 – 2025",
    description: [
      "Led a team of five individuals, overseeing client requirements, effort estimation, technical specifications, and release planning.",
      "Worked on a web application supported by Node microservices, demonstrating proficiency in React and Node.js.",
      "Collaborated with clients to understand requirements and design APIs tailored to their needs.",
    ],
    tech: ["React", "Node.js", "Microservices", "TypeScript"],
  },
  {
    title: "ELSEVIER OrgTool & IDXchange",
    role: "Software Developer",
    company: "Edstem Technologies Pvt. Ltd, Kochi",
    period: "2021 – 2022",
    description: [
      "Served as a Software Developer for ELSEVIER's OrgTool Project, a web-based application leveraging React and Node.js.",
      "Contributed as a Developer in the IDXchange Project, utilizing React to build an efficient and robust platform.",
    ],
    tech: ["React", "Node.js"],
  },
  {
    title: "NEWSCOM News App",
    role: "Software Developer",
    company: "Edstem Technologies Pvt. Ltd, Kochi",
    period: "2020 – 2021",
    description: [
      "Collaborated on the NEWSCOM Project, an innovative news mobile application delivering real-time updates in Malayalam and Telugu languages.",
      "Demonstrated proficiency in Flutter and Node.js while actively contributing to the project's development and implementation.",
    ],
    tech: ["Flutter", "Node.js"],
  },
  {
    title: "Karnataka Electrical / BESCOM Network",
    role: "GIS Engineer",
    company: "NSG India Pvt. Ltd, Hyderabad",
    period: "2017 – 2019",
    description: [
      "Engaged in the Karnataka Electrical Project, aimed at facilitating graphical representation of the BESCOM Electrical Network.",
      "Utilized ArcMap and AutoCAD to develop a user-friendly portal enabling seamless access, editing, updating, and tracing of data from any location via internet or intranet.",
      "Ensured validation of the electrical network in accordance with client guidelines, incorporating feedback from field personnel.",
    ],
    tech: ["ArcMap", "AutoCAD", "GIS"],
  },
  {
    title: "Telecom Networking Project",
    role: "GIS Engineer",
    company: "Cadsys (India) Pvt Ltd, Hyderabad",
    period: "2015 – 2016",
    description: [
      "Employed as a Graduate Engineer Trainee, contributing to the development of a telecom network infrastructure based on client-provided blueprints.",
      "Utilized Google Maps to strategically place facilities in designated locations, ensuring efficient network deployment and alignment with project objectives.",
    ],
    tech: ["Google Maps", "GIS"],
  },
];
