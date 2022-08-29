import {useState , useEffect} from'react'
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"

const CambiarPassword = () => {
  
  const {guardarPassword}=useAuth()
  const [alerta , setAlerta]=useState({})
  const [current_password, setCurrent_Password]=useState('')
  const [new_password, setNew_Password]=useState('')
  const [confirm_password, setConfirm_Password]=useState('')
 
  const handleSubmit=async e =>{
      e.preventDefault()
      
      setTimeout(() => {
          setAlerta({})
      }, 3000);

      if([current_password,new_password,confirm_password].includes('')){
        setAlerta({msg:'Debes colocar una Password', error:true})
        return
      }
      if(new_password!==confirm_password ){
        setAlerta({msg:'Las Nuevas Password deben ser iguales', error:true})
        return
      }
    
      if(new_password.length<6){
        setAlerta({msg:'La Nueva Password no debe tener menos de 6 caracteres', error:true})
        return
      }
    
     
    const respuesta=await guardarPassword({current_password,new_password})
    setAlerta(respuesta)

    setTimeout(() => {
      setAlerta({})
    }, 3000);
    
  } 
  const {msg}=alerta
  return (
    <>
      <AdminNav/>
      <h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>
      <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-sky-600 font-bold">Password</span></p>

        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg p-5">
              {msg && <Alerta 
                    alerta={alerta}
              />}
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label className="uppercase text-gray-600 block text-xl font-bold"> 
                            Password
                        </label>
                        <input type='password' placeholder='Tu Password' autoComplete='current-password' name="current_password" onChange={e => setCurrent_Password(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                    </div>
                    <div className="my-3">
                        <label className="uppercase text-gray-600 block text-xl font-bold"> 
                            Nuevo Password
                        </label>
                        <input type='password' placeholder='Tu Nueva Password' autoComplete='new-password' name="new_password" onChange={e => setNew_Password(e.target.value)}  className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                    </div>
                    <div className="my-3">
                        <label className="uppercase text-gray-600 block text-xl font-bold"> 
                            Confirmar Password
                        </label>
                        <input type='password' placeholder='Confirmar Password' autoComplete='confirm-password' name="confirm_password" onChange={e => setConfirm_Password(e.target.value)}  className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                    </div>
                    <input type="submit" value="Actualizar Password" className="bg-sky-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-sky-600  md:w-auto"/>
                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword
