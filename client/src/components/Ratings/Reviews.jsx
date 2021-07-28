import React from 'react';
import PropTypes from 'prop-types';

const Reviews = (props) => {
  // calculate total reviews based on metadata
  let totalReviews = 0;
  for (let rating in props.meta.ratings) {
    totalReviews += Number(props.meta.ratings[rating]);
  }
  return (
    <div>
      <h3>{totalReviews} reviews, sorted by </h3>
      <ReviewsList reviews={props.reviews} />
    </div>
  );
}
Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

const ReviewsList = (props) => {
  return (
    <div>
      <h4>Reviews List</h4>
      <ul>
        {props.reviews.map(review => (
          <li>
            <ReviewsListItem review={review}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
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
