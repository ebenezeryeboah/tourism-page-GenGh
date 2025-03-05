
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Landing from './pages/landing'
import About from './pages/about'
import Listings from './pages/listings'
import Blog from './pages/blog'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/about' element={<About />} />
      <Route path='/listings' element={<Listings />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
  </BrowserRouter>
}

export default App
