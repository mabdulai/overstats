import axios from 'axios';

export const fetch = url => {
  console.log(url);
  return (
    axios.get(url)
    .then( response => {
      return response
    })
    .catch( error => {
      console.log(error);
      return 'error'
    })
  );
}