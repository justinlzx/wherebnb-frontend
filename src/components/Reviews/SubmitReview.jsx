import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Divider,
  Button,
  TextField,
  Rating,
} from "@mui/material";
import customAxios from "../../utils/customAxios";
import { toast } from "react-toastify";

export const SubmitReview = ({ id, hostId, listingId }) => {
  // userId = id 
  // console.log('Listing ID:', id);
  const reviewsUrl = process.env.REACT_APP_REVIEWS_URL;
  const accountsUrl = process.env.REACT_APP_ACCOUNTS_URL;
  const accomsUrl = process.env.REACT_APP_ACCOMS_URL;
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = async () => {
    if (hostId === null) {
      return;
    }

    try {
      const response1 = await customAxios.get(`${accountsUrl}/view/${hostId}`);
      const guestName = `${response1.data.data.firstName} ${response1.data.data.lastName}`;

      const response2 = await customAxios.get(`${accomsUrl}/listings/${id}`);
      const propertyName = response2.data.data.name;

      await customAxios.post(`${reviewsUrl}/review`, {
        review: reviewText,
        listingId,
        guestId: id,
        guestName,
        propertyName,
        rating,
        hostId,
      });

      toast.success("Review submitted successfully!");
      setReviewText("");
      setRating(0);
    } catch (error) {
      toast.error("Failed to submit review. Please try again.");
      setReviewText("");
      setRating(0);
    }
  };

  return (
    <>
      <div>
        <Typography variant="h4" className="my-4">
          Write your review
        </Typography>
        <Divider variant="fullWidth" sx={{ marginY: 2 }} />
        <Box sx={{ display: "flex", alignItems: "center", marginY: 2 }}>
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            Overall Rating:
          </Typography>
          <Rating
            name="rating"
            value={rating}
            onChange={(_, newValue) => {
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
    </>
  );
};
