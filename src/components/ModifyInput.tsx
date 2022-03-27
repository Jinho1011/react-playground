/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

import { Todo } from "../interfaces/store/todos";

interface iModifyInput {
  todo: Todo;
  modifyTodo: Function;
  setIsEditing: Function;
}

const input = css`
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  padding-bottom: 4px;
  border-bottom: 1px solid #ccc;
`;

function ModifyInput({ todo, modifyTodo, setIsEditing }: iModifyInput) {
  const [text, setText] = useState<string>("");

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      modifyTodo(todo.id, text);
      setText(text);
      setIsEditing(false);
    }
  };

  return (
    <input
      css={input}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={text}
      placeholder={todo.todo}
    />
  );
}

export default ModifyInput;
