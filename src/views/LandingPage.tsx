import Header from '../componenets/Header';
import GameCard from '../componenets/GameCard';
import data from '../assets/games.json';

function LandingPage() {
  let gamesSortedByDate: any = data.games.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    else if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });
  
  return (
    <section className="LandingPage page">
      <Header />
      <p>Landingpage</p>
      {gamesSortedByDate.map((game: { type: string; date: string; players: any; }) => {
        return (
          <GameCard type={game.type} date={game.date} players={game.players} />
        )
      })}
    </section>
  );
}

export default LandingPage;