import Header from '../componenets/Header';
import GameCard from '../componenets/GameCard';
import data from '../assets/games.json';

function LandingPage() {

  return (
    <section className="LandingPage page">
      <Header />
      <p>Landingpage</p>
      <GameCard gamesData={data.games} />
    </section>
  );
}

export default LandingPage;