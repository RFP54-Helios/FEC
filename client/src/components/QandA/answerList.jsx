import axios from 'axios';
import React, {useState, useContext} from 'react';
import Moment from 'moment';

const AnswerList = ({answer, helpUpdate}) => {
  const [reported, setReported] = useState(false);
  const [answerHelpful, setAnswerHelpful] = useState(true);

  const handleUpdateAnswerHelpfulness = (answerId) => {
    axios
    .put(`http://localhost:3000/hr-rfp/qa/answers/${answerId}/helpful`)
    .then(res => {
      helpUpdate();
    })
    .catch(err => console.log(err));
  };

  let answerer_name;
  if (answer.answerer_name === 'Seller') {
    answerer_name = <a><strong>{answer.answerer_name}</strong></a>
  } else { answerer_name = <a>{answer.answerer_name}</a>}



  return (
    <dt key={'answer'}><div><a><strong>A:</strong></a>&nbsp;&nbsp;{answer.body}</div>
    {answer.photos.map((photo, index) => {

      return (
        <span key={index}>
        <img src={photo} id='answerer-posted-img'/>
        </span>
      )}
    )}
    <div>
      <span className='answerer-info'>By {answerer_name} on {Moment(answer.date).utc().format('MM/DD/YYYY')}</span>
    <a className='answer-helpful-click'>&nbsp;&nbsp;|&nbsp;&nbsp;Helpful?&nbsp;</a>
    {answerHelpful ? <a href='url' className='answer-helpful-link' onClick={(e) => { e.preventDefault(); handleUpdateAnswerHelpfulness(answer.id); setAnswerHelpful(false);}}>Yes({answer.helpfulness})</a> : <a>Yes({answer.helpfulness})</a>}
       <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
       {!reported ? <a href='url' className='answer-report-click' onClick={(e) => { e.preventDefault(); setReported(true); }}>Report</a> : <a>Reported</a>}
    </div>
    </dt>
  )
};

export default AnswerList;