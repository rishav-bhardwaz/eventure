const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      title,
      category,
      eventType,
      startDate,
      startTime,
      endTime,
      locationType,
      location,
      additionalInfo,
      banner,
      ticketing,
      ticketPrice,
    } = req.body;

    const newEvent = new Event({
      title,
      category,
      eventType,
      startDate,
      startTime,
      endTime,
      locationType,
      location,
      additionalInfo,
      banner,
      ticketing,
      ticketPrice: ticketing === 'Ticketed' ? ticketPrice : 0,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
