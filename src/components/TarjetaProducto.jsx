function TarjetaProducto({ producto, alSeleccionar }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <h3 style={{ color: '#4a2c11', marginTop: 0 }}>{producto.nombre}</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>{producto.descripcion}</p>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '15px'
      }}>
        <span style={{ fontWeight: 'bold', color: '#4a2c11' }}>{producto.precio}</span>
        <button
          onClick={() => alSeleccionar(producto)}
          style={{
            backgroundColor: '#6b3e26',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Seleccionar
        </button>
      </div>
    </div>
  );
}
export default  TarjetaProducto