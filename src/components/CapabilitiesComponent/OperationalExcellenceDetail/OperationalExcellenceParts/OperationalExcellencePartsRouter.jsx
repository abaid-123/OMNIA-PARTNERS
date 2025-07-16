import React from "react";
import { useParams } from "react-router-dom";

// Import your detailed components for each capability (replace with actual file paths)
import OperationalServices from "./OperationalServices";
import ManufacturingQuality from "./ManufacturingQuality";
import SupplyChain from "./SupplyChain";

const data = {
  "operational-services-excellence": {
    title: "Operational & Services Excellence",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Operational & Services Excellence",
      "Manufacturing & Quality Assurance",
      "Supply Chain Optimization"
    ],
    capability: "operational-excellence",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: OperationalServices,
  },
  "manufacturing-quality-assurance": {
    title: "Manufacturing & Quality Assurance",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Operational & Services Excellence",
      "Manufacturing & Quality Assurance",
      "Supply Chain Optimization"
    ],
    capability: "operational-excellence",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: ManufacturingQuality,
  },
  "supply-chain-optimization": {
    title: "Supply Chain Optimization",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Operational & Services Excellence",
      "Manufacturing & Quality Assurance",
      "Supply Chain Optimization"
    ],
    capability: "operational-excellence",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: SupplyChain,
  }
};

const OperationalExcellencePartsRouter = () => {
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

export default OperationalExcellencePartsRouter;
