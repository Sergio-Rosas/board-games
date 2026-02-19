import { useState, useEffect } from "react";
import Card from "./Card.jsx";

export default function Cards() {
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
            const data = await fetch("../src/database.tsv");
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

    return (
        <main>
            {!isLoading && boardGames.map((game) => (
                <Card game={game} key={game.cover}/>
            ))}
        </main>
    );
}
