import useSWR from 'swr'
import Producto from "../components/Producto";
import clienteAxios from '../config/axios';
import useQuiosco from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";

export default function Inicio() {
  
  const {categoriaActual} = useQuiosco();
  const {user} = useAuth ({middleware: 'auth'});

  //Consulta SWR
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
    // Este refresh busca cambios cada segundo y los refleja en el frontend
    refreshInterval: 1000
  })

  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  if(isLoading){
    return (
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
  )}

  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id);


  return (
    <>
      <h1 className="text-4xl font-black">{categoriaActual.nombre}</h1>
      <p className="text-2xl my-10">¡Hola {user.name} es un gusto recibirte! elije y personaliza tu pedido a continuación</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto =>(
          <Producto
            key={producto.imagen}
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
