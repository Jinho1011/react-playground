/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

interface IInput {
  createTodo: Function;
}

const input = css`
  outline: none;
  border: none;
  font-size: 18px;
  padding: 10px;
`;

function Input({ createTodo }: IInput) {
  const [text, setText] = useState<string>("");

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      createTodo(text);
      setText("");
    }
  };

  return (
    <input
      css={input}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={text}
      placeholder="todo를 추가하세요"
    />
  );
}

export default Input;
