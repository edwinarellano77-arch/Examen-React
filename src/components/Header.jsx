import "./Header.css";

function Header() {
    return (
        <header className="header">
            <span className="header-icono">🏆</span>
            <h1>Catálogo de Jugadores</h1>
            <p>
                Explora los jugadores consumiendo la API con fetch,
                useState y useEffect. Aquí encontrarás su foto, club,
                selección, posición y edad.
            </p>
        </header>
    );
}

export default Header;