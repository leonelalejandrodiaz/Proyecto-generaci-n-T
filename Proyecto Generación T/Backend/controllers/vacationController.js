const VacationRequest = require('../models/VacationRequest');

exports.addVacationRequest = async (req, res) => {
    const { startDate, endDate, description } = req.body;
    const daysRequested = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const newRequest = new VacationRequest({
        userId: req.user.id,
        startDate,
        endDate,
        daysRequested,
        description
    });
    await newRequest.save();
    res.status(201).json({ message: "Vacation request submitted successfully" });
};

exports.getVacationRequests = async (req, res) => {
    const requests = await VacationRequest.find({ userId: req.user.id });
    res.json(requests);
};
