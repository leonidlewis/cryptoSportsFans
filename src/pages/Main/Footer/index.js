import twitterIcon from '../../../assets/images/twitter.png'
import discordIcon from '../../../assets/images/discord.png'
import '../../../styles/footer.scss';
const Footer = () =>{
    return (
        <div className="footer">
            <h3>More questions? Contact us here</h3>
            <div className="footer-icons">
                <img src={twitterIcon} alt="twitter" />
                <img src={discordIcon} alt="discord" />
            </div>
            <p>For Merch order inquires, contact Support@CryptoSportsFans.com</p>
        </div>
    )
}
export default Footer