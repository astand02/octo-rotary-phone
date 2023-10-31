const router = require('express').Router();
const { addThoughtReaction, removeThoughtReaction } = require('../../controllers/thoughtController');
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thought
router.route('/').get(getReaction).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/responses').post(addThoughtReaction);

// /api/videos/:videoId/responses/:responseId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
