export default function FloatingMenu({optionsList, setOption, selectedOption, onSetVisibility}) {

    function selection(option) {
        if (option === optionsList[0]) {
            return
        }

        setOption(option);
        onSetVisibility((visibility) => !visibility);
    }

    return <ul className="menu__pop-up">
        {optionsList.map((option) => <li className={`menu__pop-up__option ${selectedOption === option ? "menu__pop-up__option--selected" : ""}`} key={option} onClick={() => selection(option)}>{option}</li>)}
    </ul>
}