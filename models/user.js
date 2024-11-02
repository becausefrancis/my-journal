const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
  day: {
    type: Number,
    required: true,
    min: 1,
    max: 31,
  },
  weekday: {
    type: String,
    required: true,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },
  task: {
    type: String,
  },
  isComplete: {
    type: Boolean,
  },
  journalEntry: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['positive', 'neutral', 'negative'],
  },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  entries: [entrySchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
