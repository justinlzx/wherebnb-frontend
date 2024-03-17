import React, { useState } from "react";
import {
  Typography,
  Rating,
  TextField,
  Button,
  Box,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { VerticalLinearStepper } from "../Reviews/VerticalLinearStepper";

export const Reviews = () => {
  const [step, setStep] = useState(0);
  const [rating, setRating] = useState({
    cleanliness: 0,
    accuracy: 0,
    checkInProcess: 0,
    communication: 0,
    location: 0,
    valueForMoney: 0,
  });
  const [comment, setComment] = useState("");
  const [availability, setAvailability] = useState({
    bedLinens: false,
    pillows: false,
    soap: false,
    toiletPaper: false,
    towels: false,
  });

  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleRatingChange = (category, newValue) => {
    setRating({
      ...rating,
      [category]: newValue,
    });
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleItemAvailabilityChange = (item, value) => {
    setAvailability({
      ...availability,
      [item]: value,
    });
  };

  const handleSubmit = () => {
    console.log(`Review submitted: ${comment}`);
    console.log("Ratings:", rating);
    console.log("Items Availability:", availability);
    setRating({
      cleanliness: 0,
      accuracy: 0,
      checkInProcess: 0,
      communication: 0,
      location: 0,
      valueForMoney: 0,
    });
    setComment("");
    setAvailability({
      bedLinens: false,
      pillows: false,
      soap: false,
      toiletPaper: false,
      towels: false,
    });
  };

  const renderRatingSection = (category, label) => {
    return (
      <Box className="mb-2 flex">
        <Typography variant="subtitle1" className="w-48 text-bold">
          {label}
        </Typography>
        <Rating
          name={category}
          value={rating[category]}
          onChange={(event, newValue) => handleRatingChange(category, newValue)}
        />
      </Box>
    );
  };
  
  const renderAvailabilityQuestion = (item, label) => {
    return (
      <Box key={item} className="mb-2 flex">
        <Typography variant="body1" className="w-48">
          {label}
        </Typography>
        <Box className="flex items-center">
          <ToggleButtonGroup
            value={availability[item] ? "yes" : "no"}
            exclusive
            onChange={(event, value) =>
              handleItemAvailabilityChange(item, value === "yes")
            }
          >
            <ToggleButton
              value="yes"
              sx={{
                bgcolor: availability[item] ? "green" : "default",
                color: availability[item] ? "white" : "inherit",
                marginRight: '4px' 
              }}
            >
              Yes
            </ToggleButton>
            <ToggleButton
              value="no"
              sx={{
                bgcolor: !availability[item] ? "red" : "default",
                color: !availability[item] ? "white" : "inherit",
                marginLeft: '4px'
              }}
            >
              No
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    );
  };

  const renderFormContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h5">
              Write a Review
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <Typography variant="subtitle">Overall Rating: </Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
              />
            </Box>
            <Box my={2}>
              <TextField
                multiline
                rows={4}
                variant="outlined"
                value={comment}
                onChange={handleCommentChange}
                label="Write your review"
                fullWidth
              />
            </Box>
          </>
        );
      case 1:
        return (
          <>
          <Typography variant="h5" className="mb-4">
              Rate the Amenities Available
          </Typography>
          <Box sx={{ marginTop: '50px' }}>
            {renderRatingSection("cleanliness", "Cleanliness")}
            {renderRatingSection("accuracy", "Accuracy")}
            {renderRatingSection("checkInProcess", "Check-in Process")}
            {renderRatingSection("communication", "Communication")}
            {renderRatingSection("location", "Location")}
            {renderRatingSection("valueForMoney", "Value for Money")}
          </Box>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5" className="mb-4">
              Were these items available?
            </Typography>
            <Box sx={{ marginTop: '50px' }}>
              {renderAvailabilityQuestion("bedLinens", "Bed linens on every bed")}
              {renderAvailabilityQuestion("pillows", "1 pillow per guest")}
              {renderAvailabilityQuestion("soap", "Soap")}
              {renderAvailabilityQuestion("toiletPaper", "Toilet paper")}
              {renderAvailabilityQuestion("towels", "Towels")}
            </Box>
            

          </>
        );
      default:
        return null;
    }
  };


  return (
    <div className="container flex justify-center">
      <Box className="p-5 w-1/3 static">
        <VerticalLinearStepper
          activeStep={step}
          handleNext={handleNextStep}
          handleBack={handlePrevStep}
        />
      </Box>
      <Box className="p-5 w-1/3">
        {renderFormContent()}
        <Divider variant="fullWidth" sx={{ marginY: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginX: 'auto' }}> {/* Changed justifyContent to 'flex-start' */}
          {step !== 0 && (
            <Button variant="contained" onClick={handlePrevStep} sx={{ marginRight: 2 }}>
              Previous
            </Button>
          )}
          {step !== 2 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextStep}
              sx={{ marginLeft: 2 }}
            >
              Next
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginLeft: 2 }}>
              Submit Review
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
};
