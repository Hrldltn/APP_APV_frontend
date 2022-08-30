import{useState} from 'react'
import {Link} from 'react-router-dom'
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta'
import imagen from '../assets/imagenes'

const Registrar = () => {
  const [nombre,setNombre] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [repetirPassword,setRepetirPassword] = useState('')

  const [alerta,setAlerta]=useState({})


  const handleSubmit=async(e)=>{
      e.preventDefault()
  
      if([nombre , email,password,repetirPassword].includes('')){
        setAlerta({msg:'Todos los Campos son Obligatorios',error:true})
        return
      }
      if(password!==repetirPassword){
        setAlerta({msg:'Las password No coincide',error:true})
        return
      }
      if(password.length<6){
          setAlerta({msg:'El password debe tener almenos 6 caracteres',error:true})
        return
      }
     
      setAlerta({})
      //Crear usuario en la api
      try {
        await clienteAxios.post(`/veterinarios`,{nombre,email,password})
        setAlerta({msg:'Creado correctamente , Realizamos el envio del codigo a tu email'})
      } catch (error) {
          setAlerta({msg:error.response.data.msg,error:true})
      }
  }

  const{msg}=alerta
 
  return (
    <>
        <div>
             <h1 className="text-sky-400 font-black md:text-6xl">Crea tu Cuenta y Administra tus <span className="text-black text-6xl">Pacientes</span> </h1>
             <img src={imagen.img3} alt="gato-img"/>
        </div>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl'>
              {msg && <Alerta 
                  alerta={alerta}
              />}
               <form onSubmit={handleSubmit}>
                  <div>
                      <div className="my-5">
                          <label className="uppercase text-gray-600 block text-xl font-bold"> 
                              Email
                          </label>
                          <input type='email' placeholder='Email de Registro'value={email} onChange={e=>setEmail(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                      </div>
                      <div className="my-5">
                          <label className="uppercase text-gray-600 block text-xl font-bold"> 
                                Nombre
                          </label>
                          <input type='text' placeholder='Tu Nombre' value={nombre} onChange={e=>setNombre(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                      </div>  
                      <div className="my-5">
                          <label className="uppercase text-gray-600 block text-xl font-bold"> 
                                Password
                          </label>
                          <input type='Password' placeholder='Tu Password' value={password} onChange={e=>setPassword(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                      </div>
                      <div className="my-5">
                          <label className="uppercase text-gray-600 block text-xl font-bold"> 
                                Repetir Password
                          </label>
                          <input type='Password' placeholder='Repite tu Password' value={repetirPassword} onChange={e=>setRepetirPassword(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                      </div>
                      
                  </div>  
                  <input type="submit" value="Registrate" className="bg-sky-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-sky-600  md:w-auto transition-colors"/>
              </form>
            
            <nav className='mt-4 lg:flex lg:justify-between items-center'>
              <Link className='block text-center my-5 text-gray-500' to="/">¿Ya Tienes una Cuenta? Inicia Sesión!</Link>
              <Link to="/olvide-password">Olvide mi Password</Link> 
            </nav>
        </div>
    </>
  )
}

export default Registrar
