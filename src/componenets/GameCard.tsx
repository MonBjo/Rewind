import './gameCard.scss';

function GameCard(props: { type: string; date: string; players: any; }) {
  let {type, date, players} = props;
  let playersSortedByPoints: any = players.sort((a: { point: number; }, b: { point: number; }) => a.point - b.point);
  // console.log("data", data);
  // console.log("props", props);
  // console.log("playersSortedByPoints", playersSortedByPoints);

  if(playersSortedByPoints[0].won === false) {
    playersSortedByPoints.reverse();
  }

  return (
    <section className="gameCard">
      <header>
        <p>{type}</p> 
        <p>{date}</p>
      </header>
      
      {playersSortedByPoints.map((player: { name: string; point: number; won: boolean; }, index: number) => {
        return (
          <section className={player.won ? 'won' : ''} key={index}>
            <p>{player.name}</p> 
            <p>{player.point}</p>
          </section>
        )
      })}

      {/* <p className="edit">Redigera matchen</p> */}
    </section>
  );
}

export default GameCard;
