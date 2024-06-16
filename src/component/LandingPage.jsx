import React from 'react';
import { Outlet, useNavigate  } from 'react-router-dom';

const LandingPage = () => {
  const history = useNavigate ();

  return (
    <div>
      <h1>WelCome React Projects</h1>
      <nav>
        <button onClick={() => history('/passwordgen')}>Password-generator</button>
        <button onClick={() => history('/currencyconverter')}>Curreuncy-convertor</button>
        <button onClick={() => history('/router')}>React-Router</button>  
        <button onClick={() => history('/todo')}>Todo</button>  
      </nav>
      <Outlet />
    </div>
  );
};

export default LandingPage;