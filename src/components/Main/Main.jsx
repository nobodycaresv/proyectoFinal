import estilos from './Main.module.css';

export default function Presentacion() {
  const handleServicios = () => {
    alert('Botón 1 presionado');
  };

  const handleContactanos = () => {
    alert('Botón 2 presionado');
  };

  return (
    <div className={estilos.contenedor}>
      <div className={estilos.card}>
        <h1 className={estilos.titulo}>ROSARIO ESTÉTICA VEHICULAR</h1>
        <p className={estilos.descripcion}>
        Somos una empresa que se dedica exclusivamente al detallado y estética automotriz.
        Solo tienes que traer tu vehiculo y nosotros nos encargamos del resto.
        </p>
        <div className={estilos.botones}> 
          <button className={`${estilos.btn} ${estilos.btnPrimario}`} onClick={handleServicios}>Nuestros Servicios</button>
          <button className={`${estilos.btn} ${estilos.btnSecundario}`} onClick={handleContactanos}>Contactanos</button>
        </div>
      </div>
    </div>
  );
}