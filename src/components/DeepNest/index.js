import React from 'react'
import SecondNest from "../SecondNest"

export default function DeepNest(props) {
    return (
        <div>
            <h3>Deeply nested Cards:First Level</h3>
            <SecondNest scores={props.scores} addClick = {props.addClick}/>
        </div>
    )
}
