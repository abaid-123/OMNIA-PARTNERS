import React from "react";
import { useParams } from "react-router-dom";

// Import your detail components (replace these with actual file paths)
import FinancialPlanning from "./FinancialPlanning";
import IntellectualProperty from "./IntellectualProperty";
import LegalRegulatory from "./LegalRegulatory";
import CommercialContracts from "./CommercialContracts";

const data = {
  "financial-planning-management": {
    title: "Financial Planning & Management",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Financial Planning & Management",
      "Intellectual Property & Licensing",
      "Legal & Regulatory",
      "Commercial Contracts"
    ],
    capability: "financial-legal-services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: FinancialPlanning,
  },
  "intellectual-property-licensing": {
    title: "Intellectual Property & Licensing",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Financial Planning & Management",
      "Intellectual Property & Licensing",
      "Legal & Regulatory",
      "Commercial Contracts"
    ],
    capability: "financial-legal-services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: IntellectualProperty,
  },
  "legal-regulatory": {
    title: "Legal & Regulatory",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Financial Planning & Management",
      "Intellectual Property & Licensing",
      "Legal & Regulatory",
      "Commercial Contracts"
    ],
    capability: "financial-legal-services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: LegalRegulatory,
  },
  "commercial-contracts": {
    title: "Commercial Contracts",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Financial Planning & Management",
      "Intellectual Property & Licensing",
      "Legal & Regulatory",
      "Commercial Contracts"
    ],
    capability: "financial-legal-services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: CommercialContracts,
  }
};

const FinancialLegalPartsRouter = () => {
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

export default FinancialLegalPartsRouter;
