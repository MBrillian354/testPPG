const express = require('express');

const levelsController = require('../controllers/levels-controller')

const router = express.Router();

router.get('/branches/', levelsController.getBranches)
router.get('/branches/sub-branches/', levelsController.getTeachingGroupes);

router.get('/branches/:branchId', levelsController.getBranchById);
router.get('/branches/sub-branches/:teachingGroupId', levelsController.getTeachingGroupById);



// router.get('/:userId', usersController.getUsersById);

router.post('/branches/', levelsController.createBranch);
router.post('/branches/sub-branches/', levelsController.createTeachingGroup);

router.delete('/branches/', levelsController.deleteBranch);
router.delete('/branches/sub-branches/', levelsController.deleteTeachingGroup);

router.patch('/branches/:branchId', levelsController.updateBranch);
router.patch('/branches/sub-branches/:teachingGroupId', levelsController.updateTeachingGroup);

// router.post('/signup', usersController.signup);

// router.delete('/:userId', usersController.deleteUser);



module.exports = router; 