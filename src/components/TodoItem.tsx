/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

import { Todo } from "../interfaces/store/todos";
import ModifyInput from "../components/ModifyInput";

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

function TodoItem({ todo, checkTodo, modifyTodo, deleteTodo }: iTodoItem) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div css={todo__container}>
      {isEditing ? (
        <ModifyInput
          todo={todo}
          modifyTodo={modifyTodo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <div>
            <span>{todo.todo}</span>
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

export default TodoItem;
