import React, {useState, useContext, useEffect} from 'react';
import Addanswer from './addAnswer.jsx';
import ViewMoreAnswers from './viewMoreAnswers.jsx';
import axios from 'axios';


const QandAList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [seeMoreAnswers, setSeeMoreAnswers] = useState(false);
  const toggleMoreAnswers = () => setSeeMoreAnswers(!seeMoreAnswers);
  const [addAnswerPopup, setAddAnswerPopup] = useState(false);
  const [reported, setReported] = useState(false);
  const [questionHelpful, setQuestionHelpful] = useState(false);
  const [answerHelpful, setAnswerHelpful] = useState(false);

  let moreAnswersBtn;
    if (Object.values(props.question.answers).length > 2) {
      moreAnswersBtn = <button onClick={() => { toggleOpen(); toggleMoreAnswers();}}>
      See more answers </button>
    }
    if (isOpen===true) {
      moreAnswersBtn = null;
    }

  const handleUpdateAnswerHelpfulness = (answerId) => {
      axios
      .put(`http://localhost:3000/hr-rfp/qa/answers/${answerId}/helpful`)
      .then(res => {
        console.log('add 1')
      })
      .catch(err => console.log(err));
    };

    const handleUpdateQuestionHelpfulness = () => {
      axios
      .put(`http://localhost:3000/hr-rfp/qa/questions/${props.question.question_id}/helpful`)
      .then(res => {
        console.log('add 1')
      })
      .catch(err => console.log(err));
    };
    // http://localhost:3000/hr-rfp/qa/questions/212531/report
    // http://localhost:3000/hr-rfp/qa/questions/?product_id=17069
    //http://localhost:3000/hr-rfp/qa/answers/1991989/helpful

  return (

      <dl>Q:{props.question.question_body} <a href='url' className='add-answer-click' onClick={(e) => {e.preventDefault(); setAddAnswerPopup(true)}}>Add answer</a>
      <Addanswer question={props.question.question_body} trigger={addAnswerPopup} setTrigger={setAddAnswerPopup}>
      </Addanswer>
      <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a class='question-helpful-click'>Helpful?&nbsp;</a>
      {questionHelpful ? <a>Yes({props.question.question_helpfulness})</a> :  <a href='url' onClick={(e) => { e.preventDefault(); handleUpdateQuestionHelpfulness(); setQuestionHelpful(true); }}>Yes({props.question.question_helpfulness})</a>}

      {Object.values(props.question.answers).slice(0, 2).map(answer => {
        return (
        <dt>A: {answer.body}
        <div>By {answer.answerer_name} on {answer.date}
        <a class='answer-helpful-click'>Helpful?&nbsp;</a>
        {answerHelpful ? <a href='url' onClick={(e) => { e.preventDefault(); handleUpdateAnswerHelpfulness(answer.id); }}>Yes({answer.helpfulness})</a> : <a>Yes({answer.helpfulness})</a>}
           <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
           {!reported ? <a href='url' class='answer-report-click' onClick={(e) => { e.preventDefault(); setReported(true); }}>Report</a> : <a>Reported</a>}
        </div>
        </dt>
        )}
      )}
      {moreAnswersBtn}
      {seeMoreAnswers===true ? <ViewMoreAnswers answers={props.question.answers} /> : null}
      {seeMoreAnswers===true ? <button onClick={() => {toggleMoreAnswers(); toggleOpen()}}>
      Collapse</button> : null}
      </dl>

  )};

  export default QandAList;