import React, { useState } from 'react'
import styles from './App.module.css'

const App = () => {
  const [previousPrice, setPreviousPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [currentPrice, setCurrentPrice] = useState('')
  const [message, setMessage] = useState('')

  const calculateResult = e => {
    e.preventDefault()
    const a = Number(previousPrice)
    const b = Number(quantity)
    const c = Number(currentPrice)
    const result = b * (c - a)
    result < 0 ? setMessage(`Hey, the loss is ${Math.abs(result)} and the percent is ${Math.round(Math.abs(result)/a)*100}%`)
      : setMessage(`Hey, the profit is ${result} and the percent is ${Math.round(result/a)*100}%`)
  }
  return (
    <div>
      <h3 className={styles.heading}>stock profit and loss calculator</h3>
      <form className={styles.form_div} onSubmit={calculateResult}>
        <label htmlFor='previousprice-input'>initial price</label>
        <input className={styles.form_input} required type='number' name='previousprice-input' value={previousPrice} onChange={(e) => setPreviousPrice(e.target.value)} /><br />
        <label htmlFor='quantity-input'>quantity</label>
        <input className={styles.form_input} required type='number' name='quantity-input' value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />
        <label htmlFor='currentprice-input'>current price</label>
        <input className={styles.form_input} required type='number' name='currentprice-input' value={currentPrice} onChange={(e) => setCurrentPrice(e.target.value)} /><br />
        <input type='submit' value='tell me!' />
      </form>
      <div className={styles.verdict}>{
        message && `${message}`
      }</div>
    </div>
  );
}

export default App;
