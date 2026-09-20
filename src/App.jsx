import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ProductCard from './components/ProductCard/ProductCard'

const servicios = [
  { id: 1, nombre: 'Lavado Premium', precio: 8000, imagen: 'https://via.placeholder.com/300x200?text=Lavado+Premium', stock: 6 },
  { id: 2, nombre: 'Limpieza de Interior', precio: 6500, imagen: 'https://via.placeholder.com/300x200?text=Limpieza+Interior', stock: 3 },
  { id: 3, nombre: 'Pulido  ', precio: 4500, imagen: 'https://via.placeholder.com/300x200?text=Pulido+Opticas', stock: 0 },
]

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto my-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Servicios</h2>
        <div className="flex flex-wrap gap-4">
          {servicios.map((servicio) => (
            <ProductCard
              key={servicio.id}
              nombre={servicio.nombre}
              precio={servicio.precio}
              imagen={servicio.imagen}
              stock={servicio.stock}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}