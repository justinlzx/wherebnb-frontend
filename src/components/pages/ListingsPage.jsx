import { useCallback, useState, useEffect } from 'react';
import listingsData from "../../listingsData";
import { InfoCard } from "../Cards/InfoCard";
import { countries } from '../../constants/countries';
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
    {/* <div className="px-5">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Filter/>
        </div>
        <div className="col-span-9">
          <Cards/>
        </div>
      </div>
    </div> */}
    <div className="px-5">
      <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <Filter/>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-4 md:grid-cols-auto-cols-fr gap-8 md:gap-6 mt-4">
            {listingsData.map((listing) => (
              <InfoCard listing={listing} key={listing.id} />
            ))}
            </div>
          </div>
      </div> 
    </div>
      {/* search bar  */}
      {/* <div>
          <input 
            type="text" 
            name="price"
            value={filters.query}
            onChange={(e) => setFilters({...filters, query: e.target.value})}
            placeholder="Find accomodation"
            className="border-2 border-slate-300 rounded-lg w-full p-1"
          />
      </div>

      <div className="flex py-2 gap-4">
        <div className='w-32'>
          <label htmlFor="country">Country:</label>
          <details className="dropdown block">
            <summary className="m-1 btn">{filters.country || countries[0] }</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-96 h-64 overflow-y-scroll">
              {
                countries.map((country) => 
                  <li 
                    key={country}
                    onClick={() => setFilters({...filters, country: country})}
                  ><a>{country}</a></li>
                )
              }
            </ul>
          </details>
        </div>
        <div className=''>
          <label htmlFor="country">Number of Rooms:</label>
          <input type="number" placeholder="Number of Rooms" className="input max-w-xs border-2 border-slate-300 rounded-lg p-2 block mt-1 text-right w-3/4" 
          alue={filters.numRooms} onChange={
            (e) => setFilters({...filters, numRooms: +e.target.value}) 
          }
          />
        </div>
        <div className='w-1/3'>
          <label htmlFor="price">Price Less Than: {filters.price}</label>
          <input type="range" min="0" max="500" value={filters.price} onChange={
            (e) => setFilters({...filters, price: +e.target.value}) 
          } className="range my-4"  />
        </div>
      </div> */}
    </>
  );
};
