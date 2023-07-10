import { useState } from 'react'
import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import './App.css'

function App() {
  const count = useSelector((state) => state.count)
  const message = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const increment = () => dispatch({ type: 'INCREMENT'})
  const decrement = () => dispatch({ type: 'DECREMENT'})
  const double = () => dispatch({ type: 'DOUBLE'})
  const reset = () => dispatch({ type: 'RESET'})

  const printNyan = () => {
    if (count < 0) {
      return '(ΦωΦ)'
    }
    return 'にゃ'+ 'ー'.repeat(count) + 'ん'
  }

  return (
    <>
      <h1>count: {count}</h1>
      <h2>{message}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={double}>x2</button>
      <button onClick={reset}>reset</button>
      <p>{printNyan()}</p>
    </>
  )
}

export default App
