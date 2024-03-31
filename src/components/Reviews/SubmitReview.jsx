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
import axios from "axios";

export const SubmitReview = ({ id }) => {
  console.log('Listing ID:', id);
  const reviewsUrl = process.env.REACT_APP_REVIEWS_URL;
  const accountsUrl = process.env.REACT_APP_ACCOUNTS_URL;
  const accomsUrl = process.env.REACT_APP_ACCOMS_URL;
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hostId, setHostId] = useState(null); // Initialize hostId as null
  const { userId } = useParams(); // Assuming userId is obtained from the URL params

  useEffect(() => {
    let source;
    if (id) {
      source = axios.CancelToken.source();
      axios
        .get(`${accomsUrl}/listings/${id}`, { cancelToken: source.token })
        .then((resp) => {
          console.log('Response data:', resp.data);
          if (resp.data.data && resp.data.data.length > 0) {
            setHostId(resp.data.data[0].hostId);
          } else {
            console.error("No data in response or data array is empty");
          }
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            console.error("Error fetching listing details:", error);
          }
        });
    }
  
    return () => {
      if (source) {
        source.cancel("Request canceled due to component unmounting");
      }
    };
  }, [id]);
  
  const handleReviewSubmit = async () => {
    if (hostId === null) {
      console.error("Host ID is not set. Cannot submit review.");
      return;
    }

    try {
      const response1 = await axios.get(`${accountsUrl}/view/${userId}`);
      console.log("Response from accounts service:", response1.data);
      const guestName = `${response1.data.data.firstName} ${response1.data.data.lastName}`;

      const response2 = await axios.get(`${accomsUrl}/listings/${id}`);
      console.log("Response from accoms service:", response2.data);
      const propertyName = response2.data.name;

      await axios.post(`${reviewsUrl}/review`, {
        review: reviewText,
        listingId: id,
        guestId: userId,
        guestName: guestName,
        propertyName: propertyName,
        rating: rating,
        hostId: hostId,
      });

      console.log("Review submitted successfully");
      setReviewText("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
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
    </>
  );
};
