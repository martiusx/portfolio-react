import linkedinIcon from './assets/linkedin.png';
import gitHubIcon from './assets/github.png';
import telephoneIcon from './assets/telephon.png';
import emailIcon from './assets/email.png';

const HomeFooterContact = function() {
    return(
        <>
            <div className="footer__contact">
                <h5>Contact</h5>
                <div className='footer__contact__element'>
                    <p>T:</p><span>512 524 033</span>
                </div>
                <div className='footer__contact__element'>
                    <p>E:</p><span>Maciej.Cis@o2.pl</span>
                </div>
            </div>
            <div className="footer__myProfiles">
                <img src={gitHubIcon} alt="github link icon"></img>
                <img src={linkedinIcon} alt="linkedin link"></img>
            </div>
        </>
    )
}

export default HomeFooterContact;