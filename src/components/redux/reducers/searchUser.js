const initialState = []


export const searchResult = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'USER_SEARCH':
            return  action.payload
        default:
            return state
    }
}





