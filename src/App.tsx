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
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleDarkMode}
          className={`relative w-14 h-7 rounded-full transition-colors duration-300 border
            ${isDarkMode 
              ? 'bg-[#2C4A6E] border-[#7BA7BC]' 
              : 'bg-[#E8EEF4] border-[#C4A882]'
            }`}
          aria-label="Toggle dark mode"
        >
          <span className={`absolute left-0.5 top-0.75 w-5 h-5 rounded-full shadow transition-transform duration-300 
            ${isDarkMode 
              ? 'translate-x-6.5 bg-[#7BA7BC]' 
              : 'translate-x-1 bg-[#C4A882]'
            }`}
          />
        </button>
      </div>
      <DashboardDemo />
    </div>
  )
}

export default App

