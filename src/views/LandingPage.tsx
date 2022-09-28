import Header from '../componenets/Header';
import Search from '../componenets/Search';
import GameCard from '../componenets/GameCard';
import data from '../assets/games.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [search, setSearch] = useState('');
  console.log("search", search);
  const navigate = useNavigate();

  function navAddGame() {
    navigate('/AddGame');
  }

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
      <Search search={search} setSearch={setSearch} />
      <button onClick={ navAddGame }>Lägg till ny match</button>
      {gamesSortedByDate.map((game: { type: string; date: string; players: any; }, index: number) => {
        return (
          <GameCard type={game.type} date={game.date} players={game.players} key={index} />
        )
      })}
    </section>
  );
}

export default LandingPage;