import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Overview from './components/overview/Overview.jsx';
import Outfits from './components/RelatedItems/Outfits.jsx';
import AddOutfits from './components/RelatedItems/addOutfits.jsx';

import Ratings from './components/Ratings/Ratings.jsx';
import QandA from './components/QandA/QandA.jsx';
import { getProduct, getStyles, getRatings, postToApi } from './helperFunctions.js';

// import items from './components/RelatedItems/sampleData.json';
import {questionList, answerList} from './components/QandA/sampledata.js';

export const ProductContext = React.createContext([{}, () => {}]);

let App = () => {

  const [product, setProduct] = useState({
    // DO NOT APPROVE REVIEW IF THE product_id HAS NOT BEEN DISCUSSED
    product_id: 17072,
    currentProduct: {},
    styles: [],
    ratings: []
  })
  const [currentStyle, setCurrentStyle] = useState({ photos: [] });

  useEffect(() => {
    Promise.all([
      getProduct(product.product_id),
      getStyles(product.product_id),
      getRatings(product.product_id)
    ])
    .then((productData) => {
      setProduct(prevState => ({
        ...prevState,
        currentProduct: productData[0],
        styles: productData[1].results,
        ratings: productData[2].ratings
      }))
    })
  }, [product.product_id])


  return (
    <ProductContext.Provider value={[product, setProduct]}>
      <header><h2>Atelier</h2></header>
      <div id='overview'>
        <Overview
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}/>
      </div>
      <div className='widget'>
        <Outfits currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle} />
      </div>
      <div className='widget' id='qa'>
        <QandA
          questionList={questionList} answerList={answerList}
        />
      </div>
      <div className='widget' id='ratings'>
        <Ratings />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
