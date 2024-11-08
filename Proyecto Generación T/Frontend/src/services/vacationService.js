import axios from 'axios';

export const addVacationRequest = async (request) => {
    const response = await axios.post('/api/vacations/add', request, {
        headers: { Authorization: localStorage.getItem('token') }
    });
    return response.data;
};

export const getVacationRequests = async () => {
    const response = await axios.get('/api/vacations', {
        headers: { Authorization: localStorage.getItem('token') }
    });
    return response.data;
};
