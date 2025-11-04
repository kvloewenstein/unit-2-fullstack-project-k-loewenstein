import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/pages/HomePage'
import About from './components/pages/AboutPage'
import SkinForm from './components/pages/SkinTypeForm'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <Router>
      <Header />
      <div className="main-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skin-quiz" element={<SkinForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
