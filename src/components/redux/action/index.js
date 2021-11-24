import axiosWithAuth from '../../axiosWithAuth'



export const loginUser = usersInfo => dispatch => {
    axiosWithAuth().post(`/api/users/login`, usersInfo)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.username)
            dispatch({ type: 'LOGIN', payload: response.data })
            window.location.pathname=('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
};


export const registerUser = usersInfo => dispatch => {
    axiosWithAuth().post(`/api/users/register`, usersInfo)
        .then(response => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.username)
            dispatch({ type: 'REGISTER', payload: response.data })
            window.location.pathname=('/dashboard')
        })
        .catch(error => {
            console.log(error)
        })
};

export const searchUser = (user) => dispatch =>{

}


export const getFriendsList = () => dispatch => {
    axiosWithAuth().get(`/api/connections/${localStorage.getItem('username')}/friends-list`)
        .then(response => {
            dispatch({ type: 'GET_FRIENDS_LIST', payload: response.data })
        })
        .catch(error => {
            console.log(error)
        })
};


// THIS IS NOT DONE
export const friendsRequest = usersInfo => dispatch => {
    axiosWithAuth().get(`/send_message`,usersInfo)
        .then(response => {
            dispatch({ type: 'FRIENDS_REQUEST', payload: response.data })
        })
        .catch(error => {
            console.log(error)
        })
};


export const selectFriend = friend => dispatch=>{
    dispatch({type:'SELECT_FRIEND', payload: friend})
}



export const getMyMessages = usersInfo => dispatch => {
    axiosWithAuth().post(`/api/messages/my-messages`, {from:usersInfo.from, to:usersInfo.to})
        .then(response => {
            dispatch({ type: 'GET_MY_MESSAGES', payload: response.data })
        })
        .catch(error => {
            console.log(error)
        })
};


export const sendMessage = () => (dispatch, usersInfo) => {
    axiosWithAuth().get(`/api/messages/send-message`,usersInfo)
        .then(response => {
            dispatch({ type: 'SEND_MESSAGE', payload: response.data })
        })
        .catch(error => {
            console.log(error)
        })
};
