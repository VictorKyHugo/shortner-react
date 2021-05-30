import { useContext } from 'react'
import { LinkContext } from '../../contexts/LinkContext'

import './Shorten.scss'
import background from '../../assets/images/bg-shorten-mobile.svg'

function Shorten() {

    const { fetchData, setLinkToShort, linkToShort } = useContext(LinkContext)


    const inputHandler = (e) => {
        setLinkToShort(e.target.value)
    }

    const teste = async (e) => {
        e.preventDefault()
        fetchData()
    }

    return (
        <div className="shorten">
            <form className="shorten__form">
                <input className="shorten__form__input" placeholder="Shorten a link here..." value={linkToShort} onChange={inputHandler} />
                <button className="shorten__form__button" onClick={teste}> Shorten it!</button>
            </form>
            <div className="shorten__background">
                <img src={background} alt="background" />
            </div>
        </div>
    )
}

export default Shorten