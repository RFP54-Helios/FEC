import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview.jsx';
import Outfits from './components/Outfits.jsx';
import QandA from './components/QandA/QandA.jsx';
import Ratings from './components/Ratings/Ratings.jsx';
import {questionList, answerList} from './components/QandA/sampledata.js';

let App = (props) => {
  return (
    <div>
      <h2>FEC</h2>
      <div id='overview'>
        <Overview />
      </div>
      <div className='widget'>
        <Outfits />
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
