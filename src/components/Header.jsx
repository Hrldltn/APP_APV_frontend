import{Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Header = () => {
    const {cerrarSesion} = useAuth()

  return (
    <header className="py-10 bg-sky-400">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl md:text-4xl text-center text-sky-700">Administrador de Pacientes de {''} 
                <span className="text-white">Veterinaria</span>
            </h1>
            <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
              <Link className="text-white text-ms uppercase font-bold" to ="/admin">Pacientes</Link>
              <Link className="text-white text-ms uppercase font-bold" to ="/admin/perfil">Perfil</Link>
              <button type="button" className="text-white text-ms uppercase font-bold" onClick={cerrarSesion}>
                Cerrar Sesión
              </button>
            </nav>
        </div>

    </header>
  )
}

export default Header