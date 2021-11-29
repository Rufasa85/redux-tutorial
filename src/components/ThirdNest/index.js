import React from 'react'
import FourthNest from '../FourthNest'

export default function ThirdNest(props) {
    return (
        <div>
            <h3>Deeply nested Cards:Third Level</h3>
            <FourthNest scores={props.scores} addClick = {props.addClick}/>
        </div>
    )
}
