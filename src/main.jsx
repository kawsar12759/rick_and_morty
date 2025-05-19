import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home';
import Casts from './Pages/Casts';
import CastDetails from './Pages/CastDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/casts",
    element: <Casts></Casts>,
    loader:()=>fetch('https://rickandmortyapi.com/api/character')
  },
  {
    path:"/casts/:id",
    element:<CastDetails></CastDetails>,
    loader:({params})=>fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
