const initialState = []


export const friendsRequestList = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'FRIENDS_REQUESTS':
            return  action.payload
        case 'UPDATE_REQUEST_LIST':
            console.log(action.payload)
            // let newState = [...state].filter(item=> item.username !== `${action.payload.username}`)
            // return newState
            break;
        default:
            return state
    }
}
