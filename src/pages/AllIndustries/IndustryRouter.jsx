import React from "react";
import { useParams } from "react-router-dom";

// Import all industry detail components
import AutomotiveHome from "../../components/industries_component/AutomotiveDetail/AutomotiveHome";
import AerospaceDefenseHome from "../../components/industries_component/AerospaceDefenseDetail/AerospaceDefenseHome";
import AircraftModification_home from "../../components/industries_component/AircraftModificationDetail/AircraftModification_home";
import Healthcare_home from "../../components/industries_component/HealthcareDetail/Healthcare_home";
import AutomationRobotics_home from "../../components/industries_component/AutomationRoboticsDetail/AutomationRobotics_home";
import PublicSector_home from "../../components/industries_component/PublicSectorDetail/PublicSector_home";
import Telecommunications_home from "../../components/industries_component/TelecommunicationsDetail/Telecommunications_home";
import Intralogistics_home from "../../components/industries_component/IntralogisticsDetail/Intralogistics_home";

const industryData = {
  automotive: {
    name: "Automotive",
    backgroundImage: "/images/industriesimages/Automotiveimages/automotive_img.jpg",
    expoimage: "/images/industriesimages/Automotiveimages/explore_auto1.png",
    types: ["Rev Up Your Strategy", "Shift Into High Gear"],
    industry: "automotive", // ✅ FIXED
  },
  "aerospace-defense": {
    name: "Aerospace & Defense",
    backgroundImage: "/images/industriesimages/AeroSpace/AerospaceDefense.jpg",
    expoimage: "/images/industriesimages/AeroSpace/AerospaceDefense1.png",
    types: ["Elevate Operations", "Strategize With Precision"],
    industry: "aerospace-defense", // ✅ FIXED
  },
  "aircraft-modification-certification": {
    name: "Aircraft Modification",
    backgroundImage: "/images/industriesimages/AircraftMod/hero.jpg",
    expoimage: "/images/industriesimages/AircraftMod/explore.png",
    types: ["Certify Your Innovations", "Elevate Your Fleet", "Soar With Confidence"],
    industry: "aircraft-modification-certification", // ✅ FIXED
  },
  healthcare: {
    name: "Healthcare",
    backgroundImage: "/images/industriesimages/Healthcare/hero.jpg",
    expoimage: "/images/industriesimages/Healthcare/explore.png",
    types: ["Healthcare Innovation Awaits", "Diagnose With Intelligence"],
    industry: "healthcare", // ✅ FIXED
  },
  // ... continue for all others
};

const IndustryRouter = () => {
  const { slug } = useParams();
  const industryProps = industryData[slug];

  if (!industryProps) {
    return (
      <div className="p-8 text-center text-red-600">
        No component found for: {slug}
      </div>
    );
  }

  // You can destructure props here if needed
  const { name, backgroundImage, expoimage, types,industry } = industryProps;

  // Render based on slug
  switch (slug) {
    case "automotive":
      return (
        <AutomotiveHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          industry={industry}
        />
      );
    case "aerospace-defense":
      return (
        <AerospaceDefenseHome
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          industry={industry}
        />
      );
    case "aircraft-modification-certification":
      return (
        <AircraftModification_home
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          industry={industry}
        />
      );
    case "healthcare":
      return (
        <Healthcare_home
          name={name}
          backgroundImage={backgroundImage}
          expoimage={expoimage}
          types={types}
          industry={industry}
        />
      );
    // case "automation-robotics":
    //   return (
    //     <AutomationRobotics_home
    //       name={name}
    //       backgroundImage={backgroundImage}
    //       expoimage={expoimage}
    //     />
    //   );
    // case "public-sector":
    //   return (
    //     <PublicSector_home
    //       name={name}
    //       backgroundImage={backgroundImage}
    //       expoimage={expoimage}
    //     />
    //   );
    // case "telecommunications":
    //   return (
    //     <Telecommunications_home
    //       name={name}
    //       backgroundImage={backgroundImage}
    //       expoimage={expoimage}
    //     />
    //   );
    // case "intralogistics":
    //   return (
    //     <Intralogistics_home
    //       name={name}
    //       backgroundImage={backgroundImage}
    //       expoimage={expoimage}
    //     />
    //   );
    default:
      return null;
  }
};

export default IndustryRouter;
