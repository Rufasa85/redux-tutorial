import React from 'react'

export default function LeaderBoard(props) {
    return (
        <div>
            <h2>TopScores:</h2>
            <ol>
                {[...props.scores].sort((a,b)=>a.count<b.count?1:-1).map(score=><li key={score.id}> {score.name}:{score.count}</li>)}
            </ol>
        </div>
    )
}
