import './header.scss';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <header>
      <p>Header</p>
    </header>
  );
}

export default Header;