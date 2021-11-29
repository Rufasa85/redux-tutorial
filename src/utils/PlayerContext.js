import React, { createContext, useContext, useState } from 'react';

// Initialize new context for players
const PlayerContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (players) in other components
export const usePlayerContext = () => useContext(PlayerContext);

// The provider is responsible for holding our state, updating the state, and persisting values to the children
export const PlayerProvider = ({ children }) => {
  const [scores, setScores] = useState([
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
  ]);

  // Function to add a student
  const addPlayer = name => {
    // Check if the user forgot to enter a name
    setScores([
        ...scores,
        {
          id:scores.length+1,
          name,
          count:0
        }
      ])
  };

  const addClick = id=>{
    const newScores = scores.map(thing=>{
      if(thing.id===id){
        thing.count++
      }
      return thing
    })
    setScores(newScores)
  }




  // The value prop expects an initial state object
  return (
    <PlayerContext.Provider
      value={{ scores,addPlayer,addClick }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </PlayerContext.Provider>
  );
};
