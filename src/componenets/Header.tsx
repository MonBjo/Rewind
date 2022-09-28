import './header.scss';
import icon from '../assets/icon.png';

function Header() {

  return (
    <header className="header">
      <img src={icon} />
      <h1>Dina matcher samlade på en plats!</h1>
    </header>
  );
}

export default Header;