import usePacientes from "../hooks/usePacientes"

const Paciente = ({paciente}) => {

    const {setEdicion,eliminarPaciente} = usePacientes()

    const{email,fecha,nombre,propietario,sintomas,_id}=paciente

    const formatearFecha=(fecha)=>{ 
        return new Intl.DateTimeFormat('es-ES',{ dateStyle: 'full'}).format(fecha)
    }
  return (
    <>
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl">
            <p className="font-bold uppercase text-sky-600 py-3">Nombre:{' '}
                <span className="font-normal normal-case text-black">{nombre}</span>
            </p>
            <p className="font-bold uppercase text-sky-700 py-3">Propietario:{' '}
                <span className="font-normal normal-case text-black">{propietario}</span>
            </p>
            <p className="font-bold uppercase text-sky-700 py-3">Email Contacto:{' '}
                <span className="font-normal normal-case text-black">{email}</span>
            </p>
            <p className="font-bold uppercase text-sky-700 py-3">Fecha de Alta:{' '}
                <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
            </p>
            <p className="font-bold uppercase text-sky-700 py-3">Sintomas:{' '}
                <span className="font-normal normal-case text-black">{sintomas}</span>
            </p>
            <div className="flex justify-between my-5 flex-col md:flex-row ">
                <button type="button" className="py-2 px-10 bg-sky-500 text-white uppercase font-bold rounded-lg  hover:bg-sky-600" onClick={() => setEdicion(paciente)}>Editar</button>
                <button type="button" className="py-2 px-10 bg-red-500 text-white uppercase font-bold rounded-lg mt-3 md:mt-0 hover:bg-red-600" onClick={()=> eliminarPaciente(_id)}>Eliminar</button>
            </div>
        </div>
    </>
  )
}

export default Paciente
