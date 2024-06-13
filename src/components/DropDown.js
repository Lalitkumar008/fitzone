import React, { useState } from "react";
import "./DropDown.css";
const DropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showDropDown = () => {
    setShowMenu(true);
  };

  const hideDropDown = () => {
    setShowMenu(false);
  };
  return (
    <div
      className="drop-down"
      onMouseEnter={showDropDown}
      onMouseLeave={hideDropDown}
    >
      DropDown
      {showMenu ? (
        <ul onMouseEnter={showDropDown} onMouseLeave={hideDropDown}>
          <li>first</li>
          <li>Second</li>
          <li>Third</li>
          <li>Fourth</li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
