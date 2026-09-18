import logo from '../../assets/logo.jpg';
import estilos from './Navbar.module.css';

function Navbar({ setVista }) {
  const navegar = (e, vista) => {
    e.preventDefault();
    setVista(vista);
  };

  return (
    <header className={estilos.barra}>
      <img src={logo} alt="Logo Rosario Estética Vehicular" className={estilos.logo} />
      <h1 className={estilos.titulo}>Rosario Estética Vehicular</h1>
      <nav className={estilos.menu}>
        <a href="#" onClick={(e) => navegar(e, 'inicio')}>Inicio</a>
        <a href="#" onClick={(e) => navegar(e, 'servicios')}>Servicios</a>
        <a href="#" onClick={(e) => navegar(e, 'turnos')}>Turnos</a>
        <a href="#" onClick={(e) => navegar(e, 'login')}>Iniciar sesión</a>
      </nav>
    </header>
  );
}

export default Navbar;
