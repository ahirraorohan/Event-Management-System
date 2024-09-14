const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
    try {
        const { name, description, startDate, endDate, location } = req.body;
        const newEvent = new Event({
            name,
            description,
            startDate,
            endDate,
            location,
            organizer: req.user.userId,
        });
        const event = await newEvent.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('organizer', 'name email');
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
