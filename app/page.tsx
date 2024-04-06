'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToPracticality = () => {
    websiteDesignRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToProtocol = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToConsensusValidation = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBridgingTheGap = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEcosystem = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Services section
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToProtocol={ scrollToProtocol }
        scrollToPracticality={ scrollToPracticality }
        scrollToConsensusValidation={ scrollToConsensusValidation }
        scrollToBridgingTheGap={ scrollToBridgingTheGap }
        scrollToEcosystem={ scrollToEcosystem }
        scrollToServices={ scrollToServices }
      />

      <Spotlight
        className="hidden md:flex md:-top-80 left-80"
        fill="white"
      />

      <div
        className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2"
      >
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
        >
          Beyond chains <br/> and limits, <br/> wrap your assets
        </div>
        <p
          className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4"
        >
          Unleash the full potential of decentralized trading with frictionless, direct asset swaps across multiple chains.
        </p>
        <Link
          href={ "/book" }
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white "
        >
          Join waitlist
        </Link>
      </div>
    </div>
  );
}
