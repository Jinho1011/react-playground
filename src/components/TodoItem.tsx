/** @jsxImportSource @emotion/react */
import React, { useState, memo } from "react";
import { css } from "@emotion/react";

import { Todo } from "../interfaces/store/todos";
// import ModifyInput from "../components/ModifyInput";
import Input from "./Input";

interface iTodoItem {
  todo: Todo;
  checkTodo: Function;
  modifyTodo: Function;
  deleteTodo: Function;
}

const todo__container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const todo__right = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

const button = css`
  cursor: pointer;
`;

const input = css`
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  padding-bottom: 4px;
  border-bottom: 1px solid #ccc;
`;

function TodoItem({ todo, checkTodo, modifyTodo, deleteTodo }: iTodoItem) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  console.log(todo);

  const onSubmit = (text: string) => {
    modifyTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div css={todo__container}>
      {isEditing ? (
        <Input onSubmit={onSubmit} placeholder={todo.todo} style={input} />
      ) : (
        <>
          <div onClick={() => checkTodo(todo.id)}>
            <span>{todo.check ? <del>{todo.todo}</del> : todo.todo}</span>
          </div>
          <div css={todo__right}>
            <div css={button} onClick={() => setIsEditing(true)}>
              <span>수정</span>
            </div>
            <div css={button} onClick={() => deleteTodo(todo.id)}>
              <span>삭제</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default memo(
  TodoItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo
);
