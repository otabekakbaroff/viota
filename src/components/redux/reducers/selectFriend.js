const initialState = {
    username:'SELECT A FRIEND TO CHAT :)',
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
