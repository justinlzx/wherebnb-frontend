import { useState } from 'react';
import { Box, Card, Stack, Typography, Button, Divider, TextField } from "@mui/material";
import { TypeFilter } from "./TypeFilter";
import { PriceFilter } from "./PriceFilter";
import { RoomFilter } from "./RoomFilter";
import { BookingOptions } from "./BookingOptions";

export const Filter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Box className="py-4 px-2 md:px-4 lg:px-6 max-w-full overflow-wrap">
      <Card className="rounded-lg">
        <Box className="mb-2 py-2 px-3 bg-gray-200">
          <Stack
            direction={['column', 'row']}
            alignItems={['start', 'center']}
            justifyContent="space-between"
          >
            <Typography variant="h6" className="mb-2 md:mb-0">Filters</Typography>
            <Button className="text-sm" onClick={handleSearch}>Search</Button>
          </Stack>
        </Box>
        <Stack spacing={2} className="px-3">
          <TypeFilter />
          <Divider />
          <PriceFilter />
          <Divider />
          <RoomFilter />
          <Divider />
          <BookingOptions />
        </Stack>
        {/* <Box className="px-3 py-2">
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleChange}
            fullWidth
          />
        </Box> */}
      </Card>
    </Box>
  );
};

