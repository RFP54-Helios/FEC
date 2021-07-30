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
    <div>
      <h3>{totalReviews} reviews, sorted by {props.ratings.sort}</h3>
      <ReviewsList ratings={props.ratings} />
    </div>
  );
}
Reviews.propTypes = {
  ratings: PropTypes.object.isRequired,
}

const ReviewsList = (props) => {
  return (
    <div>
      <h4>Reviews List</h4>
      <ul>
        {props.ratings.reviews.map(review => (
          <li key={review.review_id} className="reviews-list-item">
            <ReviewsListItem review={review}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
ReviewsList.propTypes = {
  ratings: PropTypes.object.isRequired,
}

const ReviewsListItem = (props) => {
  let displayBody;
  if (props.review.body.length > 100) {
    displayBody = props.review.body.substr(0, 100) + ' ...';
  } else {
    displayBody = props.review.body;
  }

  return (
    <div>
      <h4>{props.review.summary}</h4>
      <p>{displayBody}</p>
    </div>
  )
}
ReviewsListItem.propTypes = {
  review: PropTypes.object.isRequired,
}

export default Reviews;
