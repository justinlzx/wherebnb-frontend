import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Write a Review",
    description: "Share your feedback about your experience with us.",
  },
  {
    label: "Rate Different Aspects",
    description:
      "Provide ratings for cleanliness, accuracy, check-in process, communication, location, and value for money.",
  },
  {
    label: "Submit Your Review",
    description: "Complete the review process by submitting your feedback.",
  },
];

export const VerticalLinearStepper = ({
  activeStep,
  setActiveStep,
  handleNext,
}) => {
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="container items-center justify-center h-full mx-auto">
      <Box className="mx-auto">
        <Typography variant="h2" sx={{ mb:4}}>
          Review your stay with us. 
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box className="mb-2">
                  <div className="flex items-center">
                    {/* Add more content or icons here */}
                    {/* <Button
                      variant="contained"
                      onClick={handleNext} // Use handleNext from props
                      disabled={activeStep === steps.length - 1}
                      className="mr-1"
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className="mr-1"
                    >
                      Back
                    </Button> */}
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className="mt-1 mr-1">
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
};
