'use client';

import { useRouter } from 'next/navigation';

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
                    <h2 onClick={() => irAPagina('/biblioteca')}>Biblioteca</h2>
                    <div>
                        <p onClick={() => irAPagina('/biblioteca/buscador')}>Buscador</p>
                        <p onClick={() => irAPagina('/biblioteca/indices')}>Índices</p>
                        <p onClick={() => irAPagina('/biblioteca/estadisticas')}>Estadísticas</p>
                    </div>
                </div>
            </div>
            <p><a href="https://github.com/EscrituraYLectura">GitHub</a></p>
        </main>
    );
}
