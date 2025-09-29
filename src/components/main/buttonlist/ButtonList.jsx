import './ButtonList.css'
import languages from '../../../assets/languages'
import LangButton from './button/LangButton'

const ButtonList = ({ activeLangButton, setActiveLangButton }) => {
    return (
        <>
            <div className='button-list'>
                {
                    languages.map(item => (
                        <LangButton
                            key={item.id}
                            itemProp={item}
                            isActive={activeLangButton === item.id}
                            onToggle={() => setActiveLangButton(item.id)}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ButtonList