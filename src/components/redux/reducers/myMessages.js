const initialState = []


export const myMessages = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'GET_MY_MESSAGES':
            return  action.payload
        case 'SEND_MESSAGE':
            return [...state, action.payload]
        case 'RECEIVE_MESSAGE':
            return [...state, action.payload]
        default:
            return state
    }
}
