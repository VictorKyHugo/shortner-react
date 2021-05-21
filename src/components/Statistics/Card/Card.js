import './Card.scss'

function Card(props) {
    return (
        <div className="card">
            <div className="card__icon">
                <img src={props.icon} alt="icon" />
            </div>
            <h3 className="card__title">{props.title}</h3>
            <p className="card__text">{props.text}</p>
        </div>
    )
}

export default Card