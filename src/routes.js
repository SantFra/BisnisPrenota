import { useRoutes } from "react-router-dom";
import App from "./App"
import MainLayout from "./Layout/MainLayout"
import Login from "./Page/Login"

export default function Router () {
    return useRoutes([
        {
            path:"/",
            element: <MainLayout/>,
            children: [
                {path: 'app', element: <App/> },
            ]

        },
        { path: '/login', element: <Login /> },
    ])
}