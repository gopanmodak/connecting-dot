import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home";
import RefundPolicy from "./Pages/RefundPolicy";
import TermsandConditions from "./Pages/TermsandConditions";
import ScrollToTop from "./Components/ScrollToTop";
import Shop from "./Pages/Shop";
import ContactUs from "./Pages/ContactUs";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import ProductDetails from "./Pages/ProductDetails";
import LoginForm from "./Pages/LoginForm";

export const router =createBrowserRouter([
   
    {
        path:'/',
        
        element:<> <MainLayout/>,<ScrollToTop/></>,
        children:[

            {
                index:true,
                element:<Home/>
            },
            {
                path:'shop',
                element:<Shop/>
            },
            {
                path:'cart',
                element:<Cart/>,
                
            },
            {
                path:'profile',
                element:<Profile/>
            },
            {
                path:'contact',
                element:<ContactUs />
            },
            {
                path:'refund-policy',
                element:<RefundPolicy/>
            },
            {
                path:'terms-and-conditions',
                element:<TermsandConditions/>
            }
            ,
            {
                path:'product/:id',
                element:<ProductDetails/>
            },
            {
                path:'login',
                element:<LoginForm/>
            }

        ]
    }
   

])