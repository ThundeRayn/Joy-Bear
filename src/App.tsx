import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout";
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail';
import Error from './pages/Error';
import About from './pages/About';
import Story from './pages/Story';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="story" element={<Story />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
