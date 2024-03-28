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
