import './Boost.scss'
import backgroundMobile from '../../assets/images/bg-boost-mobile.svg'
import backgroundDesktop from '../../assets/images/bg-boost-desktop.svg'

function Boost() {
    return (
        <div className="boost">
            <img className="boost__background--mobile" src={backgroundMobile} alt="Background" />
            <img className="boost__background--desktop" src={backgroundDesktop} alt="Background" />
            <div className="boost__content">
                <h2 className="boost__content__title"> Boost your links today</h2>
                <button className="boost__content__button">Get Started</button>
            </div>
        </div>
    )
}

export default Boost