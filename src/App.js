import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from "./pages/Navbar/Navbar"
import Classes from './pages/Classes/Classes';
import Products from './pages/Products/Products';
import AboutUs from './pages/About/AboutUs';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
