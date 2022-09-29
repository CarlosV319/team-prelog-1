import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { REACT_APP_API_URL } = getEnvVariables();

const pageApi = axios.create({
    baseURL: REACT_APP_API_URL
});

// configurar interceptores
pageApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})



export default pageApi