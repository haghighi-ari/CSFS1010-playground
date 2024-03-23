import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './test'
import Test2 from './test2'
import David from './David'
import Test4 from './test4'
import Square from './calculateSquare'
import YetAnotherTest from "./yetanothertest"
// import yetAnotherTest2 from './yetAnotherTest2'
import Testagain from "./testagain"
import Lol from "./lol"
import { whoosh, renderWhoosh }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Test />
        <David />
        <Test4 />
        <Lol />
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1><Square number={5}></Square> </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>No.</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <YetAnotherTest />
      {/* <yetAnotherTest2 /> */}
      <Testagain />

      <h1> Other Things .... </h1>
      <Test2 />
    </>
  )
}

export default App
