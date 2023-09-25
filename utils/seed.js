//uncertain about seed implementation, do I need random?

const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { username, thoughtText, reactionBody } = require('../utils/data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected to db');
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  };

  const users = [];

  for (let i = 0; i < 20; i++) {
    let username = username[i];
    let email = `${email[i]}@gmail.com`;
    let thoughts = thoughtText[i];
    let friends = username[i];

    users.push({ username, email, thoughts, friends });
  }

  const thoughts = [];

  for (let i = 0; i < 20; i++) {
    let thoughtText = thoughtText[i];
    let username = username[i];
    let reactions = reactionBody[i];

    thoughts.push({ thoughtText, username, reactions });
  }

  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('seed success!')
  process.exit(0);
});

