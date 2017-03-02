import axios from 'axios';

export const fetch = (url) => {
  return (
    axios.get(url)
    .then( response => {
      return response
    })
    .catch( error => {
      console.log(error);
    })
  );
}