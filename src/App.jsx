import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from "./ScreenComponents/Home"
function App() {
  const [count, setswitch] = useState()

  return (
    <>
      <Home></Home>
    </>
  )
}

export default Home
