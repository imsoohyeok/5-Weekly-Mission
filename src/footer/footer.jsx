import { FooterText } from "./contain";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <span className="copyrigter">{FooterText.codeit}</span>
        <div className="footer-helper">
          <a className="footer-privacy" href="privacy.html">
            {FooterText.PrivacyPolicy}
          </a>
          <a className="footer-FAQ" href="faq.html">
            {FooterText.FAQ}
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/facebook.svg" alt="페이스북아이콘" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/twitter.svg" alt="트위터아이콘" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/youtube.svg" alt="유튜브아이콘" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/instagram.svg" alt="인스타그램아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
};
