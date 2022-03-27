import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  createTodo,
  checkTodo,
  modifyTodo,
  deleteTodo,
} from "../store/todo/actions";
import { IRootReducer } from "../interfaces/store";

function Todo() {
  const todos = useSelector((state: IRootReducer) => state.todos.data);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.todo}</div>;
      })}
    </div>
  );
}

export default Todo;
