export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const CREATE_TODO = 'CREATE_TODO';

interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: Todo;
}

export type TodoActionTypes = CreateTodoAction;
