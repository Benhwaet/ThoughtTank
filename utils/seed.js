//uncertain about seed implementation, do I need random?

const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThought, getRandomUsername } = require('../utils/data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected to database');
  let userCheck = await connection,.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  };

  for (let i = 0; i < 10; i++) {
    const newUser = await User.create({
      username: getRandomUsername(),
      email: `${getRandomUsername()}@gmail.com`
    });
    for (let i = 0; i < 10; i++) {
      await Thought.create({
        thoughtText: getRandomThought(),
        username: newUser.username
      });
    }
  }


});

