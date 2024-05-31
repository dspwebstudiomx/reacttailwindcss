import { useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { FiMoon } from "react-icons/fi"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <button
      className="ml-5 w-12 h-12  mx-auto rounded-full text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 z-10"
      onClick={toggleTheme}>
      {darkMode ? <IoSunnyOutline className='w-full h-6 text-slate-100' /> : <FiMoon className='w-full h-6 text-slate-100' />}
    </button>
  )
}
