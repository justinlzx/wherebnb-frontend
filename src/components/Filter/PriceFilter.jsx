import { useState } from "react";
import { Slider, Stack, InputLabel, TextField } from "@mui/material";

export const PriceFilter = () => {
  const [value, setValue] = useState([20, 75]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  }  

  // const handleMinChange = (e) => {
  //   const minValue = e.target.value === '' ? '' : Number(e.target.value);
  //   setValue([minValue, value[1]]);
  // };

  return (
    <>
      <Stack spacing={1}>
        <InputLabel className="text-sm font-semibold">Price</InputLabel>
        <Slider valueLabelDisplay="auto" value={value} onChange={handleChange} />
        <Stack direction="row" alignItems="center" spacing={2}>
          <TextField size="small" label="minimum" type="number" value={value[0]} onChange={(e) => {
            setValue((prev) => {
              return [e.target.value, prev[1]]
            })
          }}/>
          <TextField size="small" label="maximum" type="number" value={value[1]} onChange={(e) => {
            setValue((prev) => {
              return [prev[0], e.target.value]
            })
          }}/>
        </Stack>
      </Stack>
    </>
  );
};
