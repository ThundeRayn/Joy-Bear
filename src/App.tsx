import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from "./components/Layout";
import Home from './pages/Home'
import Error from './pages/Error';
import About from './pages/About';
import Story from './pages/Story';
import Cutomize from './pages/Cutomize';
{/* Product Pages */}
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail';
{/* Category Pages */}
import Category from './pages/Category';
import CategoryDetail from './pages/CategoryDetail';
{/* Tags Pages */}
import Tags from './pages/Tags';
import TagsDetail from './pages/TagsDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="story" element={<Story />} />

          {/* Product Pages */}
          <Route path="products" element={<Product />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          
          {/* Categories */}
          <Route path="categories" element={<Category />} />
          <Route path="categories/:slug" element={<CategoryDetail />} />

          {/* Tags */}
          <Route path="tags" element={<Tags />} />
          <Route path="tags/:slug" element={<TagsDetail />} />

          <Route path="customize" element={<Cutomize />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
