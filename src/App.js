import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import './app.scss'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route exact path="*" element={<Navigate to="/men" />} /> */}
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        {/*<Route path="cart" element={<Cart />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
