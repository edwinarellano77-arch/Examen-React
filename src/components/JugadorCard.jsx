import { useState } from "react";
import "./JugadorCard.css";

function JugadorCard({ jugador }) {
    const [imgError, setImgError] = useState(false);
    const esGenerica =
        !jugador.photoUrl || jugador.photoUrl.includes("generic");
    const mostrarImagen = jugador.photoUrl && !esGenerica && !imgError;
    const iniciales = jugador.name
        .split(" ")
        .map((parte) => parte[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <article className="jugador-card">
            <div className="jugador-card-numero">#{jugador.number}</div>

            {mostrarImagen ? (
                <img
                    className="jugador-card-imagen"
                    src={jugador.photoUrl}
                    alt={`Foto de ${jugador.name}`}
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="jugador-card-avatar">{iniciales}</div>
            )}

            <h2>{jugador.name}</h2>

            <div className="jugador-posicion">
                <span className="jugador-tag">{jugador.position}</span>
            </div>

            <div className="jugador-datos">
                <p><strong>Selección:</strong> {jugador.nationalTeam}</p>
                <p><strong>Club:</strong> {jugador.currentClub}</p>
                <p><strong>Dorsal:</strong> {jugador.number}</p>
                <p><strong>Edad:</strong> {jugador.age} años</p>
                <p><strong>Nacimiento:</strong> {jugador.birthDate}</p>
            </div>
        </article>
    );
}

export default JugadorCard;