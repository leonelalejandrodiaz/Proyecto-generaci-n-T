import React, { useState } from 'react';
import axios from 'axios';

const VacationRequest = () => {
    const [request, setRequest] = useState({ startDate: '', endDate: '', description: '' });

    const handleChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('/api/vacations/add', request, {
                headers: { Authorization: token },
            });
            alert('Vacation request submitted successfully');
        } catch (error) {
            console.error("Error submitting request:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="startDate" type="date" onChange={handleChange} placeholder="Start Date" />
            <input name="endDate" type="date" onChange={handleChange} placeholder="End Date" />
            <textarea name="description" onChange={handleChange} placeholder="Description"></textarea>
            <button type="submit">Submit Request</button>
        </form>
    );
};

export default VacationRequest;
