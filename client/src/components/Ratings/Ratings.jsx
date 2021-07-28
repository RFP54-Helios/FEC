import React from 'react';
import Stars from './Stars.jsx';
import Reviews from './Reviews.jsx';
import sampleData from './sample-data.json';

const Ratings = (props) => {
  return (
    <div id='ratings-container'>
      <div id='ratings-container-left'>
        <h3>Ratings & Reviews</h3>
        <Stars starsCount={3.5} />
      </div>
      <div id='ratings-container-right'>
        <Reviews reviews={ sampleData.results } />
      </div>
    </div>
  );
}

export default Ratings;
