import axios from 'axios';

export function getFromApi(route, params, callback) {
  axios.get(`http://localhost:3000/hr-rfp/${route}`, {params})
  .then(res => {
    callback(null, res.data);
  })
  .catch(err => {
    callback(err);
  });
}

export function postToApi(queryOptions, callback) {
  queryOptions = {
    method: 'get',
    url: `http://localhost:3000/hr-rfp/reviews`,
    data: {
      product_id: 17069
    }
  }
  axios(queryOptions)
  .then(res => {
    callback(null, res.data);
  })
  .catch(err => {
    callback(err);
  });
}
