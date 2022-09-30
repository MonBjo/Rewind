import Header from '../componenets/Header';
import Search from '../componenets/Search';
import GameCard from '../componenets/GameCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  let games = JSON.parse(localStorage.games);
  let wins: number = 0;
  let playerWin: string = "";
  let winsOf: number = 0;
  let winsOfMax: number = 10;
  
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
        
        // if(player.won && player.name.toLowerCase() == search.toLowerCase()) {
        if(player.won) {
          wins++;
        }
        // if(winsOf < winsOfMax && player.name.toLowerCase() == search.toLowerCase()) {
        if(winsOf < winsOfMax) {
          winsOf++;
        }

        // Debug data
        // console.log("wins", wins);
        // console.log("winsOf", winsOf);
        // console.log("player.name",player.name);
        
        playerWin = player.name;
        return game;
      }
    }
  });

  function displayWins() {
    if(playerWin.toLowerCase() == search.toLowerCase() || playerWin.length > 3) {
      return (
        <section>
          <p>{playerWin} har vunnit {wins} av dom {winsOf} senaste matcherna.</p> 
          <label htmlFor="winsOnly" >Visa endast vinster: </label>
          <input type="checkbox" id="winsOnly" />
        </section>
      );
    }
  }
    
  return (
    <section className="LandingPage page">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <button onClick={ navAddGame }>Lägg till ny match</button>
      {displayWins()}
      {gamesSortedByDate.map((game: { type: string; date: string; players: any; }, index: number) => {
        return (
          <GameCard type={game.type} date={game.date} players={game.players} key={index} />
        )
      })}
    </section>
  );
}

export default LandingPage;