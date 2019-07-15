import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/guilhermerodz/rocketshoes-fake-api',
});

export default api;
