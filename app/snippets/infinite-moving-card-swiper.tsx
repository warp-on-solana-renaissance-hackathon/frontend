"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsSwiper() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={ testimonials }
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "In the realm of decentralization, we find the best of innovation and the worst of volatility, the age of smart contracts, and the epoch of financial freedom.",
  },
  {
    quote:
      "To swap, or not to swap, that is the question: Whether 'tis nobler in the wallet to suffer the fees and delays of centralized finance, or to take tokens against a sea of markets, and by opposing, earn them.",
  },
  {
    quote: "All that we code or deploy is but a contract within a blockchain.",
  },
  {
    quote:
      "It is a consensus universally acknowledged, that a blockchain in possession of a good algorithm, must be in want of a node.",
  },
  {
    quote:
      "Call me Validator. Some years ago—never mind how long precisely—having little or no tokens in my wallet, and nothing particular to stake me on chain, I thought I would mine about a little and see the decentralized part of the world.",
  },
];
