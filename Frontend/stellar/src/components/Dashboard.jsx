import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/dashboard/')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}: {item.state}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
