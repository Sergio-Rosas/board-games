/* npm run dev */
import Card from "./Card.jsx";

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

function App() {
    return (
        <>
            <Card game={tempInfo}/>
        </>
    );
}

export default App;
