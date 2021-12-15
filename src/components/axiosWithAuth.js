import axios from 'axios';

const axiosWithAuth=()=>{
    return axios.create({
        baseURL: 'https://viota-backend.herokuapp.com',
        // baseURL: 'http://localhost:5000',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth;