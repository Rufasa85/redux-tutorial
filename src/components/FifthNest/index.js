import React from 'react'
import PlayerCard from '../PlayerCard'
import { usePlayerContext } from '../../utils/PlayerContext';

export default function FifthNest(props) {
    const {scores,addClick} = usePlayerContext()
    return (
        <div>
            <h3>Deeply nested Cards:Fifth Level</h3>
            <div className="cardContainer">
            {scores.map(score=><PlayerCard key={score.id} name={score.name} score = {score.count} inc={()=>addClick(score.id)}/>)}
            </div>
        </div>
    )
}
