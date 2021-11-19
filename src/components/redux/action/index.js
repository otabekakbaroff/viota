
export const login = (credentials) =>{
    return {
        type:'LOGIN',
        payload:credentials
    }
}

export const register = (credentials) =>{
    return {
        type:'REGISTER',
        payload:credentials
    }
}



export const sendMessage = (msg) => {
    return {
        type:'SEND_MESSAGE',
        payload:msg
    }
}


export const receiverMessage = (msg) =>{
    return {
        type:'RECEIVE_MESSAGE',
        payload:msg
    }
}