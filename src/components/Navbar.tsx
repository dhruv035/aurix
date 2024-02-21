'use client'
import Image from "next/image";
import { useRouter } from "next/router";


  
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex flex-row h-14 px-6 py-2 fixed top-0 w-full bg-white sm:bg-transparent">
        <div className="flex flex-row">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      </div>
      <div className="flex flex-row-reverse gap-x-2 w-full">
        <button className="flex items-center bg-primary-light text-sm rounded-lg p-4">
        Get Started
        </button>
        <button onClick={()=>{router.push("/login")}} className="flex items-center bg-white text-sm rounded-lg p-4">
        Login
        </button>
      </div>
    </div>
    
  );
}