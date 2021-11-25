const initialState = []


export const friendsRequestList = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'FRIENDS_REQUESTS':
            return  action.payload
        default:
            return state
    }
}
