import React from 'react';
import Stars from '../../Stars.jsx';

const Rating = (props) => {
  return(
    <div id='rating'>
      <Stars ratings={props.ratings} />
      <a href=''>Read all reviews</a>
    </div>
  )
}

export default Rating;
