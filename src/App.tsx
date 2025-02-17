import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import CareersPage from './pages/CareersPage'
import ProjectsPage from './pages/Projects'
import SuccessCasePage from './pages/SuccessCasePage'
import ArsitTecnologiaSuccessCasePage from './pages/ArsitTecnologiaSuccessCasePage'
import AIBusinessSuccessCasePage from './pages/AIBusinessSuccessCasePage'
import CloudComputingSuccessCasePage from './pages/CloudComputingSuccessCasePage'
import ContactForm from './pages/ContactForm'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<CareersPage />}/>
            <Route path="/cases-de-sucesso" element={<SuccessCasePage />}/>
            <Route path="/governo" element={<ArsitTecnologiaSuccessCasePage />}/>
            <Route path="/inteligencia-artificial" element={<AIBusinessSuccessCasePage />}/>
            <Route path="/cloud" element={<CloudComputingSuccessCasePage />}/>
            <Route path="/contact" element={<ContactForm />}/>
            <Route path="/projects" element={<ProjectsPage />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

