import './App.css'
import '../node_modules/animate.css/animate.css'
import 'animate.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import NotFound from "./pages/NotFound"
import Blog from "./pages/Blog"
import WorkProcess from './pages/WorkProcess'
import Contact from "./pages/Contact"
import ScrollToTop from './Functions/ScrolltoTop'
import Policy from './pages/Policy'
import HolaMundo from './pages/Blog/Articles/HolaMundo'
import NuevoBlog from './pages/Blog/Articles/NuevoBlog'
import FundamentosDiseñoWeb from './pages/Blog/Articles/FundamentosDisenoWeb'
import HerramientasDiseñoWeb from './pages/Blog/Articles/HerramientasDiseñoWeb'
import ColoresDiseno from './pages/Blog/Articles/ColoresDiseno'
import ImportanciaDiseñoWeb from './pages/Blog/Articles/ImportanciaDisenoWeb'
import ErroresComunesDisenoWeb from './pages/Blog/Articles/ErroresComunesDisenoWeb'
import PrincipalesFrameworks from './pages/Blog/Articles/PrincipalesFrameworks'
import TendenciasActualesDiseno from './pages/Blog/Articles/TendenciasActualesDiseno'

export default function App() {

  return (
    < BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proceso-trabajo" element={<WorkProcess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/politica-privacidad" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/blog/0" element={<HolaMundo />} />
          <Route path="/blog/personal/mi-nuevo-blog" element={<NuevoBlog />} />
          <Route path="/blog/diseño-web/fundamentos-diseño-web" element={<FundamentosDiseñoWeb />} />
          <Route path="/blog/herramientas/herramientas-diseño-web" element={<HerramientasDiseñoWeb />} />
          <Route path="/blog/diseño-web/paleta-colores" element={<ColoresDiseno />} />
          <Route path="/blog/diseño-web/importancia-diseño-responsivo" element={<ImportanciaDiseñoWeb />} />
          <Route path="/blog/diseño-web/errores-comunes" element={<ErroresComunesDisenoWeb />} />
          <Route path="/blog/desarrollo-web/principales-frameworks" element={<PrincipalesFrameworks />} />
          <Route path="/blog/diseño-web/tendencias-actuales" element={<TendenciasActualesDiseno />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

