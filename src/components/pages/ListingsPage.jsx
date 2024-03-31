import { useCallback, useState, useEffect } from "react";
import { InfoCard } from "../Cards/InfoCard";
import { countries } from "../../constants/countries";
import { Filter } from "../Filter/Filter";
import axios from "axios";

export const ListingsPage = () => {
  const accomsUrl = process.env.REACT_APP_ACCOMS_URL;
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    query: "",
    price: [null, null],
    country: "",
    numRooms: 0,
  });

  const getListings = useCallback(async () => {
    await axios
      .get(`${accomsUrl}/listings`, {
        params: filters,
      })
      .then((res) => {
        setListings(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [accomsUrl, filters]);

  useEffect(() => {
    getListings();
  }, [filters, getListings]);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <div className="px-8 m-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 "> {/* Adjusted width */}
          <Filter updateFilters={updateFilters}/>
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-4 md:grid-cols-auto-cols-fr gap-8 md:gap-6 mt-5">
            {listings?.map((listing) => (
              <InfoCard listing={listing} key={listing.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};