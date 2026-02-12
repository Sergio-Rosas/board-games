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
            <h2>{name}</h2>
            <img src={cover} alt={`Portada de la caja del juego ${name}`} />
            <div>
                <p>Precio 💵:</p>
                <p>🇺🇸 ${new Intl.NumberFormat("es").format(price)}</p>
                <p>🇨🇴 ${new Intl.NumberFormat("es").format(copPrice)}</p>
            </div>
            <div>
                <p>Indioma recomendado 👅:</p>
                <p>{language == "No importa" ? "🇬🇧 Inglés" : "🇪🇸 Español"}</p>
            </div>
            <iframe
                width="300"
                height="170"
                src={rulesEng}
                title={`Video con las reglas de ${name} en inglés`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
            <div>{rulesSpa}</div>
            <a href={bggUrl}>Más información 🔗</a>
            {/* Use an illustration for players number */}
            <span>{playersNumber}</span>
            <p>{synopsis}</p>
            <p>{genres}</p>
        </>
    );
}

export default App;
