import React from 'react';
import PropTypes from 'prop-types';

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
      <ReviewsList ratings={props.ratings} />
    </>
  );
}
Reviews.propTypes = {
  ratings: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
}

const ReviewsList = (props) => {
  return (
    <>
      <h4>Reviews List</h4>
      <ul>
        {props.ratings.reviews.map(review => (
          <li key={review.review_id} className="reviews-list-item">
            <ReviewsListItem review={review}/>
          </li>
        ))}
      </ul>
    </>
  );
}
ReviewsList.propTypes = {
  ratings: PropTypes.object.isRequired,
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
