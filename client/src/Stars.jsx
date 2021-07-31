import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from "./App.jsx";

const Stars = (props) => {
  const [product, setProduct] = useContext(ProductContext);

  return(
    <div className='ratings-stars'>
      <p>{props.starsCount}</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
      <p className='ratings-star'>*</p>
    </div>
  );
}
Stars.propTypes = {
  starsCount: PropTypes.number.isRequired,
}

export default Stars;
