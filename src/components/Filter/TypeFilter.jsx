import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

export const TypeFilter = () => {
  return (
    <div className="bg-light p-2">
      <h1 className="text-md font-bold">Room Type</h1>
      <RadioGroup className="text-sm flex gap-1">
      <div class="flex flex-wrap">
        <div class="flex items-center mr-4 mb-2">
            <input type="radio" id="any_type" name="radio_type" value="any" class="mr-1" />
            <label for="any_type" class="text-xs cursor-pointer">Any Type</label>
        </div>

        <div class="flex items-center mr-4 mb-2">
            <input type="radio" id="room_type" name="radio_type" value="room" class="mr-1" />
            <label for="room_type" class="text-xs cursor-pointer">Room</label>
        </div>

        <div class="flex items-center mr-4 mb-2">
            <input type="radio" id="entire_house_type" name="radio_type" value="entire_house" class="mr-1" />
            <label for="entire_house_type" class="text-xs cursor-pointer">Entire House</label>
        </div>
    </div>
      </RadioGroup>
    </div>
  );
};

