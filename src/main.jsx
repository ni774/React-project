import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './component/ReactRouterProject/Home/Home.jsx'
import About from './component/ReactRouterProject/About/About.jsx'
import Contact from './component/ReactRouterProject/Contact/Contact.jsx'
import User from './component/ReactRouterProject/User/User.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './component/LandingPage.jsx'
import Layout from './component/ReactRouterProject/Layout.jsx'
import PasswordGen from './component/passwordGenerator/passwordGen.jsx'
import CurrencyConverter from './component/currencyConverter/currencyConverter.jsx';
import Todo from './component/todo/Todo.jsx';


//* method 1st
const router1 = createBrowserRouter([
  {
    path: '/router',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About/> },
      { path: 'contact', element: <Contact/>},
      { path: 'user/:userid', element: <User/>},
    ]
  },

])

//* method 2nd 
const router2 = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/passwordgen" element={<PasswordGen />} />
    <Route path="/currencyconverter" element={<CurrencyConverter />} />
    <Route path="/todo" element={<Todo />} />
    
    <Route path="/router" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  </>

  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router2}/>
  </React.StrictMode>,
)
