import Header from '../componenets/Header';
import GameCard from '../componenets/GameCard';
import data from '../assets/games.json';

function LandingPage() {
  
  return (
    <section className="LandingPage page">
      <Header />
      <p>Landingpage</p>
      {data.games.map(game => {
        return (
          <GameCard type={game.type} date={game.date} players={game.players} />
        )
      })}
    </section>
  );
}

export default LandingPage;