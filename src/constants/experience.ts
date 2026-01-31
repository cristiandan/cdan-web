export type Experience = {
    company: string;
    designation: string;
    logo: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    stack: string[];
    imageClass?: string;
}

export const experience: Experience[] = [
  {
    company: "Yayzy",
    designation: "Co-founder & CTO",
    logo: "/images/logos/yayzy-logo.png",
    description: "Built fintech infrastructure connecting 2,500+ banks via Open Banking APIs. Led team of 7 engineers, raised ~$1.5M. Featured as Apple App of the Day.",
    startDate: "2019",
    endDate: "2024",
    location: "London, UK",
    stack: ["Node.js", "React Native", "AWS", "Python", "Terraform", "PostgreSQL"]
  },
  {
    company: "Zebra Fuel",
    designation: "Senior Engineer / Mobile Lead",
    logo: "/images/logos/zebra-logo.png",
    description: "Led mobile stack and dispatch logic for on-demand fuel delivery. Managed tech serving 1000s of users and 70 business fleets.",
    startDate: "2018",
    endDate: "2019",
    location: "London, UK",
    stack: ["React Native", "Redux", "GraphQL", "Relay", "Node.js", "Google Maps API"]
  },
  {
    company: "Stint",
    designation: "Lead Mobile Engineer",
    logo: "/images/logos/stint-logo.png",
    description: "Grew platform to 4k users, leading team of 6 engineers on workforce management mobile app.",
    startDate: "2017",
    endDate: "2018",
    location: "London, UK",
    stack: ["React Native", "Redux", "Node.js", "Express", "MongoDB"]
  },
  {
    company: "City365",
    designation: "Co-founder & Lead Developer",
    logo: "/images/logos/city365-logo.png",
    description: "Built hyper-local marketplace connecting restaurants with students. Scaled Azure backend to handle tens of thousands of requests/sec.",
    startDate: "2015",
    endDate: "2017",
    location: "Cluj-Napoca, Romania",
    stack: ["Ionic", "Angular", "Node.js", "Azure", "MongoDB"]
  }
];
