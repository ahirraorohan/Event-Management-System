const express = require('express');
const router = express.Router();
const { createEvent, getEvents } = require('../controllers/eventController');
const auth = require('../middleware/auth');

// Create an event
router.post('/', auth, createEvent);

// Get all events
router.get('/', auth, getEvents);

module.exports = router;
