import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../store/';
import { TodoList, TodoCreate } from '../components/Todo';

const Todo: React.FC = () => {
  const todos = useSelector((state: rootState) => state.todo);
  console.log(todos);
  // const [todos, setTodos] = useState([
  //   {
  //     name: '1 item',
  //   },
  //   {
  //     name: '2 item',
  //   },
  // ]);
  // const onCreateTodo = (todo: ) => {

  // };
  // const createTodo = (todo: string): void => {
  //   setTodos(todos.concat({ name: todo }));
  // };

  return (
    <React.Fragment>
      {/* <TodoCreate createTodo={createTodo} /> */}
      <TodoList datas={todos} />
    </React.Fragment>
  );
};

export default Todo;
