import React from "react";

export default function MenuItems(props) {
  const { navOpen } = props;

  if (!navOpen) {
    return null;
  }
  return (
    <div className="menu_list">
      <ul>
        <li>
          <img height={"20px"} width={"20px"} src="/images/disk.svg" alt="" />
          <span className="menulist_textbox"></span> Discard
        </li>
        <li>
          <img height={"20px"} width={"20px"} src="/images/disk.svg" alt="" />
          <span></span> Redo
        </li>{" "}
        <li>
          <img height={"20px"} width={"20px"} src="/images/disk.svg" alt="" />
          <span></span> Undo
        </li>{" "}
        <li>
          <img height={"20px"} width={"20px"} src="/images/disk.svg" alt="" />
          <span></span> Save
        </li>
      </ul>
    </div>
  );
}
