import React, {useContext} from 'react';
import AddOutfits from './addOutfits.jsx';



const Price = (props) => {

    let price_style = {
      textDecoration: 'line-through'
    };
    let sale_style = {
      color: 'red'
    };

    let sale_label = "";
      let price_label = <span>${props.original_price}</span>;

    if (props.sale_price !== null) {
      sale_label = <span style={sale_style}>${props.sale_price} </span>;
      price_label = <span style={price_style}>${props.original_price}</span>;
    }

    return (
      <div>{sale_label} {price_label}</div>
    )

}

export default Price;

