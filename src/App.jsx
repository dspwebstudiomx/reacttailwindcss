import './App.css';
import '../node_modules/animate.css/animate.css';
import 'animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

export default function App() {
  return (
    < BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

