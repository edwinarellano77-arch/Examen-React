import "./Navbar.css";

function Navbar({ totalJugadores }) {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-logo">
                    <span className="navbar-icono">⚽</span>
                    <span>Catálogo de Jugadores</span>
                </div>
                <span className="navbar-contador">
                    {totalJugadores > 0
                        ? `${totalJugadores} jugadores cargados`
                        : "Cargando..."}
                </span>
            </div>
        </nav>
    );
}

export default Navbar;