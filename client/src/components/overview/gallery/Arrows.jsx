import React, {useContext} from 'react';
import { ProductContext } from "../../../App.jsx";

const Arrows = () => {
  const [product, setProduct] = useContext(ProductContext);
  return(
    <div id='arrows'>
      <button className='arrow' id='left-arrow'>‹</button>
      <button className='arrow' id='right-arrow'>›</button>
    </div>
  )
}

export default Arrows;