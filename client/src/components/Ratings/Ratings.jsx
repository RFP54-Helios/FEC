import React, { useState, useContext, useEffect } from 'react';
import Stars from './Stars.jsx';
import Reviews from './Reviews.jsx';
import sampleReviews from './sample-reviews.json';
import sampleMeta from './sample-meta.json';
import { ProductContext } from '../../App.jsx';
import { getFromApi } from '../../helperFunctions.js';

const Ratings = (props) => {

  // App level state
  const [product, setProduct] = useContext(ProductContext);

  // component level state
  const [ratings, setRatings] = useState({
    sort: 'relevant',
    reviews: sampleReviews.results,
    meta: sampleMeta
  });

  // run on component render
  // will re-render automatically with change of App level state
  useEffect(() => {
    Promise.all([
      getFromApi('reviews', {
        product_id: product.product_id,
        count: 6,
        sort: ratings.sort
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
        <h3>Ratings & Reviews</h3>
        <Stars starsCount={3.5} />
      </div>
      <div id='ratings-container-right'>
        <Reviews
          ratings = { ratings }
        />
      </div>
    </div>
  );
}

export default Ratings;
