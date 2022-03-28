/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  createTodo,
  checkTodo,
  modifyTodo,
  deleteTodo,
} from "../store/todo/actions";
import { IRootReducer } from "../interfaces/store";
import Input from "../components/Input";
import TodoItem from "../components/TodoItem";

const title__container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const divider = css`
  border-bottom: 1px solid #cccccc;
`;

const todos__container = css`
  display: flex;
  width: 420px;
  flex-direction: column;
  background-color: #ffffff;
  -webkit-box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 20px 10px rgba(0, 0, 0, 0.1);
`;

const input = css`
  outline: none;
  border: none;
  font-size: 18px;
  padding: 10px;
`;

function Todo() {
  const todos = useSelector(
    (state: IRootReducer) => state.todos.data,
    shallowEqual
  );
  const dispatch = useDispatch();

  const _createTodo = (todo: string) => {
    dispatch(createTodo(todo));
  };

  const _checkTodo = (id: number) => {
    dispatch(checkTodo(id));
  };

  const _modiftTodo = (id: number, todo: string) => {
    dispatch(modifyTodo(id, todo));
  };

  const _deleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container">
      <div css={title__container}>
        <span className="title">Todos</span>
      </div>
      <div css={todos__container}>
        <Input
          onSubmit={_createTodo}
          placeholder="Todo를 입력해주세요."
          textAfterSubmit=""
          style={input}
        />
        {todos.length === 0 ? <></> : <div css={divider} />}
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              checkTodo={_checkTodo}
              modifyTodo={_modiftTodo}
              deleteTodo={_deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
