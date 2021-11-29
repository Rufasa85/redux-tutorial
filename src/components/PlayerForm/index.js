import React,{useState} from 'react'

export default function PlayerForm(props) {
    const [newName, setNewName] = useState("")
    const handleSubmit = e=>{
        e.preventDefault();
        props.addPlayer(newName);
        setNewName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={newName} onChange={e=>setNewName(e.target.value)}/>
            <button>Add new Player</button>
        </form>
    )
}
