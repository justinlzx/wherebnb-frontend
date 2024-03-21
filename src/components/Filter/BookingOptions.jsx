import { InputLabel, Stack, Switch, Typography } from "@mui/material";


export const BookingOptions = () => {
  return (
    <>
      <InputLabel className="text-sm font-semibold">Booking Options</InputLabel>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="caption" className="text-xs">
            Instant Book
          </Typography>
          <Switch defaultChecked />
    </Stack>
    <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="caption" className="text-xs">
            Self Check-in
          </Typography>
          <Switch/>
    </Stack>
    </>
  );
};
