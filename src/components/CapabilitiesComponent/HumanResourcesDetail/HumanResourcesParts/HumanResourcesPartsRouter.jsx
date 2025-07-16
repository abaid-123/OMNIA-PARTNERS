import React from "react";
import { useParams } from "react-router-dom";

// Import actual component files for each section
import HumanResources from "./HumanResources";
import PerformanceSalary from "./PerformanceSalary";
import TalentAcquisition from "./TalentAcquisition";
import CoachingDevelopment from "./CoachingDevelopment";
import ManagementServices from "./ManagementServices";

const data = {
  "human-resources": {
    title: "Human Resources",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Human Resources",
      "Performance & Salary Management",
      "Talent Acquisition & Professional Development",
      "Coaching Organizational Developments & Training",
      "Management Services & Staff Augmentation"
    ],
    capability: "human-resources-organizational-development",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: HumanResources,
  },
  "performance-salary-management": {
    title: "Performance & Salary Management",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Human Resources",
      "Performance & Salary Management",
      "Talent Acquisition & Professional Development",
      "Coaching Organizational Developments & Training",
      "Management Services & Staff Augmentation"
    ],
    capability: "human-resources-organizational-development",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: PerformanceSalary,
  },
  "talent-acquisition-professional-development": {
    title: "Talent Acquisition & Professional Development",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Human Resources",
      "Performance & Salary Management",
      "Talent Acquisition & Professional Development",
      "Coaching Organizational Developments & Training",
      "Management Services & Staff Augmentation"
    ],
    capability: "human-resources-organizational-development",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: TalentAcquisition,
  },
  "coaching-organizational-developments-training": {
    title: "Coaching Organizational Developments & Training",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Human Resources",
      "Performance & Salary Management",
      "Talent Acquisition & Professional Development",
      "Coaching Organizational Developments & Training",
      "Management Services & Staff Augmentation"
    ],
    capability: "human-resources-organizational-development",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: CoachingDevelopment,
  },
  "management-services-staff-augmentation": {
    title: "Management Services & Staff Augmentation",
    backgroundImage: "/images/capabilitiesImage/StrategicHerosection.jpg",
    imgexpo: "/images/capabilitiesImage/Overview.png",
    types: [
      "Human Resources",
      "Performance & Salary Management",
      "Talent Acquisition & Professional Development",
      "Coaching Organizational Developments & Training",
      "Management Services & Staff Augmentation"
    ],
    capability: "human-resources-organizational-development",
    backgroundImage2: "/images/capabilitiesImage/HelpedClient.jpg",
    backgroundImage3: "/images/capabilitiesImage/CapabilityApp.png",
    component: ManagementServices,
  },
};

const HumanResourcesPartsRouter = () => {
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

export default HumanResourcesPartsRouter;
