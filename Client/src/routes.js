import { useRoutes } from "react-router-dom";
import App from "./App";
import MainLayout from "./Layout/MainLayout";
import Login from "./Page/Login";
import AboutUs from "./Page/AboutUs";
import ContactUs from "./Page/ContactUs";
import MapView from "./Page/MapView";
import GridView from "./Page/GridView";
import Home from "./Page/Home";
import NotFoundPage from "./Page/404.js"

export default function Router () {
    return useRoutes([
        {
            path:"/",
            element: <MainLayout/>,
            children: [
                {path: '/', element: <Home/> },
                {path: 'AboutUs', element: <AboutUs/> },
                {path: 'ContactUs', element: <ContactUs/>},
                {path: 'GridView', element:<GridView/>},
                {path: 'MapView', element:<MapView/>},
                {path: 'login', element:<Login/>},
                {path: '*', element: <NotFoundPage/> }
            ]
        },
    ])
}