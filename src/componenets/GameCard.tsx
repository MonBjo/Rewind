import './gameCard.scss';
import data from '../assets/games.json';

function GameCard(prop: object) {
  console.log("prop",prop);
  console.log("data", data);
  
  // TODO: Create function to display the info
  // TODO: Create a function to put the winner/s at the top
  // TODO: Create a function that sorts the players by points. 
  //    If the winner has the highest score, sort from lowest to highest.
  //    If the winner has the lowest score, sort from highest to lowest.

  return (
    <section className="gameCard">
      <header>
        <p>{data.games[0].type}</p> 
        <p>{data.games[0].date}</p>
      </header>

      <section>
        <p>{data.games[0].players[0].name}</p> 
        <p>{data.games[0].players[0].point}</p>
      </section>

      <section>
        <p>{data.games[0].players[3].name}</p> 
        <p>{data.games[0].players[3].point}</p>
      </section>

      <section>
        <p>{data.games[0].players[1].name}</p> 
        <p>{data.games[0].players[1].point}</p>
      </section>

      <section>
        <p>{data.games[0].players[2].name}</p> 
        <p>{data.games[0].players[2].point}</p>
      </section>

      <p className="edit">Redigera matchen</p>
    </section>
  );
}

export default GameCard;