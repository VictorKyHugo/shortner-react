import './Boost.scss'
import background from '../../assets/images/bg-boost-mobile.svg'

function Boost() {
    return (
        <div className="boost">
            <img className="boost_background" src={background} alt="Background" />
            <div className="boost__content">
                <h2 className="boost__content__title"> Boost your links today</h2>
                <button className="boost__content__button">Get Started</button>
            </div>
        </div>
    )
}

export default Boost