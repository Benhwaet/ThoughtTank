const username = [
    'benhwaet',
    'lernantino',
    'orangeuglad',
    'thalassocrat',
    'sabulous',
    'noisome',
    'bugsbunny',
    'snoopy123',
    'bb_wolf',
    'daffyduck',
];

const email = [
    'benhwaet@ymail.com',
    'lernantino@gmail.com',
    'ididntsaybanana@rogers.com',
    'tbrinewall@hotmail.com',
    'sabulousy@outlook.com',
    'noisyposy@live.com',
    'bbcarrots@me.com',
    'iheartwoodstock@yahoo.com',
    'awoooo@icloud.com',
    'dessspicable@gmail.com',
];

const thoughtText = [
    'I am the best',
    'I am the worst',
    'I like bananas',
    'I like apples',
    'life is like a box of chocolates',
    'ahoy hoy is a pirate greeting',
    'What\'s up doc?',
    'What is the meaning of life?',
    'I am a lumberjack and I am okay',
    'Bugs Bunny is horrible',
];

const reactionBody = [
    'I agree',
    'I disagree',
    'I like it',
    'I hate it',
    'I love it',
    'I am indifferent',
    'I am not sure',
    'I am sure',
    'This is lame',
    'Bugs Bunny is *AWESOME*',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUsername = () =>
  `${getRandomArrItem(username)}`;

// Function to generate random assignments that we can add to student object.
const getRandomThought = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      getThought: getRandomArrItem(thoughtText),
      getReaction: getRandomArrItem(reactionBody),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThought };