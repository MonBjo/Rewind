import { useNavigate } from "react-router-dom";
import Header from '../componenets/Header';
import confusedImg from '../assets/travolta-stargate.gif';

function Error() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <section className="errorPage page">
      <Header />
      <img src={confusedImg} />
      <button onClick={ navHome } className="button button--error" >Go back to the games</button>
    </section>
  );
}

export default Error;