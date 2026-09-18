import { useState } from 'react';
import { turnosIniciales } from './turnosData';
import TurnoItem from './TurnoItem';
import estilos from './Turnos.module.css';

export default function Turnos() {
  const [turnos] = useState(turnosIniciales);
  const [filtro, setFiltro] = useState('Todos');
  const [orden, setOrden] = useState('asc');
  const [estadoPantalla, setEstadoPantalla] = useState('exito');

  const turnosFiltrados = turnos
    .filter(t => filtro === 'Todos' ? true : t.estado === filtro)
    .sort((a, b) => {
      const precioA = a.precio || 0;
      const precioB = b.precio || 0;
      return orden === 'asc' ? precioA - precioB : precioB - precioA;
    });

  return (
    <div className={estilos.contenedor}>
      <h2 className={estilos.titulo}>Panel de Administración - Control de Turnos</h2>

      <div className={estilos.barraAcciones}>
        <button className={estilos.botonSimulacion} onClick={() => setEstadoPantalla('cargando')}>Simular Cargando</button>
        <button className={estilos.botonSimulacion} onClick={() => setEstadoPantalla('exito')}>Simular Con Datos</button>
        <button className={estilos.botonSimulacion} onClick={() => setEstadoPantalla('vacio')}>Simular Vacío</button>
        <button className={estilos.botonSimulacion} onClick={() => setEstadoPantalla('error')}>Simular Error</button>
      </div>

      {estadoPantalla === 'cargando' && <p className={estilos.mensajeEstado}>Cargando pedidos del lavadero...</p>}
      {estadoPantalla === 'error' && <p className={estilos.mensajeError}>Ocurrió un error al cargar los turnos.</p>}
      {estadoPantalla === 'vacio' && <p className={estilos.mensajeEstado}>No hay turnos registrados en el sistema.</p>}

      {estadoPantalla === 'exito' && (
        <>
          <div className={estilos.barraAcciones}>
            <label className={estilos.etiqueta}>
              Filtrar por estado:
              <select className={estilos.desplegable} value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Pendiente">Pendiente</option>
                <option value="En proceso">En proceso</option>
                <option value="Listo">Listo</option>
                <option value="Entregado">Entregado</option>
              </select>
            </label>

            <label className={estilos.etiqueta}>
              Orden por precio:
              <select className={estilos.desplegable} value={orden} onChange={(e) => setOrden(e.target.value)}>
                <option value="asc">Menor a Mayor</option>
                <option value="desc">Mayor a Menor</option>
              </select>
            </label>
          </div>

          {turnosFiltrados.length === 0 ? (
            <p className={estilos.mensajeEstado}>No se encontraron turnos que coincidan con el filtro seleccionado.</p>
          ) : (
            <div className={estilos.grilla}>
              {turnosFiltrados.map((item) => (
                <TurnoItem key={item.id} turno={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}