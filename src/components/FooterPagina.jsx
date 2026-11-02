function Footer(props) {
    console.log(props)
    return (
        <footer id="contacto">

        <h2>{props.nombre}</h2>
        <p>Elaborando momentos deliciosos para compartir.</p>
        <p>Contacto: {props.numero}</p>
        <p>© 2026 Panadería Delicia - Todos los derechos reservados.</p>

        </footer>
    )
}

export default Footer