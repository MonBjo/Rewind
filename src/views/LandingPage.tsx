import Header from '../componenets/Header';
import Search from '../componenets/Search';
import GameCard from '../componenets/GameCard';
import data from '../assets/games.json';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  let games = JSON.parse(localStorage.games);
  let wins: number = 0;
  let playerWin: string = "";
  let winsOf: number = 10;
  
  
  function navAddGame() {
    navigate('/AddGame');
  } 
  
  let gamesSortedByDate: any = games.games.sort((a: { date: number; }, b: { date: number; }) => {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });

  gamesSortedByDate = gamesSortedByDate.filter((game: { players: any; type: string; date: string; }) => {
    if( game.type.toLowerCase().includes(search.toLowerCase()) || game.date.toLowerCase().includes(search.toLowerCase()) ) {
      return game;
    } 

    for(let player of game.players) {
      if (player.name.toLowerCase().includes(search.toLowerCase())) {
        console.log("player.name",player.name);
        if(player.won) {
          wins++;
        }
        if(winsOf > 1) {
          winsOf--;
        }
        playerWin = player.name;
        return game;
      }
    }
  });

  function displayWins() {
    if(playerWin && search.length > 1) {
      const wonGames: string = playerWin + " har vunnit " + wins + " av " + winsOf + " matcher.";
      console.log(wonGames);
      return wonGames;
    }
  }
    
  return (
    <section className="LandingPage page">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <button onClick={ navAddGame }>Lägg till ny match</button>
      <p>{displayWins()}</p>
      {gamesSortedByDate.map((game: { type: string; date: string; players: any; }, index: number) => {
        return (
          <GameCard type={game.type} date={game.date} players={game.players} key={index} />
        )
      })}
    </section>
  );
}

export default LandingPage;