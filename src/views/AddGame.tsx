import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../componenets/Header';
import './addGame.scss';

function AddGame() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const navigate = useNavigate();

  const addInput = (event: any) => {
    event.preventDefault();
    setNumberOfPlayers(numberOfPlayers + 1);
  }

  function navHome() {
    navigate('/');
  }

  function onSubmit(event: any){
    event.preventDefault();
    // TODO: Store game object in local storage
    // TODO: Fix the input value of won so it is an boolean
    
    let players: object[] = [];
    // loop through number of players
    for(let i = 0; i < numberOfPlayers; i++) {
      console.log("i", i);
      let newPlayer = {
        "name": "noname", 
        "point": 0,
        "won": false
      };

      // loop through input values
      // 'length - 2' to not include the two buttons ("add player" and "submit")
      for(let j = 2; j < event.target.form.length - 2; j++) {
        let inputValue = event.target.form[j].value;
        let inputID = event.target.form[j].id;

        console.log("j", j);
        console.log(inputID, inputValue);

        if(inputID == "name") {
          newPlayer.name = inputValue;
        } else if(inputID == "point") {
          newPlayer.point = inputValue;
        } else if(inputID == "won" + i) {
          newPlayer.won = inputValue;
          break;
        } else {
          console.log("Something odd is going on, the input id is: ", inputID, "I was expecting name, point or won.");
        }
        console.log("newPlayer", newPlayer);
      }
      players.push(newPlayer);
      console.log("players", players);
    }
    
    const newGame =  {
      "type": event.target.form[0].value,
      "date": event.target.form[1].value,
      "players": players,
      "id": localStorage.length
    }
    console.log("new game", newGame);
    // TODO: get data from localstorage
    // TODO: add 'newGame' to said data
    // TODO: put data back into localstorage
  }


  return (
    <section className="AddGamePage page">
      <Header />
      <h2>Lägg till en ny match</h2>
      <button onClick={ navHome } className="button button--error" >Gå tillbaka</button>
      
      <form>
        <input type="text" placeholder="Speltyp" id="type" />
        <input type="date" id="date" />

        {/* TODO: Simplify this function as 'counter' is unused */}
        {Array.from(Array(numberOfPlayers)).map((counter: any, index) => {
          return (
            <section key={index} className="playerInput">
              <input type="text" placeholder="spelarnamn" id="name" />
              <input type="number" placeholder="poäng" id="point" />
              <section>
                <label htmlFor={"won" + index}>Vann: </label>
                <input type="checkbox" id={"won" + index} />
              </section>
            </section>
          );
        })}
        
        <button onClick={ addInput }>Lägg till spelare</button>
        
        <button onClick={ onSubmit }>Spara</button>
      </form>
    </section>
  );
}

export default AddGame;