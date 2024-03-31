import React from 'react';
import { SubmitReview } from './SubmitReview';
import { Comments } from './Comments';

export const Review = () => {
  return (
    <div>
      <SubmitReview />
      <Comments />
    </div>
  );
};