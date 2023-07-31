import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='Portfolio' element={<Portfolio/>} />
        <Route path='Contact' element={<Contact/>} />


      </Routes>
      
      
  
    </>
  );
}

export default App;
