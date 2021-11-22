const initialState = []


export const friendsList = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'GET_FRIENDS_LIST':
            return  action.payload
        default:
            return state
    }
}
