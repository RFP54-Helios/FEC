import React from 'react';
import Stars from '../../Stars.jsx';

const Rating = ({ ratings }) => {
  return (
    <div id="rating">
      <Stars ratings={ratings} />
      <a>Read all reviews</a>
    </div>
  );
};

export default Rating;
