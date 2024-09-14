const mongoose = require('mongoose');

const RSVPSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Going', 'Interested', 'Not Going'], default: 'Interested' },
});

module.exports = mongoose.model('RSVP', RSVPSchema);
