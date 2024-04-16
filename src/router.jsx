import { createBrowserRouter } from "react-router-dom";
import  Layout  from "./layouts/layout";
import AuthLayout from "./layouts/authlayout";
import AdminLayout from "./layouts/adminlayout";
import Inicio from "./views/inicio";
import Login from "./views/login";
import Registro from "./views/registro";
import Ordenes from "./views/ordenes";
import Productos from "./views/productos";
import ProductosAgotados from "./views/productosAgotados";

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
            },
            
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <Ordenes/>
            },
            {
                path: '/admin/productos',
                element: <Productos/>
            },
            {
                path: '/admin/productos-agotados',
                element: <ProductosAgotados/>
            }
        ]
    }
])

export default router