import { useContext } from 'react'
import { LinkContext } from '../../contexts/LinkContext'
import './Link.scss'

function Link() {

    const teste = useContext(LinkContext)

    return (
        <div className="link">
            <span className="link__complete">{teste}</span>
            <div className="link__line"></div>
            <span className="link__short">https://rel.ink/k4l7sb</span>
            <button className="link__button">Copy</button>
        </div>
    )
}

export default Link