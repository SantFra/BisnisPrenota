import { useRoutes } from "react-router-dom";
import App from "./App";
import MainLayout from "./Layout/MainLayout";
import Login from "./Page/Login";
import AboutUs from "./Page/AboutUs";
import ContactUs from "./Page/ContactUs";

export default function Router () {
    return useRoutes([
        {
            path:"/",
            element: <MainLayout/>,
            children: [
                {path: 'app', element: <App/> },
                {path: 'AboutUs', element: <AboutUs/> },
                {path: 'ContactUs', element: <ContactUs/>},
            ]

        },
        { path: '/login', element: <Login /> },
    ])
}