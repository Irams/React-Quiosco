import useSWR from 'swr'
import clienteAxios from '../config/axios'
import Producto from '../components/Producto'

export default function productos() {

  const token = localStorage.getItem('AUTH_TOKEN')

  const fetcher = () => clienteAxios('/api/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)

  const {data, error, isLoading } = useSWR('/api/productos', fetcher, 
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
    <div>
      <h1 className="text-4xl font-black">Productos</h1>
      <p className="text-2xl my-10">Maneja la disponibilidad desde quí</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data.data.map(producto =>(
        
          console.log(data.producto),
          <Producto
            key={producto.imagen}
            producto={producto}
            botonDisponible={true}
          />
        ))}
      </div>

    </div>
  )
}
