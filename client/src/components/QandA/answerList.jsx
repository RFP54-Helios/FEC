import axios from 'axios';
import React, {useState, useContext} from 'react';
import Moment from 'moment';

const AnswerList = (props) => {
  const [reported, setReported] = useState(false);
  const [answerHelpful, setAnswerHelpful] = useState(true);

  const handleUpdateAnswerHelpfulness = (answerId) => {
    axios
    .put(`http://localhost:3000/hr-rfp/qa/answers/${answerId}/helpful`)
    .then(res => {
      console.log('add 1')
    })
    .catch(err => console.log(err));
  };

  return (
    <dt><bold>A:</bold>&nbsp;&nbsp;{props.answer.body}
    <div>
      <a className='answerer-info'>By {props.answer.answerer_name} on {Moment(props.answer.date).utc().format('MM/DD/YYYY')}</a>
    <a class='answer-helpful-click'>&nbsp;&nbsp;|&nbsp;&nbsp;Helpful?&nbsp;</a>
    {answerHelpful ? <a href='url' className='answer-helpful-link' onClick={(e) => { e.preventDefault(); handleUpdateAnswerHelpfulness(props.answer.id); setAnswerHelpful(false);}}>Yes({props.answer.helpfulness})</a> : <a>Yes({props.answer.helpfulness})</a>}
       <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
       {!reported ? <a href='url' class='answer-report-click' onClick={(e) => { e.preventDefault(); setReported(true); }}>Report</a> : <a>Reported</a>}
    </div>
    </dt>
  )
};

export default AnswerList;