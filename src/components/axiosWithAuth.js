import axios from 'axios';

const axiosWithAuth=()=>{
    return axios.create({
        baseURL: 'https://viota-backend.herokuapp.com/',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth;