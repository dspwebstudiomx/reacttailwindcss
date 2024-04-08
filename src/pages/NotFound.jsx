import { Link } from "react-router-dom"
import LottieImage from '../assets/JSON/error404.json'
import Lottie from "lottie-react"
import Spacing from "../components/Sections/Spacing"

const NotFound = () => {
  return (
    <div className=" text-blue-800 dark:text-slate-900 w-full h-[100vh]  dark:bg-slate-400 flex flex-col gap-2 justify-center items-center bg-slate-300">
      <figure>
        <Lottie animationData={LottieImage} loop={true} className="w-[232px] md:w-[332px] sm:ml-0 mx-auto" />
      </figure>
      <h1 className="text-3xl font-bold text-center">Página no encontrada</h1>
      <Spacing distance="mt-6" />
      <Link to="/" className='mt-12 sm:mt-2 border-2 border-slate-800 w-[40%] flex items-center justify-center h-[3em] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-900 text-white text-2xl sm:w-[220px]'>Inicio</Link>
    </div>
  )
}

export default NotFound