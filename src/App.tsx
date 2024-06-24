import './App.css'
import './styles/main.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import User from './pages/[user]';
function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/users' element={<HomePage />}/>
      <Route path='/user/:user' element={<User />}/>

      <Route path='*' element={<Navigate to="/login" />}/>
    </Routes>
  )
}

export default App
