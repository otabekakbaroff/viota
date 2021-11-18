export const messageReducer = (
     state = [{text:'Hello',date:'1/12/12',sender:'otabek',receiver:'Viska'}], action) => 
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

