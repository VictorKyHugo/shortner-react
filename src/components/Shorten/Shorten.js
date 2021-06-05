import { useContext, useState } from 'react'
import { LinkContext } from '../../contexts/LinkContext'

import './Shorten.scss'
import backgroundMobile from '../../assets/images/bg-shorten-mobile.svg'
import backgroundDesktop from '../../assets/images/bg-shorten-desktop.svg'
import Loading from '../Loading/Loading'

function Shorten() {

    const { fetchData, setLinkToShort, linkToShort, isLoading, setIsLoading } = useContext(LinkContext)
    const [isValid, setIsValid] = useState(true)

    const inputHandler = (e) => {
        setLinkToShort(e.target.value)
    }

    const buttonHandler = (e) => {
        e.preventDefault()
        if (linkToShort === "") {
            setIsValid(false)
        } else {
            setIsLoading(true)
            setIsValid(true)
            fetchData()
        }

    }

    return (
        <div className="shorten">
            <form className="shorten__form">
                <input className="shorten__form__input" style={isValid ? {} : { marginBottom: 0, border: "2px solid rgb(240, 65, 65)" }} placeholder="Shorten a link here..." value={linkToShort} onChange={inputHandler} />
                <span style={isValid ? {} : { display: "block" }}>Please insert a valid link</span>
                <button className="shorten__form__button" style={isValid ? {} : { marginTop: "5px" }} onClick={buttonHandler}>{isLoading ? <Loading /> : "Shorten it!"}</button>
            </form>
            <div className="shorten__background">
                <img src={backgroundMobile} className="shorten__background--mobile" alt="background" />
                <img src={backgroundDesktop} className="shorten__background--desktop" alt="background" />
            </div>
        </div >
    )
}

export default Shorten