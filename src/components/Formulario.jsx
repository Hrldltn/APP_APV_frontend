import {useState,useEffect} from 'react'
import Alerta from './Alerta'
import usePacientes from '../hooks/usePacientes'
const Formulario = () => {
    const [nombre , setNombre]=useState('')
    const [propietario , setPropietario]=useState('')
    const [email , setEmail]=useState('')
    const [fecha , setFecha]=useState('')
    const [sintomas , setSintomas]=useState('')

    const [id , setId]=useState(null)

    const [alerta,setAlerta]=useState({})
    const {guardarPaciente,paciente} = usePacientes()

    useEffect(()=>{
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(new Date(paciente.fecha))
            setSintomas(paciente.sintomas)
            setId(paciente._id)
            }
        },[paciente])
    
    const handleSubmit= e =>{
        e.preventDefault()
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setAlerta({msg:'Todos los Campos son Obligatorios',error:true})
            return
        }
        
        guardarPaciente({nombre,propietario,email,fecha,sintomas,id})
        setAlerta({ msg:'Guardado correctamente'})
        setNombre('')
        setPropietario('')
        setFecha('')
        setNombre('')
        setSintomas('')
        setId('')
        setTimeout(() => {
            setAlerta({msg:''})
        }, 3000);
    }
    const {msg} = alerta
  return (
    <>
        <h2 className="font-black text-3xl text-center">Administrador de Pacientes</h2> 
        <p className="text-xl mt-5 mb-6 text-center"> Añade tus pacientes {''} <span className="text-sky-500 font-bold"> y Administralos</span></p>
        {msg && <Alerta alerta={alerta}/>}
        <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-2xl rounded-md" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold"htmlFor="nombre">Nombre Mascota</label>
                <input id="nombre" type="text" placeholder="Nombre de la Mascota" value={nombre} onChange={e=>setNombre(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"></input>
            </div>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                <input id="propietario" type="text" placeholder="Nombre del Propietario" value={propietario} onChange={e=>setPropietario(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"></input>
            </div>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="email">Email Propietario</label>
                <input id="email" type="email" placeholder="Email del Propietario" value={email} onChange={e=>setEmail(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"></input>
            </div>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha Alta</label>
                <input id="fecha" type="date" value={fecha} onChange={e=>setFecha(e.target.value)}  className="border-2 w-full p-2 mt-2  placeholder-gray-300 rounded-md"></input>
            </div>
            <div className="mb-5">
                <label className="text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                <textarea id="sintomas" placeholder="Describe los Sintomas" value={sintomas} onChange={e=>setSintomas(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"></textarea>
            </div>
            <input type="submit" value={id?'Guardar Cambio':'Agregar Pacientes'} className="transition-colors bg-sky-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-sky-600  md:w-auto"/>
        </form>
    </>
  )
}

export default Formulario
