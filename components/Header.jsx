import React, { useState } from "react";
import {
  SearchIcon,
  UserCircleIcon,
  MenuIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import { BiChevronDown } from "react-icons/bi";
import { GiPalmTree } from "react-icons/gi";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-10 shadow-sm">
      <div className="relative flex items-center h-10 cursor-pointer" onClick={() => router.push("/")}>
        <h2 className="text-2xl text-red-400 font-bold font-nunito">Hotels&Co</h2>
        <GiPalmTree className="text-red-400 font-semibold h-7 w-7" />
      </div>
      <div className="flex items-center border-2 rounded-full p-1">
        <input
          type="text"
          placeholder="Enter your search"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <div className="flex border-2 items-center space-x-2 rounded-lg p-1.5 cursor-pointer">
          <GlobeIcon className="h-6" />
          <p>English</p>
          <BiChevronDown className="h-6" />
        </div>
        <div className="flex space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchValue && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            rangeColors={["#FD5861"]}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
