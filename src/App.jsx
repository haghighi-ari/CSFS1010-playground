import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Test from './test'
import Test2 from './test2'
import David from './David'
import Test4 from './test4'
import Square from './calculateSquare'
import YetAnotherTest from "./yetanothertest"
// import yetAnotherTest2 from './yetAnotherTest2'
import Testagain from "./testagain"
import Test5 from "./test5"
import Lol from "./lol"
import { whoosh, renderWhoosh } from "./whoosh"
import MUI from './MUI'
import MUIDave2 from './MUIDave2'
import { ThemeProvider, createTheme } from '@mui/material'
import LetterAvatars from './Avatar'
import ImgList from "./MUI-ImgList"
import FloatingActionButtons from "./MUI3"
import MUIArash from './MUIArash'
import MUISnackbar from './MUISnackbar'
import Backdrop2 from './MUIMeow'
import Variants from './MUIPaper'
import Hello from './components/Hello'




function App() {
  const [count, setCount] = useState(0)
 const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#145604',
      },
      secondary: {
        main: '#f50057',
      },
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <div>
        <Hello />
        <FloatingActionButtons />
        <ImgList />
        <LetterAvatars />
        <MUI />
        <Backdrop2 />
        <Variants />
        <MUIDave2 />
        <Test />
        <David />
        <Test4 />
        <Lol />
        <MUIArash/>
        <MUISnackbar/>

        
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src='moreImages/vite.svg' className="logo react test" alt="React logo" />
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
    </ThemeProvider>
  )
}

export default App
