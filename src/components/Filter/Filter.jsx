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
    <Box className="py-4 px-2 md:px-4 lg:px-6 max-w-full overflow-wrap"> {/* Apply max width and overflow-wrap class */}
      <Card className="rounded-lg">
        <Box className="mb-2 py-2 px-3 bg-gray-200">
          <Stack
            direction={['column', 'row']}
            alignItems={['start', 'center']} // Align items to start on small screens
            justifyContent="space-between"
          >
            <Typography variant="h6" className="mb-2 md:mb-0">Filters</Typography> {/* No need to apply overflow-wrap here */}
            <Button className="text-sm">Clear All Filters</Button>
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
      </Card>
    </Box>
  );
};