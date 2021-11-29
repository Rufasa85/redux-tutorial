import React,{useState,useReducer} from 'react'
import  {ADD_PLAYER} from "../../utils/actions"
import {SET_NEW_NAME} from "../../utils/actions"
import {useSelector,useDispatch} from "react-redux";

export default function PlayerForm() {
   const dispatch = useDispatch();
   const newName = useSelector(state => state.newName)

    const handleSubmit = e=>{
        e.preventDefault();
       dispatch({
           type:ADD_PLAYER,
           payload:newName
       });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={newName} onChange={e=>dispatch({
                type:SET_NEW_NAME,
                payload:e.target.value
            })
        }/>
            <button>Add new Player</button>
        </form>
    )
}
