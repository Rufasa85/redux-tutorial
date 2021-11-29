import {ADD_PLAYER,ADD_CLICK,SET_NEW_NAME} from "./actions";
const initialState=
{
    newName:"",
    scores:[
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
  ]
};

export default  function reducer(state=initialState,action){
    switch (action.type) {
        case ADD_PLAYER:
            console.log("adding player");
            console.log(action)
            console.log(state.scores)
            return {
                ...state,
                newName:"",
                scores:[...state.scores,{
                    id:state.scores.length+1,
                    count:0,
                    name:action.payload
                }]
            }
        case ADD_CLICK:
                const playerIdx = state.scores.findIndex(
                    (player) => player.id === action.payload
                  );
                const playerObj = state.scores[playerIdx];
                playerObj.count++;
                const newPlayers = [...state.scores];
                newPlayers[playerIdx]=playerObj
            return {
                ...state,
                scores:newPlayers
            }
        case SET_NEW_NAME:
            return{
                ...state,
                newName:action.payload
            }
    
        default:
            return state
           
    }
}