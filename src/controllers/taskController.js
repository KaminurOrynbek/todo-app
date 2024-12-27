
const TaskService = require('../models/task');

exports.getIndex = async (req, res) => {
  const tasks = await TaskService.getTasks();
  res.render('pages/index', { tasks });
};

exports.getDone = async (req, res) => {
  const doneTasks = await TaskService.getDoneTasks();
  res.render('pages/done', { tasks: doneTasks });
};

exports.addTask = async (req, res) => {
  const { task } = req.body;
  const tasks = await TaskService.getTasks();
  if (task.length < 3) {
    return res.render('pages/index', { tasks, error: 'Minimal length for task name is 3 letter!' });
  }
  const taskExists = await TaskService.taskExists(task);
  if (taskExists) {
    return res.render('pages/index', { tasks, error: `Task ${task} already exists!` });
  }
  await TaskService.addTask(task);
  res.redirect('/');
};

exports.markTaskDone = async (req, res) => {
  const { taskName } = req.params;
  const taskExists = await TaskService.taskExists(taskName);
  
  if (!taskExists) {
    return res.status(404).json({ error: `Task "${taskName}" not found.` });
  }

  await TaskService.markTaskDone(taskName);
  res.sendStatus(200);
};
