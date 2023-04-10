import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Statistics/Statistics';
import Appliedjobs from './Components/Appliedjobs/Appliedjobs';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('job.json')
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
