/* eslint-disable react/jsx-key */
import React, {useState} from 'react';
import Addanswer from './addAnswer.jsx';

const QandA = (props) => {
  const [searching, setSearching] = useState('');
  const [seeMoreQuestions, setSeeMoreQuestions] = useState(false);
  const toggleMoreQuestions = () => setSeeMoreQuestions(!seeMoreQuestions);

  let moreQuestionsBtn;
  if (props.questionList.results.length > 4) {
    moreQuestionsBtn =
  <div><button onClick={() => {toggleMoreQuestions();}}>More Answered Questions</button></div>
  }
  if (seeMoreQuestions===true) {
    moreQuestionsBtn = null;
  }

  return(
    <div id='qa'>
      <h3>Customer questions & answers</h3>
      <input className='search' type='text' value={searching} placeholder='Have a question? Search for answers…' onChange={() => setSearching(event.target.value)} />

      {props.questionList.results.slice(0, 4).map(question =>
        <QuestionList question={question} />
      )}
      {moreQuestionsBtn}
      {seeMoreQuestions===true ? <Morequestions questions={props.questionList.results}/> : null}

      <button>Ask your question</button>
    </div>
  )
};


const QuestionList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [seeMoreAnswers, setSeeMoreAnswers] = useState(false);
  const toggleMoreAnswers = () => setSeeMoreAnswers(!seeMoreAnswers);
  const [addAnswerPopup, setAddAnswerPopup] = useState(false);

  let moreAnswersBtn;
    if (Object.values(props.question.answers).length > 2) {
      moreAnswersBtn = <button onClick={() => { toggleOpen(); toggleMoreAnswers();}}>
      See more answers </button>
    }
    if (isOpen===true) {
      moreAnswersBtn = null;
    }

  return (
      <dl>Q:{props.question.question_body} <a onClick={() => setAddAnswerPopup(true)}>Add answer</a>
      <Addanswer question={props.question.question_body} trigger={addAnswerPopup} setTrigger={setAddAnswerPopup}>
      </Addanswer>
      <a>Helpful?<a href='url'>Yes({props.question.question_helpfulness})</a></a>
      {props.question.reported ? <a>Reported</a> : <a>Report</a>}

      {Object.values(props.question.answers).slice(0, 2).map(answer => {
        return (
        <dt>A: {answer.body}
        <div>By {answer.answerer_name} on {answer.date}
        <a>Helpful? <a href='url'>Yes({answer.helpfulness})</a></a>
        <a href='url'>Report</a>
        </div>
        </dt>
        )}
      )}
      {moreAnswersBtn}
      {seeMoreAnswers===true ? <Moreanswers answers={props.question.answers} /> : null}
      {seeMoreAnswers===true ? <button onClick={() => {toggleMoreAnswers(); toggleOpen()}}>
      Collapse</button> : null}
      </dl>
  )};


const Moreanswers = (props) => {

  return (
    <div>
    {Object.values(props.answers).slice(2).map(answer => {
      return (
      <dt>A: {answer.body}
      <div>By {answer.answerer_name} on {answer.date}
      <a>Helpful? <a href='url'>Yes({answer.helpfulness})</a></a>
      <a href='url'>Report</a>
      </div>
      </dt>
      )}
    )}
    </div>
  )
};


const Morequestions = (props) => {

  return (
    <div>
    {props.questions.slice(4).map(question =>
      <QuestionList question={question} />
    )}
    </div>
  )
};

export default QandA;
