import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    user: null,
    //foco...
    number: 0
}

//Pegar o estado atual e evoluir para cada ação/mudança
function reducer(state, action) {
    //toda ação tem pelo menos o atributo tipo
    switch(action.type) {
        case 'add2Number': 
            return {...state, number: state.number + 2}
        case  'login':
            return {...state, user: {name: action.payload }}
        //desafio
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

    // X7 - /25 e transformar para inteiro - adicionar um n qualquer

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"/>

            <div className="center">
                {state.user ? 
                    <span className="text">{ state.user.name }</span>    
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">{ state.number }</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'add2Number'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'multiply7'})}>x7</button>
                    <button className="btn" onClick={() => dispatch({type: 'share25'})}>÷25</button>
                    <button className="btn" onClick={() => dispatch({type: 'toTransformInt'})}>Int</button>
                    <button className="btn" onClick={() => dispatch({type: 'addN', payload: -10})}>-9</button>
                </div>
            </div>         
        </div>
    )
}

export default UseReducer
