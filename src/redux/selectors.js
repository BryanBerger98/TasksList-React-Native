export const getTasks = store => store.tasksList;
export const getCompletedTasks = store => store.tasksList.filter(el => el.isCompleted);