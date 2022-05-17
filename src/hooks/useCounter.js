import { useState } from 'react'
//hook personalizado/ proprio hook
export const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}