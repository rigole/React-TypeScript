import React, { useState } from "react";


const users = [
    { name: 'Mary', age: 30 },
    { name: 'Michael', age: 50 },
    { name: "Didier", age: 15 }
]




const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    }
    return (
        <div>
            User Search
            <input value={name} onChange={e => setName(e.target.value)}  type="text" />
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

export default UserSearch;