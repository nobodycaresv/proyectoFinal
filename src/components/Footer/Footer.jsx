import estilos from './Footer.module.css';

function Footer() {
    return (
    <footer className={estilos.pie}>
        <p>Rosario Estética Vehicular — Práctica Profesional 2</p>
        <p>Equipo: Vazquez, Tamer, Medina, Perez, Carrasco y Tapia</p>
        <p>Instituto Superior Del Milagro N.º 8207 — 2026</p>
    </footer>
    );
}

export default Footer;