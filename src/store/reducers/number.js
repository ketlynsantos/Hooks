//Pegar o estado atual e evoluir para cada ação/mudança
export function numberReducer(state, action) {
    //toda ação tem pelo menos o atributo tipo
    switch(action.type) {
        case 'add2Number': 
            return {...state, number: state.number + 2}
        case 'multiply7':
            return {...state, number: state.number * 7}
        case 'share25':
            return {...state, number: state.number / 25}
        case 'toTransformInt':
            return {...state, number: parseInt(state.number)}
        case 'addN':
            return {...state, number: state.number + action.payload}
        default: 
            return state
    }
}