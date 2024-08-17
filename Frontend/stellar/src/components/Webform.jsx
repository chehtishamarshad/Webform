import React, { useState } from 'react';
import axios from 'axios';

function Webform() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/submissions/', {
            name: name,
            phone: phone,
            zipcode: zipcode,
            state: state,
        })
        .then(response => {
            console.log(response.data);
            alert('Form submitted successfully');
        })
        .catch(error => {
            console.error('There was an error submitting the form!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Phone:
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <br />
            <label>
                Zipcode:
                <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
            </label>
            <br />
            <label>
                State:
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Webform;
