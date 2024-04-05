import './App.css';
import '../node_modules/animate.css/animate.css';
import 'animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ScrollToTop from './components/Functions/ScrolltoTop';
import Article from './pages/Article';

export default function App() {

  return (
    < BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog/:id" element={<Article />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

