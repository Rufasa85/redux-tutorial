import React,{useState} from 'react'
import {usePlayerContext} from "../../utils/PlayerContext";

export default function PlayerForm() {
    const {addPlayer} = usePlayerContext()
    const [newName, setNewName] = useState("")
    const handleSubmit = e=>{
        e.preventDefault();
       addPlayer(newName);
        setNewName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={newName} onChange={e=>setNewName(e.target.value)}/>
            <button>Add new Player</button>
        </form>
    )
}
