import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from "./App.jsx";
import { getStarsArr, getRatings } from './helperFunctions.js'

import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const Stars = (props) => {
  // App level state
  const [product, setProduct] = useContext(ProductContext);

  // component level state
  const [ratings, setRatings] = useState([]);
  const [starNumbers, setStarNumbers] = useState([]);

  useEffect(() => {
    // optional props - for related products
    if (props.product_id) {
      // get meta data from API
      console.log(props.product_id);
      getRatings(props.product_id)
        .then(results => {
          setRatings(results);
          setStarNumbers(getStarsArr(results));
        });
      } else {
        console.log(product.ratings);
        setRatings(product.ratings);
        setStarNumbers(getStarsArr(product.ratings));
    }
  }, [product.ratings]);

  // arr of numbers representing full or empty stars
  // [1, 1, 0, 0, 0] = 2 star rating
  // let starNumbers = getStarsArr(ratings);

  return (
    <div className='ratings-stars'>
      {starNumbers.map(starNum => {
        if (starNum === 1) {
          return (<BsStarFill />)
        } else if (starNum === 0.5) {
          return (<BsStarHalf />)
        } else {
          return (<BsStar />)
        }
      })}
    </div>
  );
}

export default Stars;
