const mongoose = require('mongoose');
const ListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

  status: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('list', ListSchema);