import './gameCard.scss';
import { useNavigate } from "react-router-dom";

function GameCard() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <section>
      <p>ohai</p>
    </section>
  );
}

export default GameCard;