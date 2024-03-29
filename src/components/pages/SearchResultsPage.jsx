import { useCallback, useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { Button, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { Cards } from "../Cards/Cards";
import listingsData from "../../listingsData";

export const SearchResultsPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  // Placeholder onClick function
  const handleSearchButtonClick = () => {
    // Placeholder code for onClick action
    console.log("Search button clicked");
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <Typography variant="h4" className="mt-8 mb-4">
          Search Results
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PeopleIcon />}
          onClick={handleSearchButtonClick}
        >
          Search
        </Button>
      </div>
      {/* <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> */}
      <Cards listings={listingsData} />
    </div>
  );
};
