import React, {useContext} from "react";
import Gallery from "./gallery/Gallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import StyleSelector from "./StyleSelector.jsx";
import AddToCart from "./AddToCart.jsx";
import Rating from "./Rating.jsx";

const Overview = (props) => {
  return (
    <div id="overview-components">
      <Gallery />;
      <div id="detail-components">
        <Rating />
        <ProductInfo id="info" />
        <StyleSelector id="styles" />
        <AddToCart id="cart" />
      </div>
    </div>
  );
};

export default Overview;




// const TrackList = () => {
//   const [state, setState] = useContext(MusicPlayerContext);
//   return (
//     <button onClick={() => setState(state => ({ ...state, name: 'Clicked!' }))}>
//       {state.name}
//     </button>
//   )
// }
