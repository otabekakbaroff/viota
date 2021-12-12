const initialState = []


export const friendsList = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'GET_FRIENDS_LIST':
            return  action.payload
        case 'UPDATE_FRIENDS_LIST':
            return [...state, action.payload]
        // case 'ADDED_FRIEND':
        //     let newState = [...state].filter(item=> item.username !== `${action.payload}`)
        //     return  newState
        default:
            return state
    }
}
