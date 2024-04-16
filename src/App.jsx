import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import CalcProvider from './context/CalcContext';

const btnValues = [
   ['C', '+-', '%', '/',],
   [7, 8, 9, 'x'],
   [4, 5, 6, '-'],
   [1, 2, 3, '+'],
   [0, '.', '='],
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </>
  )
}

export default App
