import React from "react";
import { useParams } from "react-router-dom";
import StrategicServicesHome from "../../components/CapabilitiesComponent/StrategicDetail/StrategicServicesHome";
import FinancialLegalServicesHome from "../../components/CapabilitiesComponent/FinancialLegalDetail/FinancialLegalServicesHome";
import MarketingCustomerRelationsHome from "../../components/CapabilitiesComponent/MarketingCustomerDetail/MarketingCustomerRelationsHome";
import OperationalExcellenceHome from "../../components/CapabilitiesComponent/OperationalExcellenceDetail/OperationalExcellenceHome";
import HumanResourcesHome from "../../components/CapabilitiesComponent/HumanResourcesDetail/HumanResourcesHome";
import InnovationTechnologyHome from "../../components/CapabilitiesComponent/InnovationTechDetail/InnovationTechnologyHome";
import SustainabilityHome from "../../components/CapabilitiesComponent/SustainabilityDetail/SustainabilityHome";
const capabilityData = {
  "strategic-services": {
    name: "Strategic Services",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    expoimage: "/images/capabilitiesImage/Overview.png",

    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "strategic-services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/Space.png",
  },
  "financial-legal-services": {
    name: "Financial & Legal Services",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    expoimage: "/images/capabilitiesImage/Overview.png",
    types: [
      "Financial Planning & Management",
      "Intellectual Property & Licensing",
      "Legal & Regulatory",
      "Commercial Contracts",
    ],
    capability: "financial-legal-services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/Space.png",
  },
  "marketing-customer-relations": {
    name: "Marketing & Customer Relations",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    expoimage: "/images/capabilitiesImage/Overview.png",
    types: ["Customer Relationship Management", "Sales, Marketing & Branding"],
    capability: "marketing-customer-relations",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/Space.png",
  },
  "operational-excellence": {
    name: "Operational Excellence",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    expoimage: "/images/capabilitiesImage/Overview.png",
    types: [
      "Operational & Services Excellence",
      "Manufacturing & Quality Assurance",
      "Supply Chain Optimization",
    ],
    capability: "operational-excellence",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/Space.png",
  },
  "human-resources-organizational-development": {
    name: "Human Resources & Organizational Development",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    expoimage: "/images/capabilitiesImage/Overview.png",
    types: [
      "Human Resources",
      "Performance & Salary Management",
      "Talent Acquisition & Professional Development",
      "Coaching Organizational Developments & Training",
      "Management Services & Staff Augmentation",
    ],
    capability: "human-resources-organizational-development",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.png",
    backgroundImage3: "/images/capabilitiesImage/Space.png",
  },
  "innovation-technology": {
    name: "Innovation & Technology",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    expoimage: "/images/capabilitiesImage/Overview.png",
    types: ["Technology IT", "Product & Services Development"],
    capability: "innovation-technology",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/Space.png",
  },
  "sustainability-social-responsibility": {
    name: "Sustainability & Social Responsibility",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    expoimage: "/images/capabilitiesImage/Overview.png",
    types: [],
    capability: "sustainability-social-responsibility",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/Space.png",
  },
};

const CapabilityRouter = () => {
  const { slug } = useParams();
  const capabilityProps = capabilityData[slug];

  if (!capabilityProps) {
    return (
      <div className="p-8 text-center text-red-600">
        No component found for: {slug}
      </div>
    );
  }

  const {
    name,
    backgroundImage,
    expoimage,
    types,
    
    backgroundImage2,
    backgroundImage3,
  } = capabilityProps;

  switch (slug) {
    case "strategic-services":
      return (
        <StrategicServicesHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          capability={slug}
          backgroundImage2={backgroundImage2}
          backgroundImage3={backgroundImage3}
        />
      );
    case "financial-legal-services":
      return (
        <FinancialLegalServicesHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          capability={slug}
          backgroundImage2={backgroundImage2}
          backgroundImage3={backgroundImage3}
        />
      );
    case "marketing-customer-relations":
      return (
        <MarketingCustomerRelationsHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          capability={slug}
          backgroundImage2={backgroundImage2}
          backgroundImage3={backgroundImage3}
        />
      );
    case "operational-excellence":
      return (
        <OperationalExcellenceHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          capability={slug}
          backgroundImage2={backgroundImage2}
          backgroundImage3={backgroundImage3}
        />
      );
    case "human-resources-organizational-development":
      return (
        <HumanResourcesHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          capability={slug}
          backgroundImage2={backgroundImage2}
          backgroundImage3={backgroundImage3}
        />
      );
    case "innovation-technology":
      return (
        <InnovationTechnologyHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          capability={slug}
          backgroundImage2={backgroundImage2}
          backgroundImage3={backgroundImage3}
        />
      );
    case "sustainability-social-responsibility":
      return (
        <SustainabilityHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          capability={slug}
          backgroundImage2={backgroundImage2}
          backgroundImage3={backgroundImage3}
        />
      );
    default:
      return null;
  }
};

export default CapabilityRouter;
