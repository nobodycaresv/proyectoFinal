import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Turnos from './components/Turnos/turnos'

export default function App() {
  const [vista, setVista] = useState('inicio');

  return (
    <>
      <Navbar setVista={setVista} />

      {/* Renderiza según la opción seleccionada */}
      {vista === 'inicio' && <Main />}
      {vista === 'servicios' && <div style={{ padding: '50px', textAlign: 'center' }}><h2>Sección Servicios (Próximamente)</h2></div>}
      {vista === 'turnos' && <Turnos />}
      {vista === 'login' && <div style={{ padding: '50px', textAlign: 'center' }}><h2>Iniciar Sesión (Próximamente)</h2></div>}

      <Footer />
    </>
  )
}