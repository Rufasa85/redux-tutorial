import React from 'react'
import ThirdNest from '../ThirdNest'

export default function SecondNest(props) {
    return (
        <div>
            <h3>Deeply nested Cards:Second Level</h3>
            <ThirdNest scores={props.scores} addClick = {props.addClick}/>
        </div>
    )
}
