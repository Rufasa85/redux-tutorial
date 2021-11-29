import React, { useState } from "react";
import PlayerCard from "./components/PlayerCard";
import "./App.css";
import PlayerForm from "./components/PlayerForm";
import LeaderBoard from "./components/LeaderBoard";
import DeepNest from "./components/DeepNest";
import {usePlayerContext} from "./utils/PlayerContext";

function App() {
  const {scores,addClick}  = usePlayerContext()
  
  return (
    
      <div className="App">
        <h1>Clicks!</h1>
        <h2>Join the game</h2>
        <PlayerForm/>
        <LeaderBoard/>
        <h2>Current Players</h2>
        <div className="cardContainer">
           {scores && scores.map(score => (
            <PlayerCard
              key={score.id}
              name={score.name}
              score={score.count}
              inc={() => addClick(score.id)}
            />
          ))} 
        </div>
        <DeepNest />
      </div>
    
  );
}

export default App;
