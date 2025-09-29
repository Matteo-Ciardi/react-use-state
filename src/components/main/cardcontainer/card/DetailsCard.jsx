import './DetailsCard.css'

const DetailsCard = (props) => {

    const { title, description } = props.cardProp

    return (
        <>
            <div className='details-card'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}

export default DetailsCard