import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/userContext';

function MapandFilter() {
    const [users, setUsers] = useState([]);
    const {name, setName} = useContext(UserContext)

    useEffect(() => {

        const fetchData = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json()
            setUsers(json)
        }
        fetchData()
    }, []);

    const filterData = ()=>{
        let idLessThanFive = users.filter(filteredData=>{
            return filteredData.id < 5
        }).map(data=>{
            return data
        })

        setUsers(idLessThanFive)
        console.log(idLessThanFive)
    }

    return (
        <div>
            <h1>User Names:</h1>
            <div>
                {users.map(user => (
                    <div key={user.id}>
                        <h2>{user.id}</h2>
                        <p>{user.username}</p>
                    </div>
                ))}
            </div>
            {name}
            <br />
            <button onClick={filterData}>Filter </button>
        </div>
    );
}

export default MapandFilter;
