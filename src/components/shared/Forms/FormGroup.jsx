import React from "react";

export default function FormGroup(props) {
  const className = "my-2 flex flex-col " + (props.className || "");

  return (
    <div className={className} {...props}>
      {props.children}
    </div>
  );
}
