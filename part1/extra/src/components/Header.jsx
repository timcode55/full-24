import React from "react";
import Content from "./Content";

function Header({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <Content content={content} />
    </div>
  );
}

export default Header;
