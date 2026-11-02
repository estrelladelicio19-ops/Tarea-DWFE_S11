 function CajaBusqueda({ terminoBusqueda, alCambiarBusqueda }) {
  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Buscar en el catálogo..."
        value={terminoBusqueda}
        onChange={(e) => alCambiarBusqueda(e.target.value)}
        style={{
          padding: '10px 16px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
    </div>
  );
}

export default  CajaBusqueda