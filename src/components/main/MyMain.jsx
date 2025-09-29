import './MyMain.css'
import ButtonList from './buttonlist/ButtonList'
import CardContainer from './cardcontainer/CardContainer'

const MyMain = () => {
    return (
        <>
            <div className="main-card">
                <h1>LEARN WEB DEVELOPMENT</h1>
                <ButtonList />
                <CardContainer />
            </div>
        </>
    )
}

export default MyMain