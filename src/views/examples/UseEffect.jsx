import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1

    return calcFactorial(n -1) * n
}

function evenOrOdd(number) {
    const n = parseInt(number)
    if(n % 2 === 0) return 
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)

    //Quando o number for alterado, o fatorial também será
    //Fatorial depende da alteração do number
    //Mudar o dado da aplicação vai impactar o estado de outro dado
    //Basicamente gera efeitos colaterais
    useEffect(function() {
        setFactorial(calcFactorial(number))
    }, [number])

    //Desafio 
    const [num, setNum] = useState(1)
    const [status, setStatus] = useState("Ímpar")

    useEffect(function() {
        setStatus(num % 2 === 0 ? 'Par' : 'Ímpar')
    }, [num])

    return (
        <div className="use-effect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"/>
            
            <SectionTitle title="Exercício 1"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{ factorial === -1 ? 'Não existe' : factorial }</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
            </div>

            <SectionTitle title="Desafio"/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input" value={num} onChange={e => setNum(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
