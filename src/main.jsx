import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './route/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <HelmetProvider>
 <div className='max-w-7xl mx-auto'>
  <RouterProvider router={router} />
  </div>
 </HelmetProvider>
  </React.StrictMode>,
)
