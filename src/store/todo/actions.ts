import { Todo, CREATE_TODO, TodoActionTypes } from './types';

export const createTodo = (todo: Todo): TodoActionTypes => {
  return {
    type: CREATE_TODO,
    payload: todo,
  };
};
