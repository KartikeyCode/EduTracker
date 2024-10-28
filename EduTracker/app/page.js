"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  const router = useRouter();
  const handleMintNowClick = () => {
    router.push('/mint');
  };
  return (
    <div className="flex flex-col bg-black min-h-screen">
        <Navbar/>
        <div className="flex flex-col ">
            <div className="flex flex-col md:flex-row gap-16 px-10 xl:py-20 xl:px-28 2xl:py-24 2xl:px-48">
              
                <div className="flex flex-col gap-5">
                    <h1 className=" xl:w-[40rem] 2xl:w-[60rem] text-white font-Inter font-semibold text-4xl xl:text-6xl "> Welcome to EduTracker </h1>
                    <h2 className="text-[#9D9A9A] font-Inter font-semibold text-lg xl:w-[30rem] 2xl:w-[60rem]"> An All in one solution to counter forgery and verify certificates across all levels of education. Built on the backbone of Non Fungible Tokens, EduTracker allows for a lot of room for certificate verification. Use cases can be applied to as simple as your high school to the workplace. </h2>
                    <button onClick={handleMintNowClick} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Upload </button>
                </div>
                <div className="">
                <Image src="/imgimg.jpg" width={500} height={500} />
                </div>
            </div>
        </div>
    </div>
  );
}
