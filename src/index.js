import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Introduction from './pages/Introduction/Introduction';
import Recruitment from "./pages/recruitment/Recruitment";
const router = createBrowserRouter([
  {
    path : '/',
    element : <Recruitment />
  },
  {
    path : '/trang-chu',
    element : <Home />
  },
  {
    path : '/gioi-thieu',
    element : <Introduction />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
      <RouterProvider router={router}/>
    </React.StrictMode>
);
