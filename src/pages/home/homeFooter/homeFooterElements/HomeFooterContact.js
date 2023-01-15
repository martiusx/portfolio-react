import linkedinIcon from "./assets/linkedin.png";
import gitHubIcon from "./assets/github.png";

const HomeFooterContact = function () {
  return (
    <>
      <div className="footer__contact" id="footer__contact-id">
        <h3>Contact</h3>
        <div className="footer__contact__element">
          <p>T:</p>
          <span>512 524 033</span>
        </div>
        <div className="footer__contact__element">
          <p>E:</p>
          <span>Maciej.Cis@o2.pl</span>
        </div>
      </div>
      <div className="footer__myProfiles">
        <a
          href="https://github.com/martiusx?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHubIcon} alt="github link icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/maciej-cis-519696251/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin link" />
        </a>
      </div>
    </>
  );
};

export default HomeFooterContact;
