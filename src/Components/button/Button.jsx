import React from "react";
import "./button.css";

const Button = ({
  bg,
  size,
  color,
  value,
  rounded,
  icon,
  onclick,
  iconprop,
  type,
}) => {
  return (
    <button
      className={`${bg || ""} ${color || ""} ${rounded && rounded} ${size || ""}`}
      type={type || ""}
      onClick={onclick}
    >
      {value}
      {icon && <div className={`${iconprop || ""}`}>{icon}</div>}
    </button>
  );
};
export default Button;
