/* npm run dev */
// TODO Large image with click.
// TODO Button to go up.
// TODO Sort direction descending.
import { useState } from "react";

import Cards from "./Cards.jsx";
import Header from "./Header.jsx";

function App() {
    const options = ["Ordenar por:", "Alfabético", "Precio Dólares", "Precio Pesos", "Máximo # Jugadores", "Mínimo # Jugadores",]

    const [selected, setSelected] = useState(options[1])

    return (
        <>
            <Header optionsList={options} setOption={setSelected} selectedOption={selected}/>
            <Cards order={selected}/>
        </>
    );
}

export default App;
