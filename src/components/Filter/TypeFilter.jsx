import {
  InputLabel,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

export const TypeFilter = () => {
  return (
    <>
        <InputLabel className="text-sm font-semibold">Type of Place</InputLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="any-type"
          name="row-radio-buttons-group"
        >
        <Stack spacing={1} direction ="row">
          <FormControlLabel
            value="any-type"
            control={<Radio />}
            label={
              <Typography variant="subtitle2" className="text-xs font-medium">
                Any Type
              </Typography>
            }
          />
          <FormControlLabel
            value="room"
            control={<Radio />}
            label={
              <Typography variant="subtitle2" className="text-xs font-medium">
                Room
              </Typography>
            }
          />
          <FormControlLabel
            value="entire-house"
            control={<Radio />}
            label={
              <Typography variant="subtitle2" className="text-xs font-medium">
                Entire House
              </Typography>
            }
          />
          </Stack>
        </RadioGroup>
      
    </>
  );
};
