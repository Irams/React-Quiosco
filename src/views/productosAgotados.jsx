import useSWR from 'swr'
import clienteAxios from '../config/axios'
import Producto from '../components/Producto'

export default function productosAgotados() {

const token = localStorage.getItem('AUTH_TOKEN')

  const fetcher = () => clienteAxios('/api/productos-agotados', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)

  const {data, error, isLoading } = useSWR('/api/productos-agotados', fetcher, 
  {refreshInterval: 10000}
  )

  if(isLoading){
    return (
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
  )}

  console.log(data.data);
  // console.log(error);

  return (
    <>
        <h1 className="text-4xl font-black">Productos Agotados</h1>
        <p className="text-2xl my-10">Regresa los productos a disponibles desde aquí</p>
    </>
  )
}
