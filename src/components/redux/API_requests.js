import axios from 'axios'



const login = (credentials) =>{
    const response = await axios.post('link',credentials)
}