import './Card.scss'
import icon from '../../../assets/images/icon-detailed-records.svg'

function Card(props) {
    return (
        <div className="card">
            <div className="card__icon">
                <img src={icon} alt="icon" />
            </div>
            <h3 className="card__title">Brand recognition</h3>
            <p className="card__text"> Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
</p>
        </div>
    )
}

export default Card