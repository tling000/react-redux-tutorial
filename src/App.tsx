import { useState } from 'react'
import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import './App.css'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const increment = () => dispatch({ type: 'INCREMENT'})
  const decrement = () => dispatch({ type: 'DECREMENT'})
  const double = () => dispatch({ type: 'DOUBLE'})
  const reset = () => dispatch({ type: 'RESET'})
  const message = () => {
    let display = '普路地裏の猫'
    if (count < 0) {
      display = 'マイナス猫'
    } else if (count > 1000) {
      display = 'GOD猫！！！！'
    } else if (count > 100) {
      display = '猫！！！！'
    } else if (count > 10) {
      display = '下積み猫'
    }
    return display
  }
  const printNyan = () => {
    if (count < 0) {
      return '(ΦωΦ)'
    }
    return 'にゃ'+ 'ー'.repeat(count) + 'ん'
  }

  return (
    <>
      <h1>count: {count}</h1>
      <h2>{message()}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={double}>x2</button>
      <button onClick={reset}>reset</button>
      <p>{printNyan()}</p>
    </>
  )
}

export default App
