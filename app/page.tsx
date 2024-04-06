'use client'

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import {EncryptionEffect} from "@/app/snippets/encryption-effect";
import {InfiniteMovingCardsSwiper} from "@/app/snippets/infinite-moving-card-swiper";
import {Practicality} from "@/app/snippets/practicality";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const protocolRef = useRef<HTMLDivElement>(null);
  const practicalityRef = useRef<HTMLDivElement>(null);
  const consensusValidation = useRef<HTMLDivElement>(null);
  const bridgingTheGap = useRef<HTMLDivElement>(null);
  const ecosystem = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToProtocol = () => {
    protocolRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToPracticality = () => {
    practicalityRef.current?.scrollIntoView({ behavior: "smooth" });
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
        <div
          className="w-full pt-20"
        >
          <InfiniteMovingCardsSwiper />
        </div>
        <div
          ref={ protocolRef }
          className="w-full"
        >
          <EncryptionEffect />
        </div>
        <div
          ref={ practicalityRef }
          className="w-full pt-20"
        >
          <Practicality />
        </div>
      </div>
    </div>
  );
}
