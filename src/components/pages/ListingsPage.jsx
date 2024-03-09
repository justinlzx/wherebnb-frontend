import { Cards } from "../Cards/Cards";
import listingsData from "../../listingsData";
import { Link, Router } from "react-router-dom";
//import browseStay from "../../assets/browseStay.jpg";

export const ListingsPage = () => {
  return (
    <>
      <div className="flex rounded-lg items-center justify-center w-full bg-cover bg-full bg-center h-36 bg-gradient-to-r from-primary to-blue-500">
        {/* <img classNamsrc={ browseStay } alt="" /> */}
        <Link
          to={"/results"}
          className="rounded-full bg-primary-700 hover:bg-secondary-700 cursor-pointer px-4 py-2 text-white bg-primary"
        >
          Browse Stays
        </Link>
      </div>
      <Cards data={listingsData} />
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
