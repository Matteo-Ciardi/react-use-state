import './CardContainer.css'
import languages from '../../../assets/languages'
import DetailsCard from './card/DetailsCard'

const CardContainer = ({ activeLangButton }) => {

    const activeCard = languages.find(card => card.id === activeLangButton);

    return (
        <>
            <div className='card-container'>
                {activeCard
                    ? <DetailsCard cardProp={activeCard} />
                    : <p>Nessun linguaggio selezionato</p>
                }
            </div>
        </>
    )
}

export default CardContainer