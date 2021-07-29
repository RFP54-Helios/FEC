import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import Outfits from './components/RelatedItems/Outfits.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import items from './components/RelatedItems/sampleData.json';
import QandA from './components/QandA/QandA.jsx';
import {questionList, answerList} from './components/QandA/sampledata.js';

const makeApiCall = (route, params) => {
  axios.get(`http://localhost:3000/hr-rfp/${route}`, {params})
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
}

let App = () => {
  // will make a axios request for product data
  //store that data in state or context
makeApiCall('products', {count: 20})
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
