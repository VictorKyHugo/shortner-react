import { useContext } from 'react'
import { LinkContext } from '../../contexts/LinkContext'

import './Shorten.scss'
import background from '../../assets/images/bg-shorten-mobile.svg'
import Loading from '../Loading/Loading'

function Shorten() {

    const { fetchData, setLinkToShort, linkToShort, isLoading, setIsLoading } = useContext(LinkContext)


    const inputHandler = (e) => {
        setLinkToShort(e.target.value)
    }

    const buttonHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        fetchData()
    }

    return (
        <div className="shorten">
            <form className="shorten__form">
                <input className="shorten__form__input" placeholder="Shorten a link here..." value={linkToShort} onChange={inputHandler} />
                <button className="shorten__form__button" onClick={buttonHandler}>{isLoading ? <Loading /> : "Shorten it!"}</button>
            </form>
            <div className="shorten__background">
                <img src={background} alt="background" />
            </div>
        </div>
    )
}

export default Shorten