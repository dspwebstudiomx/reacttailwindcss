import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const ReturnButton = () => {
  return (

    <Link to='hero' spy={true} smooth={true} offset={-96} duration={0}>
      <div className="w-16 h-16 bg-blue-600   shadow-lg shadow-slate-900 rounded-full z-0 flex justify-center items-center mt-8 fixed bottom-32 right-6 cursor-pointer animate__animated animate__backInRight hover:bg-blue-800">
        <FaArrowUp color="#fff" size={32} />
      </div>
    </Link>
  )
}

export default ReturnButton