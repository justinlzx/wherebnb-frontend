import { useState } from "react";
import { Slider, Stack, InputLabel, TextField } from "@mui/material";

export const PriceFilter = () => {
  const [value, setValue] = useState([20, 75]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack spacing={1}>
        <InputLabel className="text-sm font-semibold">Price</InputLabel>
        <Slider valueLabelDisplay="auto" value={value} onChange={handleChange} />
        <Stack direction={['column', 'row']} spacing={2} alignItems={['start', 'center']} className="justify-between mx-2">
          <TextField
            size="small"
            label="Minimum"
            type="number"
            value={value[0]}
            onChange={(e) => {
              setValue([e.target.value, value[1]]);
            }}
            className="md:w-1/2"
          />
          <div className="hidden md:block md:w-4" /> {/* Hidden on small screens, creates a gap between the text fields on larger screens */}
          <TextField
            size="small"
            label="Maximum"
            type="number"
            value={value[1]}
            onChange={(e) => {
              setValue([value[0], e.target.value]);
            }}
            className="md:w-1/2"
          />
        </Stack>
      </Stack>
    </>
  );
};
