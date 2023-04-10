import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Statistics from './Statistics/Statistics';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<header></header>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied jobs',
        element:<Appliedjobs></Appliedjobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
