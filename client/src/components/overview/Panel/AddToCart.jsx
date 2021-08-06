import React from 'react';

const AddToCart = () => {
  return (
    <form id="cart">
      <div id="selectors">
        <select className="custom-select" id="size" name="size">
          <option value={null}>SELECT SIZE</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <select className="custom-select" id="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div id="form-buttons">
        <button type="submit" value="submit" id="add-to-bag">
          ADD TO BAG
        </button>
        <button id="favorite">STAR</button>
      </div>
    </form>
  );
};

export default AddToCart;
