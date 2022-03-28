/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css, SerializedStyles } from "@emotion/react";

interface IInput {
  onSubmit: Function;
  placeholder: string;
  textAfterSubmit?: string;
  style: SerializedStyles;
}

function Input({ onSubmit, placeholder, textAfterSubmit, style }: IInput) {
  const [text, setText] = useState<string>("");

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onSubmit(text);
      setText(textAfterSubmit === undefined ? text : textAfterSubmit);
    }
  };

  return (
    <input
      css={style}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={text}
      placeholder={placeholder}
    />
  );
}

export default Input;
