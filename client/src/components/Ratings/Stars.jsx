import React from 'react';
import PropTypes from 'prop-types';

const Stars = (props) => {
  return(
    <div className='ratings-stars'>
      <p>{props.starsCount}</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
    </div>
  );
}
Stars.propTypes = {
  starsCount: PropTypes.number.isRequired,
}

export default Stars;
