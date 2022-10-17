import { useRoutes } from "react-router-dom";
import App from "./App"
import MainLayout from "./Layout/MainLayout"
import Login from "./Page/Login"
import AboutUs from "./Page/AboutUs"

export default function Router () {
    return useRoutes([
        {
            path:"/",
            element: <MainLayout/>,
            children: [
                {path: 'app', element: <App/> },
                {path: 'about', element: <AboutUs/> }
            ]

        },
        { path: '/login', element: <Login /> },
    ])
}