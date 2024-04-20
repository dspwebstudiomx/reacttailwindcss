import { Route, Routes } from "react-router-dom"
import HolaMundo from "./Articles/HolaMundo"

const ArticlesIndex = () => {
  return (
    <Routes>
      <Route path="/blog/1" element={<HolaMundo />} />
    </Routes>
  )
}

export default ArticlesIndex