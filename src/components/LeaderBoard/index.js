import React from 'react'
import {useSelector} from "react-redux"

export default function LeaderBoard() {
    const scores = useSelector(state => state.scores)

    return (
        <div>
            <h2>TopScores:</h2>
            <ol>
                {[...scores].sort((a,b)=>a.count<b.count?1:-1).map(score=><li key={score.id}> {score.name}:{score.count}</li>)}
            </ol>
        </div>
    )
}
