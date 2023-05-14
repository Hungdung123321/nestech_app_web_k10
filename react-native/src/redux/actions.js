export const NAME_ACTION = {
  CLICK_UPGRADE: 'ClickUpgrade',
  ADD_TODO_TASK: 'AddTodoTask',
  REMOVE_TODO_TASK: 'RemoveTodoTask',
};

export const clickUpgradeHandle = (click) => ({
  type: NAME_ACTION.CLICK_UPGRADE,
});

export const AddTodo = (TodoItem) => ({
  type: NAME_ACTION.ADD_TODO_TASK,
  payload: TodoItem
})

export const removeTodo = (index) => ({
  type: NAME_ACTION.REMOVE_TODO_TASK,
  payload: index
})