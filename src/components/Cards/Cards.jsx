// import { useState } from "react";
// import listingsData from "../../listingsData";
// import { Link } from "react-router-dom";
// import { InfoCard } from "../Cards/InfoCard";

// export const Cards = () => {
//   return (
//     <div className="grid grid-cols-4 md:grid-cols-auto-cols-fr gap-8 md:gap-6 mt-4">
//           {listingsData.map((listing) => (
//             <InfoCard listing={listing} key={listing.id} />
//           ))}
//     </div>
//   )
// }
import { useState, useEffect } from 'react';
import listingsData from "../../listingsData";
import { InfoCard } from "../Cards/InfoCard";

export const Cards = ({ searchQuery }) => {
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = listingsData.filter(listing =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredListings(filtered);
    } else {
      setFilteredListings(listingsData);
    }
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-4 md:grid-cols-auto-cols-fr gap-8 md:gap-6 mt-4">
      {filteredListings.map((listing) => (
        <InfoCard listing={listing} key={listing.id} />
      ))}
    </div>
  )
}