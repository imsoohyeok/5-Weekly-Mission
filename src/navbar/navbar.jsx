import { ROUTE } from "../util/constant";
import { Cta } from "../mainSection/Cta";
import { Profile } from "../Profile";
import { LogoImage, NavbarText } from "./contain";
import "./navbar.css";

export const NavBar = ({ profile }) => {
  return (
    <nav className=".NavBar">
      <div className="NavBar-items">
        <a href={ROUTE.랜딩}>
          <img
            className="NavBar-logo"
            src={LogoImage}
            alt="Linkbrary 서비스 로고"
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta isSmall>
              <span className="NavBar-signin">{NavbarText.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
