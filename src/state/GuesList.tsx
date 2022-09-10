import React from "react";
import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState("")
    return (
        <div>
            <h2>Guest List</h2>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button>add a Guest</button>
        </div>
    )
}

export default GuestList;