import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, allReducers } from '../../store/config'
import { add2Number, login } from '../../store/actions/action'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(allReducers, initialState)

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
                    <button className="btn" onClick={() => login(dispatch, 'João')}>Login</button>
                    <button className="btn" onClick={() => add2Number(dispatch)}>+2</button>
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
