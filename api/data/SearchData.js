import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function SearchData() {
  //remove the first line once it is connected to the backend
  const [loading, setLoading] = useState(true);
  const [listingsData, setListingsData] = useState([]);

  useEffect(() => {
    setListingsData(listingData); 
    setLoading(false);
    // async function fetchData(){
    //   try {
    //     const response = await axios.get('/api/listingsData');
    //     setListingsData(response.data);

    //   } catch (error) {
    //     console.error('There was a problem with fetching the data:', error);
    //   }
    // }

    //fetchData(); 
    console.log('search data component has been rendered')
  }, []);
    

  return (
  //   <div>
  //   {listingsData ? (
  //     <ul>
  //       {listingsData.map(item => (
  //         <li key={item.id}>{item.name}</li>
  //       ))}
  //     </ul>
  //   ) : (
  //     <p>Loading...</p>
  //   )}
  // </div>
   <div>
   {loading ? (
     <p>Loading...</p>
   ) : (
     <ul>
       {listingsData.map(item => (
         <li key={item.id}>{item.name}</li>
       ))}
     </ul>
   )}
 </div>
);
}

export default SearchData;
