import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Layout from "../Pages/Home/Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login";
import SignUp from "../Pages/Shared/SignUp";
import Error from "../Pages/Shared/Error";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from './PrivateRoute';
import AddaToy from "../AddaToy/AddaToy";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import AllToys from "../AllToys/AllToys";
import ToyDetails from "../ToyDetails/ToyDetails";
import MyToys from "../MyToys/MyToys";

 const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://assignment11-server-site-lemon.vercel.app/postToy')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
          path:'/addAToy',
          element:<PrivateRoute><AddaToy></AddaToy></PrivateRoute>
        },
        {
          path:'/shopByCategory',
          element:<ShopByCategory></ShopByCategory>,
          loader:()=>fetch('https://assignment11-server-site-lemon.vercel.app/postToy')
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>,
          loader:()=>fetch('https://assignment11-server-site-lemon.vercel.app/postToy')
        },
        {
          path:'/postToy/:id',
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://assignment11-server-site-lemon.vercel.app/singleToy/${params.id}`)
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
       
        {
          path:'/blogs',
          element:<Blog></Blog>
        }
      ]
    },
    
      
        {
          path:'*',
          element:<Error></Error>
        }
    
  ]);



export default router