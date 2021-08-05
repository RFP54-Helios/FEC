import React, {useState, useContext, useEffect} from 'react';
import Addanswer from './addAnswer.jsx';
import ViewMoreAnswers from './viewMoreAnswers.jsx';
import AnswerList from './answerList.jsx';
import axios from 'axios';


const QuestionList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [seeMoreAnswers, setSeeMoreAnswers] = useState(false);
  const toggleMoreAnswers = () => setSeeMoreAnswers(!seeMoreAnswers);
  const [addAnswerPopup, setAddAnswerPopup] = useState(false);
  const [questionHelpful, setQuestionHelpful] = useState(false);

  let moreAnswersBtn;
    if (Object.values(props.question.answers).length > 2) {
      moreAnswersBtn = <a className='see-more-answers-click' onClick={() => { toggleOpen(); toggleMoreAnswers();}}>
      &raquo;&nbsp;See more answers </a>
    }
    if (isOpen===true) {
      moreAnswersBtn = null;
    }

  let sortedAnswerList;
  sortedAnswerList= Object.values(props.question.answers).sort(function(a, b) {
    return b.helpfulness - a.helpfulness;
   })

   sortedAnswerList.forEach(answer => {
     if (answer.answerer_name === 'Seller') {
       let index = sortedAnswerList.indexOf(answer);
      sortedAnswerList.unshift(answer);
      sortedAnswerList.splice(index + 1, 1);
     }
   })

   const helpUpdate = () => {
     props.toggleUpdate();
   };

  const handleUpdateQuestionHelpfulness = () => {
    axios
    .put(`http://localhost:3000/hr-rfp/qa/questions/${props.question.question_id}/helpful`)
    .then(res => {
      props.toggleUpdate()
    })
    .catch(err => console.log(err));
  };

  return (
      <div key={'question'} className='question-head'><a><strong>Q:</strong></a>&nbsp;&nbsp;{props.question.question_body}
      <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a>Helpful?&nbsp;</a>
      {questionHelpful ? <a>Yes({props.question.question_helpfulness})</a> :
      <a href='url' className='question-helpful-click' onClick={(e) =>
      { e.preventDefault(); handleUpdateQuestionHelpfulness(); setQuestionHelpful(true);}}>
        Yes({props.question.question_helpfulness})</a>}
        <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a href='url' className='add-answer-click' onClick={(e) =>
        {e.preventDefault(); setAddAnswerPopup(true)}}>Add answer
      </a>
      <Addanswer questionBody={props.question.question_body} questionId={props.question.question_id} trigger={addAnswerPopup} setTrigger={setAddAnswerPopup} helpUpdate={helpUpdate}>
      </Addanswer>
      {sortedAnswerList.slice(0, 2).map((answer,index) =>
      <AnswerList key={index} answer={answer} helpUpdate={helpUpdate}/>
      )}
      {moreAnswersBtn}
      {seeMoreAnswers===true ? <ViewMoreAnswers answers={sortedAnswerList} /> : null}
      {seeMoreAnswers===true ? <a className='see-more-answers-collapse' onClick={() => {toggleMoreAnswers(); toggleOpen()}}>
      &raquo;&nbsp;Collapse answers</a> : null}
      </div>

  )};

  export default QuestionList;