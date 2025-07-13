import React from "react";
import { useParams } from "react-router-dom";

// Import actual components
import ElevateOperations from "./ElevateOperations";
import StrategizeWithPrecision from "./StrategizeWithPrecision";

const data = {
  "elevate-operations": {
    name: "Elevate Operations",
    imgbackgroundhero: "/images/industriesimages/AeroSpace/ElevateHerosection.jpg",
    imgexpo: "/images/industriesimages/AeroSpace/Elevate2.png",
    types: ["Elevate Operations", "Strategize With Precision"],
    industry: "aerospace-defense",
    component: ElevateOperations,
  },
  "strategize-with-precision": {
    name: "Strategize With Precision",
    imgbackgroundhero: "/images/industriesimages/AeroSpace/helpindustry.png",
    imgexpo: "/images/industriesimages/AeroSpace/Elevate3.png",
    types: ["Elevate Operations", "Strategize With Precision"],
    industry: "aerospace-defense",
    component: StrategizeWithPrecision,
  },
};

const AerospaceDefensePartsRouter = () => {
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
      name={selected.name}
      image={selected.imgbackgroundhero}
      image2={selected.imgexpo}
      types={selected.types}
      industry={selected.industry}
    />
  );
};

export default AerospaceDefensePartsRouter;
