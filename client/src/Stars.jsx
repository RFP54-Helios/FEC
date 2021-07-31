import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from "./App.jsx";
import { getStarsArr } from './helperFunctions.js'

import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const Stars = (props) => {
  const [product, setProduct] = useContext(ProductContext);

  let starNumbers = getStarsArr(product.ratings);

  return (
    <div className='ratings-stars'>
      <p>{props.starsCount}</p>
      {starNumbers.map(starNum => {
        if (starNum === 1) {
          return (<BsStarFill />)
        } else {
          return (<BsStar />)
        }
      })}
    </div>
  );
}
Stars.propTypes = {
  starsCount: PropTypes.number.isRequired,
}

export default Stars;
