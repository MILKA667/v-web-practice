import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Liked from "./pages/Liked/Liked"

function App() {
  return(
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/liked" element={<Liked />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App