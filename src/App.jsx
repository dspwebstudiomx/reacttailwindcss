import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import 'animate.css'
import '../node_modules/animate.css/animate.css'
import ScrollToTop from './Functions/ScrolltoTop'
import Loading from './components/Loading'

const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const WorkProcess = lazy(() => import('./pages/WorkProcess'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Policy = lazy(() => import('./pages/Policy'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const HolaMundo = lazy(() => import('./pages/Blog/Articles/HolaMundo'))
const NuevoBlog = lazy(() => import('./pages/Blog/Articles/NuevoBlog'))
const ColoresDiseno = lazy(() => import('./pages/Blog/Articles/ColoresDiseno'))
const FundamentosDisenoWeb = lazy(() => import('./pages/Blog/Articles/FundamentosDisenoWeb'))
const HerramientasDisenoWeb = lazy(() => import('./pages/Blog/Articles/HerramientasDisenoWeb'))
const ImportanciaDisenoWeb = lazy(() => import('./pages/Blog/Articles/ImportanciaDisenoWeb'))
const ErroresComunesDisenoWeb = lazy(() => import('./pages/Blog/Articles/ErroresComunesDisenoWeb'))
const PrincipalesFrameworks = lazy(() => import('./pages/Blog/Articles/PrincipalesFrameworks'))
const TendenciasActualesDiseno = lazy(() => import('./pages/Blog/Articles/TendenciasActualesDiseno'))
const PersonalCategoryPage = lazy(() => import('./pages/Blog/Categories/PersonalCategoryPage'))
const WebDesignCategoryPage = lazy(() => import('./pages/Blog/Categories/WebDesignCategoryPage'))
const WebDevelopmentCategoryPage = lazy(() => import('./pages/Blog/Categories/WebDevelopmentCategoryPage'))
const ToolsCategoryPage = lazy(() => import('./pages/Blog/Categories/ToolsCategoryPage'))


export default function App() {

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proceso-trabajo" element={<WorkProcess />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/politica-privacidad" element={<Policy />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/blog/0" element={<HolaMundo />} />
            <Route path="/blog/personal/mi-nuevo-blog" element={<NuevoBlog />} />
            <Route path="/blog/diseno-web/fundamentos-diseno-web" element={<FundamentosDisenoWeb />} />
            <Route path="/blog/herramientas/herramientas-diseno-web" element={<HerramientasDisenoWeb />} />
            <Route path="/blog/diseno-web/paleta-colores-perfecta-sitio-web" element={<ColoresDiseno />} />
            <Route path="/blog/diseno-web/importancia-diseno-responsivo" element={<ImportanciaDisenoWeb />} />
            <Route path="/blog/diseno-web/errores-comunes" element={<ErroresComunesDisenoWeb />} />
            <Route path="/blog/desarrollo-web/principales-frameworks" element={<PrincipalesFrameworks />} />
            <Route path="/blog/diseno-web/tendencias-actuales" element={<TendenciasActualesDiseno />} />
            <Route path="/blog/diseno-web/" element={<WebDesignCategoryPage />} />
            <Route path="/blog/desarrollo-web/" element={<WebDevelopmentCategoryPage />} />
            <Route path="/blog/herramientas/" element={<ToolsCategoryPage />} />
            <Route path="/blog/personal/" element={<PersonalCategoryPage />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </BrowserRouter >
  )
}

