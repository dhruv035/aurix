import Image from "next/image";


  
export default function Navbar() {
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
      <div className="flex flex-row-reverse w-full">
        <button className="bg-yellow-400 rounded-lg p-2">
        Get Started
        </button>
      </div>
    </div>
    
  );
}