import { createContext } from 'react'

export const LinkContext = createContext()

export const LinkProvider = ({ children }) => {

    fetch('https://api.shrtco.de/v2/shorten?url=google.com')
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => { console.log(err) })


    return (
        <LinkContext.Provider value="TESTE">
            {children}
        </LinkContext.Provider>
    )
}