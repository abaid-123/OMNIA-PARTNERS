import React from "react";
import { useParams } from "react-router-dom";
import StrategicDevelopment from "./StrategicDevelopment";
import MergersAcquistions from "./MergersAcquistions";
import RiskManagement from "./RiskManagement";
import ChangeTransformationManagement from "./ChangeTransformationManagement";

const data = {
  "strategic-development": {
    title: "Strategic Development",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "Strategic Services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: StrategicDevelopment,
  },
  
  "mergers-acquistions": {
    title: "Mergers Acquistions & Valution",
    backgroundImage:
      "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "Strategic Services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",

    component: MergersAcquistions,
  },
  "risk-management": {
    title: "Risk Management",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "Strategic Services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",

    component: RiskManagement,
  },
  "change-transformation-management": {
    title: "Change & Transformation Management",
    backgroundImage:
      "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "Strategic Services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",

    component: ChangeTransformationManagement,
  },
};

const StrategicPartsRouter = ({ slug }) => {
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

export default StrategicPartsRouter;
