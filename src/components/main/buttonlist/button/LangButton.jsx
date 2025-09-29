import './LangButton.css'

const LangButton = ({ itemProp, onToggle, isActive }) => {

    const { title } = itemProp

    return (
        <>
            <button
                onClick={onToggle}
                className={`lang-button ${isActive ? "active" : ""}`}>
                {title}
            </button>
        </>
    )
}

export default LangButton