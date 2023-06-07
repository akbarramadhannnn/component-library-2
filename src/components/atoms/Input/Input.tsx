import React, { memo } from "react";
import "./Input.css";

interface PropsInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: PropsInput) => {
  return (
    <input value={props.value} className="input" onChange={props.onChange} />
  );
};

export default memo(Input);
