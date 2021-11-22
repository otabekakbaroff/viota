const initialState = 
    {
        username:'',
        chatted_last:'',
        token:''
}



export const authUser = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'LOGIN':
            return {
                ...state,
                username:action.payload.username,
                token:action.payload.token,
                chatted_last:action.payload.chatted_last
            }
        case  'REGISTER':
            return{
                ...state,
                username:action.payload.username,
                token:action.payload.token,
                chatted_last:action.payload.chatted_last
            }
        default:
            return state
    }
}
