/* npm run dev */

const tempInfo = {
    name: "Splendor",
    price: 22.61,
    copPrice: 135_000,
    language: "No importa",
    cover: "https://elmundodelmeeple.com/wp-content/uploads/2022/09/splendor-nuevo.jpg",
    rulesEng: "https://www.youtube.com/embed/rue8-jvbc9I",
    rulesSpa: "https://www.youtube.com/embed/5enAMA8zq3E",
    bggUrl: "https://boardgamegeek.com/boardgame/148228/splendor",
    playersNumber: "2-4",
    synopsis:
        "En este juego de estrategia táctica, asumes el rol de un rico mercader del Renacimiento. Utilizas fichas de gemas para adquirir cartas de desarrollo que representan minas, barcos y artesanos; estas cartas te otorgan bonificaciones permanentes que reducen el coste de futuras compras y te permiten atraer la atención de los nobles, quienes otorgan los puntos de victoria decisivos.",
    genres: "Gestión de recursos, Colección de sets y Motor de cartas.",
};

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
} = tempInfo;

function App() {
    return (
        <>
            <article className="card">
                <h2 className="title">{name}</h2>
                <div className="card__pic-section">
                    <img
                        src={cover}
                        alt={`Portada de la caja del juego ${name}`}
                    />
                    <div>
                        <span className="card__small-section">
                            <img
                                className="icon"
                                src="./src/assets/group-users.png"
                                alt="Group of people icon"
                            />
                            {playersNumber}
                        </span>
                        <div className="card__small-section">
                            {/*<p>Precio 💵:</p>*/}
                            <p>
                                💰 🇺🇸 $
                                {new Intl.NumberFormat("es").format(price)}
                            </p>
                            <p>
                                💰 🇨🇴 $
                                {new Intl.NumberFormat("es").format(copPrice)}
                            </p>
                        </div>
                        <div className="card__small-section">
                            {/*<p>Idioma sugerido 👅:</p>*/}
                            <p>
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
                <p className="synopsis">{synopsis}</p>
                <p>Géneros:</p>
                <p>{genres}</p>
            </article>
            <p>Instrucciones 📖:</p>
            <p>🇬🇧 Inglés</p>
            <iframe
                width="300"
                height="170"
                src={rulesEng}
                title={`Video con las reglas de ${name} en inglés`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
            <p>🇪🇸 Español</p>
            <iframe
                width="300"
                height="170"
                src={rulesSpa}
                title={`Video con las reglas de ${name} en inglés`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
        </>
    );
}

export default App;
