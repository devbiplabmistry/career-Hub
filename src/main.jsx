import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Statistics/Statistics';

import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import JobDetails from './Components/JobDetails/JobDetails';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import Notfound from './Components/NotFound/Notfound';

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
        element:<AppliedJob></AppliedJob>,
        loader:()=>fetch('Feature.json')

      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/jobDetails/:detailsId',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('Feature.json')
      },
      {
        path:'/*',
        element:<Notfound></Notfound>
       
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
