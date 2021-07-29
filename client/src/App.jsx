import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import Outfits from './components/RelatedItems/Outfits.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import items from './components/RelatedItems/sampleData.json';
import QandA from './components/QandA/QandA.jsx';
import {questionList, answerList} from './components/QandA/sampledata.js';
import { getFromApi, postToApi } from './helperFunctions.js';

let App = () => {
  // get data from the API
  let queryParams = {
    product_id: 17069,
    count: 14
  }
  // route can be 'products/17069/styles' for example
  getFromApi('reviews/', queryParams, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      // store data in state or context
      console.log(results);
    }
  });

  return (
    <div>
      <h2>FEC</h2>
      <div id='overview'>
        <Overview />
      </div>
      <div className='widget'>
        <Outfits items = {items}/>
      </div>
      <div className='widget' id='qa'>
        <QandA questionList={questionList} answerList={answerList}/>
      </div>
      <div className='widget' id='ratings'>
        <Ratings />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
