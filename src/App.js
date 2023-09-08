import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link
            to="/"
            style={{ textDecoration: 'none' }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            style={{ textDecoration: 'none' }}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ textDecoration: 'none' }}
          >
            About
          </Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  );
}

export default App;
