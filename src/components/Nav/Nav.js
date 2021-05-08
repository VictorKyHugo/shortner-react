import "./Nav.scss"
import logo from "../../assets/images/logo.svg"


function Nav() {
    return (
        <nav className="nav">
            <div className="nav__logo__container">
                <img alt="shortly" src={logo} className="nav__logo" />
            </div>
            <div className="nav__menu">
                <i className="fas fa-bars nav__menu__icon" onClick={() => { alert("teste") }}></i>
            </div>

        </nav>
    )
}

export default Nav