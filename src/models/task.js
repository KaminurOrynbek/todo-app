
let tasks = [];
let doneTasks = [];

class TaskService {
  static async getTasks() {
    return tasks;
  }

  static async getDoneTasks() {
    return doneTasks;
  }

  static async addTask(task) {
    tasks.unshift(task); 
  }

  static async taskExists(task) {
    return tasks.includes(task) || doneTasks.includes(task);
  }

  static async markTaskDone(task) {
    tasks = tasks.filter(t => t !== task);
    doneTasks.unshift(task); 
  }
}

module.exports = TaskService;