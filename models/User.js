const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const Thought = require('./Thought');

//Schema for User Model
const userSchema = new Schema (
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [ isEmail, 'email is invalid' ]
    },
    thoughts: [Thought],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema
  .virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
