import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Sitio web oficial del servidor Escritura y Lectura.</h1>
      <div>
        Páginas:
          <ul>
            <li><Link href="/biblioteca">Biblioteca</Link></li>
          </ul>
      </div>
    </main>
  );
}
