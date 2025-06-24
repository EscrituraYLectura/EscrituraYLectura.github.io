'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <div id="barra-superior">
                <img
                src='./icon.png'
                alt='Logo de Escritura y Lectura'
                width={42}
                height={42}
                />
                <h1>Sitio web oficial del servidor Escritura y Lectura</h1>
            </div>
            <div id="contenedor-paginas">
                <div className="contenedor-subpaginas">
                    <Link className="contenedor-titulo" href="/biblioteca">Biblioteca</Link>
                    <div>
                        <Link className="contenedor-subtitulo" href="/biblioteca/buscador">Buscador</Link>
                        <Link className="contenedor-subtitulo" href="/biblioteca/indices">Índices</Link>
                        <Link className="contenedor-subtitulo" href="/biblioteca/estadisticas">Estadísticas</Link>
                    </div>
                </div>
            </div>
            <div id="barra-inferior">
                <p><a href="https://github.com/EscrituraYLectura">GitHub</a></p>
            </div>
        </main>
    );
}
