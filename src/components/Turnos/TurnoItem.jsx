
import estilos from './Turnos.module.css';

export default function TurnoItem({ turno }) {
  return (
    <div className={estilos.tarjeta}>
      <h3 className={estilos.nombreCliente}>{turno.cliente}</h3>
      <p className={estilos.campo}><strong>Servicio:</strong> {turno.servicio}</p>
      <p className={estilos.campo}><strong>Auto:</strong> {turno.auto} </p>
      <p className={estilos.campo}><strong>Patente:</strong> {turno.patente} </p>
      <p className={estilos.campo}>
        <strong>Precio:</strong> {turno.precio !== null ? `$${turno.precio}` : 'Sin cotizar'}
      </p>
      <p className={estilos.campo}><strong>Estado:</strong> {turno.estado}</p>
    </div>
  );
}