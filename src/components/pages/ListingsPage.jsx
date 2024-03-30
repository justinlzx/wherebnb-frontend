import { useCallback, useState, useEffect } from 'react';
import { InfoCard } from "../Cards/InfoCard";
import { countries } from '../../constants/countries';
import { Filter } from '../Filter/Filter';
import axios from 'axios';



export const ListingsPage = () => {

  const [filters, setFilters ] = useState({
    query: "",
    price: 0,
    country: "",
    numRooms: 0
  })

  const [listings, setListings] = useState()

  const getListings = useCallback(async () => {
    await axios.get(`${process.env.REACT_APP_ACCOMS_URL}/accoms`)
      .then((res) => {
        console.log(res.data.data)
        setListings(res.data.data)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }, [])

  useEffect(() => {
    getListings()
  }, [filters, getListings])

  return (
    <>
    <div className="px-5">
      <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <Filter/>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-4 md:grid-cols-auto-cols-fr gap-8 md:gap-6 mt-4">
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
