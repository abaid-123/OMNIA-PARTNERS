// IndustryPartsRouter.js
import React from "react";
import { useParams } from "react-router-dom";

import AutomotivePartsRouter from "../../components/industries_component/AutomotiveDetail/AutomotiveParts/AutomotivePartsRouter";
import AerospaceDefensePartsRouter from "../../components/industries_component/AerospaceDefenseDetail/AerospaceDefenseParts/AerospaceDefensePartsRouter";

const IndustryPartsRouter = () => {
  const { industry, slug } = useParams();

  switch (industry) {
    case "automotive":
      return <AutomotivePartsRouter slug={slug} />;
    case "aerospace-defense":
      return <AerospaceDefensePartsRouter slug={slug} />;
    default:
      return (
        <div className="text-red-600 p-8 text-center">
          No parts router found for: {industry}
        </div>
      );
  }
};

export default IndustryPartsRouter;
