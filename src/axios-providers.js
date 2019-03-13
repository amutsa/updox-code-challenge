import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-providersdatasource.firebaseio.com/'
});

export default instance;