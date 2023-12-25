import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { lazy } from "react";

const HomePage = lazy(() => import('./../pages/HomePage/HomePage'))

const routes = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      }
    ]
  }
])

export default routes