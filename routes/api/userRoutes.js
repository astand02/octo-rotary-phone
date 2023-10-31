const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');
const { post } = require('./thoughtRoutes');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get
(getSingleUser).put(updateUser).delete(deleteUser);
router.route(':userId/friends/:friendId')
.post(addFriend).delete(removeFriend);

module.exports = router;
