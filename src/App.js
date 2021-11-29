import React, {useReducer} from "react";
import PlayerCard from "./components/PlayerCard";
import "./App.css";
import PlayerForm from "./components/PlayerForm";
import LeaderBoard from "./components/LeaderBoard";
import DeepNest from "./components/DeepNest";
import  {ADD_CLICK} from "./utils/actions"
import {useSelector,useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const scores = useSelector(state=>state.scores)  
  return (
    
      <div className="App">
        <h1>Clicks!</h1>
        <h2>Join the game</h2>
        <PlayerForm/>
        <LeaderBoard /> 
        <h2>Current Players</h2>
        <div className="cardContainer">
           {scores.map(score => (
            <PlayerCard
              key={score.id}
              name={score.name}
              score={score.count}
              inc={() => dispatch({
                type:ADD_CLICK,
                payload:score.id
              })}
            />
          ))} 
        </div>
        <DeepNest />
      </div>
    
  );
}

export default App;
