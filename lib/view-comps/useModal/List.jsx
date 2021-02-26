import React from "react";

// Misc
import { publicStyle } from "./publicStyle";

const List = ({ items }) => {
  const publicClasses = publicStyle();

  return (
    <ul className={publicClasses.ul}>
      {items.map((item, i) => (
        <li className={publicClasses.li} key={item + i}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
