import React from 'react'
import PlayerCard from '../PlayerCard'

export default function FifthNest(props) {
    return (
        <div>
            <h3>Deeply nested Cards:Fifth Level</h3>
            <div className="cardContainer">
            {props.scores.map(score=><PlayerCard key={score.id} name={score.name} score = {score.count} inc={()=>props.addClick(score.id)}/>)}
            </div>
        </div>
    )
}
