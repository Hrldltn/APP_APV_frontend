import{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom'
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta'
import imagen from '../assets/imagenes'

const ConfirmarCuenta = () => {
  const [cuentaConfirmada,setCuentaConfirmada]=useState(false)
  const [cargando,setCargando]=useState(true)
  const [alerta, setAlerta]=useState({})
  const params = useParams()
  const {id}=params 

  useEffect(()=>{
    const confirmarCuenta=async()=>{
      try {
        const url=`/veterinarios/confirmar/${id}`
        const {data}= await clienteAxios(url)
        console.log(data.msg)
        setCuentaConfirmada(true)
        setAlerta({msg:data.msg , error:false})

      } catch (error) {
        setAlerta({msg:error.response.data.msg , error:true})
      }
      setCargando(false)
    }
    confirmarCuenta()
  },[])

  return (
    <>
        <div>
             <h1 className="text-sky-400 font-black md:text-6xl">Confirma tu cuenta y Comienza a Administra tus <span className="text-black text-6xl">Pacientes</span> </h1>
             <img src={imagen.img3} alt="gato-img"/>
        </div>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl'>
            {!cargando && <Alerta alerta={alerta} />}
            {cuentaConfirmada&&(
              <nav className='mt-4 lg:flex lg:justify-between items-center flex-col '>
                 <Link className='cursor-pointer block text-center my-5 text-gray-500' to="/">Iniciar Sesión</Link>
              </nav> 
            )}
        </div>
    </>
  )
}

export default ConfirmarCuenta
