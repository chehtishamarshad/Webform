import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Webform from './components/Webform';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/webform" element={<Webform />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
