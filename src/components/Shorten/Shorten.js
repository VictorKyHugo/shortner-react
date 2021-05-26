import { useState } from 'react'

import './Shorten.scss'
import background from '../../assets/images/bg-shorten-mobile.svg'

function Shorten() {

    const [link, setLink] = useState('')

    const inputHandler = (e) => {
        setLink(e.target.value)
    }

    const teste = (e) => {
        e.preventDefault()
        alert(link)
    }

    return (
        <div className="shorten">
            <form className="shorten__form">
                <input className="shorten__form__input" placeholder="Shorten a link here..." value={link} onChange={inputHandler} />
                <button className="shorten__form__button" onClick={teste}> Shorten it!</button>
            </form>
            <div className="shorten__background">
                <img src={background} alt="background" />
            </div>

        </div>
    )
}

export default Shorten