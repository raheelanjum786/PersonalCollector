import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about"      element={<About />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}