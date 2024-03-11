import Button from "../components/Button"

const NotFound = () => {
  return (
    <div className="text-slate-900 w-full h-[100vh] bg-slate-400 flex flex-col gap-20 justify-center items-center">
      <h1 className="text-6xl font-bold">Página no encontrada</h1>
      <Button
        background="dark"
        texto="Ir a inicio"
        href="/"
      />
    </div>
  )
}

export default NotFound