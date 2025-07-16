import React from "react";
import { useParams } from "react-router-dom";

// Replace with actual file paths for your components
import TechnologyIT from "./TechnologyIT";
import ProductServicesDevelopment from "./ProductServicesDevelopment";

const data = {
  "technology-it": {
    title: "Technology IT",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Technology IT",
      "Product & Services Development"
    ],
    capability: "innovation-technology",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: TechnologyIT,
  },
  "product-services-development": {
    title: "Product & Services Development",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Technology IT",
      "Product & Services Development"
    ],
    capability: "innovation-technology",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: ProductServicesDevelopment,
  },
};

const InnovationTechPartsRouter = () => {
  const { slug } = useParams();

  const selected = data[slug];

  if (!selected) {
    return (
      <div className="p-8 text-center text-red-600">
        No component found for: {slug}
      </div>
    );
  }

  const ComponentToRender = selected.component;

  return (
    <ComponentToRender
      title={selected.title}
      backgroundImage={selected.backgroundImage}
      backgroundImage2={selected.backgroundImage2}
      backgroundImage3={selected.backgroundImage3}
      imgexpo={selected.imgexpo}
      types={selected.types}
      capability={selected.capability}
    />
  );
};

export default InnovationTechPartsRouter;
