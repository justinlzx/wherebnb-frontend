import {
  Box,
  Card,
  Stack,
  Typography,
  Button, 
  Divider
} from "@mui/material";
import { TypeFilter } from "./TypeFilter";
import { PriceFilter } from "./PriceFilter";
import { RoomFilter } from "./RoomFilter";
import { BookingOptions } from "./BookingOptions";

export const Filter = () => {
  return (
    <>
      <Box className="py-4 pl-6 w-90">
        <Card className="pb-3 rounded-full">
          <Box className="mb-2 py-2 px-3 bg-slate-300">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">Filters</Typography>
              <Button>Clear All Filters</Button>
            </Stack>
          </Box>
          <Stack spacing={2} className="px-3">
              <TypeFilter/>
              <Divider/>
              <PriceFilter/>
              <Divider/>
              <RoomFilter/>
              <Divider/>
              <BookingOptions/>
          </Stack>
        </Card>
      </Box>
     
    </>
  );
};
