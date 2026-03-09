import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import TrendingProducts from './components/trendingProducts'
import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'

function App() {
  return (
    <div className='w-full h-screen flex justify-center items-center relative bg-primary text-secondary'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App
