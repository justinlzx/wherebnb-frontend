import React, { useEffect, useState } from "react";
import { Typography, Box, Divider, Button, TextField, Rating } from "@mui/material";
import axios from "axios";
import { Comments } from "../Reviews/Comments";

export const Reviews = () => {
  const reviewsUrl = process.env.REACT_APP_REVIEWS_URL;
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const fetchReviewData = () => {
    axios
      .get(reviewsUrl)
      .then((response) => {
        setReviews(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

  useEffect(() => {
    fetchReviewData(); 
  }, [reviewsUrl]);

  const renderReviewItem = (review) => {
    return (
      <Box key={review.id} className="review-item">
        <Typography variant="h6">{review.title}</Typography>
        <Typography variant="body1">{review.body}</Typography>
        <Typography variant="subtitle2">Rating: {review.rating}</Typography>
      </Box>
    );
  };

  const handleReviewSubmit = () => {
    axios.post("/", {
      listingId: 1, 
      userId: 1, 
      review: reviewText,
      rating: rating
    })
    .then(() => {
      console.log("Review submitted successfully");
      setReviewText(""); 
      fetchReviewData(); 
      setRating(0); 
    })
    .catch((error) => {
      console.error("Error submitting review:", error);
    });
  };

  return (
    <>
      <div className="container my-2">
        <Typography variant="h4" className="my-4">
          Write your review
        </Typography>
        <div className="my-4">
          {reviews.map((review) => (
            <Box key={review.id} className="mb-4 review-box">
              {renderReviewItem(review)}
            </Box>
          ))}
        </div>
        <Divider variant="fullWidth" sx={{ marginY: 2 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', marginY: 2 }}>
          <Typography variant="body1" sx={{ marginRight: 1 }}>Overall Rating:</Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box>
        <TextField
          label="Write your review"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleReviewSubmit}
          sx={{ marginTop: 2 }}
        >
          Submit Review
        </Button>
      </div>
      <Comments />
    </>
  );
};

// import React, { useState } from "react";
// import {
//   Typography,
//   Rating,
//   TextField,
//   Button,
//   Box,
//   Divider,
//   ToggleButtonGroup,
//   ToggleButton,
// } from "@mui/material";
// import { VerticalLinearStepper } from "../Reviews/VerticalLinearStepper";

// export const Reviews = () => {
//   const [step, setStep] = useState(0);
//   const [rating, setRating] = useState({
//     cleanliness: 0,
//     accuracy: 0,
//     checkInProcess: 0,
//     communication: 0,
//     location: 0,
//     valueForMoney: 0,
//   });
//   const [comment, setComment] = useState("");
//   const [availability, setAvailability] = useState({
//     bedLinens: false,
//     pillows: false,
//     soap: false,
//     toiletPaper: false,
//     towels: false,
//   });

//   const handleNextStep = () => {
//     if (step < 2) {
//       setStep(step + 1);
//     }
//   };

//   const handlePrevStep = () => {
//     if (step > 0) {
//       setStep(step - 1);
//     }
//   };

//   const handleRatingChange = (category, newValue) => {
//     setRating({
//       ...rating,
//       [category]: newValue,
//     });
//   };

//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleItemAvailabilityChange = (item, value) => {
//     setAvailability({
//       ...availability,
//       [item]: value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log(`Review submitted: ${comment}`);
//     console.log("Ratings:", rating);
//     console.log("Items Availability:", availability);
//     setRating({
//       cleanliness: 0,
//       accuracy: 0,
//       checkInProcess: 0,
//       communication: 0,
//       location: 0,
//       valueForMoney: 0,
//     });
//     setComment("");
//     setAvailability({
//       bedLinens: false,
//       pillows: false,
//       soap: false,
//       toiletPaper: false,
//       towels: false,
//     });
//   };

//   const renderRatingSection = (category, label) => {
//     return (
//       <Box className="mb-2 flex">
//         <Typography variant="subtitle1" className="w-48 text-bold">
//           {label}
//         </Typography>
//         <Rating
//           name={category}
//           value={rating[category]}
//           onChange={(event, newValue) => handleRatingChange(category, newValue)}
//         />
//       </Box>
//     );
//   };
  
//   const renderAvailabilityQuestion = (item, label) => {
//     return (
//       <Box key={item} className="mb-2 flex">
//         <Typography variant="body1" className="w-48">
//           {label}
//         </Typography>
//         <Box className="flex items-center">
//           <ToggleButtonGroup
//             value={availability[item] ? "yes" : "no"}
//             exclusive
//             onChange={(event, value) =>
//               handleItemAvailabilityChange(item, value === "yes")
//             }
//           >
//             <ToggleButton
//               value="yes"
//               sx={{
//                 bgcolor: availability[item] ? "green" : "default",
//                 color: availability[item] ? "white" : "inherit",
//                 marginRight: '4px' 
//               }}
//             >
//               Yes
//             </ToggleButton>
//             <ToggleButton
//               value="no"
//               sx={{
//                 bgcolor: !availability[item] ? "red" : "default",
//                 color: !availability[item] ? "white" : "inherit",
//                 marginLeft: '4px'
//               }}
//             >
//               No
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Box>
//       </Box>
//     );
//   };

//   const renderFormContent = () => {
//     switch (step) {
//       case 0:
//         return (
//           <>
//             <Typography variant="h5">
//               Write a Review
//             </Typography>
//             <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
//               <Typography variant="subtitle">Overall Rating: </Typography>
//               <Rating
//                 name="simple-controlled"
//                 value={rating}
//                 onChange={(event, newValue) => setRating(newValue)}
//               />
//             </Box>
//             <Box my={2}>
//               <TextField
//                 multiline
//                 rows={4}
//                 variant="outlined"
//                 value={comment}
//                 onChange={handleCommentChange}
//                 label="Write your review"
//                 fullWidth
//               />
//             </Box>
//           </>
//         );
//       case 1:
//         return (
//           <>
//           <Typography variant="h5" className="mb-4">
//               Rate the Amenities Available
//           </Typography>
//           <Box sx={{ marginTop: '50px' }}>
//             {renderRatingSection("cleanliness", "Cleanliness")}
//             {renderRatingSection("accuracy", "Accuracy")}
//             {renderRatingSection("checkInProcess", "Check-in Process")}
//             {renderRatingSection("communication", "Communication")}
//             {renderRatingSection("location", "Location")}
//             {renderRatingSection("valueForMoney", "Value for Money")}
//           </Box>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <Typography variant="h5" className="mb-4">
//               Were these items available?
//             </Typography>
//             <Box sx={{ marginTop: '50px' }}>
//               {renderAvailabilityQuestion("bedLinens", "Bed linens on every bed")}
//               {renderAvailabilityQuestion("pillows", "1 pillow per guest")}
//               {renderAvailabilityQuestion("soap", "Soap")}
//               {renderAvailabilityQuestion("toiletPaper", "Toilet paper")}
//               {renderAvailabilityQuestion("towels", "Towels")}
//             </Box>
            

//           </>
//         );
//       default:
//         return null;
//     }
//   };


//   return (
//     <div className="container flex justify-center">
//       <Box className="p-5 w-1/3 static">
//         <VerticalLinearStepper
//           activeStep={step}
//           handleNext={handleNextStep}
//           handleBack={handlePrevStep}
//         />
//       </Box>
//       <Box className="p-5 w-1/3">
//         {renderFormContent()}
//         <Divider variant="fullWidth" sx={{ marginY: 2 }} />
//         <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginX: 'auto' }}> {/* Changed justifyContent to 'flex-start' */}
//           {step !== 0 && (
//             <Button variant="contained" onClick={handlePrevStep} sx={{ marginRight: 2 }}>
//               Previous
//             </Button>
//           )}
//           {step !== 2 ? (
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleNextStep}
//               sx={{ marginLeft: 2 }}
//             >
//               Next
//             </Button>
//           ) : (
//             <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginLeft: 2 }}>
//               Submit Review
//             </Button>
//           )}
//         </Box>
//       </Box>
//     </div>
//   );
// };
