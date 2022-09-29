import {Routes, Route} from 'react-router-dom';
import './App.scss';
import LandingPage from "./views/LandingPage";
import Error from "./views/Error";
import AddGame from "./views/AddGame";
import { useEffect } from 'react';
import initialGames from './assets/games.json';

function App() {
  console.log(initialGames.games);
  useEffect(() => {
    initialGames.games.map(game => localStorage.setItem(JSON.stringify(game.id), JSON.stringify(game)));
  });

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/addgame' element={<AddGame/>}/>
      </Routes>
    </div>
  )
}

export default App;
