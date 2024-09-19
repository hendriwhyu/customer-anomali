import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import LoginPage from './views/auth/LoginPage';
import RegisterPage from './views/auth/RegisterPage';
import HomePage from './views/HomePage';
// import { AuthProps } from './types';

function App() {
  const [auth, setAuth] = useState(null);

  if(auth === null){
    return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    )
  }
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
