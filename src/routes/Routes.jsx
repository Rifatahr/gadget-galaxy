import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import ErrorPage from "../pages/ErrorPage"
import Cards from "../components/Cards"


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../category-data.json'),
        children:[
          {
            path: '/',
            element: <Cards></Cards>,
            loader: () => fetch('../gadget-galaxy-data.json'),
          },
          {
            path: '/category/:categoryName',
            element: <Cards></Cards>,
            loader: () => fetch('../gadget-galaxy-data.json'),
          },

          
        ],
        
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/DashBoard',
        element: <Dashboard></Dashboard>,
      },
    ]
  }
])

export default routes