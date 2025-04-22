import { useEffect, useState } from "react"
import axios from "axios"

function Home() {
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
    }
    useEffect (() => {
        setTimeout(() => {
            fetchUsers();
        }, 2000);
    }, []);

const pixels = "3px"

    return (
<div>
    {users.map((user) => (
        <div key={user.id} style={{ border: `${pixels} solid black`}}>
        <div>{user?.id}</div>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
        <div>{user?.username}</div>
        </div>
))}
</div>
    );
}

export default Home