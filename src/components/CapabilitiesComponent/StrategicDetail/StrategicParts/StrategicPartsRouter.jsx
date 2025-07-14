import React from "react";
import { useParams } from "react-router-dom";
import StrategicDevelopment from "./StrategicDevelopment";
import MergersAcquistions from "./MergersAcquistions";
import RiskManagement from "./RiskManagement";
import ChangeTransformationManagement from "./ChangeTransformationManagement";

const data = {
  "strategy-development": {
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
    backgroundImage3: "/images/capabilitiesImage/Space.png",
    component: StrategicDevelopment,
  },
  "mergers-acquisitions-valuation": {
    name: "Mergers Acquistions",
    imgbackgroundhero:
      "/images/industriesimages/Automotiveimages/RevUpYourStrategy1.jpg",
    imgexpo: "/images/industriesimages/Automotiveimages/automotive_img.jpg",
    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "Strategic Services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/HelpedClient.jpg",

    component: MergersAcquistions,
  },
  "risk-management": {
    name: "Risk Management",
    imgbackgroundhero: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/industriesimages/Automotiveimages/automotive_img.jpg",
    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "Strategic Services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/Space.png",

    component: RiskManagement,
  },
  "change-transformation-management": {
    name: "Change & Transformation Management",
    imgbackgroundhero:
      "/images/industriesimages/Automotiveimages/RevUpYourStrategy1.jpg",
    imgexpo: "/images/industriesimages/Automotiveimages/automotive_img.jpg",
    types: [
      "Strategic Development",
      "Mergers Acquistions",
      "Risk Management",
      "Change & Transformation Management",
    ],
    capability: "Strategic Services",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/HelpedClient.jpg",

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
