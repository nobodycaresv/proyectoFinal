import logo from '../../assets/logo.jpg';
import estilos from './Navbar.module.css';

function Navbar() {
    return (
        <header className={estilos.barra}>
        <img src={logo} alt="Logo Rosario Estética Vehicular" className={estilos.logo} />
        <h1 className={estilos.titulo}>Rosario Estética Vehicular</h1>
        <nav className={estilos.menu}>
            <a href="#">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Turnos</a>
            <a href="#">Iniciar sesión</a>
        </nav>
        </header>
    );
}

export default Navbar;