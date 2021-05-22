import './Footer.scss'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'

function Footer() {
    return (
        <footer className="footer">
            <h1>Shortly</h1>

            <div className="footer__links">
                <span>Features</span>
                <span>Link Shortning</span>
                <span>Branded Links</span>
                <span>Analytics</span>
            </div>

            <div className="footer__links">
                <span>Resources</span>
                <span>Blog</span>
                <span>Developers</span>
                <span>Support</span>
            </div>

            <div className="footer__links">
                <span>Company</span>
                <span>About</span>
                <span>Our Team</span>
                <span>Careers</span>
                <span>Contact</span>
            </div>
            <div className="footer__social_media">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram" />
            </div>
        </footer>
    )
}

export default Footer