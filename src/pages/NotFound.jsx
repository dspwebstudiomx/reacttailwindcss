import { Link } from "react-router-dom"
import LottieImage from '../assets/JSON/error404.json'
import Lottie from "lottie-react"

const NotFound = () => {
  return (
    <div className=" text-blue-800 dark:text-slate-900 w-full h-[100vh] bg-slate-50 dark:bg-slate-400 flex flex-col gap-2 justify-center items-center">
      <figure>
        <Lottie animationData={LottieImage} loop={true} className="w-[232px] md:w-[332px] sm:ml-0 mx-auto" />
      </figure>
      <h1 className="text-3xl font-bold text-center">Página no encontrada</h1>
      <Link to="/" className='mt-20 sm:mt-2 border-2 border-slate-800 w-[50%] flex items-center justify-center h-[10%] rounded-lg bg-slate-900 text-white text-lg sm:w-[220px]'>Inicio</Link>
    </div>
  )
}

export default NotFound