import './CardContainer.css'
import languages from '../../../assets/languages'
import DetailsCard from './card/DetailsCard'

const CardContainer = () => {
    return (
        <>
            <div className='card-container'>
                {
                    languages.map(card => (
                        <DetailsCard
                            key={card.id}
                            cardProp={card}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default CardContainer