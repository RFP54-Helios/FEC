import Stars from '../Stars.jsx';
import React, { useState, useContext, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import { ProductContext } from '../../App.jsx';
import { getFromApi, averageRating, getProgressArr } from '../../helperFunctions.js';

const Ratings = (props) => {

  // App level state
  const [product, setProduct] = useContext(ProductContext);

  // component level state
  const [sortBy, setSortBy] = useState('relevant')
  const [ratings, setRatings] = useState({
    reviews: [],
    meta: {}
  });

  // run on component render
  // will re-render automatically with change of App level state
  useEffect(() => {
    Promise.all([
      getFromApi('reviews', {
        product_id: product.product_id,
        count: 6,
        sort: sortBy
      }),
      getFromApi(`reviews/meta?product_id=${product.product_id}`)
    ])
    .then(ratingResults => {
      // store reviews in state
      setRatings(prevState => ({
        ...prevState,
        reviews: ratingResults[0].results,
        meta: ratingResults[1]
      }));
    })
    .catch(err => {
      console.log(err);
    })
  }, [product.product_id]);

  return (
    <div id='ratings-container'>
      <div id='ratings-container-left'>
        <h2 className='ratings-h2'>Ratings & Reviews</h2>
        <div id='ratings-container-small'>
          <p id='ratings-rating-large'>{averageRating(product.ratings)}</p>
          <Stars
            ratings={product.ratings}
          />
        </div>
      <ReviewProgressBars
        ratings={product.ratings}
      />
      </div>
      <div id='ratings-container-right'>
        <Reviews
          ratings={ratings}
          sortBy={sortBy}
          product_id={product.product_id}
        />
      </div>
    </div>
  );
}


let ReviewProgressBars = (props) => {

  let progresses = getProgressArr(props.ratings);

  return (
    <>
      <h4>100% of reviewers recommend this product</h4>
      <>
        {progresses.map((progress, index) => (
          <div key={index} className='review-progress'>
            <label>{5 - index} stars</label>
            <progress key={index} value={progress} max='100'></progress>
          </div>
        ))}
      </>
    </>
  );
}

export default Ratings;
