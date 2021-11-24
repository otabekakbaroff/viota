const initialState = []


export const myMessages = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'GET_MY_MESSAGES':
            return  action.payload
        default:
            return state
    }
}
