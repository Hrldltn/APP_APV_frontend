import{useState} from 'react'
import Formulario from '../components/Formulario'
import ListadoPacientes from '../components/ListadoPacientes'
import imagen from '../assets/imagenes'

const AdministrarPacientes = () => {
  const [mostrarFormulario, setMostrarFormulario]=useState(false)

  return (
      <>
        <div className='flex flex-col md:flex-row'>
            <button type="button" onClick={()=>setMostrarFormulario(!mostrarFormulario)} className="bg-sky-500 w-full3 rounded-xl text-white uppercase font-bold mx-5 h-8 hover:cursor-pointer hover:bg-sky-600 mb-5 md:hidden"
              >{mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
            <div className={`${mostrarFormulario ? 'block':'hidden' } md:block md:w-1/2 lg:w-2/5`}>
              <Formulario/>
            </div>
            <img className='h-32 mt-6 md:mt-0' src={imagen.img2} width="200" alt="imagen-gato"/>
            <div className='md:w-1/2 lg:w-3/5'>
              <ListadoPacientes/>
            </div>
        </div>
    </>
  )
}

export default AdministrarPacientes
