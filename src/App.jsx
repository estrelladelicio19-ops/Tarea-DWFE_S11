import { useState } from 'react';
import './App.css'
import CajaBusqueda from './components/CajaBusqueda';
import TarjetaProducto from './components/TarjetaProducto';
import Header from './components/HeaderPagina';
import Footer from './components/FooterPagina';


const DATOS_CATALOGO = [
  { id: 1, nombre: 'Pan francés', descripcion: 'Pan tradicional, crujiente por fuera y suave por dentro.', precio: 'S/ 0.50' },
  { id: 2, nombre: 'Croissant', descripcion: 'Delicioso pan de hojaldre con mantequilla.', precio: 'S/ 3.50' },
  { id: 3, nombre: 'Dona glaseada', descripcion: 'Suave dona cubierta de un dulce glaseado.', precio: 'S/ 4.00' },
  { id: 4, nombre: 'Torta de chocolate', descripcion: 'Bizcocho húmedo con una deliciosa crema de chocolate.', precio: 'S/ 8.00' },
  { id: 5, nombre: 'Galletas artesanales', descripcion: 'Galletas crocantes con chispas de chocolate.', precio: 'S/ 2.50' },
  { id: 6, nombre: 'Muffin de vainilla', descripcion: 'Esponjoso muffin con un delicado sabor a vainilla.', precio: 'S/ 4.50' }
];
 const nombre = "Cafeteria- Delicia"
  const numero = "914 238 284"

 function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
 
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  
  const productosFiltrados = DATOS_CATALOGO.filter((producto) =>
    producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <>
    <Header></Header>
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#4a2c11' }}>Nuestro catálogo</h1>
      <p style={{ textAlign: 'center', color: '#777' }}>Descubre nuestras deliciosas variedades</p>

    
      <CajaBusqueda 
        terminoBusqueda={terminoBusqueda} 
        alCambiarBusqueda={setTerminoBusqueda} 
      />

      
      {productoSeleccionado && (
        <div style={{
          backgroundColor: '#e8f5e9',
          color: '#2e7d32',
          padding: '12px',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '0 auto 20px auto',
          textAlign: 'center'
        }}>
          Has seleccionado: <strong>{productoSeleccionado.nombre}</strong>
        </div>
      )}

    
      {productosFiltrados.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {productosFiltrados.map((producto) => (
            <TarjetaProducto 
              key={producto.id} 
              producto={producto} 
              alSeleccionar={setProductoSeleccionado} 
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', margin: '40px 0', color: '#888' }}>
          <h3>No se encontraron resultados para "{terminoBusqueda}"</h3>
          <p>Intenta buscando con otro término.</p>
        </div>
      )}
    </div>
    <Footer nombre={nombre} numero={numero}></Footer>
    </>
  );
}
export default App