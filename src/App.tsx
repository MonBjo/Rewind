import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.scss';

import LandingPage from "./views/LandingPage";
import Error from "./views/Error";
import AddGame from "./views/AddGame";

function App() {
  const [count, setCount] = useState(0);

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
