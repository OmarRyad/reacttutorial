import React, { useState } from 'react'

function CounterExample() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <h3 onClick= { () => setCount(count +1) } >
                Plus
            </h3>
            <h3 onClick={() => count >0? setCount(count -1) : ''}>
                 Minus
            </h3>
        </div>
    )
}

export default CounterExample