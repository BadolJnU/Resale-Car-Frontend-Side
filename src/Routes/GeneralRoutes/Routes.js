import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout"
import Main from "../../Layout/Main/Main"
import Blog from "../../Pages/Blog/Blog"
import AllBuyer from "../../Pages/Dashboard/Buyer/AllBuyer/AllBuyer"
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct/AddProduct"
import AllSeller from "../../Pages/Dashboard/Seller/AllSeller/AllSeller"
import MyProducts from "../../Pages/Dashboard/Seller/MyProducts/MyProducts"
import Home from "../../Pages/Home/Home/Home"
import Products from "../../Pages/Products/Products"
import Login from "../../Pages/Shared/Login/Login"
import Register from "../../Pages/Shared/Register/Register"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            }
        ]
    }
])