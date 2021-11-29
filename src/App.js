import React, {useState} from "react"
import PlayerCard from "./components/PlayerCard";
import "./App.css"
import PlayerForm from "./components/PlayerForm";
import LeaderBoard from "./components/LeaderBoard";
import DeepNest from "./components/DeepNest";

function App() {
  const [scores,setScores] = useState([
    {
      id:1,
      name:"Joe",
      count:0
    },
    {
      id:2,
      name:"Shiva",
      count:0
    }
  ])

  const addClick = id=>{
    const newScores = scores.map(thing=>{
      if(thing.id===id){
        thing.count++
      }
      return thing
    })
    setScores(newScores)
  }

  const addPlayer = name=>{
    setScores([
      ...scores,
      {
        id:scores.length+1,
        name,
        count:0
      }
    ])
  }

  return (
    <div className="App">
     <h1>Clicks!</h1>
     <h2>Join the game</h2>
     <PlayerForm addPlayer={addPlayer}/>
     <LeaderBoard scores={scores}/>
     <h2>Current Players</h2>
     <div className="cardContainer">
       {scores.map(score=><PlayerCard key={score.id} name={score.name} score = {score.count} inc={()=>addClick(score.id)}/>)}
     </div>
     <DeepNest scores={scores} addClick = {addClick}/>
    </div>
  );
}

export default App;
