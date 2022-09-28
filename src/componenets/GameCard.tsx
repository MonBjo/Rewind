import './gameCard.scss';

function GameCard(props: { type: string; date: string; players: any; }) {
  let {type, date, players} = props;
  let playersSortedByPoints: any = players.sort((a: { point: number; }, b: { point: number; }) => a.point - b.point);
  // console.log("data", data);
  // console.log("props", props);
  // console.log("playersSortedByPoints", playersSortedByPoints);

  if(playersSortedByPoints[0].won === false) {
    playersSortedByPoints.reverse();
    console.log("flipflop");
  }

  return (
    <section className="gameCard">
      <header>
        <p>{type}</p> 
        <p>{date}</p>
      </header>
      
      {playersSortedByPoints.map((player: { name: string; point: number; won: boolean; }) => {
        return (
          <section className={player.won ? 'won' : ''}>
            <p>{player.name}</p> 
            <p>{player.point}</p>
          </section>
        )
      })}

      <p className="edit">Redigera matchen</p>
    </section>
  );
}

export default GameCard;

{/* <section className="gameCard">
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
    </section> */}