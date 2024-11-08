import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import VacationRequest from './components/VacationRequest';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/vacation-request" element={<VacationRequest />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
