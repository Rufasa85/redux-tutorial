import React from 'react'

export default function PlayerCard(props) {
    return (
        <div>
            <h3>{props.name}:{props.score}</h3>
            <button onClick={props.inc}>Click me!</button>
        </div>
    )
}
