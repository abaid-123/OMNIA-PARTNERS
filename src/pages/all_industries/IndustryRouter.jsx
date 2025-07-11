import React from "react";
import { useParams } from "react-router-dom";

// Import all industry detail components
import Automotive_home from "../../components/industries_component/AutomotiveDetail/Automotive_home";
import AerospaceDefenseHome from "../../components/industries_component/AerospaceDefenseDetail/AerospaceDefenseHome";
import AircraftModification_home from "../../components/industries_component/AircraftModificationDetail/AircraftModification_home";
import Healthcare_home from "../../components/industries_component/HealthcareDetail/Healthcare_home";
import AutomationRobotics_home from "../../components/industries_component/AutomationRoboticsDetail/AutomationRobotics_home";
import PublicSector_home from "../../components/industries_component/PublicSectorDetail/PublicSector_home";
import Telecommunications_home from "../../components/industries_component/TelecommunicationsDetail/Telecommunications_home";
import Intralogistics_home from "../../components/industries_component/IntralogisticsDetail/Intralogistics_home";

const IndustryRouter = () => {
  const { slug } = useParams();

  switch (slug) {
    case "automotive":
      return <Automotive_home />;
    case "aerospace-defense":
      return <AerospaceDefenseHome />;
    case "aircraft-modification-certification":
      return <AircraftModification_home />;
    case "healthcare":
      return <Healthcare_home />;
    case "automation-robotics":
      return <AutomationRobotics_home />;
    case "public-sector":
      return <PublicSector_home />;
    case "telecommunications":
      return <Telecommunications_home />;
    case "intralogistics":
      return <Intralogistics_home />;
    default:
      return <div className="p-8 text-center text-red-600">No component found for: {slug}</div>;
  }
};

export default IndustryRouter;
