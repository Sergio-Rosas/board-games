import { useState, useEffect } from "react";
import Card from "./Card.jsx";

export default function Cards({order}) {
    const [boardGames, setBoardGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const conversor = {
        nombre: "name",
        precio_usd: "price",
        precio_cop: "copPrice",
        idioma: "language",
        foto: "cover",
        reglas_ing: "rulesEng",
        reglas_esp: "rulesSpa",
        bgg: "bggUrl",
        jugadores: "playersNumber",
        sinopsis: "synopsis",
        generos: "genres",
    };

    useEffect(() => {
        async function retrieveData() {
            setIsLoading(true);
            const data = await fetch("/database.tsv");
            const res = await data.text();

            const lines = res.trim().split("\r\n");
            const header = lines.at(0).split("\t");
            const rows = lines.splice(1).map((line) => line.split("\t"));

            const gamesObject = rows.map((info) => {
                return info.reduce((accum, cur, index) => {
                    return {
                        ...accum,
                        [conversor[header[index]]]: cur,
                    };
                }, {});
            });

            setBoardGames(gamesObject);
            setIsLoading(false);
        }
        retrieveData();
    }, []);

    function sorting(arr, way) {
        switch (way) {
            case "Alfabético":
                return arr.sort((a, b) => a.name.localeCompare(b.name));
            case "Precio Dólares":
                return arr.sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
            case "Precio Pesos":
                return arr.sort((a, b) => a.copPrice - b.copPrice || a.name.localeCompare(b.name));
            case "Máximo # Jugadores":
                return arr.sort((a, b) => Number(a.playersNumber.slice(2)) - Number(b.playersNumber.slice(2)) || Number(a.playersNumber.at(0)) - Number(b.playersNumber.at(0)) || a.name.localeCompare(b.name));
            case "Mínimo # Jugadores":
                return arr.sort((a, b) => Number(a.playersNumber.at(0)) - Number(b.playersNumber.at(0)) || Number(a.playersNumber.slice(2)) - Number(b.playersNumber.slice(2)) || a.name.localeCompare(b.name));
            default:
        }

    }

    return (
        <main>
            {!isLoading && sorting(boardGames, order) &&
                boardGames.map((game) => <Card game={game} key={game.cover} />)}
        </main>
    );
}
