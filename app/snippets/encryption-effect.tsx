"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import "../styles.css";

export const EncryptionEffect = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <div
          className="text-3xl pb-8 md:text-6xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
        >
          Optimized protocol <br/> with peak <br/> performance delivery
        </div>
        <p
          className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4"
        >
          Ensuring swift, efficient transactions and superior network performance.
        </p>
      </div>

      <div className="mt-44 w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <video
            loop={ true }
            muted={ true }
            autoPlay={ true }
            playsInline={ true }
            className="h-auto"
            src="/videos/encryption.webm/"
          />

          <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
            <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
              <Image
                src="/images/lock-head.png"
                alt="Lock top"
                width={50}
                height={50}
                className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
              />
              <Image
                src="/images/lock-body.png"
                alt="Lock Main"
                width={ 70 }
                height={ 70 }
                className=" z-10 w-[60px]"
              />
            </div>

            <div className="encryption-box px-[15px] py-[4px] z-[20] my-[20px] border-[#7042f88b] opacity-[0.9]">
              <h1 className="encryption-text text-[1.2vw]">
                Security and Integrity
              </h1>
            </div>
          </div>
        </div>
        <div className="w-7/12 z-[20] mt-[-8vw] px-[5px]">
          <div className="cursive text-[1.6vw] font-medium text-center text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.
            quia.
          </div>
        </div>
      </div>
    </div>
  );
};
