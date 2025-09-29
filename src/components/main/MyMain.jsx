import { useState } from 'react';
import './MyMain.css'
import ButtonList from './buttonlist/ButtonList'
import CardContainer from './cardcontainer/CardContainer'

const MyMain = () => {

    const [activeLangButton, setActiveLangButton] = useState(null);

    return (
        <>
            <div className="main-card">
                <h1>LEARN WEB DEVELOPMENT</h1>
                <ButtonList
                    activeLangButton={activeLangButton}
                    setActiveLangButton={setActiveLangButton} />
                <CardContainer
                    activeLangButton={activeLangButton} />
            </div>
        </>
    )
}

export default MyMain