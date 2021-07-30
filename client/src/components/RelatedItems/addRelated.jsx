import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import items from './sampleData.json';
import AddOutfits from './AddOutfits.jsx';


const AddRelated = (props) => {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  }

  return (
    <div>
      <div className = "titleRelated">RELATED PRODUCTS </div>
      <div className="relatedItems" >

      {(click > 0) ? <FontAwesomeIcon icon={faAngleLeft} className = "right-arrow" onClick = {() => {setClick(click -1)}} />: ""}

        {props.items.map((item, i) => {
          if(i < click  || i > click +3) {
            return "";
          }

          var price_style = {
            textDecoration:'line-through'
          };
          var sale_style = {
            color:'red'
          };

          if (item.sale_price > 0) {
            var sale_label = <span style={sale_style}>${item.sale_price} </span>;
            var price_label = <span style={price_style}>${item.default_price}</span>;
          } else {
            var sale_label = "";
            var price_label = <span>${item.default_price}</span> ;
          }
          return (
            // eslint-disable-next-line react/jsx-key

            <div className="img_container" ><FontAwesomeIcon icon={faStar} className = "openModal"/>
              <div><img src = {item.img}></img></div>
              <div>{item.category}</div>
              <div>{item.name}</div>
              <div>{sale_label}{price_label}</div>
                <div>*****</div>
            </div>
          )

        })}
    { (click + 3  <= items.length-1) ? <FontAwesomeIcon icon={faAngleRight} className = "right-arrow" onClick={handleClick} /> : ""}
      </div>
 </div>
  )
}


export default AddRelated;
