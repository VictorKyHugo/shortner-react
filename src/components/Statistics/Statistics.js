import "./Statistics.scss"
import Card from './Card/Card'

function Statistics() {
    return (
        <div className="statistics">
            <div className="statistics__content">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our
            advanced statistics dashboard.</p>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Statistics