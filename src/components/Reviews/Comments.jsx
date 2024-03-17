import React from "react";
import { Typography, Rating, Grid } from "@mui/material";
import reviewsData from "./reviews.json";

export const Comments = () => {
  // Find the length of the longest comment
  const maxCommentLength = Math.max(...reviewsData.map(review => review.comment.length));

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Reviews
      </Typography>
      <Grid container spacing={3}>
        {reviewsData.map((review) => (
          <Grid item key={review.id} xs={12} sm={6} md={6} lg={6} xl={6}>
            <div className="h-full flex flex-col">
              <div className="rounded-md p-3 border border-gray-300 flex-1">
                <Typography variant="subtitle1">
                  <b>{review.user}</b>
                </Typography>
                <Rating
                  name="read-only"
                  value={review.rating}
                  readOnly
                  size="small"
                />
                <Typography variant="body1">"{review.comment}"</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
