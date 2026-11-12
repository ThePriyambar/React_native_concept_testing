import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout:15000,
    headers:{
        'Content-Type': 'application/json',
        Accept:'application/json'
    }
})
export default apiClient;