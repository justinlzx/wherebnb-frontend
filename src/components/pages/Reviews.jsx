import React, { useState } from 'react';
import { Typography, Rating } from '@mui/material';

export const Reviews = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
};