import { useContext } from 'react'
import { LinkContext } from '../../contexts/LinkContext'
import './Link.scss'

function Link() {

    const teste = useContext(LinkContext)


    const allLinks = teste[0].map(item => item)

    return (
        <div className="link">
            <span className="link__complete">{allLinks[0] ? allLinks[0].original : "loading"}</span>
            <div className="link__line"></div>
            <span className="link__short">{allLinks[0] ? allLinks[0].short : "loading"}</span>
            <button className="link__button">Copy</button>
        </div>
    )
}

export default Link