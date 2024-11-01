"use client"
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-20 bg-black  py-12 px-5 sm:px-10">
           <a className="font-medium text-white text-3xl font-Russo_One hover:scale-105 transition-all cursor-pointer" href="/"> EduTracker </a> 
           <div className=" items-center gap-1 md:gap-10 font-Inter hidden sm:flex">
                <a className="text-[#B7B7B7] text-xl font-semibold hover:scale-105 transition-all" href="/"> About Us </a>
                
           </div>
           <ConnectButton />
    </div>
  );
}
