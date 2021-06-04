import Shorten from "../Shorten/Shorten"
import background from "../../assets/images/illustration-working.svg"
import "./Main.scss"

function Main() {
    return (
        <div className="main">
            <div className="main__background">
                <img src={background} alt="background" />
            </div>
            <div className="main__content">
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights
                on how your links are performing.</p>
                <button type="button" className="main__content__button">Get Started</button>
            </div>
            <Shorten />
        </div>
    )
}

export default Main