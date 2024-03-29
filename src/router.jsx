import { createBrowserRouter } from "react-router-dom";
import  Layout  from "./layouts/layout";
import AuthLayout from "./layouts/authlayout";
import Inicio from "./views/inicio";
import Login from "./views/login";
import Registro from "./views/registro";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/registro',
                element: <Registro/>
            }
        ]
    }
])

export default router