import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="text-slate-900 w-full h-[100vh] bg-slate-400 flex flex-col gap-20 justify-center items-center">
      <h1 className="text-6xl font-bold">Página no encontrada</h1>
      <Link to="/" className=''>Inicio</Link>
    </div>
  )
}

export default NotFound