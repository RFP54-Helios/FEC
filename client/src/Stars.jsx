import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from "./App.jsx";
import { getStarsArr } from './helperFunctions.js'

import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const Stars = () => {
  const [product, setProduct] = useContext(ProductContext);

  // arr of numbers representing full or empty stars
  // [1, 1, 0, 0, 0] = 2 star rating
  let starNumbers = getStarsArr(product.ratings);

  return (
    <div className='ratings-stars'>
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

export default Stars;
