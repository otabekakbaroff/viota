const initialState = {
    username:localStorage.getItem('username'),
}


export const selectedFriend = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'SELECT_FRIEND':
            return  {
                username:action.payload
            }
        default:
            return state
    }
}
