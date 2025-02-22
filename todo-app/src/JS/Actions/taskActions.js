export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: "TOGGLE_TASK",
  payload: taskId,
});

export const setTasks = (tasks) => ({
  type: "SET_TASKS",
  payload: tasks,
});
