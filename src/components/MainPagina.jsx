function Main() {
console.log ()
    
    return (
        <>

        <main id="inicio">

        <section class="presentacion">
            <div class="presentacion-texto">
                <h2>Hecho con amor, horneado cada día</h2>
                <p>
                    Disfruta del auténtico sabor del pan artesanal,
                    preparado con ingredientes frescos y de calidad.
                </p>
                <a href="#productos" class="boton">Ver productos</a>
            </div>

        </section>

        <section id="productos" class="productos">
            <h2>Nuestro catálogo</h2>
            <p class="subtitulo">Descubre nuestras deliciosas variedades</p>

            <div class="categorias">
                <span>Todos</span>
                <span>Panes</span>
                <span>Pasteles</span>
                <span>Postres</span>
            </div>

            <div class="galeria">

                <article class="producto">
    
                    <div class="producto-info">
                        <h3>Pan francés</h3>
                        <p>Pan tradicional, crujiente por fuera y suave por dentro.</p>
                        <div class="precio">
                            <strong>S/ 0.50</strong>
                            <button type="button">Seleccionar</button>
                        </div>
                    </div>
                </article>

                <article class="producto">
                
                    <div class="producto-info">
                        <h3>Croissant</h3>
                        <p>Delicioso pan de hojaldre con mantequilla.</p>
                        <div class="precio">
                            <strong>S/ 3.50</strong>
                            <button type="button">Seleccionar</button>
                        </div>
                    </div>
                </article>

                <article class="producto">
    
                    <div class="producto-info">
                        <h3>Dona glaseada</h3>
                        <p>Suave dona cubierta de un dulce glaseado.</p>
                        <div class="precio">
                            <strong>S/ 4.00</strong>
                            <button type="button">Seleccionar</button>
                        </div>
                    </div>
                </article>

                <article class="producto">
            
                    <div class="producto-info">
                        <h3>Torta de chocolate</h3>
                        <p>Bizcocho húmedo con una deliciosa crema de chocolate.</p>
                        <div class="precio">
                            <strong>S/ 8.00</strong>
                            <button type="button">Seleccionar</button>
                        </div>
                    </div>
                </article>

                <article class="producto">
                    <div class="producto-info">
                        <h3>Galletas artesanales</h3>
                        <p>Galletas crocantes con chispas de chocolate.</p>
                        <div class="precio">
                            <strong>S/ 2.50</strong>
                            <button type="button">Seleccionar</button>
                        </div>
                    </div>
                </article>

                <article class="producto">
                    <div class="producto-info">
                        <h3>Muffin de vainilla</h3>
                        <p>Esponjoso muffin con un delicado sabor a vainilla.</p>
                        <div class="precio">
                            <strong>S/ 4.50</strong>
                            <button type="button">Seleccionar</button>
                        </div>
                    </div>
                </article>

            </div>
        </section>

        <section id="nosotros" class="nosotros">
            <h2>Elaboramos con pasión</h2>
            <p>
                En Panadería "Delicia" creemos que cada producto
                merece ingredientes de calidad, dedicación y mucho amor.
                Nuestro compromiso es ofrecerte frescura en cada bocado.
            </p>
        </section>

    </main>

        </>
    )
}

export default Main