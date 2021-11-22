const initialState = [
    {
        text:'YO',
        date:'1/12/12',
        sender:'otabek',
        receiver:'Viska'
    }
]



export const messagesReducer = (
    state=initialState, action) => 
{
    switch( action.type ){
        case 'SEND_MESSAGE':
            return [...state, action.payload]
        case 'RECEIVE_MESSAGE':
            return state + action.payload
        default:
            return state
    }
}

