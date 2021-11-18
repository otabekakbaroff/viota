
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