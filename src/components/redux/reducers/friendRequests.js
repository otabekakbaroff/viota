const initialState = []


export const friendsRequestList = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'FRIENDS_REQUESTS':
            return  action.payload
        case 'UPDATE_REQUEST_LIST':
            let newState = [...state].filter(item=> item.from !== `${action.payload.username}`)
            return  newState
        default:
            return state
    }
}
