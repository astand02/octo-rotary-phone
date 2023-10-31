const { Schema, model } = require('mongoose');
const Reactions = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: date => date.toLocaleDateString()
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reactions],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
