import Image from "next/image";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"
function Header() {
  return (
    <header className="sticky top-0 z-50 p-5 grid-cols-3 shadow-lg md:px-10">

        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto " >
          <Image 
            src='https://links.papareact.com/qd3' 
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/* Middle - search section*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
          <input className="pl-5 outline-none flex-grow text-sm text-gray-600" type="text" placeholder="Start your search for breath-taking stays"/>
          <MagnifyingGlassIcon className="hidden md:inline-flex h-10 bg-red-400 text-white rounded-full p-1.5 cursor-pointer md:mx-2"/>
        </div>

        {/* Right */}
        <div>
          <p>Become a host</p>
        </div>
    </header>
  )
}

export default Header;