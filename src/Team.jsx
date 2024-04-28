import { useState } from "react"

export default function Team() {
   const [team,setTeam] = useState(11) 
    const teamAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const teamLess = ()=>{
        const newTeam = team - 1;
        setTeam(newTeam)
    }
    return (
        <div className="teamStyle">
            <h3>Players:{team} </h3>
            <button onClick={teamAdd}>Add</button>
            <button onClick={teamLess}>Less</button>
        </div>
    )
}