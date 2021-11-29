const initialState = new Set()


export const friendsListCheck = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'ALL_FRIENDS':
            let new_set = new Set(action.payload.map(item=>item.username))
            return  new_set
        case 'UPDATE_FRIEND_CHECK':
            state.add(action.payload)
            return state
        default:
            return state
    }
}





