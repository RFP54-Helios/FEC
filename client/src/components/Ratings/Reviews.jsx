import React from 'react';
import PropTypes from 'prop-types';

const Reviews = (props) => {
  return(
    <div>
      <h3>{props.reviews.count} reviews, sorted by </h3>
    </div>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.object.isRequired,
}

export default Reviews;
