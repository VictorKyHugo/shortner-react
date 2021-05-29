import { createContext, useEffect, useState } from 'react'

export const LinkContext = createContext()

export const LinkProvider = ({ children }) => {

    const [links, setLinks] = useState([])
    const [linkToShort, setLinkToShort] = useState("google.com")


    useEffect(() => {
        try {
            fetch(`https://api.shrtco.de/v2/shorten?url=${linkToShort}`)
                .then((res) => res.json())
                .then((data) => setLinks(prev => {
                    return (
                        [...prev, {
                            original: data.result.original_link,
                            short: data.result.full_short_link
                        }]
                    )
                }))
        } catch {
            console.log("espera vagabundo")
        }


    }, [linkToShort])




    return (
        <LinkContext.Provider value={[links, setLinks, setLinkToShort]}>
            {children}
        </LinkContext.Provider>
    )
}