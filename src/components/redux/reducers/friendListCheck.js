const initialState = new Set()


export const friendsListCheck = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'ALL_FRIENDS':
            let new_set = new Set(action.type.map(item=>item.username))
            return  new_set
        default:
            return state
    }
}
