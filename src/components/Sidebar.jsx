import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {

    const{categorias} = useQuiosco();
    const {logout, user} = useAuth ({middleware: 'auth'});

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img src="img/logo.svg" 
                 alt="Logo del sitio"
                 className="max-w-xs" />
        </div>

        {/* <p className="my-10 text-2xl text-center">Pedido para {user?.name}</p> */}

        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
            )
            )}
        </div>

        <div className="my-5 px-5">
            <button type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-700"
                    onClick={logout}>
                Cancelar Orden
            </button>
        </div>

    </aside>
  )
}
