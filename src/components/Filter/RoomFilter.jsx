import { useState } from "react";
import {
  InputLabel,
  Stack,
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export const RoomFilter = () => {

  const [room, setRoom] = useState('any'); 
  const handleChangeRoom = (e, newRoom) => {
    setRoom(newRoom);
  }
  return (
    <>
      <Stack>
        <Box className="p-1">
          <Stack spacing={1}>
            <Typography variant="caption" className="text-xs">
              Rooms
            </Typography>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              size="small"
              aria-label="text alignment"
              value={room}
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
        </Box>
        <Box className="p-1">
          <Stack spacing={1}>
            <Typography variant="caption">
              Beds
            </Typography>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              size="small"
              aria-label="text alignment"
              value={room}
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
        </Box>
      </Stack>
    </>
  );
};
