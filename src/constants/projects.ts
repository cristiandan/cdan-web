export type Project = {
    title: string;
    src: string;
    href: string;
    description: string;
    stack: string[];
}

export const projects: Project[] = [
    {
      title: "Yayzy",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
      href: "https://apps.apple.com/gb/app/yayzy-co2-carbon-tracker/id1510781182",
      description:
        "Fintech app connecting 2,500+ banks via Open Banking APIs for automated carbon footprint tracking. Featured as Apple App of the Day.",
      stack: ["Node.js", "React Native", "AWS", "Python ML", "Terraform"],
    },
    {
      title: "Zebra Fuel",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/animated-testimonials.webp",
      href: "#",
      description:
        "On-demand fuel delivery platform with real-time routing and fleet management for 1000s of users and 70 business fleets.",
      stack: ["React Native", "GraphQL", "Relay", "Node.js"],
    },
    {
      title: "City365",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/apple-cards-carousel.png",
      href: "https://www.zf.ro/business-hi-tech/patru-studenti-din-cluj-au-o-aplicatie-care-ajuta-restaurantele-sa-gaseasca-clienti-14770260",
      description:
        "Hyper-local marketplace connecting restaurants with empty tables to students seeking deals. Scaled to tens of thousands of requests/sec.",
      stack: ["Ionic", "Angular", "Node.js", "Azure"],
    },
    {
      title: "Clawdbot",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/floating-dock.png",
      href: "https://github.com/clawdbot/clawdbot",
      description:
        "AI assistant infrastructure with multi-channel messaging, browser automation, and extensible skill system.",
      stack: ["TypeScript", "Node.js", "LLM APIs", "Puppeteer"],
    },
  ];
