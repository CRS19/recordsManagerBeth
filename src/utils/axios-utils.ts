import axios from 'axios';
import {getJwt} from './AsyncStorageUtils';

const instance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

instance.interceptors.request.use(getJwt);

export default instance;
