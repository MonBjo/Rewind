import Header from '../componenets/Header';
import Search from '../componenets/Search';
import GameCard from '../componenets/GameCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [search, setSearch] = useState('');
  const [onlyWins, setOnlyWins] = useState(false);
  const navigate = useNavigate();

  let games = JSON.parse(localStorage.games);
  let wins: number = 0;
  let playerWin: string = "";
  let winsOf: number = 0;
  let maxWins: number = 10;

  function navAddGame() {
    navigate('/AddGame');
  } 
  
  let gamesToDisplay: any = games.games.sort((a: { date: number; }, b: { date: number; }) => {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });

  gamesToDisplay = gamesToDisplay.filter((game: { players: any; type: string; date: string; }) => {
    if( game.type.toLowerCase().includes(search.toLowerCase()) || game.date.toLowerCase().includes(search.toLowerCase()) ) {
      return game;
    } 

    for(let player of game.players) {
      if (player.name.toLowerCase().includes(search.toLowerCase())) {
        if(player.won) {
          wins++;
        }
        if(winsOf < maxWins) {
          winsOf++;
        }
        
        playerWin = player.name;
        console.log("onlyWins", onlyWins);
        if(onlyWins && player.won) {
          return game;
        } else if(!onlyWins) {
          return game;
        }
      }
    }
  });
  

  function displayWins() {
    if(playerWin.length != 0 && playerWin.toLowerCase() == search.toLowerCase() || playerWin.length > 3) {
      return (
        <p>{playerWin} har vunnit {wins} av dom {winsOf} senaste matcherna.</p> 
      );
    }
  }
    
  return (
    <section className="LandingPage page">
      <Header />
      <Search setSearch={setSearch} setOnlyWins={setOnlyWins} />
      <button onClick={ navAddGame }>Lägg till ny match</button>
      {displayWins()}
      {gamesToDisplay.map((game: { type: string; date: string; players: any; }, index: number) => {
        return (
          <GameCard type={game.type} date={game.date} players={game.players} key={index} />
        )
      })}
    </section>
  );
}

export default LandingPage;