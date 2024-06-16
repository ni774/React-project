import React,{useState} from 'react';
import PasswordGen from './component/passwordGenerator/passwordGen.jsx';
import CurrencyConverter from './component/currencyConverter/currencyConverter.jsx';
import LandingPage from './component/LandingPage.jsx';
// import Layout from './component/ReactRouterProject/Layout.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Layout from './component/ReactRouterProject/Layout.jsx';
import Todo from './component/todo/Todo.jsx';



function APP () {
  const [activeComponent, setActiveComponent] = useState('About'); // Initial state

 
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/passwordgen" element={<PasswordGen/>} />
        <Route path='/currencyconverter' element={<CurrencyConverter/>} />
        <Route path='/todo' element={<Todo/>} />
        <Route path='/router' element={<Layout/>} />
      </Routes>
    </Router>

    </div>
  )
}

export default 
APP
