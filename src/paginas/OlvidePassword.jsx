import{useState} from 'react'
import{Link} from 'react-router-dom';
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios';
import imagen from '../assets/imagenes'

const OlvidePassword = () => {
      const [email,setEmail]=useState('')
      const [alerta , setAlerta]=useState({})

      const handleSubmit=async e=>{
            e.preventDefault();

            if (email=='' || email.length < 7 ){
                  setAlerta({msg:'El Email es obligatorio',error:true})
                  return
            }
            try {
                 const {data}=await clienteAxios.post('/veterinarios/olvide-password',{email}) 
                 setAlerta({msg:data.msg})
            } catch (error) {
                  setAlerta({msg:error.response.data.msg,error:true})
            }
      }
      const{msg}=alerta
  return (
    <>
        <div>
             <h1 className="text-sky-400 font-black md:text-6xl">Recupera Tu Acceso y no Pierdad tus <span className="text-black text-6xl">Pacientes</span> </h1>
             <img src={imagen.img1} alt="perros-img"/>
        </div>
         <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl'>
                {msg && <Alerta alerta={alerta}/>}
               <form onSubmit={handleSubmit}>
                    <div className="my-5">
                          <label className="uppercase text-gray-600 block text-xl font-bold"> 
                                Email
                          </label>
                          <input type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email de Registro' className="border w-full p-3 mt-3 bg-gray-50  rounded-xl" />
                    </div>
                  <input type="submit" value="Enviar Codigo" className="bg-sky-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-sky-600  md:w-auto"/>
                   <nav className='mt-4 lg:flex lg:justify-between items-center'>
                      <Link className='block text-center my-5 text-gray-500' to="/">??Ya Tienes una Cuenta? Inicia Sesi??n!</Link> 
                      <Link className='block text-center my-5 text-gray-500' to="/registrar">??No tienes una cuenta? Reg??strate!</Link> 
                   </nav>
              </form>
        </div>
    </>
  )
}

export default OlvidePassword