import React,{useReducer} from 'react'
import PlayerCard from '../PlayerCard'
import {useSelector,useDispatch} from "react-redux";
import {ADD_CLICK} from "../../utils/actions" 

export default function FifthNest(props) {
  const dispatch = useDispatch();
  const scores = useSelector(state => state.scores)
    return (
        <div>
            <h3>Deeply nested Cards:Fifth Level</h3>
            <div className="cardContainer">
            {scores.map(score=><PlayerCard key={score.id} name={score.name} score = {score.count} inc={()=>dispatch({
                type:ADD_CLICK,
                payload:score.id
            })}/>)}
            </div>
        </div>
    )
}
