"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card-helper";

export function ThreeDCardSnippet({
  title,
  description,
  explanation,
}: {
  title: string;
  description: string;
  explanation: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="border-neutral-500 bg-neutral-900/[.6] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-200 dark:text-white"
        >
          { title }
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-sm max-w-sm mt-2"
        >
          { description }
        </CardItem>
        <CardItem
          translateZ="140"
          className="mt-4 text-neutral-400"
          boxed={ true }
        >
          { explanation }
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
