import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Rating, Grid } from "@mui/material";
import customAxios from "../../utils/customAxios";

export const Comments = () => {
  const { id } = useParams();
  const reviewsUrl = process.env.REACT_APP_REVIEWS_URL;
  const [comments, setComments] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const source = customAxios.CancelToken.source(); 
    customAxios.get(`${reviewsUrl}/review/${id}`, { cancelToken: source.token })
      .then((resp) => {
        setComments(resp.data);
        console.log(resp.data);
        calculateAverageRating(resp.data);
      });
  }, [id]);

  const calculateAverageRating = (data) => {
    if (data.length > 0) {
      const totalRating = data.reduce((sum, comment) => sum + comment.rating, 0);
      const average = totalRating / data.length;
      setAverageRating(average);
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Overall Rating: {averageRating.toFixed(2)} <Rating name="read-only" value={averageRating} readOnly size="small" />
      </Typography>
      <Grid container spacing={3}>
        {comments && comments.map((comment) => (
          <Grid item key={comment.reviewId} xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className="h-full flex flex-col">
              <div className="rounded-md p-3 border border-gray-300 flex-1 overflow-hidden">
                <Typography variant="subtitle1">
                  <b>User {comment.userId}</b>
                </Typography>
                <Rating
                  name="read-only"
                  value={comment.rating}
                  readOnly
                  size="small"
                />
                <Typography variant="body1">"{comment.review}"</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};