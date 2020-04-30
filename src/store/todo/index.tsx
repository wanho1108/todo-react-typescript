import { Todo, CREATE_TODO, TodoActionTypes } from './types';

const initialState: Todo[] = [
  {
    id: 0,
    text: 'Hello Redux',
    done: false,
  },
];

export const TodoReducer = (
  state: Todo[] = initialState,
  action: TodoActionTypes,
): Todo[] => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
