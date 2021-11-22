const initialState = [{
    message: "text",
    from: "Otabek",
    to: "Zikini",
    date: 123124124
}]


export const myMessages = (
    state = initialState, action) => 
{
    switch( action.type ){
        case 'GET_MY_MESSAGES':
            return  {
                username:action.payload
            }
        default:
            return state
    }
}
