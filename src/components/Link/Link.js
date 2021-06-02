import './Link.scss'

function Link(props) {

    return (
        <div className="link">
            <span className="link__complete">{props.original}</span>
            <div className="link__line"></div>
            <span className="link__short">{props.short}</span>
            <button className="link__button" >Copy</button>
        </div>
    )
}

export default Link