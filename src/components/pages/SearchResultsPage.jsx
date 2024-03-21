import { useLocation } from 'react-router-dom';
import listingsData from '../../listingsData';
import { Cards } from '../Cards/Cards'; 
import { Typography } from '@mui/material';

export const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const locationQuery = queryParams.get('location');
  const startDateQuery = new Date(queryParams.get('startDate'));
  const endDateQuery = new Date(queryParams.get('endDate'));


  const filteredListings = listingsData.filter(listing =>
    listing.location === locationQuery &&
    new Date(listing.startDate) >= startDateQuery &&
    new Date(listing.endDate) <= endDateQuery
   
  );

  return (
    <div>
        <Typography variant="h4" className="mt-8 mb-4">Search Results</Typography>
      <Cards listings={filteredListings} />
    </div>
  );
};

