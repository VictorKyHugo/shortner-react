import "./Statistics.scss"
import Card from './Card/Card'

import brand from '../../assets/images/icon-brand-recognition.svg'
import records from '../../assets/images/icon-detailed-records.svg'
import customizable from '../../assets/images/icon-fully-customizable.svg'
import Link from "../Link/Link"

function Statistics() {

    const statisticsList = {
        brand_recognition:
        {
            title: "Brand Recognition",
            text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
            icon: brand
        },
        detailed_records:
        {
            title: "Detailed Records",
            text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
            icon: records
        },
        fully_customizable:
        {
            title: "Fully Customizable",
            text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
            icon: customizable
        }
    }


    return (
        <div className="statistics">
            <div className="statistics__link_container">
                <Link />
                <Link />
            </div>

            <div className="statistics__content">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our
            advanced statistics dashboard.</p>
                <div className="statistics__content__card">
                    <div className="statistics__content__cardline">

                    </div>
                    <Card
                        title={statisticsList.brand_recognition.title}
                        text={statisticsList.brand_recognition.text}
                        icon={statisticsList.brand_recognition.icon}
                    />
                    <Card
                        title={statisticsList.detailed_records.title}
                        text={statisticsList.detailed_records.text}
                        icon={statisticsList.detailed_records.icon}

                    />
                    <Card
                        title={statisticsList.fully_customizable.title}
                        text={statisticsList.fully_customizable.text}
                        icon={statisticsList.fully_customizable.icon}
                    />

                </div>
            </div>
        </div>
    )
}

export default Statistics