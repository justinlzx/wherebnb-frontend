import { InfoCard } from "../Cards/InfoCard";
import listingsData from "../../listingsData";

export const Cards = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-auto-cols-fr gap-8 md:gap-6 mt-4">
        {listingsData.map((listing) => (
            <InfoCard listing={listing} key={listing.id} />
        ))}
    </div>
  );
};
