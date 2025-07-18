import React from "react";

const WhiteBlockChain = () => {
  return (
    <div className="bg-[#f4f8ff] py-10 px-4 md:px-12 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:px-48 sm:px-20 px-8">
        Unlocking Blockchain's Potential In  Supply Chain Management
      </h2>
      <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto mb-8">
        In today’s dynamic business landscape, supply chain management stands as
        a critical component determining the success of enterprises across
        various industries. However, traditional supply chain systems often face
        challenges such as inefficiencies, lack of transparency, and
        susceptibility to fraud. The emergence of blockchain technology offers a
        promising solution to address these issues by providing a decentralized
        and immutable ledger system.
      </p>
      <div className="flex justify-center">
        <img
          src="/images/Insights/WhitePaper/BlockChain.png"
          alt="Blockchain Cubes"
          className="w-full max-w-5xl h-auto rounded"
        />
      </div>
    </div>
  );
};

export default WhiteBlockChain;
