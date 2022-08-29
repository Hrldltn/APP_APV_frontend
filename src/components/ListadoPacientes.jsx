import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente"

const ListadoPacientes = () => {
    const {pacientes} = usePacientes()
  return (
    <>
      {pacientes.length ? 
      ( 
        <>
          <h2 className="font-black text-3xl text-center">Administra tus</h2> 
          <p className="text-xl mt-5 mb-6 text-center">Pacientes {''} <span className="text-sky-500 font-bold"> y Citas!</span></p>
        
          {pacientes.map(paciente=>(
              <Paciente
                  key={paciente._id}  
                  paciente={paciente}
              />
          ))}
        </>
      ):
      ( <> 
          <h2 className="font-black text-3xl text-center">No hay Pacientes!</h2> 
          <p className="text-xl mt-5 mb-6 text-center"> Comienza Agregando Pacientes {''} <span className="text-sky-500 font-bold"> y Aparecerán en este lugar</span></p>
        </>
      )}
    </>
  )
}

export default ListadoPacientes