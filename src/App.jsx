import{BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import RutaProtregida from './layout/RutaProtregida'

import Login from './paginas/login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import NuevoPassword from './paginas/NuevoPassword'
import AdministrarPacientes from'./paginas/AdministrarPacientes'
import EditarPerfil from'./paginas/EditarPerfil'
import CambiarPassword from'./paginas/CambiarPassword'

import { AuthProvider } from './context/AuthProvider'
import { PacientesProvider } from './context/PacientesProvider'


function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
                  <PacientesProvider>
                         <Routes>
                              <Route path="/" element={<AuthLayout/>}>
                                    <Route index element={<Login/>} />
                                    <Route path="Registrar" element={<Registrar/>} />
                                    <Route path="Olvide-Password" element={<OlvidePassword/>} />
                                    <Route path="Olvide-Password/:token" element={<NuevoPassword/>} />
                                    <Route path="confirmar/:id" element={<ConfirmarCuenta/>} />
                              </Route>
                              <Route path="/admin" element={<RutaProtregida/>}>
                                    <Route index element={<AdministrarPacientes/>}/>
                                    <Route path="perfil" element={<EditarPerfil/>}/>
                                    <Route path="cambiar-password" element={<CambiarPassword/>}/>
                              </Route>
                        </Routes>
                  </PacientesProvider>   
            </AuthProvider>
      </BrowserRouter>
  )
}

export default App
