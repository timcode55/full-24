import React from "react";

function Button({ onClick, value, children }) {
  return <button onClick={onClick}>{children || value}</button>;
}

export default Button;
