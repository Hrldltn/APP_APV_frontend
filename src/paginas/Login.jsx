import {useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

const Login = () => {
    const [alerta,setAlerta ]=useState({})
    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')
    const  {auth} = useAuth()
    const navigate = useNavigate()
    const {setAuth} =useAuth()

    const handleSubmit= async(e) => {
        e.preventDefault()
        if([email,password].includes('')){
            setAlerta({msg:'Todos los campos son Obligatorios',error:true})
            return
        }
        try {
            const {data}=await clienteAxios.post('/veterinarios/login',{email,password})
            localStorage.setItem('token',data.token)
            navigate('/admin')
            setAuth(data)

        } catch (error) {
            setAlerta({msg:error.response.data.msg , error:true})
        }


    }
    const {msg}=alerta
  return (
    <>
        <div>
             <h1 className="text-sky-400 font-black text-4xl md:text-6xl">inicia Sesión y Administra tus <span className="text-black text-4xl md:text-6xl">Pacientes</span> </h1>
             <img className="hidden md:block" src="../src/assets/img/perros.png" alt="perros-img"/>
        </div>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl'>
            <img src="../src/assets/img/gato.jpg" alt="gato-img"/>

              {msg && 
                <Alerta alerta={alerta}/>}

              <form onSubmit={handleSubmit}>
                  <div>
                      <div className="my-5">
                          <label className="uppercase text-gray-600 block text-xl font-bold"> 
                                Email
                          </label>
                          <input type='email' value={email} autoComplete="username" onChange={e=>setEmail(e.target.value)} placeholder='Email de Registro' className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                      </div>
              
                      <div className="my-5">
                          <label className="uppercase text-gray-600 block text-xl font-bold"> 
                                    Password
                          </label>
                          <input type='password' value={password} autoComplete='current-password' onChange={e=>setPassword(e.target.value)} placeholder='Tu password' className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                      </div>
                      <input type="submit" value="Iniciar Sesión" className="bg-sky-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-sky-600  md:w-auto"/>
                  </div>
            </form><br></br>
            <nav className='mt-4 lg:flex lg:justify-between items-center'>
                <Link className='block text-center my-5 text-gray-500' to="/registrar">¿No tienes una cuenta? Regístrate!</Link> 
                <Link to="/olvide-password">Olvide mi Password</Link> 
            </nav>
        </div>
    </>
  )
}

export default Login
