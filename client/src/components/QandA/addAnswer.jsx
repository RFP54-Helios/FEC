import React, {useState, useContext} from 'react';
import { ProductContext } from "../../App.jsx";
import axios from 'axios';


const Addanswer = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState([]);


  const submitForm = () => {
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("body", body);
    // formData.append("email", email);
    // formData.append("file", selectedFile);

    axios
      .post(`http://localhost:3000/hr-rfp/qa/questions/${props.questionId}/answers`, {body: body, name: name, email: email})
      .then((res) => {
        alert('Answer posted!');
      })
      .catch((err) => alert('Post failed...'));
  };

  return (props.trigger) ? (
    <div className='popup'>
      <div className='inner'>
        <h4 id='answer-modal-title'>Submit your Answer</h4>
        <h3>{product.currentProduct.name}: {props.questionBody}</h3>
        <form>
          <label><span class='red-star'>*</span>Your Answer:</label>
          <textarea maxlength='1000' id="type-answer" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <label><span class='red-star'>*</span>What is your nickname:</label>
          <input type='text' class='answer-name' value={name} maxlength='60' placeholder="Example: jack543!" onChange={(e) => setName(e.target.value)}></input>
          <p class='popup-text'>For privacy reasons, do not use your full name or email address</p>
          <label><span class='red-star'>*</span>Your email:</label>
          <input type='text' class='answer-email' value={email} maxlength='60' placeholder="Example: jack@email.com" onChange={(e) => setEmail(e.target.value)}></input>
          <p class='popup-text'>For authentication reasons, you will not be emailed</p>
          <label>Upload your photos:</label>
          <PhotoUploader photo={photo} setPhoto={setPhoto} />
          <button className='close-btn' onClick={() => props.setTrigger()}>Cancel</button>
          <button id='submit-answer-btn' onClick={(e) => { e.preventDefault(); submitForm(); props.setTrigger(); }}>Submit</button>
        </form>
      </div>
    </div>
  ): '';
};

const PhotoUploader = (props) => {
  const [photoThumbnail, setPhotoThumbnail] = useState([]);
  const [alert, setAlert] = useState(false);

  const deleteSelected = (pic) => {
    var index = photoThumbnail.indexOf(pic);
    const temp = [...photoThumbnail];
    temp.splice(index, 1);
    setPhotoThumbnail(temp);
    if (alert === true) { setAlert(false); }
  };

  const handlePhoto = (e) => {
   const reader = new FileReader();
   reader.onload = () => {
     if(reader.readyState === 2) {
       setPhotoThumbnail(photoThumbnail => [...photoThumbnail, reader.result]);
     }
   }
   reader.readAsDataURL(e.target.files[0]);
  };
  if (photoThumbnail.length > 5) {
    setPhotoThumbnail(photoThumbnail.slice(0, 5));
    setAlert(true);
   }

  return (
    <div className="photo-uploader">
      <input type="file" name="image-upload" id='select-photo' accept=".jpg, .jpeg, .png" onChange={handlePhoto}></input>
      {photoThumbnail.map(thumbnail => {
        return (
        <>
        <img src={thumbnail} id='answer-img' onClick={() => {deleteSelected(thumbnail)}}/>
        </>
        )}
      )}
      {alert ? <a id='alert'>Exceeds maximum counts</a>: null}

       <button id='upload-photo'>Upload</button>

    </div>
  )
};



export default Addanswer;