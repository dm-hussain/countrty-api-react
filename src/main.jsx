import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
   createBrowserRouter,
  RouterProvider,
} from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import CountryDetail from './components/CountryDetail.jsx';
import Content from './components/Content.jsx';

import App from './App.jsx';
//  import Layout from './components/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:   <App />,
    children:[
      {
        path: '',
        element: <Content />
      },
      {
        path: '/:country',
        element: <CountryDetail/>
      }

    ]
    
  },

 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
