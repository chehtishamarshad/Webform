import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login/', credentials)
            .then(response => navigate('/dashboard'))
            .catch(error => console.error('Login error:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" onChange={handleChange} required />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" onChange={handleChange} required />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
