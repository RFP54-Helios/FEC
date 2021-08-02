import React, {useState, useContext} from 'react';
import { ProductContext } from "../../App.jsx";
import axios from 'axios';

const AddQuestion = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = () => {
    axios
      .post(`http://localhost:3000/hr-rfp/qa/questions`, {body: body, name: name, email: email, product_id: product.product_id})
      .then((res) => {
        alert("Question posted!");
      })
      .catch((err) => alert("Post failed..."));
  };


  return (props.trigger) ?(
    <div className='popup'>
      <div className='inner'>
        <h4 id='answer-modal-title'>Ask Your Question</h4>
        <h3>About the {product.currentProduct.name}</h3>
        <form>
          <label><span class='red-star'>*</span>Your Question:</label>
          <textarea maxlength='1000' id="type-answer" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <label><span class='red-star'>*</span>What is your nickname:</label>
          <input type='text' class='answer-name' value={name} maxlength='60' placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)}></input>
          <p class='popup-text'>For privacy reasons, do not use your full name or email address
          </p>
          <label><span class='red-star'>*</span>Your email:</label>
          <input type='text' class='answer-email' value={email} maxlength='60' placeholder='Why did you like the product or not?' onChange={(e) => setEmail(e.target.value)}></input>
          <p class='popup-text'>For authentication reasons, you will not be emailed</p>
          <button className='close-btn' onClick={() => props.setTrigger()}>close</button>
          <button id='submit-question-btn' onClick={(e) => { e.preventDefault(); submitForm(); props.setTrigger(); }}>Post</button>
        </form>
      </div>
    </div>
  ): '';
};

export default AddQuestion;
