import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from "./App.jsx";

import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';

const Stars = (props) => {
  const [product, setProduct] = useContext(ProductContext);

  return (
    <div className='ratings-stars'>
      <p>{props.starsCount}</p>
      <BsStarFill />
      <BsStarHalf />
      <BsStar />
      <BsStar />
      <BsStar />
    </div>
  );
}
Stars.propTypes = {
  starsCount: PropTypes.number.isRequired,
}

export default Stars;
