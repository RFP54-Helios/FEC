import React from 'react';
import PropTypes from 'prop-types';
import { getStarsArr } from './helperFunctions.js'

import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const Stars = (props) => {

  // arr of numbers representing star fills
  // [1, 1, 0.5, 0, 0] = 2.5 star rating
  // map to [full, full, half, empty, empty] star icon components
  let starNumbers = getStarsArr(props.ratings);

  return (
    <div className='ratings-stars'>
      {starNumbers.map((starNum, index) => {
        if (starNum === 1) {
          return (<BsStarFill key={index} />)
        } else if (starNum === 0.5) {
          return (<BsStarHalf key={index} />)
        } else {
          return (<BsStar key={index} />)
        }
      })}
    </div>
  );
}
// Stars.propTypes = {
//   ratings: PropTypes.array.isRequired,
// }

export default Stars;
