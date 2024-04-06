import { motion } from "framer-motion";
import { ThreeDCardSnippet } from "@/app/snippets/3d-card-snippet";
import React from "react";

const cardDetails = [
  {
    title: "Seamless Accessibility",
    description: "Unrestricted trading 24/7 across the globe without the need for traditional financial gatekeepers.",
    explanation: "Decentralized exchanges (DEXs) dismantle barriers to financial markets by offering uninterrupted access to trading services. Unlike traditional exchanges that often operate within strict hours and can be limited by regional regulations, DEXs operate on blockchain technology that never sleeps. This means that no matter where users are in the world, or what time it is, they can always manage their assets, execute trades, and access their funds."
  },
  {
    title: "Robust Security",
    description: "Direct asset control minimizes risks and enhances security for users on decentralized platforms.",
    explanation: "Decentralized exchanges prioritize security by enabling users to maintain custody of their assets, contrasting with centralized exchanges where the exchange itself holds user funds. This custodial approach can make centralized platforms a lucrative target for hackers. DEXs mitigate this risk by allowing peer-to-peer trades that go directly from one wallet to another, utilizing smart contracts to execute the swap."
  },
  {
    title: "Cost Efficiency",
    description: "DEXs significantly reduce transaction costs by eliminating traditional financial intermediaries.",
    explanation: "In the realm of decentralized finance, DEXs stand out for their ability to minimize transaction costs. Without the overhead of centralized entities, there are no exorbitant brokerage fees, no banking charges, and no hidden fees that typically accompany traditional financial transactions. The smart contracts automate trades, clearing, and settlement processes, slashing the costs usually incurred from these services."
  },
  {
    title: "User Empowerment",
    description: "DEXs return financial control to users, offering a transparent platform for managing assets.",
    explanation: "The ethos of decentralized exchanges is rooted in the empowerment of the individual. By design, DEXs provide a platform where users are in full control of their financial decisions and assets. This empowerment stems from the fundamental structure of DEXs, where users interact with smart contracts directly, without any third-party control or intervention."
  },
  {
    title: "Market Liquidity",
    description: "DEXs enhance market liquidity, making asset exchange more streamlined and efficient.",
    explanation: "for more fluid market conditions. They achieve this by aggregating liquidity from various sources, often utilizing liquidity pools that users can contribute to and benefit from. This not only provides depth to the market, allowing for larger trades without significant price impacts, but also ensures that traders can quickly enter and exit positions."
  },
  {
    title: "Interoperability",
    description: "Cross-chain swaps enabled by DEXs facilitate a connected and unified blockchain ecosystem.",
    explanation: "The principle of interoperability in decentralized exchanges refers to the ability to seamlessly exchange assets across different blockchain networks. This feature is becoming increasingly important as the blockchain space grows more fragmented with various independent networks."
  }
];

export const Practicality = () => {
  // Create an array of six elements to map over
  const cards = new Array(6).fill(null);

  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div
          className="text-3xl pb-8 md:text-6xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
        >
          Practicality <br /> by measurable <br /> benefits
        </div>
        <p
          className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4"
        >
          Exploring real-world applications and the numerous benefits they bring,
          including enhanced efficiency, security, and user empowerment.
        </p>
        <div className="mt-20 items-center md:flex justify-center md:mx-auto gap-10 flex-wrap">
          {cards.map((_, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="md:px-0 mb-10"
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ThreeDCardSnippet
                title={cardDetails[index].title}
                description={cardDetails[index].description}
                explanation={cardDetails[index].explanation}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
