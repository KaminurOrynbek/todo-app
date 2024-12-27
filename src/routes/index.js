const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getIndex);
router.get('/done', taskController.getDone);
router.post('/tasks/:taskName/done', taskController.markTaskDone); 
router.post('/', taskController.addTask);

module.exports = router;
