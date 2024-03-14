import { Box, Card, Stack, Typography, Button, InputLabel, FormControlLabel, RadioGroup, Radio } from "@mui/material";
import { TypeFilter } from "./TypeFilter";
import { PriceFilter } from "./PriceFilter";
import { RoomFilter } from "./RoomFilter";


export const Filter = () => {
  return (
    <>
      <Card className="mt-4 justify-between mx-5">
        <Box className=" p-3 bg-base-300 flex justify-between">
            <h1 className="text-xl font-bold">Filters</h1>
            <button class="text-xs bg-primary text-white rounded-lg p-1 border-3 border-primary hover:bg-transparent hover:text-primary group">
            <span class="group-hover:hidden">Clear All Filters</span>
            <span class="hidden group-hover:inline">Clear All Filters</span>
          </button>
        </Box>
        <Stack>
          <TypeFilter/>
        </Stack>
        <hr className="w-90%"/>
        <Stack>
          <PriceFilter/>
        </Stack>
          <RoomFilter/>
      </Card>

    </>




    
  );
};
