import React, { useState } from 'react';

export default function UserList() {
    const [users, setUsers] = useState([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 3, name: 'Jim'}]);
    const [inputValue, setInputValue] = useState('');

    const addUser = () => {
        if(!inputValue.trim()) return
        setUsers(prevUsers => [...prevUsers, {id: Date.now(), name: inputValue}]);
    }
    const deleteUser = (id) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    }
    
    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={()=>deleteUser(user.id)}>删除</button>
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Name" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button type="button" onClick={addUser}>添加用户</button>
        </div>
    )
}