import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";

//temporary import
import listingsData from "../../listingsData";

export const InfoCard = ({ listing }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavouriteUpdate = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="mx-auto overflow-hidden rounded-lg relative bg-transparent">  
      <img 
            src={listing.image} 
            className="w-68 h-70 rounded-lg object-cover transition-transform duration-300 hover:scale-100" 
            />
        <div className="py-2 flex justify-between bg-transparent">
            <h3 className="text-xl font-semibold">{listing.name}</h3>
            <div className="flex items-center space-x-1">
                <StarIcon className="h-5 w-5 text-primary-500 mr-1" />
                <span className="text-sm text-gray-800">{listing.rating}</span>
            </div>
        </div>
        <p className="mt-1 text-sm text-gray-500">{listing.description}</p>
        <p className="pb-2 text-sm text-gray-500">19-25 May</p>
        <button
            onClick={handleFavouriteUpdate}
            className="absolute bottom-6 right-0 py-2 z-80"
        >
            { isFavorite ? (
                <FilledHeartIcon className="w-5 h-5 text-primary" />
            ) : (
                <HeartIcon className="w-5 h-5 text-primary" />
            )}
            </button>
        </div>
  );
};
