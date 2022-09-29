import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../componenets/Header';
import './addGame.scss';

function AddGame() {
  const [counter, setCounter] = useState(2);
  const navigate = useNavigate();

  const addInput = (event: any) => {
    event.preventDefault();
    setCounter(counter + 1);
  }

  function navHome() {
    navigate('/');
  }

  function onSubmit(event: any){
    event.preventDefault();
    // console.log(event.target.form[i].value);
    // console.log(event.target.form[i].id);
    // TODO: Create game object
    // TODO: Store game object in local storage
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
        {Array.from(Array(counter)).map((counter: any, index) => {
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