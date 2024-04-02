import React from "react";

function Content({ content }) {
  console.log(content, "content");
  return (
    <div>
      <ul>
        {content &&
          content.map((item) => {
            return (
              <li key={item.id}>
                {item.name} {item.exercises}
              </li>
            );
          })}
        <b>
          total of{" "}
          {content && content.reduce((acc, part) => acc + part.exercises, 0)}{" "}
          exercises
        </b>
      </ul>
    </div>
  );
}

export default Content;
