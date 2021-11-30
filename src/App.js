import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import Product from './pages/product';
import Cart from './pages/cart'
import './app.scss'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="*" element={<Navigate to="/React-Ecommerce/women" />} />
        <Route path="/React-Ecommerce/men" element={<Men />} />
        <Route path="/React-Ecommerce/women" element={<Women />} />
        <Route path="/React-Ecommerce/kids" element={<Kids />} />
        <Route path="/React-Ecommerce/product/:productId" element={<Product />} />
        <Route path="/React-Ecommerce/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
