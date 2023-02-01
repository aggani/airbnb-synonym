import Image from "next/image";

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
        <div>
          
        </div>

        {/* Right */}
        <div>

        </div>
    </header>
  )
}

export default Header;