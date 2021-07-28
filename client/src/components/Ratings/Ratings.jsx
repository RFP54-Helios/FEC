import React from 'react';
import Stars from './Stars.jsx';
import Reviews from './Reviews.jsx';
import sampleReviews from './sample-reviews.json';
import sampleMeta from './sample-meta.json';

const Ratings = (props) => {
  return (
    <div id='ratings-container'>
      <div id='ratings-container-left'>
        <h3>Ratings & Reviews</h3>
        <Stars starsCount={3.5} />
      </div>
      <div id='ratings-container-right'>
        <Reviews
          reviews={ sampleReviews.results }
          meta={ sampleMeta }
        />
      </div>
    </div>
  );
}

export default Ratings;
