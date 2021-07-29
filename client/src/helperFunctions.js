import axios from 'axios';

const makeApiCall = (route, params, callback) => {
  axios.get(`http://localhost:3000/hr-rfp/${route}`, {params})
  .then(res => {
    callback(null, res.data);
  })
  .catch(err => {
    callback(err);
  });
}

export default makeApiCall;
