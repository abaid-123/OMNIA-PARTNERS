import React from "react";
import { useParams } from "react-router-dom";
import StrategicPartsRouter from "../components/CapabilitiesComponent/StrategicDetail/StrategicParts/StrategicPartsRouter";

// ✅ Only importing Strategic for now. Make sure this file exists at the correct path:

// ❌ Uncomment others only when you confirm those files exist
import FinancialLegalPartsRouter from "../components/CapabilitiesComponent/FinancialLegalDetail/FinancialLegalParts/FinancialLegalPartsRouter";
import MarketingCustomerPartsRouter from "../components/CapabilitiesComponent/MarketingCustomerDetail/MarketingCustomerParts/MarketingCustomerPartsRouter";
import OperationalExcellencePartsRouter from "../components/CapabilitiesComponent/OperationalExcellenceDetail/OperationalExcellenceParts/OperationalExcellencePartsRouter";
import HumanResourcesPartsRouter from "../components/CapabilitiesComponent/HumanResourcesDetail/HumanResourcesParts/HumanResourcesPartsRouter";
import InnovationTechPartsRouter from "../components/CapabilitiesComponent/InnovationTechDetail/InnovationTechParts/InnovationTechPartsRouter";
import SustainabilityRouter from "../components/CapabilitiesComponent/SustainabilityDetail/SustainabilityParts/SustainabilityRouter";


const CapabilityPartsRouter = () => {
  const { capability, slug } = useParams();

  switch (capability) {
    case "strategic-services":
      return <StrategicPartsRouter slug={slug} />;

    case "financial-legal-services":
      return <FinancialLegalPartsRouter slug={slug} />;
    case "marketing-customer-relations":
      return <MarketingCustomerPartsRouter slug={slug} />;
    case "operational-excellence":
      return <OperationalExcellencePartsRouter slug={slug} />;
    case "human-resources-organizational-development":
      return <HumanResourcesPartsRouter slug={slug} />;
    case "innovation-technology":
      return <InnovationTechPartsRouter slug={slug} />;
    case "sustainability-social-responsibility":
      return <SustainabilityRouter slug={slug} />;

    default:
      return (
        <div className="text-red-600 p-8 text-center">
          No parts router found for capability: {capability}
        </div>
      );
  }
};

export default CapabilityPartsRouter;
