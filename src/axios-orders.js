import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mp-react-burger-builder-default-rtdb.firebaseio.com/'
});

export default instance;