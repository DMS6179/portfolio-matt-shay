import DashboardDemo from "./demo/DashboardDemo"
import { useState } from "react"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

 function handleDarkMode() {
  const newMode = !isDarkMode
  setIsDarkMode(newMode)
  if (newMode) { 
    document.documentElement.classList.add('dark') 
   } else {document.documentElement.classList.remove('dark')
   }
}
  return (
    <div>
      <button onClick={handleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <DashboardDemo />
    </div>
  )
}

export default App

