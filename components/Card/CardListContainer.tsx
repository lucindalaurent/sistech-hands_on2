import { CardList } from "./CardList";

const data = [
  {
    title: "AI Academy",
    description: ["Learn from top industry experts from AI venture", "Leverage AI for Marketers, SEO, Social Media, Creatives, and Marketing Analytics", "Practical techniques using popular AI tools" ],
    thumbnail: "/images/artificial-intelligence.png" 
  },
  {
    title: "Business Intelligence",
    description: ["Understand & solve business problems using data", "Explore AI tools through hands-on projects","Virtual internship with real cases from partners"],
    thumbnail: "/images/business-intelligence.png"
  },
  {
    title: "Digital Marketing",
    description: ["Hands-on projects to master digital marketing tools", "Run real SME ad campaigns with actual budgets", "Virtual internship with real cases from partners"],
    thumbnail: "/images/digital_marketing.png"
  },
  {
    title: "Product Management",
    description: ["Master end-to-end product management", "Innovative product development projects", "Virtual internship with real cases from partners"],
    thumbnail: "/images/product-development.png"
  },
  {
    title: "Software Engineering",
    description: ["Master top programming languages & frameworks", "Hands-on full stack software development projects", "Be mentored by industry experts"],
    thumbnail: "/images/software-development.png"
  },
  {
    title: "UI/UX Design",
    description: ["Hands-on projects to master UI/UX design principles and tools", "Design real-world applications and websites with actual user feedback", "Virtual internship with real cases from industry-leading partners"],
    thumbnail: "/images/ui_ux.png"
  }
];

const data2 = [
  {
    title: "Product Management",
    description: ["Master end-to-end product management", "Innovative product development projects", "Virtual internship with real cases from partners"],
    thumbnail: "/images/product-development.png"
  },
  {
    title: "Software Engineering",
    description: ["Master top programming languages & frameworks", "Hands-on full stack software development projects", "Be mentored by industry experts"],
    thumbnail: "/images/software-development.png"
  },
  {
    title: "UI/UX Design",
    description: ["Hands-on projects to master UI/UX design principles and tools", "Design real-world applications and websites with actual user feedback", "Virtual internship with real cases from industry-leading partners"],
    thumbnail: "/images/ui_ux.png"
  }
]

function CardListContainer() {
  return <CardList cards={data} />;
}

function CardListContainer2() {
  return <CardList cards={data2}/>;
}

export { CardListContainer, CardListContainer2 };
