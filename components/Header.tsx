import Image from "next/image";

import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,

} from "@heroicons/react/24/solid";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import { useState } from "react";

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate); // this ranges.selection.endDate gives the value user selects
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  return (
    <header className="sticky top-0 z-50 p-5 bg-white grid grid-cols-3 shadow-lg md:px-10">

        {/* Left */}
        <div className="relative flex h-10 cursor-pointer my-auto " >
          <Image 
            src='https://links.papareact.com/qd3' 
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt=""
          />
        </div>

        {/* Middle - search section*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
          <input 
            value={searchInput} //That's how you connect the state to input fields
            onChange={(e) => setSearchInput(e.target.value)} // target.value gives the text written in the box
            className="pl-5 outline-none flex-grow text-sm text-gray-600" 
            type="text" 
            placeholder="Start your search for breath-taking stays"
          />
          <MagnifyingGlassIcon className="hidden md:inline-flex h-10 bg-red-400 text-white rounded-full p-1.5 cursor-pointer md:mx-2"/>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <div className="flex space-x-2 border-4 rounded-full">
            <Bars3Icon className="h-6 cursor-pointer"/>
            <UserCircleIcon className="h-6 cursor-pointer"/>
          </div>
        
        {/* CONDITIONAL RENDERING */}
        { searchInput && (
          <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker 
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect} //handleSelect recieves the values user selects, and then it updates the startdate & endDate 
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold ">Number of guests</h2>
              <UsersIcon className="h-5"/>
              <input 
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                type="number" 
                min={1}
                className="w-12 pl-2 text-lg outline-none text-red-400 "
              />
            </div>

            <div className="flex">
              <button className="flex-grow text-gray-500">Cancel</button>
              <button className="flex-grow text-red-400">Search</button>
            </div>

          </div>
        )}

        </div>
    </header>
  )
}

export default Header;