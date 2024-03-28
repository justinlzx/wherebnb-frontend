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
      <div className="flex rounded-lg items-center justify-center w-full bg-cover bg-full bg-center h-36 bg-gradient-to-r from-primary to-blue-500">
        <Link
          to={"/results"}
          className="rounded-full bg-primary-700 hover:bg-secondary-700 cursor-pointer px-4 py-2 text-white bg-primary"
        >
          Browse Stays
        </Link>
      </div>
          <div className="grid grid-cols-4 md:grid-cols-auto-cols-fr gap-8 md:gap-6 mt-4">
        {listingsData.map((listing) => (
            <InfoCard listing={listing} key={listing.id} />
        ))}
    </div>
    </>
  );
};

// implement this after the backend server is connected
// export const ListingsPage = () => {
//     const [listingsData, setListingsData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetch('/api/search');
//                 const data = await res.json();
//                 setListingsData(data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Listings Page</h1>

//         </div>
//     );
// }
