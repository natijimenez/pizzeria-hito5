import { Route, Routes } from "react-router-dom"
import { useState } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import Pizza from './pages/Pizza';
import Home from './pages/Home'
import Cart from './pages/Cart';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound';


function App() {
  const [token, setToken] = useState(true);

  return (
    <>
      <Navigation token={token} />
      <a className='switchToken' onClick={() => setToken(!token)}>
        {token ? 'Log Out' : 'Log In'}
      </a>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/pizza/p001"
          element={<Pizza />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />

    </>
  )
}

export default App
