import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root';
import Homepage from './Pages/Home/Homepage';
import AddCoffee from './Pages/AddCoffee/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import AboutUs from './Pages/AboutUS/AboutUs';
import BlogPage from './Pages/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Homepage />,
        loader: () => fetch('http://localhost:5000/coffee'),
      },
      {
        path: '/addcoffee',
        element: <AddCoffee />,
      },
      {
        path: '/updatecoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: '/AboutUs',
        element: <AboutUs></AboutUs>

      },
      {
        path: '/blogs',
        element: <BlogPage></BlogPage>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
