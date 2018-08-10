const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// we name our model 'ideas' and is connected to IdeaSchema
mongoose.model('ideas', IdeaSchema);