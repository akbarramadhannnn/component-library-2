import React, { memo } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="button">{props.label}</button>;
};

export default memo(Button);
