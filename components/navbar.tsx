"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"



import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToProtocol: () => void;
  scrollToPracticality: () => void;
  scrollToServices: () => void;
}

const Navbar = ({
  scrollToProtocol,
  scrollToPracticality,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50 transition-all"
        >
          <Link
             href={"/bridge"} 
            className="text-yellow-200 hover:text-gray-50 group"
          >
            Swap<span className="group-hover:text-gray-50"> - Lite</span>
          </Link>
          <div
            onClick={scrollToProtocol}
            className="hover:text-gray-50"
          >
            Protocol
          </div>
          <div
            onClick={scrollToPracticality}
            className="hover:text-gray-50"
          >
            Practicality
          </div>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-neutral-500 bg-[linear-gradient(110deg,#000103,45%,#333333,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-50 hover:text-white">Connect wallet</Button>  
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
              <DialogHeader>
                <DialogTitle className='pb-2'>Connect wallet with:</DialogTitle>
                <DialogDescription>
                  Choose how you want to connect. If you don't have a wallet, you can select a provider and create one.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="col-span-4 grid grid-cols-4 gap-4">
                  <div className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer">
                    <img src="/images/logo-phantom.svg" alt="Phantom icon" className='h-10 mr-3'/>
                    <p>Phantom (recommended)</p>
                  </div>
                  <div className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer">
                    <img src="/images/logo-backpack.png" alt="Phantom icon" className=' h-10 mr-3'/>
                    <p>Backpack</p>
                  </div>
                  <div className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer">
                    <img src="/images/logo-solflare.svg" alt="Solflare icon" className='h-10 mr-3'/>
                    <p>Solflare</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  
  );
};

export default Navbar;
