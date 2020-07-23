import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-5c6a6.firebaseio.com/'
});

export default instance;
