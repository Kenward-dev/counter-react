import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }
    function reset() {
        setCount(0)
    }
    return (
        <div className='counter-container'>
            <h1>React Counter App</h1>
            <p className='counter'>{count}</p>

            <button className='counter-btn' onClick={decrement}>Decrement</button>
            <button className='counter-btn' onClick={reset}>Reset</button>
            <button className='counter-btn' onClick={increment}>Increment</button>
        </div>

    )
}

export default Counter;