import './Link.scss'
import { useState } from 'react'

function Link(props) {

    const [isCopied, setIsCopied] = useState(false)

    const copyText = async () => {
        const text = await navigator.clipboard.writeText(props.short)
        setIsCopied(true)
        return text
    }

    return (
        <div className="link">
            <span className="link__complete">{props.original}</span>
            <div className="link__line"></div>
            <span className="link__short">{props.short}</span>
            {
                isCopied
                    ? <button className="link__button link__button--copied">Copied!</button>
                    : <button className="link__button" onClick={copyText} >Copy</button>
            }

        </div>
    )
}

export default Link