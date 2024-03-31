import React, { useState } from "react";
import {
  Box,
  Card,
  Stack,
  Typography,
  Button,
  Divider,
  TextField,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  ToggleButton,
  ToggleButtonGroup,
  Slider,
  Switch,
  MenuItem,
  Select,
} from "@mui/material";
import { countries } from "../../constants/countries";
import axios from "axios";

export const Filter = ({ updateFilters }) => {
  const [filters, setFilters] = useState({
    country: "",
    maxPricePerNight: [0, 0],
    minOccupancy: null,
  });

  const handleCountryChange = (e) => {
    const newFilters = { ...filters, country: e.target.value };
    setFilters(newFilters);
    updateFilters(newFilters);
  };

  const handleChangeRoom = (e, newRoom) => {
    const newFilters = { ...filters, minOccupancy: newRoom };
    setFilters(newFilters);
    updateFilters(newFilters);
  };

  const handleChangeMinPrice = (e) => {
    const newFilters = {
      ...filters,
      maxPricePerNight: [e.target.value, filters.maxPricePerNight[1]],
    };
    setFilters(newFilters);
    updateFilters(newFilters);
  };

  const handleChangeMaxPrice = (e) => {
    const newFilters = {
      ...filters,
      maxPricePerNight: [filters.maxPricePerNight[0], e.target.value],
    };
    setFilters(newFilters);
    updateFilters(newFilters);
  };

  return (
    <Box className="py-4 px-2 md:px-4 lg:px-6 max-w-full overflow-wrap">
      <Card className="rounded-lg">
        <Box className="mb-2 py-2 px-3 bg-gray-200">
          <Stack
            direction={["column", "row"]}
            alignItems={["start", "center"]}
            justifyContent="space-between"
          >
            <Typography variant="h6" className="mb-2 md:mb-0">
              Filters
            </Typography>
            <Button className="text-sm" onClick={() => updateFilters(filters)}>
              Search
            </Button>
          </Stack>
        </Box>
        <Stack spacing={2} className="px-3">
          {/* Country Filter */}
          <Stack>
            <InputLabel className="text-sm font-semibold">Country</InputLabel>
            <Select
              labelId="country-label"
              id="country"
              value={filters.country}
              onChange={handleCountryChange}
              className="dropdown block"
            >
              <MenuItem value="">Any</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          {/* Price Filter */}
          <Stack spacing={2}>
            <InputLabel className="text-sm font-semibold">Price</InputLabel>
            <Slider
              value={filters.maxPricePerNight}
              onChange={(e, newValue) => {
                const newFilters = { ...filters, maxPricePerNight: newValue };
                setFilters(newFilters);
                updateFilters(newFilters);
              }}
              valueLabelDisplay="auto"
            />
            <Stack direction={['column', 'row']} spacing={2} alignItems={['start', 'center']} className="justify-between mx-2">
              <TextField
                size="small"
                label="Minimum"
                type="number"
                value={filters.maxPricePerNight[0]}
                onChange={(e) => {
                  const newFilters = { ...filters, maxPricePerNight: [e.target.value, filters.maxPricePerNight[1]] };
                  setFilters(newFilters);
                  updateFilters(newFilters);
                }}
                className="md:w-1/2"
              />
              <div className="hidden md:block md:w-4" /> {/* Hidden on small screens, creates a gap between the text fields on larger screens */}
              <TextField
                size="small"
                label="Maximum"
                type="number"
                value={filters.maxPricePerNight[1]}
                onChange={(e) => {
                  const newFilters = { ...filters, maxPricePerNight: [filters.maxPricePerNight[0], e.target.value] };
                  setFilters(newFilters);
                  updateFilters(newFilters);
                }}
                className="md:w-1/2"
              />
            </Stack>
          </Stack>
          <Divider />
          {/* Room Filter */}
          <Stack className="pb-4">
            <InputLabel className="text-sm font-semibold">
              Minimum Occupancy
            </InputLabel>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              size="small"
              aria-label="text alignment"
              value={filters.minOccupancy}
              onChange={handleChangeRoom}
            >
              <ToggleButton value="any">Any</ToggleButton>
              <ToggleButton value="1">1</ToggleButton>
              <ToggleButton value="2">2</ToggleButton>
              <ToggleButton value="3">3</ToggleButton>
              <ToggleButton value="4">4</ToggleButton>
              <ToggleButton value="5">5</ToggleButton>
              <ToggleButton value="6+">6+</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};
// <Box className="py-4 px-2 md:px-4 lg:px-6 max-w-full overflow-wrap">
//   <Card className="rounded-lg">
//     <Box className="mb-2 py-2 px-3 bg-gray-200">
//       <Stack
//         direction={['column', 'row']}
//         alignItems={['start', 'center']}
//         justifyContent="space-between"
//       >
//         <Typography variant="h6" className="mb-2 md:mb-0">
//           Filters
//         </Typography>
//         <Button className="text-sm" onClick={updateFilters}>
//           Search
//         </Button>
//       </Stack>
//     </Box>
//     <Stack spacing={2} className="px-3">
//       {/* Country Filter */}
//       <Stack>
//         <InputLabel className="text-sm font-semibold">Country</InputLabel>
//         <Select
//           labelId="country-label"
//           id="country"
//           value={filters.country}
//           onChange={handleCountryChange}
//           className="dropdown block"
//         >
//           <MenuItem value="">Any</MenuItem>
//           {/* Replace 'countries' with your array of countries */}
//           {countries.map((country) => (
//             <MenuItem key={country} value={country}>
//               {country}
//             </MenuItem>
//           ))}
//         </Select>
//       </Stack>
//       {/* Type Filter */}
//       <InputLabel className="text-sm font-semibold">Type of Place</InputLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="any-type"
//         name="row-radio-buttons-group"
//       >
//         <Stack
//           spacing={1}
//           direction={['column', 'row']}
//           className="flex flex-wrap"
//         >
//           <FormControlLabel
//             value="any-type"
//             control={<Radio />}
//             label={
//               <Typography variant="subtitle2" className="text-xs font-medium">
//                 Any Type
//               </Typography>
//             }
//             className="w-full md:w-auto" // Set width to full on small screens, auto on larger screens
//           />
//           <FormControlLabel
//             value="room"
//             control={<Radio />}
//             label={
//               <Typography variant="subtitle2" className="text-xs font-medium">
//                 Room
//               </Typography>
//             }
//             className="w-full md:w-auto" // Set width to full on small screens, auto on larger screens
//           />
//           <FormControlLabel
//             value="entire-house"
//             control={<Radio />}
//             label={
//               <Typography variant="subtitle2" className="text-xs font-medium">
//                 Entire House
//               </Typography>
//             }
//             className="w-full md:w-auto" // Set width to full on small screens, auto on larger screens
//           />
//         </Stack>
//       </RadioGroup>
//       <Divider />
//       {/* Price Filter */}
//       <Stack spacing={1}>
//         <InputLabel className="text-sm font-semibold">Price</InputLabel>
//         <Slider valueLabelDisplay="auto" value={value} onChange={handleChangePrice} />
//         <Stack direction={['column', 'row']} spacing={2} alignItems={['start', 'center']} className="justify-between mx-2">
//           <TextField
//             size="small"
//             label="Minimum"
//             type="number"
//             value={value[0]}
//             onChange={(e) => {
//               setValue([e.target.value, value[1]]);
//             }}
//             className="md:w-1/2"
//           />
//           <div className="hidden md:block md:w-4" /> {/* Hidden on small screens, creates a gap between the text fields on larger screens */}
//           <TextField
//             size="small"
//             label="Maximum"
//             type="number"
//             value={value[1]}
//             onChange={(e) => {
//               setValue([value[0], e.target.value]);
//             }}
//             className="md:w-1/2"
//           />
//         </Stack>
//       </Stack>
//       <Divider />
//     {/* Room Filter */}
//     <Stack>
//         <Box className="p-1">
//           <Stack spacing={1}>
//             <Typography variant="caption" className="text-xs">
//               Rooms
//             </Typography>
//             <ToggleButtonGroup
//               fullWidth
//               color="primary"
//               size="small"
//               aria-label="text alignment"
//               value={room}
//               onChange={handleChangeRoom}
//             >
//               <ToggleButton value="any">Any</ToggleButton>
//               <ToggleButton value="1">1</ToggleButton>
//               <ToggleButton value="2">2</ToggleButton>
//               <ToggleButton value="3">3</ToggleButton>
//               <ToggleButton value="4">4</ToggleButton>
//               <ToggleButton value="5">5</ToggleButton>
//               <ToggleButton value="6+">6+</ToggleButton>
//             </ToggleButtonGroup>
//           </Stack>
//         </Box>
//         <Box className="p-1">
//           <Stack spacing={1}>
//             <Typography variant="caption" className="text-xs">
//               Beds
//             </Typography>
//             <ToggleButtonGroup
//               fullWidth
//               color="primary"
//               size="small"
//               aria-label="text alignment"
//               value={room}
//               onChange={handleChangeRoom}
//             >
//               <ToggleButton value="any">Any</ToggleButton>
//               <ToggleButton value="1">1</ToggleButton>
//               <ToggleButton value="2">2</ToggleButton>
//               <ToggleButton value="3">3</ToggleButton>
//               <ToggleButton value="4">4</ToggleButton>
//               <ToggleButton value="5">5</ToggleButton>
//               <ToggleButton value="6+">6+</ToggleButton>
//             </ToggleButtonGroup>
//           </Stack>
//         </Box>
//       </Stack>
//       <Divider />
//       {/* Booking Options */}
//       <InputLabel className="text-sm font-semibold">Booking Options</InputLabel>
//       <Stack direction="row" alignItems="center" justifyContent="space-between">
//         <Typography variant="caption" className="text-xs">
//           Instant Book
//         </Typography>
//         <Switch
//           checked={instantBook}
//           onChange={handleInstantBookChange}
//           color="primary"
//         />
//       </Stack>
//       <Stack direction="row" alignItems="center" justifyContent="space-between">
//         <Typography variant="caption" className="text-xs">
//           Self Check-in
//         </Typography>
//         <Switch
//           checked={selfCheckIn}
//           onChange={handleSelfCheckInChange}
//           color="primary"
//         />
//       </Stack>
//     </Stack>
//   </Card>
// </Box>
