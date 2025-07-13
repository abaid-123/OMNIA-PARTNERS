import React from "react";
import { useParams } from "react-router-dom";

// Import detail pages
import RevUpYourStrategy from "./RevUpYourStrategy";
import ShiftIntoHighGear from "./ShiftIntoHighGear";

// Data mapping each slug to its content and props
const data = {
  "rev-up-your-strategy": {
    name: "Rev Up Your Strategy",
    imgbackgroundhero: "/images/industriesimages/Automotiveimages/RevUpYourStrategy1.jpg",
    imgexpo: "/images/industriesimages/Automotiveimages/automotive_img.jpg",
    types: ["Rev Up Your Strategy", "Shift Into High Gear"],
    industry: "automotive",
    component: RevUpYourStrategy,
  },
  "shift-into-high-gear": {
    name: "Shift Into High Gear",
    imgbackgroundhero: "/images/industriesimages/Automotiveimages/ShiftintoHighGear.jpg",
    imgexpo: "/images/industriesimages/Automotiveimages/explore_auto.png",
    types: ["Rev Up Your Strategy", "Shift Into High Gear"],
    industry: "automotive",
    component: ShiftIntoHighGear,
  },
};

const AutomotivePartsRouter = () => {
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

export default AutomotivePartsRouter;
