const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/UserController');

// /api/users
router.route('/users').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/users/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/Users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
