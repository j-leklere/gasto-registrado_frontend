import Link from "next/link";
import "../../sass/main.scss";

export default function Home() {
  return (
    <main className="main">
      <p>Proximamente:</p>
      <h2>Login y Registro</h2>
      <p className="hola">Estamos trabajando en ello...</p>
      <Link href="/board" className="link">
        Board
      </Link>
    </main>
  );
}
