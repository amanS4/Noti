import React from "react";

export default function MenuItems(props) {
  const { navOpen, canvasRef, ctxRef } = props;

  if (!navOpen) {
    return null;
  }
  const saveHandler = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "NotiImage.png");
    debugger;
    try {
      link.setAttribute(
        "href",
        canvasRef.current
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      link.click();
      debugger;
    } catch (e) {
      if (e instanceof SecurityError)
        link.href =
          "javascript:alert(" +
          JSON.stringify("Can't save: " + e.toString()) +
          ")";
      else throw e;
    }
  };
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
        <li onClick={saveHandler}>
          <img height={"20px"} width={"20px"} src="/images/disk.svg" alt="" />
          <span></span> Save
        </li>
      </ul>
    </div>
  );
}
