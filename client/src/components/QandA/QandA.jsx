/* eslint-disable react/jsx-key */
import React, {useState} from 'react';

const QandA = (props) => {
  const [searching, setSearching] = useState('');
  const [seeMoreQuestions, setSeeMoreQuestions] = useState(false);
  const toggleMoreQuestions = () => setSeeMoreQuestions(!seeMoreQuestions);

  return(
    <div id='qa'>
      <h3>Customer questions & answers</h3>
      <input className='search' type='text' value={searching} placeholder='Have a question? Search for answers…' onChange={() => setSearching(event.target.value)} />

      {props.questionList.results.map(question =>
        <Question question={question} />
      )}
      {/* {seeMoreQuestions===false ? <div><button onClick={() => {toggleMoreQuestions();}}>More Answered Questions</button></div> : null}
      {seeMoreQuestions===true ? <Morequestions questions={props.questionList.results}/> : null}

      <button>Ask your question</button> */}
    </div>
  )
};

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const [seeMoreAnswers, setSeeMoreAnswers] = useState(false);
  const toggleMoreAnswers = () => setSeeMoreAnswers(!seeMoreAnswers);

  let button;
    if (Object.values(props.question.answers).length > 2) {
      button = <button onClick={() => { toggleOpen(); toggleMoreAnswers();}}>
      See more answers </button>
    }
    if (isOpen===true) {
      button = null;
    }

  return (
      <dl>Q:{props.question.question_body} <a href='url'>Add answer</a>
      <a>Helpful?<a href='url'>Yes({props.question.question_helpfulness})</a></a>

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
      {button}
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

// const Morequestions = (props) => {

//   return (
//     <div>
//         {props.questions.map(question => {
//         return (
//           <dl>Q:{question.question_body} <a href='url'>Add answer</a>
//           <a>Helpful?<a href='url'>Yes({question.question_helpfulness})</a></a>

//           {Object.values(question.answers).map(answer => {
//             return (
//             <dt>A: {answer.body}
//             <div>By {answer.answerer_name} on {answer.date}
//             <a>Helpful? <a href='url'>Yes({answer.helpfulness})</a></a>
//             <a href='url'>Report</a>
//             </div>
//             </dt>
//             )
//           })}
//           </dl>
//           )
//         })}
//     </div>
//   )
// };


export default QandA;
