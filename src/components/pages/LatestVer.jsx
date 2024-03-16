import axios from "axios";
import { useEffect, useState } from "react";
import left from "../../assets/icons/left.png";
import star from "../../assets/icons/star.png";

export const ReservationsPage = () => {
    // State to store the listing data
    const [listing, setListing] = useState(null);

    // Assume your JSON data is hosted at some URL. Replace 'url_to_your_json' with the actual URL.

    useEffect(() => {
        axios.get('../../../../listingsData.json') // Assuming your JSON file is named listingsData.json and placed in the public directory
        .then(response => {
            const listings = response.data;
            // Assuming you want to display the first listing or a specific one. Adjust as needed.
            setListing(listings[0]); // For example, displaying the first listing
        })
        .catch(error => console.error("Fetching listings data failed:", error));
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (!listing) return <div>Loading...</div>;

    // Now using `listing` to dynamically populate data in the component
    return (
        <div className="px-20 py-14">
            {/* Your component structure */}
            <div className="flex justify-center ">
                <div className="card w-4/5 bg-base-100 border-2 border-neutral-100 ">
                    <figure className="h-52"><img src={listing.image} alt={listing.name} className="w-full"/></figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title text-lg">{listing.name}</h2>
                            <div className="flex items-center">
                                <p className="text-md font-semibold mr-4">{listing.rating}</p>
                                <img src={star} alt="Star" className="h-5"/>
                            </div>
                        </div>
                        <hr className="mt-2"/>
                        {/* Pricing Details */}
                        <div className="mt-2">
                            <h1 className="font-semibold text-lg">
                                Pricing details
                            </h1>
                            {/* Example dynamic pricing calculation */}
                            <div className="flex justify-between">
                                <div className="underline mt-2">
                                    ${listing.price} x 5 nights
                                </div>
                                <div>  
                                    ${listing.price * 5}
                                </div>
                            </div>
                        </div>
                        {/* Final Price */}
                        <hr className="mt-2"/>
                        <div className="mt-2 font-bold flex justify-between">
                            <div>
                                Total
                            </div>
                            <div>
                                ${listing.price * 5}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
