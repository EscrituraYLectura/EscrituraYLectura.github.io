'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
    const router = useRouter();

    const irAPagina = (pagina: string) => {
        router.push(pagina);
    }

    return (
        <main>
            <h1>Sitio web oficial del servidor Escritura y Lectura</h1>
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
            <p><a href="https://github.com/EscrituraYLectura">GitHub</a></p>
        </main>
    );
}
