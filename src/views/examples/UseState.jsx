import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    //Estado dentro de um componente funcional
    //1- valor atual - 2- valor alterado
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    return (
        <div className="use-state">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"/>

            <SectionTitle title="Exercício 1"/>
            <div className="center">
                <span className="text">{ count }</span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício 2"/>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
            <span className="text">{ name }</span>

        </div>
    )
}

export default UseState
