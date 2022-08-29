import {useEffect,useState} from 'react'
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import Alerta from "../components/Alerta"

const EditarPerfil = () => {
    const [alerta , setAlerta]=useState({})
    const {auth,actualizarPerfil}=useAuth()
    const [perfil,setPerfil]=useState({})

    useEffect(()=>{

        setPerfil(auth)
       
    },[auth])

    const handleSubmit=async e  =>{
        e.preventDefault()

        const{nombre,email}=perfil

        if([nombre,email].includes('')){
            setAlerta({msg:'Email y nombre son Obligatorios ',error:true})
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }
        const resultado = await actualizarPerfil(perfil)
        setAlerta(resultado)
        setTimeout(() => {
            setAlerta({})
        }, 2000);
    }

    const {msg} = alerta

    return (
        <>
            <AdminNav/>
            <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-sky-600 font-bold">Información</span></p>
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg p-5">
                    {msg && <Alerta alerta={alerta}/>}
                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Nombre:</label>
                            <input type="text" placeholder="Ingresa tu Nombre" className="border bg-sky-50 w-full p-2 mt-5 rounded-lg" name="nombre" value={perfil.nombre || ''} onChange={e => setPerfil({...perfil,[e.target.name]:e.target.value})}></input>
                        </div>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Email:</label>
                            <input type="email" placeholder="Ingresa tu Email" className="border bg-sky-50 w-full p-2 mt-5 rounded-lg" name="email" value={perfil.email || ''} onChange={e => setPerfil({...perfil,[e.target.name]:e.target.value})}></input>
                        </div>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Telefono:</label>
                            <input type="number"placeholder="Ingresa tu Telefono"  className="border bg-sky-50 w-full p-2 mt-5 rounded-lg" name="telefono" value={perfil.telefono || ''} onChange={e => setPerfil({...perfil,[e.target.name]:e.target.value})}></input>
                        </div>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-600">Sitio Web:</label>
                            <input type="text" placeholder="Ingresa tu Sitio Web" className="border bg-sky-50 w-full p-2 mt-5 rounded-lg" name="web" value={perfil.web || ''} onChange={e => setPerfil({...perfil,[e.target.name]:e.target.value})}></input>
                        </div>
                        <input type="submit" value="Guardar Cambios" className="bg-sky-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-sky-600  md:w-full transition-colors"/>
                    </form>
                    
                </div>
            </div>
        </>
    )
 
}

export default EditarPerfil