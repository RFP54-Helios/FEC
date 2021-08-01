import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars.jsx'
import { getFromApi } from '../../helperFunctions.js';

const Reviews = (props) => {
  // calculate total reviews based on metadata
  // move to a helper function for testing
  let totalReviews = 0;
  for (let rating in props.ratings.meta.ratings) {
    totalReviews += Number(props.ratings.meta.ratings[rating]);
  }

  return (
    <>
      <h3>{totalReviews} reviews, sorted by {props.sortBy}</h3>
      <ReviewsList
        ratings={props.ratings}
        product_id={props.product_id}
      />
    </>
  );
}
Reviews.propTypes = {
  ratings: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  product_id: PropTypes.number.isRequired,
}

const ReviewsList = (props) => {
  // initially render the first 2 reviews
  let [reviews, setReviews] = useState(props.ratings.reviews.slice(0, 2));
  // next page to get review from
  let [page, setPage] = useState(3);

  // update state when props change
  useEffect(() => {
    setReviews(props.ratings.reviews.slice(0, 2));
  }, [props.ratings])

  let handleLoadMore = () => {
    // update state with another page of reviews
    getFromApi('reviews', {
      product_id: props.product_id,
      count: 2,
      page: page
    })
    .then(newReviews => {
      // append to existing, next page
      setReviews(prevReviews => prevReviews.concat(newReviews.results));
      setPage(prevPage => prevPage + 1);
    })
    .catch(err => console.log(error));
  }

  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.review_id} className="reviews-list-item">
            <ReviewsListItem review={review}/>
          </li>
        ))}
      </ul>
      <button className="reviews-load-more" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
}
ReviewsList.propTypes = {
  ratings: PropTypes.object.isRequired,
  product_id: PropTypes.number.isRequired,
}

const ReviewsListItem = (props) => {
  // move into helper function with testing
  let displayBody;
  if (props.review.body.length > 100) {
    displayBody = props.review.body.substr(0, 100) + ' ...';
  } else {
    displayBody = props.review.body;
  }

  return (
    <>
      <Stars ratings={props.review.rating} />
      <p className="reviewer-name">{props.review.reviewer_name}</p>
      <h4>{props.review.summary}</h4>
      <p>{displayBody}</p>
      <p>Helpful?</p>
      <span className="review-helpfulness">Yes </span>
      <p>({props.review.helpfulness})</p>
    </>
  )
}
ReviewsListItem.propTypes = {
  review: PropTypes.object.isRequired,
}

export default Reviews;
