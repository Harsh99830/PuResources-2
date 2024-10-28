import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Btech from './Semester/Btech';
import Bba from './Semester/Bba';
import Bca from './Semester/Bca';
import Bcom from './Semester/Bcom';
import Home from './components/Home';
import Signup from './screen/Signup';
import Login from './screen/Login';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Year2ndBtech from './Year2ndBtech';
// import Interface from './components/Interface';

// import { AuthContext, AuthProvider } from './components/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
let allroute = createBrowserRouter(
  [
    // {
    //   path:'/',
    //   element:<Interface/>
    // },

    {
      path:'/',
      element:<Home/>
    },

    {
      path:'/btech',
      element:<Btech/>
    },

    {
      path:'/bba',
      element:<Bba/>
    },

    {
      path:'/bca',
      element:<Bca/>
    },

    {
      path:'/bcom',
      element:<Bcom/>
    },

    {
      path:'/Btech1stYear',
      element:<App/> 
    },

      {
        path:'/Btech2ndYear',
        element:<Year2ndBtech/>
      },
      {
        path:'/login',
        element:<Login/>
      },
  
        {
        path:'/createuser',
        element:<Signup/>
      },

    
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allroute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
