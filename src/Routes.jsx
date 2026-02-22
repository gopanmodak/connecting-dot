import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import RefundPolicy from "./Pages/RefundPolicy";
import TermsandConditions from "./Pages/TermsandConditions";
import ScrollToTop from "./Components/ScrollToTop";

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
                path:'portfolio',
                element:<Portfolio/>
            },
            {
                path:'services',
                element:<Services/>
            },
            {
                path:'refund-policy',
                element:<RefundPolicy/>
            },
            {
                path:'terms-and-conditions',
                element:<TermsandConditions/>
            }

        ]
    }
   

])