//keeping as a seed 

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
});