import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../../../Stars.jsx';

const Rating = (props) => {
  return(
    <div id='rating'>
      <Stars ratings={props.ratings} />
      <a href=''>Read all reviews</a>
    </div>
  )
}
// Rating.propTypes = {
//   ratings: PropTypes.array.isRequired,
// }

export default Rating;
