import {Link} from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav className="flex gap-8">
        <Link
            to="/admin/perfil"
            className="font-bold uppercase text-sky-300">
            Perfil
        </Link>
        <Link
            to="/admin/cambiar-password"
            className="font-bold uppercase text-sky-300">
            Cambiar Password
        </Link>
    </nav>
  )
}

export default AdminNav
