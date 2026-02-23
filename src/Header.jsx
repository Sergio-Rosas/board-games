import { useState } from "react";
import FloatingMenu from "./FloatingMenu.jsx";

export default function Header({optionsList, setOption, selectedOption}) {
    const [visible, setVisible] = useState(false);

    return (
        <header>
            <h1>Juegos de Mesa</h1>
            <div className="menu">
                <img src="/menu.svg" alt="Menu icon" onClick={() => setVisible(!visible)}/>
                {!visible && <FloatingMenu optionsList={optionsList} setOption={setOption} selectedOption={selectedOption} onSetVisibility={setVisible}/>}
            </div>
        </header>
    );
}
