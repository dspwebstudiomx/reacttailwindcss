import { RingLoader } from "react-spinners"
import Navbar from "./Sections/Navbar"
const Loading = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[100vh] flex items-center justify-center bg-blue-900">
        <RingLoader color="#fafafa" />
      </div>
    </>
  )
}

export default Loading