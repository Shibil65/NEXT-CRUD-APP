"use client";

import { useEffect, useState } from "react";

export default function UsersAPI() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    };

    useEffect(() => {
        fetchUsers();
    }, []);
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
        });

        setName("");    
        setEmail("");
        fetchUsers();
    };

    return (
        <div className="container">
            <h1>Add user</h1>

            <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="email"
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Add User</button>
            </form>
            <h2>Users List</h2>

            {users.map((user) => (
                <p key={user._id}>{user.name} - {user.email}</p>
            ))}
            
        </div>
    );
}