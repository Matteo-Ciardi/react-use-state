import './ButtonList.css'
import languages from '../../../assets/languages'
import LangButton from './button/LangButton'

const ButtonList = () => {
    return (
        <>
            <div className='button-list'>
                {
                    languages.map(item => (
                        <LangButton
                            key={item.id}
                            itemProp={item}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ButtonList