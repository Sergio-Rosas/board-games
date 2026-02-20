import { useState } from "react";

export default function Card({ game }) {
    const {
        name,
        price,
        copPrice,
        language,
        cover,
        rulesEng,
        rulesSpa,
        bggUrl,
        playersNumber,
        synopsis,
        genres,
    } = game;

    const [isTurned, setIsTurned] = useState(false);

    function turning() {
        setIsTurned((turn) => !turn);
    }

    return (
        <>
            <article className={`card ${isTurned ? "turn-around" : ""}`}>
                {!isTurned ? (
                    <>
                        <h2 className="title">{name}</h2>
                        <div className="card__pic-section">
                            <img
                                src={cover}
                                alt={`Portada de la caja del juego ${name}`}
                            />
                            <div className="card__info-section">
                                <span
                                    className="card__small-section small-fix"
                                    title="Número de jugadores"
                                >
                                    <img
                                        className="icon"
                                        src="/group-users.png"
                                        alt="Group of people icon"
                                    />
                                    {playersNumber}
                                </span>
                                <div className="card__small-section">
                                    <p title="Precio en dólares">
                                        💰 🇺🇸 $
                                        {new Intl.NumberFormat("es").format(
                                            price,
                                        )}
                                    </p>
                                    {copPrice !== "-" && (
                                        <p title="Precio en pesos">
                                            💰 🇨🇴 $
                                            {new Intl.NumberFormat("es").format(
                                                copPrice,
                                            )}
                                        </p>
                                    )}
                                </div>
                                <div className="card__small-section">
                                    {/*<p>Idioma sugerido 👅:</p>*/}
                                    <p title="Lenguaje recomendado">
                                        {language == "No importa"
                                            ? "🇬🇧 Inglés"
                                            : "🇪🇸 Español"}
                                    </p>
                                </div>
                                <a
                                    className="card__small-section"
                                    href={bggUrl}
                                    target="_blank"
                                >
                                    Más info 🔗
                                </a>
                            </div>
                        </div>
                        <div className="text">
                            <p>{synopsis}</p>
                            <div>
                                <p>Géneros:</p>
                                <p>{genres}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="card__info-section turn-around card__info-section--centered">
                        <h2 className="title title--centered">{name}</h2>
                        <div>
                            <iframe
                                src={rulesEng}
                                title={`Video con las reglas de ${name} en inglés`}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                            <p className="card__small-section">🇬🇧 Inglés</p>
                        </div>
                        {rulesSpa !== "-" && (
                            <div>
                                <iframe
                                    src={rulesSpa}
                                    title={`Video con las reglas de ${name} en inglés`}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                                <p className="card__small-section">
                                    🇪🇸 Español
                                </p>
                            </div>
                        )}
                    </div>
                )}
                <p
                    className={`text--align-right clickable ${isTurned ? "turn-around clickable--turned" : ""}`}
                    onClick={turning}
                >
                    {isTurned ? "Regresar" : "Instrucciones"} ↪️
                </p>
            </article>
        </>
    );
}
