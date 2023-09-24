const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const thoughtSchema = require('./Thought');

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
    thoughts: [thoughtSchema],
    friends: [userSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
