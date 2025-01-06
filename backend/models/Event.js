const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  eventType: { type: String, enum: ['Single', 'Recurring'], default: 'Single' },
  startDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  locationType: { type: String, enum: ['Real', 'Virtual'], default: 'Real' },
  location: { type: String, required: true },
  additionalInfo: { type: String },
  banner: { type: String },
  ticketing: { type: String, enum: ['Free', 'Ticketed'], default: 'Free' },
  ticketPrice: { type: Number, default: 0 },
});

module.exports = mongoose.model('Event', EventSchema);
