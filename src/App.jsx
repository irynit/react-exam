import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from './pages/Product/Product';
import Navbar from "./components/Navbar/Navbar";
import { Children } from 'react';
import "./App.scss";
export function Layout() {
  return (
    <div className="app">
      <Navbar />

    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    Children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "products/:id",
        element: <Products />
      },
      {
        path: "product/:id",
        element: <Product />
      },
    ]
  }
]
)



export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
