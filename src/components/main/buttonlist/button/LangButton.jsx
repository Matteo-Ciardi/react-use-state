import './LangButton.css'

const LangButton = (props) => {

    const { title } = props.itemProp

    return (
        <>
            <button>
                {title}
            </button>
        </>
    )
}

export default LangButton