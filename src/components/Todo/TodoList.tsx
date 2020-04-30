import React from 'react';

type TodoListProps = {
  datas: { id: number; text: string; done: boolean }[];
};

const TodoList: React.FC<TodoListProps> = ({ datas }) => {
  return (
    <div>
      {datas.map((data, index) => (
        <div key={index}>{data.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
