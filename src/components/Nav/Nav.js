import "./Nav.scss"
import logo from "../../assets/images/logo.svg"
import { useState } from 'react'



function Nav() {

    const [modalDisplay, setModalDisplay] = useState("none")

    const handleMenu = () => {
        modalDisplay === "none"
            ? setModalDisplay("flex")
            : setModalDisplay("none")
    }

    return (
        <div className="nav__container">
            <nav className="nav">
                <div className="nav__logo__container">
                    <img alt="shortly" src={logo} className="nav__logo" />
                </div>
                <div className="nav__menu">
                    <i className="fas fa-bars nav__menu__icon" onClick={handleMenu}></i>
                </div>
            </nav>
            <div className="modal__container" style={{ display: modalDisplay }}>
                <div className="modal">
                    <a href="https://google.com">Features</a>
                    <a href="https://google.com">Pricing</a>
                    <a href="https://google.com">Resources</a>
                    <div className="modal__hr"></div>
                    <a href="https://google.com">Login</a>
                    <a className="modal__signup" href="https://google.com">Sign Up</a>

                </div>
            </div>
        </div>
    )
}

export default Nav