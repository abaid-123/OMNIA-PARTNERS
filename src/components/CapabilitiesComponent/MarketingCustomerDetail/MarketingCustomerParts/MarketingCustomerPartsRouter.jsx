import React from "react";
import { useParams } from "react-router-dom";

// Import your detailed components for each capability (replace with correct paths)
import CustomerRelationship from "./CustomerRelationship";
import SalesMarketingBranding from "./SalesMarketingBranding";

const data = {
  "customer-relationship-management": {
    title: "Customer Relationship Management",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Customer Relationship Management",
      "Sales, Marketing & Branding"
    ],
    capability: "marketing-customer-relations",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: CustomerRelationship,
  },
  "sales-marketing-branding": {
    title: "Sales, Marketing & Branding",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Customer Relationship Management",
      "Sales, Marketing & Branding"
    ],
    capability: "marketing-customer-relations",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: SalesMarketingBranding,
  }
};

const MarketingCustomerPartsRouter = () => {
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

export default MarketingCustomerPartsRouter;
