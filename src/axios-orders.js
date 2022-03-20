import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ec04f.firebaseio.com/'
});

export default instance;