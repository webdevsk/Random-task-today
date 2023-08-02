
import { useState, createContext } from "react"
import RandomContent from "./components/RandomContent";
import Preloader from "./components/Preloader"

export const ProgressContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState('Loading Application')
  const handleLoading = (state) => setLoading(state)
  return(
    <>
    <ProgressContext.Provider value={{ progress, setProgress }}>
      <Preloader loading={loading}/>
      <RandomContent handleLoading={handleLoading}/>
    </ProgressContext.Provider>
    </>
  )
}

export default App