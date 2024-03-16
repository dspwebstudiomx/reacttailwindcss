import { ClimbingBoxLoader } from "react-spinners"
const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-transparent opacity-40">
      <ClimbingBoxLoader color="#36d7b7" />
    </div>
  )
}

export default Loading