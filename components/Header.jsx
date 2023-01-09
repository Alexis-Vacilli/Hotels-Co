import React, { useState } from "react";
import {
  SearchIcon,
  UserCircleIcon,
  MenuIcon,
  GlobeIcon,
  UsersIcon
} from "@heroicons/react/solid";
import { BiChevronDown } from "react-icons/bi";
import { GiPalmTree } from "react-icons/gi";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [toggleDropDown, setToggleDropDown] = useState(true);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(startDate);
  };

  const resetInput = () => {
    setSearchValue("");
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  }

  return (
    <header className="sticky top-0  grid grid-cols-3 bg-white p-5 shadow-sm z-40 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer" onClick={() => router.push("/")}>
        <h2 className="text-2xl text-green-400 font-bold font-nunito">Hotels&Co</h2>
        <GiPalmTree className="text-green-400 font-semibold h-7 w-7" />
      </div>
      {/* Search input */}
      <div className="flex items-center md:border-2 rounded-full p-1">
        <input
          type="text"
          placeholder={placeholder || "Enter your search"}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-green-400 text-white rounded-full p-2 cursor-pointer " />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        {/* <div className="flex border-2 items-center space-x-2 rounded-lg p-1.5 cursor-pointer">
          <GlobeIcon className="h-6" />
          <p>English</p>
          <BiChevronDown className="h-6" />
        </div> */}
        <div className="flex space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchValue && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            rangeColors={["#4ADE85"]}
            onChange={handleSelect}
          />
          <div className="flex border-b items-center mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="outline-none w-12 pl-2 text-green-400"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-600" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-green-400" onClick={search}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
