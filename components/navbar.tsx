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

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface NavbarProps {
  scrollToProtocol: () => void;
  scrollToPracticality: () => void;
  scrollToServices: () => void;
}

// const WalletCategorySelection = ({
//   setSelectedWallet,
// }: {
//   setSelectedWallet: (wallet: string) => void;
// }) => {
//   return (
//     <div className="flex flex-col gap-4 py-4">
//       <div className="col-span-4 grid grid-cols-4 gap-4">
//         <div
//           onClick={() => setSelectedWallet('magic-eden')}
//           className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
//         >
//           <img src="/images/logo-magic-eden.png" alt="Phantom icon" className='h-10 mr-3'/>
//           <p>Ethereum (Magic Eden)</p>
//         </div>
//         <div
//           onClick={() => setSelectedWallet('evm')}
//           className="col-span-4 flex gap-2 items-center border-gray-300 rounded-xl border p-4 h-16 hover:scale-[1.01] transition-all hover:cursor-pointer"
//         >
//           <img src="/images/logo-evm.png" alt="Phantom icon" className=' h-10 mr-3'/>
//           <p>EVM</p>
//         </div>
//       </div>
//     </div>
//   )
// }

const Navbar = ({
  scrollToProtocol,
  scrollToPracticality,
  scrollToServices,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  // const [selectedWalletCategory, setSelectedWalletCategory] = useState("");
  // const [selectedWallet, setSelectedWallet] = useState("");

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
              <ConnectButton />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
              <DialogHeader>
                <DialogTitle className='pb-2'>Connect wallet with:</DialogTitle>
                <DialogDescription>
                  <p>
                    Choose how you want to connect. If you don &apos t have a wallet, you can select a provider and create one.
                  </p>
                </DialogDescription>
              </DialogHeader>
              {/*{*/}
              {/*  selectedWalletCategory === "" ? (*/}
              {/*    <WalletCategorySelection setSelectedWallet={setSelectedWalletCategory} />*/}
              {/*  ) : selectedWalletCategory === 'magic-eden' ? (*/}
              {/*    <MagicEdenWallets*/}
              {/*      setSelected={setSelectedWallet}*/}
              {/*    />*/}
              {/*  ) : (*/}
              {/*    <EvmWallets*/}
              {/*      setSelected={setSelectedWallet}*/}
              {/*    />*/}
              {/*  )*/}
              {/*}*/}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
