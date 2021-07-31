import React, {useState, useContext, useEffect} from 'react';
import QandAList from './q&aList.jsx';
import { ProductContext } from "../../App.jsx";
import axios from 'axios';

const QandA = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [questionData, setQuestionData] = useState([]);
  const [searching, setSearching] = useState('');
  const [seeMoreQuestions, setSeeMoreQuestions] = useState(false);
  const toggleMoreQuestions = () => setSeeMoreQuestions(!seeMoreQuestions);
  let moreQuestions = questionData.slice(4);
  let moreQuestionsBtn;

  if (questionData.length > 4) {
    moreQuestionsBtn =
  <div><button onClick={() => {toggleMoreQuestions();}}>More Answered Questions</button></div>
  }
  if (seeMoreQuestions===true) {
    moreQuestionsBtn = null;
  }
  // http://localhost:3000/hr-rfp/qa/questions/:question_id=104613

  useEffect(() => {
    axios
    .get(`http://localhost:3000/hr-rfp//qa/questions/?product_id=${product.product_id}`, { params: { count: 20 } })
    .then(res => {
      setQuestionData(res.data.results)
    })
    .catch(err => console.log(err));
  });


  return(
    <div id='qa'>
      <h3>Customer questions & answers</h3>
      <input className='search' type='text' value={searching} placeholder='Have a question? Search for answers…' onChange={() => setSearching(event.target.value)} />
      <div id='body'>
      {questionData.slice(0, 4).map(question =>
        <QandAList question={question} />
      )}

      {moreQuestionsBtn}
      {seeMoreQuestions===true ? <ViewMoreQuestions questions={moreQuestions} /> : null}
      </div>
      <button>Ask your question</button>
    </div>
  )
};


const ViewMoreQuestions = (props) => {
  const [evenMore, setEvenMore] = useState(false);
  const toggleEvenMore = ()=> {setEvenMore(!evenMore)};
  const [moreQBtn, setMoreQBtn] = useState(false);
  const toggleMoreQBtn = () => { setMoreQBtn(!moreQBtn) };
  let twoQuestions = props.questions.splice(0, 2);

  return (
    <>
    <div>
    {twoQuestions.map(question =>
      <QandAList question={question}/>
    )}
    </div>
    {moreQBtn ? <button onClick={() => { toggleMoreQBtn(); }}>See more questions</button> : null}
    {/* {evenMore ? <EvenMoreQ questions={props.questions} /> : null} */}
    </>
  )
};

export default QandA;

