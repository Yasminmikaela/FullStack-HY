import { useState } from 'react'

/* const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)*/



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [allClicks, setAll] = useState([])
  // const [total, setTotal] = useState(0)
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const percentage = good / total * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <h2>Statistics</h2>
        Good: {good} <br />
        Neutral: {neutral} <br />
        Bad: {bad} <br />
        Total: {total} <br />
        Average: {average} <br />
        Positive: {percentage.toFixed(1) + "%"}
    </div>
  )
}

export default App
