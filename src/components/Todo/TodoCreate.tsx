import React, { useState } from 'react';

type TodoCreateProps = {
  createTodo: (todo: string) => void;
};

const TodoCreate: React.FC<TodoCreateProps> = ({ createTodo }) => {
  const [todo, setTodo] = useState('');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setTodo(value);
  };
  const keyupHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const keyCode = e.keyCode;

    if (keyCode === 13) {
      setTodo('');
      createTodo(todo);
    }
  };

  return (
    <React.Fragment>
      <input
        type="text"
        name=""
        placeholder="todo"
        value={todo}
        onKeyUp={keyupHandler}
        onChange={changeHandler}
      />
      <button type="button" onClick={(): void => createTodo(todo)}>
        Create
      </button>
    </React.Fragment>
  );
};

export default TodoCreate;
