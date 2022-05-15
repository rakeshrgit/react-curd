import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login'
import Navbar from './pages/navbar'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route exact path='/' element={<Home/>}/> 
         <Route path='/signup' element={<Signup/>}/> 
         <Route path='/login' element={<Login/>}/> 
      </Routes>
    </Router>  
    
  );
}

export default App;
