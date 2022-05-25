import React from "react";

const TodoList = ({ todo }) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="text-purple-500 text-xl mb-2">{todo.title}</div>
          <ul>
            <li>
              <strong>Done: </strong>
              {todo.completed ? "Done" : "Not Done Yet"}
            </li>
            <li>
              <strong>ID: </strong>
              {todo.id}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
