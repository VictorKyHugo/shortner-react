import { createContext, useState } from 'react'

export const LinkContext = createContext()

export const LinkProvider = ({ children }) => {

    const [linkToShort, setLinkToShort] = useState("")
    const [links, setLinks] = useState([])

    const fetchData = async () => {

        const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${linkToShort}`)
        const dataJson = await data.json()
        setLinks(prev => {
            return (
                [...prev, {
                    original: dataJson.result.original_link,
                    short: dataJson.result.full_short_link,
                    code: dataJson.result.code
                }]
            )
        })
    }





    return (
        <LinkContext.Provider value={{ links, setLinkToShort, linkToShort, fetchData }}>
            {children}
        </LinkContext.Provider>
    )
}