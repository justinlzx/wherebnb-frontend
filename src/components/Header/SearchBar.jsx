import React, { useState } from "react";
import { Counter } from "./Counter";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSearchStore } from "../../store";

const SearchBar = ({ toggleExpanded }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const locationInput = useSearchStore((state) => state.location);
  const startDate = useSearchStore((state) => state.dates[0]);
  const endDate = useSearchStore((state) => state.dates[1]);
  //const router = useRoutes();

  const handleSelect = (ranges) => {
    useSearchStore.setState({
      dates: [ranges.selection.startDate, ranges.selection.endDate],
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // event handler for input element
  const handleLocationUpdate = (e) => {
    //check if the location is updated
    useSearchStore.setState({ location: e.target.value });
  };

  const handleSearchClick = () => {
    //router.push("/results");
    toggleExpanded();

    const queryParams = new URLSearchParams({
      location: locationInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    });

    window.location.href = `/results?${queryParams.toString()}`;
  };

  return (
    <>

    <div className="flex flex-row self-center rounded-full border p-2 mt-8">
      <button
        className="border-r px-4 pr-10 text-left grow"
        onClick={() => setIsSearchFocused(true)}
      >
        <p className="font-bold">Where</p>
        {isSearchFocused ? (
          <input
            type="text"
            placeholder="Search destinations"
            onChange={handleLocationUpdate}
            value={locationInput}
            className="text-slate-800 bg-transparent border-none outline-none pr-5"
          />
        ) : (
          <p className="text-slate-600">Search destinations</p>
        )}
      </button>
      <div className="dropdown dropdown-end px-4 border-r">
        <label tabIndex={1}>
          <p className="font-bold">Dates</p>
          <p className="text-slate-600">Selected Range</p>
        </label>
        <div
          tabIndex={1}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#002B69"]}
          />
        </div>
      </div>
      <div className="dropdown dropdown-end px-4">
        <label tabIndex={2}>
          <p className="font-bold">Who</p>
          <p className="text-slate-600">Add Guest</p>
        </label>
        <div
          tabIndex={2}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Counter label="Adults" />
        </div>
      </div>

      <Link
        to={"/results"}
        onClick={handleSearchClick}
        className="px-2 text-white rounded-full bg-primary flex justify-center items-center gap-3 flex-grow"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
        <span>Search</span>
      </Link>

    </div>
    </>
  );
};

export default SearchBar;
